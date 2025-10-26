import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"; // 1. styled-components 임포트
import {
  NiBangNeBangCategoryDiv,
  NiBangNeBangCategoryTitle,
  NiBangNeBangCreateTopContent,
  NiBangNeBangCreateWrapper,
  NiBangNeBangTitleDiv,
  NiBangNeBangTitleInputDiv,
  NiBangNeBangCategorySelectorItem,
  NiBangNeBangCreateBottomContent,
  NiBangNeBangCreateMiddleContent,
  NiBangNeBangCreateContentInput,
  NiBangNeBangCreateCancleBtn,
  NiBangNeBangCreateBtn,
} from "../../styles/components/NiBangNeBangCreateFormStyled"; // <-- 사용자님이 주신 경로
import NiBangNeBangStarRating from "./NiBangNeBangStarRating"; // <-- 사용자님이 주신 경로

// --- 스타일 추가 ---
// 이미지 미리보기를 위한 간단한 스타일
const ImagePreviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;
// --- 스타일 추가 끝 ---

const NiBangNeBangCreateForm = () => {
  const [title, setTitle] = useState(""); // 2. undefined -> ""
  const [address, setAddress] = useState(""); // undefined -> ""
  const [content, setContent] = useState(""); // undefined -> ""
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState([]); // 3. 이미지 state 추가
  const [previews, setPreviews] = useState([]); // 미리보기 URL state
  const navigator = useNavigate();

  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    if (accessToken == undefined) {
      alert("로그인이 필요한 기능입니다.");
      navigator("/login");
    }
  }, [accessToken, navigator]); // 4. navigator를 dependency array에 추가

  // 5. 이미지 선택 핸들러
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    // 기존 미리보기 URL 해제 (메모리 누수 방지)
    previews.forEach((url) => URL.revokeObjectURL(url));

    // 새 미리보기 생성
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);
  };

  const handlePost = async (e) => {
    e.preventDefault();

    if (!title || !content || !address || rating === 0) {
      alert("제목, 내용, 주소, 별점을 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();

    // 6. FormData 수정 ("data" -> "dto")
    const data = {
      title,
      address: address,
      content,
      rating: rating,
    };
    formData.append(
      "data", // 백엔드 @RequestPart("dto")와 일치
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );

    // 7. images state 사용
    if (images && images.length > 0) {
      images.forEach((file) => {
        if (file) formData.append("images", file);
      });
    }

    try {
      const response = await axios.post(
        "https://api.stackflov.com/map/reviews",
        formData,
        {
          headers: {
            // 8. Content-Type 제거 (브라우저가 자동으로 설정)
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );
      console.log("성공:", response);
      navigator("/nibangnebang");
    } catch (error) {
      console.error(
        "게시글 작성 실패:",
        error.response?.status,
        error.response?.data || error.message
      );
      alert("게시글 작성에 실패했습니다.");
    }
  };

  return (
    <NiBangNeBangCreateWrapper>
      <NiBangNeBangCreateTopContent>
        <NiBangNeBangTitleDiv>제목</NiBangNeBangTitleDiv>
        <NiBangNeBangTitleInputDiv
          placeholder="글 제목을 작성해주세요."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </NiBangNeBangCreateTopContent>
      <NiBangNeBangCreateMiddleContent>
        <NiBangNeBangCreateContentInput
          placeholder="글 내용을 작성해주세요."
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </NiBangNeBangCreateMiddleContent>
      주소입력 :
      <input
        style={{ marginLeft: "20px" }}
        placeholder="ex)서울특별시 종로구"
        value={address} // 9. value 추가
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <NiBangNeBangStarRating value={rating} onChange={setRating} />

      {/* --- 10. 파일 입력 폼 추가 --- */}
      <div style={{ margin: "20px 0" }}>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginTop: "10px" }}
        />
      </div>

      {/* --- 11. 이미지 미리보기 --- */}
      <ImagePreviewWrapper>
        {previews.map((previewUrl, index) => (
          <ImagePreview
            key={index}
            src={previewUrl}
            alt={`미리보기 ${index + 1}`}
          />
        ))}
      </ImagePreviewWrapper>
      {/* --- 미리보기 끝 --- */}

      <NiBangNeBangCreateBottomContent>
        {/* --- 12. 버튼 기능 수정 --- */}
        <NiBangNeBangCreateBtn // 등록 버튼
          onClick={(e) => {
            handlePost(e);
          }}
        >
          😽 등록
        </NiBangNeBangCreateBtn>
        <NiBangNeBangCreateCancleBtn // 취소 버튼
          onClick={() => {
            if (window.confirm("작성을 취소하시겠습니까?")) {
              navigator("/nibangnebang");
            }
          }}
        >
          😽 취소
        </NiBangNeBangCreateCancleBtn>
      </NiBangNeBangCreateBottomContent>
    </NiBangNeBangCreateWrapper>
  );
};

export default NiBangNeBangCreateForm;