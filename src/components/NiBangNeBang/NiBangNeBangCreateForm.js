// src/components/TraceLogs/NiBangNeBangCreateForm.js
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  NiBangNeBangCreateWrapper,
  NiBangNeBangCreateTopContent,
  NiBangNeBangTitleDiv,
  NiBangNeBangTitleInputDiv,
  NiBangNeBangCreateMiddleContent,
  NiBangNeBangCreateContentInput,
  UploadRow,
  UploadLabel,
  UploadInput,
  PreviewGrid,
  PreviewItem,
  RemoveThumbBtn,
  NiBangNeBangCreateBottomContent,
  NiBangNeBangCreateBtn,
  NiBangNeBangCreateCancleBtn,
} from "../../styles/components/NiBangNeBangCreateFormStyled";
import NiBangNeBangStarRating from "./NiBangNeBangStarRating";

const NiBangNeBangCreateForm = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
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

  const handleImageChange = (e) => {
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

    // reset input to allow re-selecting same files
    e.target.value = "";
  };

  useEffect(() => {
    // revoke old
    return () => previews.forEach((u) => URL.revokeObjectURL(u));
  }, []); // on unmount

  useEffect(() => {
    previews.forEach((u) => URL.revokeObjectURL(u));
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
    // cleanup on next change
    return () => urls.forEach((u) => URL.revokeObjectURL(u));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const removeImage = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handlePost = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !address.trim() || rating === 0) {
      alert("제목, 내용, 주소, 별점을 모두 입력해주세요.");
      return;
    }
    if (submitting) return;

    try {
      setSubmitting(true);

      const formData = new FormData();
      const data = { title: title.trim(), address: address.trim(), content: content.trim(), rating: Number(rating) };
      formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
      for (const f of files) formData.append("images", f);

      await axios.post("https://api.stackflov.com/map/reviews", formData, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      });

      navigator("/nibangnebang");
    } catch (error) {
      console.error(
        "게시글 작성 실패:",
        error?.response?.status,
        error?.response?.data || error?.message
      );
      alert("게시글 작성에 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <NiBangNeBangCreateWrapper as="form" onSubmit={handlePost}>
      <NiBangNeBangCreateTopContent data-show="true">
        <NiBangNeBangTitleDiv>제목</NiBangNeBangTitleDiv>
        <NiBangNeBangTitleInputDiv
          placeholder="글 제목을 작성해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={120}
        />
      </NiBangNeBangCreateTopContent>

      <NiBangNeBangCreateMiddleContent data-show="true">
        <NiBangNeBangCreateContentInput
          placeholder="글 내용을 작성해주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
          <input
            placeholder="ex) 서울특별시 종로구"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              height: 44,
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              padding: "0 14px",
              fontSize: 15,
              outline: "none",
            }}
          />
          <div>
            <NiBangNeBangStarRating value={rating} onChange={setRating} />
          </div>
        </div>

        <UploadRow>
          <UploadLabel htmlFor="nbnb-upload">📎 이미지 선택</UploadLabel>
          <UploadInput
            id="nbnb-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />
          {files.length > 0 && <span className="count">{files.length}개 선택됨</span>}
        </UploadRow>

        <PreviewGrid>
          {previews.map((src, idx) => (
            <PreviewItem key={src}>
              <img src={src} alt={`preview-${idx}`} loading="lazy" decoding="async" />
              <RemoveThumbBtn type="button" onClick={() => removeImage(idx)}>
                제거
              </RemoveThumbBtn>
            </PreviewItem>
          ))}
        </PreviewGrid>
      </NiBangNeBangCreateMiddleContent>

      <NiBangNeBangCreateBottomContent data-show="true">
        <NiBangNeBangCreateBtn type="submit" disabled={submitting}>
          {submitting ? "등록 중..." : "😽 등록"}
        </NiBangNeBangCreateBtn>

        <NiBangNeBangCreateCancleBtn
          type="button"
          onClick={() => {
            if (window.confirm("작성을 취소하시겠습니까?")) navigator("/nibangnebang");
          }}
          disabled={submitting}
        >
          😽 취소
        </NiBangNeBangCreateCancleBtn>
      </NiBangNeBangCreateBottomContent>
    </NiBangNeBangCreateWrapper>
  );
};

export default NiBangNeBangCreateForm;
