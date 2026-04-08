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
  NiBangNeBangAddress,
  NiBangNeBangAddrDiv,
} from "../../styles/components/NiBangNeBangCreateFormStyled";

import { SectionTitle } from "../../styles/components/TraceUpdateFormStyled";
import NiBangNeBangStarRating from "./NiBangNeBangStarRating";

/** 문자열 배열(imageUrls)과 객체 배열(images/imageList/reviewImages)을
 *  모두 [{id, url}]로 정규화한다. */
const normalizeImages = (imgs) => {
  if (!imgs) return [];
  return imgs
    .map((i) => {
      if (typeof i === "string") {
        return { id: i, url: i }; // 문자열이면 URL 자체를 id로 사용(백엔드가 url 삭제 허용 시 유용)
      }
      return {
        id: i?.id ?? i?.imageId ?? i?.seq ?? i?.pk ?? i?.url,
        url: i?.imageUrl ?? i?.url,
      };
    })
    .filter((x) => x.id && x.url);
};

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
  const [deleteImageIds, setDeleteImageIds] = useState(new Set()); // 클릭 토글된 것들
  const [newFiles, setNewFiles] = useState([]); // File[]
  const [newPreviews, setNewPreviews] = useState([]); // objectURL[]

  const accessToken =
    Cookies.get("accessToken") || localStorage.getItem("accessToken");

  // 미리보기 URL 정리
  useEffect(() => {
    return () => newPreviews.forEach((u) => URL.revokeObjectURL(u));
  }, [newPreviews]);

  // 상세 로딩: /map/{id} 고정 + 스키마 정규화
  useEffect(() => {
    const load = async () => {
      if (!accessToken) {
        alert("로그인이 필요한 기능입니다.");
        navigate("/login");
        return;
      }
      setLoading(true);
      try {
        // ✅ 디테일 API를 /map/{id} 로 통일
        const { data } = await axios.get(
          `https://api.stackflov.com/map/${id}`,
          { headers: { Authorization: `Bearer ${accessToken}` }, withCredentials: true }
        );

        setTitle(data?.title ?? "");
        setAddress(data?.address ?? "");
        setContent(data?.content ?? "");
        setRating(Number(data?.rating ?? 0));

        // ✅ 이미지 정규화 (문자열/객체 모두 처리)
        const normalized =
          normalizeImages(data?.imageUrls) // string[]
            .concat(normalizeImages(data?.images))
            .concat(normalizeImages(data?.imageList))
            .concat(normalizeImages(data?.reviewImages));

        // 중복 제거(id 기준)
        const uniqById = Array.from(
          new Map(normalized.map((v) => [String(v.id), v])).values()
        );
        setExistingImages(uniqById);
      } catch (e1) {
        // 필요하면 폴백(리스트에서 찾아오기)
        try {
          const res = await axios.get(`https://api.stackflov.com/map/reviews`, {
            headers: { Authorization: `Bearer ${accessToken}` },
            withCredentials: true,
          });
          const found = (res.data?.content || []).find(
            (it) => String(it.id) === String(id)
          );
          if (!found) {
            alert("리뷰 정보를 찾지 못했습니다.");
            navigate("/nibangnebang");
            return;
          }
          setTitle(found?.title ?? "");
          setAddress(found?.address ?? "");
          setContent(found?.content ?? "");
          setRating(Number(found?.rating ?? 0));

          const normalized =
            normalizeImages(found?.imageUrls)
              .concat(normalizeImages(found?.images))
              .concat(normalizeImages(found?.imageList))
              .concat(normalizeImages(found?.reviewImages));

          const uniqById = Array.from(
            new Map(normalized.map((v) => [String(v.id), v])).values()
          );
          setExistingImages(uniqById);
        } catch (e2) {
          console.error("리뷰 조회 실패:", e1, e2);
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

  // 기존 이미지 클릭으로 삭제 토글
  const toggleDeleteExisting = (imgId) => {
    setDeleteImageIds((prev) => {
      const next = new Set(prev);
      const key = String(imgId);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  // 새 파일 선택
  const onSelectFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const urls = files.map((f) => URL.createObjectURL(f));
    setNewFiles((prev) => [...prev, ...files]);
    setNewPreviews((prev) => [...prev, ...urls]);
    e.target.value = "";
  };

  // 새 파일 미리보기 제거
  const removeNewAt = (idx) => {
    setNewFiles((prev) => prev.filter((_, i) => i !== idx));
    setNewPreviews((prev) => {
      const url = prev[idx];
      if (url) URL.revokeObjectURL(url);
      return prev.filter((_, i) => i !== idx);
    });
  };

  // 수정 전송
  const handleUpdate = async (e) => {
    e?.preventDefault?.();
    if (!accessToken) {
      alert("로그인이 필요한 기능입니다.");
      navigate("/login");
      return;
    }

    // 🔹 삭제 대상 수집 (id + url 둘 다 전송: 서버 구현 차이 흡수)
    const toDeleteIds  = Array.from(deleteImageIds);
    const toDeleteUrls = existingImages
      .filter((img) => deleteImageIds.has(img.id))
      .map((img) => img.url)
      .filter(Boolean);

    // 🔹 서버 검증 대비(1~5 정수)
    const safeRating = Math.max(1, Math.min(5, Math.round(Number(rating))));

    const dto = {
      title,
      address,
      content,
      rating: safeRating,
      deleteImageIds: Array.from(deleteImageIds).map(Number),
    };

    const url = `https://api.stackflov.com/map/reviews/${id}`;

    try {
      const formData = new FormData();

      // 🔹 JSON 파트는 다양한 키로 함께 전송 (data/request/dto)
      const json = JSON.stringify(dto);
      formData.append("data",    new Blob([json], { type: "application/json" }));

      // 🔹 새 이미지 파일들(있을 때만)
      newFiles.forEach((f) => formData.append("images", f));

      await axios.put(url, formData, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      });

      alert("수정 완료");
      navigate("/nibangnebang");
    } catch (error) {
      console.error("리뷰 수정 실패:", error?.response?.status, error?.response?.data || error?.message);
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
      <NiBangNeBangAddress data-show="true">
        <NiBangNeBangAddrDiv>주소</NiBangNeBangAddrDiv>
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
      <NiBangNeBangStarRating
        value={rating}
        onChange={(v) => setRating(Math.round(v))}
      />

      {/* 이미지 편집 */}
      <div style={{ marginTop: 18 }}>
        <SectionTitle>
          기존 이미지 {hasExisting ? `(클릭하여 ${deleteCount ? "복구/삭제" : "삭제"} 표시)` : ""}
        </SectionTitle>

        {hasExisting ? (
          <PreviewGrid>
            {existingImages.map((img) => {
              const marked = deleteImageIds.has(String(img.id));
              return (
                <PreviewItem
                  key={String(img.id)}
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

        <SectionTitle style={{ marginTop: 18 }}>새 이미지 추가</SectionTitle>
        <UploadLabel htmlFor="update-upload">📎 이미지 선택</UploadLabel>
        <UploadInput
          id="update-upload"
          type="file"
          multiple
          accept="image/*"
          onChange={onSelectFiles}
        />

        {newPreviews.length > 0 && (
          <>
            <div style={{ marginTop: 10, color: "#6b7280", fontSize: 14 }}>
              추가할 이미지
            </div>
            <PreviewGrid>
              {newPreviews.map((src, idx) => (
                <PreviewItem key={src}>
                  <img src={src} alt={`new-${idx}`} />
                  <RemoveThumbBtn onClick={() => removeNewAt(idx)}>
                    제거
                  </RemoveThumbBtn>
                </PreviewItem>
              ))}
            </PreviewGrid>
          </>
        )}
      </div>

      {/* 버튼 */}
      <NiBangNeBangCreateBottomContent data-show="true">
        <NiBangNeBangCreateBtn onClick={handleUpdate}>
          😽 수정
        </NiBangNeBangCreateBtn>
        <NiBangNeBangCreateCancleBtn
          onClick={() => navigate(`/nibangnebang/${id}`)}
        >
          😽 취소
        </NiBangNeBangCreateCancleBtn>
      </NiBangNeBangCreateBottomContent>
    </NiBangNeBangCreateWrapper>
  );
};

export default NiBangNeBangUpdateForm;
