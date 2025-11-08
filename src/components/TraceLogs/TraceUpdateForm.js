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
import styled from "styled-components";

/* ---------------- Hashtag helpers (생성 페이지와 동일 톤) ---------------- */
const HASHTAG_RE = /#([0-9A-Za-z가-힣_]{1,20})/g;

function normalizeTag(raw) {
  if (!raw) return "";
  let t = String(raw).trim();
  if (!t) return "";
  t = t.replace(/^#+/, "");            // 앞의 # 제거
  t = t.replace(/\s+/g, "");           // 중간 공백 제거
  t = t.replace(/[^0-9A-Za-z가-힣_]/g, ""); // 허용 문자만
  return t.slice(0, 20);
}

// 본문에서 해시태그 토큰 제거(가독성 유지: 과도한 공백/줄바꿈 정리)
function stripHashtags(text) {
  if (!text) return "";
  const without = text.replace(HASHTAG_RE, "").replace(/[ \t]{2,}/g, " ");
  return without.replace(/\n{3,}/g, "\n\n").trim();
}

/* ---------------- Tag UI (생성 페이지 느낌 그대로) ---------------- */
const TagRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0 16px;
`;
const TagLabel = styled.div`
  font-size: 14px;
  color: #374151;
  min-width: 64px;
`;
const TagInput = styled.input`
  flex: 1;
  min-width: 200px;
  height: 38px;
  padding: 0 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  outline: none;
  &:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,.15); }
`;
const TagChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  color: #111827;
  font-size: 13px;
`;
const RemoveTagBtn = styled.button`
  border: 0;
  background: transparent;
  color: #ef4444;
  cursor: pointer;
  padding: 0 2px;
  line-height: 1;
`;

/* =================================================================== */

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

  // ---- 별도 해시태그 UI 상태 ----
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]); // ["tag1","tag2",...]

  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    if (!accessToken) {
      alert("로그인이 필요한 기능입니다.");
      navigator("/login");
    }
  }, [accessToken, navigator]);

  // 게시글 조회(+ 태그 분리)
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

        const rawContent = data.content ?? "";
        // 1) 본문에서 기존 해시태그 파싱 -> 칩 상태로
        const found = new Set();
        let m;
        while ((m = HASHTAG_RE.exec(rawContent))) {
          found.add(m[1]);
        }
        setTags(Array.from(found)); // 태그 칩 초기화

        // 2) 본문에서는 해시태그 제거한 텍스트만 보여주기
        setTraceContent(stripHashtags(rawContent));

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

  /* ---------------- Hashtag UI handlers (생성과 동일 UX) ---------------- */

  // Enter/Space/Comma/Blur로 태그 확정
  const handleTagKeyDown = (e) => {
    if (["Enter", " ", "Comma", ","].includes(e.key)) {
      e.preventDefault();
      commitTag(tagInput);
    }
  };

  const commitTag = (raw) => {
    const t = normalizeTag(raw);
    if (!t) { setTagInput(""); return; }
    setTags((prev) => {
      const exists = new Set(prev.map((x) => x.toLowerCase()));
      if (exists.has(t.toLowerCase())) return prev; // 중복 방지(대소문자 무시)
      return [...prev, t];
    });
    setTagInput("");
  };

  const removeTag = (t) =>
    setTags((prev) => prev.filter((x) => x.toLowerCase() !== String(t).toLowerCase()));

  // 사용자가 본문에 직접 쓴 태그도 회수(유실 방지)
  const tagsInContent = useMemo(() => {
    const set = new Set();
    if (!traceContent) return set;
    let m;
    while ((m = HASHTAG_RE.exec(traceContent))) set.add(m[1]);
    return set;
  }, [traceContent]);

  /* ---------------- Submit ---------------- */
  const handleUpdatePost = async (e) => {
    e.preventDefault();
    if (submitting) return;

    if (!traceTitle.trim() || !traceContent.trim()) {
      alert("제목과 내용을 입력해 주세요.");
      return;
    }
    setSubmitting(true);

    try {
      // 칩의 태그 + 본문 내 태그를 합집합으로 만들어 보내기
      const chipLower = new Set(tags.map((t) => t.toLowerCase()));
      const contentLower = new Set(Array.from(tagsInContent).map((t) => t.toLowerCase()));
      const merged = Array.from(new Set([...chipLower, ...contentLower]));

      let contentToSend = traceContent.trim();
      if (merged.length) {
        const suffix = merged.map((t) => `#${t}`).join(" ");
        contentToSend = `${contentToSend}\n\n${suffix}`.trim();
      }

      const dto = {
        title: traceTitle.trim(),
        content: contentToSend,            // ← 본문 + 칩 태그
        category: Number(traceCategory),   // 0~3
        removeImageUrls: Array.from(removeImageUrls),
      };

      const formData = new FormData();
      formData.append("data", new Blob([JSON.stringify(dto)], { type: "application/json" }));
      for (const file of newFiles) formData.append("images", file);

      await axios.put(`https://api.stackflov.com/boards/${no}`, formData, {
        headers: { Authorization: `Bearer ${accessToken}` },
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
          placeholder="글 내용을 작성해주세요. (해시태그는 아래 칩에서 관리됩니다)"
          value={traceContent}
          onChange={(e) => setTraceContent(e.target.value)}
        />

        {/* 해시태그: 생성 페이지 동일 UX */}
        <Divider />
        <SectionTitle>해시태그</SectionTitle>
        <TagRow>
          <TagLabel>해시태그</TagLabel>
          <TagInput
            placeholder="#태그 입력 후 Enter (영문/숫자/한글/_)"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            onBlur={() => commitTag(tagInput)}  // 포커스 아웃 시 확정
            maxLength={20}
          />
          {tags.map((t) => (
            <TagChip key={t}>
              <span>#{t}</span>
              <RemoveTagBtn type="button" onClick={() => removeTag(t)}>×</RemoveTagBtn>
            </TagChip>
          ))}
        </TagRow>

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
