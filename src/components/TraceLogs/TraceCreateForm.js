// src/components/TraceLogs/TraceCreateForm.js
import React, { useEffect, useState } from "react";
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
import Cookies from "js-cookie";
import axios from "axios";

const TraceCreateForm = () => {
  // 0=자취,1=번개,2=꿀팁,3=레시피
  const [selectCategory, setSelectCategory] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [files, setFiles] = useState([]);       // File[]
  const [previews, setPreviews] = useState([]); // objectURL[]
  const [submitting, setSubmitting] = useState(false);

  const navigator = useNavigate();
  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    if (!accessToken) {
      alert("로그인이 필요한 기능입니다.");
      navigator("/login");
    }
  }, [accessToken, navigator]);

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

    // 같은 파일 재선택 가능하도록 초기화
    e.target.value = "";
  };

  useEffect(() => {
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
    return () => urls.forEach((u) => URL.revokeObjectURL(u));
  }, [files]);

  const removeImage = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
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

      const formData = new FormData();
      const dto = {
        title: title.trim(),
        content: content.trim(),
        category: Number(selectCategory),
      };
      formData.append(
        "data",
        new Blob([JSON.stringify(dto)], { type: "application/json" })
      );
      for (const f of files) formData.append("images", f);

      const res = await axios.post(
        "https://api.stackflov.com/boards/multipart",
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );

      const loc = res.headers?.location || res.headers?.Location;
      if (loc) navigator(loc);
      else navigator("/trace");
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

  return (
    <TraceCreateWrapper as="form" onSubmit={handleSubmit}>
      <TraceCreateTopContent data-show="true">
        <TraceTitleDiv>제목</TraceTitleDiv>
        <TraceTitleInputDiv
          placeholder="글 제목을 작성해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={120}
        />
      </TraceCreateTopContent>

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
        <TraceCreateContentInput
          placeholder="글 내용을 작성해주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <UploadRow>
          <UploadLabel htmlFor="upload-images">📎 이미지 선택</UploadLabel>
          <UploadInput
            id="upload-images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleSelectImages}
          />
          {files.length > 0 && (
            <span className="count">{files.length}개 선택됨</span>
          )}
        </UploadRow>

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
