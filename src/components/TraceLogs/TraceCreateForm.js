// src/components/TraceLogs/TraceCreateForm.js
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TraceCreateWrapper,
  TraceCreateTopContent,
  TraceTitleDiv,
  TraceTitleInputDiv,
  TraceCategoryDiv,
  TraceCategoryTitle,
  TraceCategorySelectorItem,
  TraceCreateMiddleContent,
  TraceCreateContentInput,
  UploadRow,
  UploadLabel,
  UploadInput,
  PreviewGrid,
  PreviewItem,
  RemoveThumbBtn,
  TraceCreateBottomContent,
  TraceCreateBtn,
  TraceCreateCancleBtn,
} from "../../styles/components/TraceCreateFormStyled";
import styled from "styled-components";
import Cookies from "js-cookie";
import axios from "axios";

/* ---------------- Hashtag helpers ---------------- */

const HASHTAG_RE = /#([0-9A-Za-z가-힣_]{1,20})/g;

// 입력값을 태그 토큰으로 정규화 (# 제거, 공백/특수문자 앞부분 컷)
function normalizeTag(raw) {
  if (!raw) return "";
  let t = String(raw).trim();
  if (!t) return "";
  t = t.replace(/^#+/, "");                         // 앞의 # 제거
  t = t.replace(/\s+/g, "");                        // 중간 공백 제거
  // 허용 문자만 남김(영문/숫자/한글/밑줄)
  t = t.replace(/[^0-9A-Za-z가-힣_]/g, "");
  if (!t) return "";
  return t.slice(0, 20);
}

/* ---------------- Small styled bits ---------------- */

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

/* ================================================== */

const TraceCreateForm = () => {
  // 0=자취,1=번개,2=꿀팁,3=레시피
  const [selectCategory, setSelectCategory] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // hashtag UI
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]); // ["태그1","태그2",...]

  const [files, setFiles] = useState([]);       // File[]
  const [previews, setPreviews] = useState([]); // objectURL[]
  const [submitting, setSubmitting] = useState(false);

  const navigator = useNavigate();
  const accessToken = Cookies.get("accessToken");

  /* ---------------- Auth guard ---------------- */
  useEffect(() => {
    if (!accessToken) {
      alert("로그인이 필요한 기능입니다.");
      navigator("/login");
    }
  }, [accessToken, navigator]);

  /* ---------------- Images ---------------- */
  const handleSelectImages = (e) => {
    const picked = Array.from(e.target.files || []);
    if (!picked.length) return;

    const MAX_FILES = 10;
    const MAX_MB = 10;

    const filtered = [];
    for (const f of picked) {
      if (f.size / 1024 / 1024 > MAX_MB) {
        alert(`이미지 ${f.name} 용량이 ${MAX_MB}MB를 초과합니다.`);
        continue;
      }
      filtered.push(f);
    }

    const merged = [...files, ...filtered].slice(0, MAX_FILES);
    const dedup = [];
    const sig = new Set();
    for (const f of merged) {
      const key = `${f.name}-${f.size}`;
      if (!sig.has(key)) {
        sig.add(key);
        dedup.push(f);
      }
    }
    setFiles(dedup);
    e.target.value = ""; // 같은 파일 재선택 가능
  };

  useEffect(() => {
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
    return () => urls.forEach((u) => URL.revokeObjectURL(u));
  }, [files]);

  const removeImage = (idx) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  /* ---------------- Hashtag UI handlers ---------------- */

  // Enter/Space/Comma로 태그 확정
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

  // 본문에 이미 있는 태그(사용자가 직접 입력한 #태그) 수집
  const tagsInContent = useMemo(() => {
    const set = new Set();
    if (!content) return set;
    let m;
    while ((m = HASHTAG_RE.exec(content))) {
      set.add(m[1]); // 그룹1 = 태그 텍스트
    }
    return set;
  }, [content]);

  /* ---------------- Submit ---------------- */

  // 응답에서 id 추정 후 디테일로 이동
  const goToCreatedDetail = async (res) => {
    let id =
      Number(res?.data?.id) ||
      Number(res?.data?.boardId) ||
      Number(res?.data?.data?.id) ||
      Number(res?.data?.result?.id);

    if (!Number.isFinite(id)) {
      const loc = res?.headers && (res.headers["location"] || res.headers["Location"]);
      if (loc) {
        const m = String(loc).match(/(\d+)(?:\/)?$/);
        if (m) id = Number(m[1]);
      }
    }

    if (!Number.isFinite(id)) {
      const url = res?.request?.responseURL;
      if (url) {
        const m = String(url).match(/(\d+)(?:\/)?$/);
        if (m) id = Number(m[1]);
      }
    }

    if (!Number.isFinite(id)) {
      try {
        const pageRes = await axios.get("https://api.stackflov.com/boards", {
          params: { size: 1, sort: "id,desc" },
          withCredentials: true,
        });
        const latest = pageRes?.data?.content?.[0];
        if (latest?.id) id = Number(latest.id);
      } catch (_) {}
    }

    if (Number.isFinite(id)) navigator(`/trace/detail/${id}`);
    else navigator("/trace");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해 주세요.");
      return;
    }
    if (submitting) return;

    try {
      setSubmitting(true);

      // 1) 이미 본문에 들어있는 태그와 칩 UI의 태그 합치기(중복 제거)
      const contentTagSet = new Set(Array.from(tagsInContent).map((x) => x.toLowerCase()));
      const extraTags = tags.filter((t) => !contentTagSet.has(t.toLowerCase()));

      // 2) 아직 본문에 없는 태그만 끝에 붙여서 백엔드가 파싱하게 함
      let contentToSend = content.trim();
      if (extraTags.length) {
        const suffix = extraTags.map((t) => `#${t}`).join(" ");
        contentToSend = `${contentToSend}\n\n${suffix}`.trim();
      }

      const formData = new FormData();
      const dto = {
        title: title.trim(),
        content: contentToSend,
        category: Number(selectCategory),
      };
      formData.append("data", new Blob([JSON.stringify(dto)], { type: "application/json" }));
      for (const f of files) formData.append("images", f);

      const res = await axios.post(
        "https://api.stackflov.com/boards/multipart",
        formData,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          withCredentials: true,
        }
      );

      await goToCreatedDetail(res);
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message;
      console.error("게시글 작성 실패:", error?.response?.status, msg);
      if (typeof msg === "string" && msg.includes("금지된 단어")) {
        alert(msg);
      } else {
        alert("게시글 작성에 실패했습니다.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------------- Render ---------------- */

  return (
    <TraceCreateWrapper as="form" onSubmit={handleSubmit}>
      {/* 제목 */}
      <TraceCreateTopContent data-show="true">
        <TraceTitleDiv>제목</TraceTitleDiv>
        <TraceTitleInputDiv
          placeholder="글 제목을 작성해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={120}
        />
      </TraceCreateTopContent>

      {/* 카테고리 */}
      <TraceCategoryDiv data-show="true">
        <TraceCategoryTitle>카테고리</TraceCategoryTitle>

        <TraceCategorySelectorItem
          selectCategory={selectCategory === 0}
          onClick={() => setSelectCategory(0)}
        >
          🏠 자취
        </TraceCategorySelectorItem>

        <TraceCategorySelectorItem
          selectCategory={selectCategory === 1}
          onClick={() => setSelectCategory(1)}
        >
          ⚡ 번개
        </TraceCategorySelectorItem>

        <TraceCategorySelectorItem
          selectCategory={selectCategory === 2}
          onClick={() => setSelectCategory(2)}
        >
          🍯️ 꿀팁
        </TraceCategorySelectorItem>

        <TraceCategorySelectorItem
          selectCategory={selectCategory === 3}
          onClick={() => setSelectCategory(3)}
        >
          🍙 레시피
        </TraceCategorySelectorItem>
      </TraceCategoryDiv>

      <TraceCreateMiddleContent data-show="true">
        {/* 본문 */}
        <TraceCreateContentInput
          placeholder="글 내용을 작성해주세요. (해시태그는 #로 직접 적어도 되고, 아래 칩으로 추가해도 됩니다)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* 해시태그 UI */}
        <TagRow>
          <TagLabel>해시태그</TagLabel>
          <TagInput
            placeholder="#태그 입력 후 Enter (영문/숫자/한글/_)"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            onBlur={() => commitTag(tagInput)}  // 포커스 아웃 시 확정
          />
          {tags.map((t) => (
            <TagChip key={t}>
              <span>#{t}</span>
              <RemoveTagBtn type="button" onClick={() => removeTag(t)}>×</RemoveTagBtn>
            </TagChip>
          ))}
        </TagRow>

        {/* 업로드 */}
        <UploadRow>
          <UploadLabel htmlFor="upload-images">📎 이미지 선택</UploadLabel>
          <UploadInput
            id="upload-images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleSelectImages}
          />
          {files.length > 0 && <span className="count">{files.length}개 선택됨</span>}
        </UploadRow>

        {/* 미리보기 */}
        <PreviewGrid>
          {previews.map((src, idx) => (
            <PreviewItem key={src}>
              <img src={src} alt={`preview-${idx}`} />
              <RemoveThumbBtn type="button" onClick={() => removeImage(idx)}>
                제거
              </RemoveThumbBtn>
            </PreviewItem>
          ))}
        </PreviewGrid>
      </TraceCreateMiddleContent>

      {/* 버튼 */}
      <TraceCreateBottomContent data-show="true">
        <TraceCreateBtn type="submit" disabled={submitting}>
          {submitting ? "등록 중..." : "😽 등록"}
        </TraceCreateBtn>

        <TraceCreateCancleBtn
          type="button"
          onClick={() => navigator(-1)}
          disabled={submitting}
        >
          😽 취소
        </TraceCreateCancleBtn>
      </TraceCreateBottomContent>
    </TraceCreateWrapper>
  );
};

export default TraceCreateForm;
