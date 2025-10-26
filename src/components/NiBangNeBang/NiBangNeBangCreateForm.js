import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

const NiBangNeBangCreateForm = () => {
  const [title, setTitle] = useState();
  const [address, setAddress] = useState();
  const [content, setContent] = useState();
  const [rating, setRating] = useState(0);
  const navigator = useNavigate();

  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    if (accessToken == undefined) {
      alert("로그인이 필요한 기능입니다.");
      navigator("/login");
    }
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const imgs = [];

    const data = {
      title,
      address: address,
      content,
      rating: rating,
    };
    formData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );

    if (imgs && imgs.length > 0) {
      imgs.forEach((file) => {
        if (file) formData.append("images", file);
      });
    }

    try {
      const response = await axios.post(
        "https://api.stackflov.com/map/reviews",
        formData,
        {
          headers: {
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
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <NiBangNeBangStarRating value={rating} onChange={setRating} />
      <NiBangNeBangCreateBottomContent>
        <NiBangNeBangCreateCancleBtn
          onClick={(e) => {
            handlePost(e);
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

export default NiBangNeBangCreateForm;
