import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
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
} from "../../styles/components/NiBangNeBangCreateFormStyled";
import NiBangNeBangStarRating from "./NiBangNeBangStarRating";

const NiBangNeBangUpdateForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [address, setAddress] = useState();
  const [content, setContent] = useState();
  const [rating, setRating] = useState(0);

  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    axios
      .get(
        `https://api.stackflov.com/map/reviews`,

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        const results = res.data.content;
        const exportResult = results.filter((item) => {
          if (item.id == id) {
            return item;
          }
        });
        console.log(exportResult[0]);
        setTitle(exportResult[0].title);
        setContent(exportResult[0].content);
        setRating(exportResult[0].rating);
        setAddress(exportResult[0].address);
      });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const images = [];

    // 1. DTO에 해당하는 데이터를 객체로 만듭니다.
    // API 명세와 다르게 address가 필요하다면 여기에 포함시키세요.
    const reviewData = {
      title: title,
      rating: rating,
      content: content,
    };

    // 2. JSON 데이터를 'application/json' 타입의 Blob으로 만듭니다.
    formData.append(
      "data", // 서버에서 JSON 데이터를 받는 key (예: 'reviewRequestDto', 'data' 등)
      new Blob([JSON.stringify(reviewData)], { type: "application/json" })
    );

    // 3. 이미지 파일들을 formData에 추가합니다.
    // if (images && images.length > 0) {
    //   images.forEach((file) => {
    //     // 서버에서 파일을 받는 key (예: 'images', 'imageFiles' 등)
    //     if (file) formData.append("images", file);
    //   });
    // }

    try {
      const response = await axios.put(
        `https://api.stackflov.com/map/reviews/${id}`,
        formData, // FormData 객체 전송
        {
          headers: {
            // 중요: FormData 사용 시 Content-Type은 axios가 자동으로 설정하도록 비워둡니다.
            // 수동으로 'multipart/form-data'를 설정하면 boundary 값이 누락되어 오류가 발생합니다.
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );
      console.log("리뷰 수정 성공:", response);
      navigator("/NiBangNeBanglog");
    } catch (error) {
      console.error(
        "리뷰 수정 실패:",
        error.response?.status,
        error.response?.data || error.message
      );
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
      <NiBangNeBangStarRating value={rating} onChange={setRating} />
      <NiBangNeBangCreateBottomContent>
        <NiBangNeBangCreateCancleBtn
          onClick={(e) => {
            handleUpdate(e);
          }}
        >
          😽 등록
        </NiBangNeBangCreateCancleBtn>
        <NiBangNeBangCreateBtn
          onClick={() => {
            navigator("/nibangnebang");
          }}
        >
          😽 취소
        </NiBangNeBangCreateBtn>
      </NiBangNeBangCreateBottomContent>
    </NiBangNeBangCreateWrapper>
  );
};

export default NiBangNeBangUpdateForm;
