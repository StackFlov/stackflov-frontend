// src/components/NiBangNeBang/NiBangNeBangUpdateForm.js
import React, { useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  NiBangNeBangCreateTopContent,
  NiBangNeBangCreateWrapper,
  NiBangNeBangTitleDiv,
  NiBangNeBangTitleInputDiv,
  NiBangNeBangCreateBottomContent,
  NiBangNeBangCreateMiddleContent,
  NiBangNeBangCreateContentInput,
  NiBangNeBangCreateCancleBtn,
  NiBangNeBangCreateBtn,
  UploadLabel,
  UploadInput,
  PreviewGrid,
  PreviewItem,
  RemoveThumbBtn,
  NiBangNeBangAddress
} from "../../styles/components/NiBangNeBangCreateFormStyled";
import{
  SectionTitle
} from "../../styles/components/TraceUpdateFormStyled"
import NiBangNeBangStarRating from "./NiBangNeBangStarRating";

const NiBangNeBangUpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);

  // 이미지 편집 상태
  const [existingImages, setExistingImages] = useState([]); // [{id, url}]
  const [deleteImageIds, setDeleteImageIds] = useState(new Set()); // 선택 삭제 IDs
  const [newFiles, setNewFiles] = useState([]); // File[]
  const [newPreviews, setNewPreviews] = useState([]); // objectURL[]

  const accessToken =
    Cookies.get("accessToken") || localStorage.getItem("accessToken");

  useEffect(() => {
    return () => newPreviews.forEach((u) => URL.revokeObjectURL(u));
  }, [newPreviews]);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인이 필요한 기능입니다.");
      navigate("/login");
      return;
    }

    const load = async () => {
      try {
        const { data } = await axios.get(
          `https://api.stackflov.com/map/reviews/${id}`,
          { headers: { Authorization: `Bearer ${accessToken}` }, withCredentials: true }
        );
        setTitle(data?.title ?? "");
        setAddress(data?.address ?? "");
        setContent(data?.content ?? "");
        setRating(Number(data?.rating ?? 0));

        const imgs = data?.images || data?.imageList || data?.reviewImages || [];
        const normalized = imgs
          .map((i) => ({
            id: i?.id ?? i?.imageId ?? i?.seq ?? i?.pk,
            url: i?.imageUrl ?? i?.url,
          }))
          .filter((x) => x.id != null && x.url);
        setExistingImages(normalized);
      } catch {
        try {
          const res = await axios.get(`https://api.stackflov.com/map/reviews`, {
            headers: { Authorization: `Bearer ${accessToken}` },
            withCredentials: true,
          });
          const found = (res.data?.content || []).find(
            (i) => String(i.id) === String(id)
          );
          if (!found) {
            alert("리뷰 정보를 찾지 못했습니다.");
            navigate("/nibangnebang");
            return;
          }
          setTitle(found.title ?? "");
          setAddress(found.address ?? "");
          setContent(found.content ?? "");
          setRating(Number(found.rating ?? 0));

          const imgs = found?.images || found?.imageList || found?.reviewImages || [];
          const normalized = imgs
            .map((i) => ({
              id: i?.id ?? i?.imageId ?? i?.seq ?? i?.pk,
              url: i?.imageUrl ?? i?.url,
            }))
            .filter((x) => x.id != null && x.url);
          setExistingImages(normalized);
        } catch (e2) {
          console.error("리뷰 조회 실패:", e2);
          alert("리뷰 조회 중 오류가 발생했습니다.");
          navigate("/nibangnebang");
          return;
        }
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id, accessToken, navigate]);

  const toggleDeleteExisting = (imgId) => {
    setDeleteImageIds((prev) => {
      const next = new Set(prev);
      next.has(imgId) ? next.delete(imgId) : next.add(imgId);
      return next;
    });
  };

  const onSelectFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const urls = files.map((f) => URL.createObjectURL(f));
    setNewFiles((prev) => [...prev, ...files]);
    setNewPreviews((prev) => [...prev, ...urls]);
    e.target.value = "";
  };

  const removeNewAt = (idx) => {
    setNewFiles((prev) => prev.filter((_, i) => i !== idx));
    setNewPreviews((prev) => {
      const url = prev[idx];
      if (url) URL.revokeObjectURL(url);
      return prev.filter((_, i) => i !== idx);
    });
  };

  const handleUpdate = async (e) => {
    e?.preventDefault?.();
    if (!accessToken) {
      alert("로그인이 필요한 기능입니다.");
      navigate("/login");
      return;
    }

    const dto = {
      title,
      address,
      content,
      rating: Math.max(1, Math.min(5, Math.round(Number(rating)))),
      deleteImageIds: Array.from(deleteImageIds), // 선택 삭제만 전송
    };

    const formData = new FormData();
    formData.append("data", new Blob([JSON.stringify(dto)], { type: "application/json" }));
    newFiles.forEach((f) => formData.append("images", f)); // 새 이미지 추가

    try {
      await axios.put(`https://api.stackflov.com/map/reviews/${id}`, formData, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      });
      navigate("/nibangnebang");
    } catch (error) {
      console.error(
        "리뷰 수정 실패:",
        error?.response?.status,
        error?.response?.data || error?.message
      );
      alert("수정 실패: " + (error?.response?.data?.message || error?.message || "알 수 없는 오류"));
    }
  };

  const hasExisting = existingImages.length > 0;
  const deleteCount = useMemo(() => deleteImageIds.size, [deleteImageIds]);

  if (loading) {
    return (
      <NiBangNeBangCreateWrapper>
        <div style={{ padding: 16 }}>로딩 중…</div>
      </NiBangNeBangCreateWrapper>
    );
  }

  return (
    <NiBangNeBangCreateWrapper>
      {/* 제목 */}
      <NiBangNeBangCreateTopContent data-show="true">
        <NiBangNeBangTitleDiv>제목</NiBangNeBangTitleDiv>
        <NiBangNeBangTitleInputDiv
          type="text"
          placeholder="글 제목을 작성해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </NiBangNeBangCreateTopContent>

      {/* 주소 */}
      <NiBangNeBangAddress  data-show="true">
        <NiBangNeBangTitleDiv>주소</NiBangNeBangTitleDiv>
        <NiBangNeBangTitleInputDiv
          type="text"
          placeholder="주소(자유 형식)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </NiBangNeBangAddress>

      {/* 본문 */}
      <NiBangNeBangCreateMiddleContent data-show="true">
        <NiBangNeBangCreateContentInput
          rows={8}
          placeholder="글 내용을 작성해주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </NiBangNeBangCreateMiddleContent>

      {/* 평점 */}
      <NiBangNeBangStarRating value={rating} onChange={(v) => setRating(Math.round(v))} />

      {/* 이미지 편집 (일관된 UI) */}
      <div style={{ marginTop: 18 }}>
        
          <SectionTitle>기존 이미지 (클릭하여 제거/취소)</SectionTitle>

        {hasExisting ? (
          <PreviewGrid>
            {existingImages.map((img) => {
              const marked = deleteImageIds.has(img.id);
              return (
                <PreviewItem
                  key={img.id}
                  onClick={() => toggleDeleteExisting(img.id)}
                  style={{
                    cursor: "pointer",
                    opacity: marked ? 0.45 : 1,
                    outline: marked ? "2px dashed #ef4444" : "none",
                    position: "relative",
                  }}
                  title={marked ? "삭제 취소" : "삭제"}
                >
                  <img src={img.url} alt="review" />
                  {marked && (
                    <div
                      style={{
                        position: "absolute",
                        top: 6,
                        left: 6,
                        background: "rgba(239,68,68,.9)",
                        color: "#fff",
                        fontSize: 12,
                        padding: "2px 6px",
                        borderRadius: 8,
                      }}
                    >
                      삭제 예정
                    </div>
                  )}
                </PreviewItem>
              );
            })}
          </PreviewGrid>
        ) : (
          <p style={{ color: "#6b7280", fontSize: 14, margin: "4px 0 14px" }}>
            등록된 이미지가 없습니다.
          </p>
        )}

        <SectionTitle sytle={{ marginTop: 18}}>
          새 이미지 추가
        </SectionTitle>
          

        {/* 📎 이미지 선택 (일관 스타일) */}
        <UploadLabel htmlFor="update-upload">📎 이미지 선택</UploadLabel>
        <UploadInput
          id="update-upload"
          type="file"
          multiple
          accept="image/*"
          onChange={onSelectFiles}
        />

        {/* 새 파일 미리보기 */}
        {newPreviews.length > 0 && (
          <>
            <div style={{ marginTop: 10, color: "#6b7280", fontSize: 14 }}>
              추가할 이미지
            </div>
            <PreviewGrid>
              {newPreviews.map((src, idx) => (
                <PreviewItem key={src}>
                  <img src={src} alt={`new-${idx}`} />
                  <RemoveThumbBtn onClick={() => removeNewAt(idx)}>제거</RemoveThumbBtn>
                </PreviewItem>
              ))}
            </PreviewGrid>
          </>
        )}
      </div>

      {/* 버튼 */}
      <NiBangNeBangCreateBottomContent data-show="true">
        <NiBangNeBangCreateBtn onClick={handleUpdate}>😽 수정</NiBangNeBangCreateBtn>
        <NiBangNeBangCreateCancleBtn onClick={() => navigate("/nibangnebang")}>
          😽 취소
        </NiBangNeBangCreateCancleBtn>
      </NiBangNeBangCreateBottomContent>
    </NiBangNeBangCreateWrapper>
  );
};

export default NiBangNeBangUpdateForm;
