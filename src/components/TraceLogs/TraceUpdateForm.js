// src/components/TraceLogs/TraceUpdateForm.js
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  TraceCategoryDiv,
  TraceCategoryTitle,
  TraceUpdateTopContent,
  TraceUpdateWrapper,
  TraceTitleDiv,
  TraceTitleInputDiv,
  TraceCategorySelectorItem,
  TraceUpdateBottomContent,
  TraceUpdateMiddleContent,
  TraceUpdateContentInput,
  TraceUpdateCancleBtn,
  TraceUpdateBtn,
  UploadLabel,
  UploadInput,
  PreviewGrid,
  PreviewItem,
  RemoveThumbBtn,
  SectionTitle,
  Divider,
} from "../../styles/components/TraceUpdateFormStyled";
import Cookies from "js-cookie";

const TraceUpdateForm = () => {
  const navigator = useNavigate();
  const { no } = useParams();

  const [traceTitle, setTraceTitle] = useState("");
  const [traceContent, setTraceContent] = useState("");
  const [traceCategory, setTraceCategory] = useState(0); // 0~3
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // 기존 이미지(URL) & 삭제 예정 목록
  const [existingImages, setExistingImages] = useState([]); // string[]
  const [removeImageUrls, setRemoveImageUrls] = useState(new Set()); // Set<string>

  // 신규 업로드 파일 & 미리보기
  const [newFiles, setNewFiles] = useState([]); // File[]
  const [previews, setPreviews] = useState([]); // blob url[]

  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    if (!accessToken) {
      alert("로그인이 필요한 기능입니다.");
      navigator("/login");
    }
  }, [accessToken, navigator]);

  // 게시글 조회
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios
      .get(`https://api.stackflov.com/boards/${no}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        if (!mounted) return;
        const data = res.data ?? {};
        setTraceTitle(data.title ?? "");
        setTraceContent(data.content ?? "");
        const c = Number(data.category ?? 0);
        setTraceCategory([0, 1, 2, 3].includes(c) ? c : 0);
        setExistingImages(Array.isArray(data.imageUrls) ? data.imageUrls : []);
      })
      .catch((err) => {
        console.error("게시글 조회 실패:", err?.response || err);
        alert("게시글을 불러오지 못했습니다.");
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [no]);

  // 신규 파일 선택
  const handleSelectImages = (e) => {
    const picked = Array.from(e.target.files || []);
    if (!picked.length) return;

    const MAX_FILES = 10;
    const MAX_MB = 10;

    const filtered = [];
    for (const f of picked) {
      const tooBig = f.size / 1024 / 1024 > MAX_MB;
      if (tooBig) {
        alert(`이미지 ${f.name} 용량이 ${MAX_MB}MB를 초과합니다.`);
        continue;
      }
      filtered.push(f);
    }

    // 중복 제거 (이름+사이즈)
    const sig = new Set(newFiles.map((f) => `${f.name}-${f.size}`));
    const dedup = [...newFiles];
    for (const f of filtered) {
      const key = `${f.name}-${f.size}`;
      if (!sig.has(key)) {
        sig.add(key);
        dedup.push(f);
      }
    }

    setNewFiles(dedup.slice(0, MAX_FILES));
    e.target.value = ""; // 같은 파일 다시 선택 가능하도록 초기화
  };

  // 신규 파일 미리보기 URL 생성/정리
  useEffect(() => {
    const urls = newFiles.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
    return () => urls.forEach((u) => URL.revokeObjectURL(u));
  }, [newFiles]);

  // 신규 파일 제거
  const removeNewFile = (idx) => {
    setNewFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  // 기존 이미지 제거 토글
  const toggleRemoveExisting = (url) => {
    setRemoveImageUrls((prev) => {
      const next = new Set(prev);
      if (next.has(url)) next.delete(url);
      else next.add(url);
      return next;
    });
  };

  const removeCount = useMemo(() => removeImageUrls.size, [removeImageUrls]);

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    if (submitting) return;

    if (!traceTitle.trim() || !traceContent.trim()) {
      alert("제목과 내용을 입력해 주세요.");
      return;
    }
    setSubmitting(true);

    try {
      const dto = {
        title: traceTitle.trim(),
        content: traceContent.trim(),
        category: Number(traceCategory), // 0~3
        removeImageUrls: Array.from(removeImageUrls), // 서버에서 제거할 URL들
      };

      const formData = new FormData();
      formData.append(
        "data",
        new Blob([JSON.stringify(dto)], { type: "application/json" })
      );
      // 새로 추가한 이미지들
      for (const file of newFiles) {
        formData.append("images", file);
      }

      await axios.put(`https://api.stackflov.com/boards/${no}`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });

      navigator(`/trace/detail/${no}`);
    } catch (error) {
      console.error(
        "게시글 수정 실패:",
        error?.response?.status,
        error?.response?.data || error?.message
      );
      alert("수정에 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <TraceUpdateWrapper data-show={!loading}>
      <TraceUpdateTopContent>
        <TraceTitleDiv>제목</TraceTitleDiv>
        <TraceTitleInputDiv
          placeholder="글 제목을 작성해주세요."
          value={traceTitle}
          onChange={(e) => setTraceTitle(e.target.value)}
          maxLength={120}
        />
      </TraceUpdateTopContent>

      <TraceCategoryDiv>
        <TraceCategoryTitle>카테고리</TraceCategoryTitle>
        <TraceCategorySelectorItem
          role="button"
          tabIndex={0}
          selectCategory={traceCategory === 0}
          onClick={() => setTraceCategory(0)}
          onKeyDown={(e) => e.key === "Enter" && setTraceCategory(0)}
          aria-pressed={traceCategory === 0}
        >
          🏠 자취
        </TraceCategorySelectorItem>
        <TraceCategorySelectorItem
          role="button"
          tabIndex={0}
          selectCategory={traceCategory === 1}
          onClick={() => setTraceCategory(1)}
          onKeyDown={(e) => e.key === "Enter" && setTraceCategory(1)}
          aria-pressed={traceCategory === 1}
        >
          ⚡ 번개
        </TraceCategorySelectorItem>
        <TraceCategorySelectorItem
          role="button"
          tabIndex={0}
          selectCategory={traceCategory === 2}
          onClick={() => setTraceCategory(2)}
          onKeyDown={(e) => e.key === "Enter" && setTraceCategory(2)}
          aria-pressed={traceCategory === 2}
        >
          🍯️ 꿀팁
        </TraceCategorySelectorItem>
        <TraceCategorySelectorItem
          role="button"
          tabIndex={0}
          selectCategory={traceCategory === 3}
          onClick={() => setTraceCategory(3)}
          onKeyDown={(e) => e.key === "Enter" && setTraceCategory(3)}
          aria-pressed={traceCategory === 3}
        >
          🍙 레시피
        </TraceCategorySelectorItem>
      </TraceCategoryDiv>

      <TraceUpdateMiddleContent>
        <TraceUpdateContentInput
          placeholder="글 내용을 작성해주세요."
          value={traceContent}
          onChange={(e) => setTraceContent(e.target.value)}
        />

        <Divider />

        <SectionTitle>기존 이미지 (클릭하여 제거/취소)</SectionTitle>
        <PreviewGrid>
          {existingImages.length === 0 && (
            <div style={{ color: "#6b7280", fontSize: 14 }}>등록된 이미지가 없습니다.</div>
          )}
          {existingImages.map((url, idx) => {
            const removed = removeImageUrls.has(url);
            return (
              <PreviewItem
                key={url + idx}
                $removed={removed}
                onClick={() => toggleRemoveExisting(url)}
                title={removed ? "삭제 취소" : "삭제 예정"}
              >
                <img src={url} alt={`existing-${idx}`} />
                {removed && <span className="badge">삭제 예정</span>}
              </PreviewItem>
            );
          })}
        </PreviewGrid>

        <SectionTitle style={{ marginTop: 18 }}>
          새 이미지 추가 {newFiles.length > 0 ? `(${newFiles.length}개)` : ""}
        </SectionTitle>
        <UploadLabel htmlFor="update-upload">📎 이미지 선택</UploadLabel>
        <UploadInput
          id="update-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleSelectImages}
        />

        <PreviewGrid style={{ marginTop: 8 }}>
          {previews.map((src, idx) => (
            <PreviewItem key={src} $removable>
              <img src={src} alt={`new-${idx}`} />
              <RemoveThumbBtn type="button" onClick={() => removeNewFile(idx)}>
                제거
              </RemoveThumbBtn>
            </PreviewItem>
          ))}
        </PreviewGrid>
      </TraceUpdateMiddleContent>

      <TraceUpdateBottomContent>
        <TraceUpdateCancleBtn
          type="button"
          onClick={handleUpdatePost}
          disabled={submitting}
          aria-busy={submitting}
          title={
            removeCount
              ? `삭제 예정 ${removeCount}개, 새 이미지 ${newFiles.length}개`
              : `새 이미지 ${newFiles.length}개`
          }
        >
          {submitting ? "수정 중..." : "😽 수정"}
        </TraceUpdateCancleBtn>

        <TraceUpdateBtn
          type="button"
          onClick={() => navigator(`/trace/detail/${no}`)}
          disabled={submitting}
        >
          취소
        </TraceUpdateBtn>
      </TraceUpdateBottomContent>
    </TraceUpdateWrapper>
  );
};

export default TraceUpdateForm;
