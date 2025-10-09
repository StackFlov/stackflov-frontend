import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TraceCategoryDiv,
  TraceCategoryTitle,
  TraceCreateTopContent,
  TraceCreateWrapper,
  TraceTitleDiv,
  TraceTitleInputDiv,
  TraceCategorySelectorItem,
  TraceCreateBottomContent,
  TraceCreateMiddleContent,
  TraceCreateContentInput,
  TraceCreateCancleBtn,
  TraceCreateBtn,
} from "../../styles/components/TraceCreateFormStyled";
import Cookies from "js-cookie";
import axios from "axios";

const TraceCreateForm = () => {
  const [selectCategory, setSelectCategory] = useState(1);
  const navigator = useNavigate();
  const accessToken = Cookies.get("accessToken");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = () => {
    axios
      .post(
        "https://api.stackflov.com/boards/multipart",
        {
          data: {
            title: title,
            content: content,
            category: selectCategory,
          },
          images: [],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        navigator("/tracelog");
      })
      .catch((error) => {
        console.error("게시글 작성 실패:", error);
        // 실패 시 처리
      });
  };

  const handlePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // images 기본값 빈 배열 지정
    const imgs = [];

    // ✅ 서버가 기대하는 "data" JSON 파트
    const dto = {
      title,
      content,
      category: Number(selectCategory), // 숫자 필드면 숫자로!
    };
    formData.append(
      "data",
      new Blob([JSON.stringify(dto)], { type: "application/json" })
    );

    if (imgs.length > 0) {
      Array.from(imgs).forEach((file) => {
        if (file) formData.append("images", file);
      });
    } else {
      // 빈 배열을 문자열로 보내기 (서버가 빈 이미지 배열 기대하면)
      formData.append("images", JSON.stringify([]));
    }

    try {
      const response = await axios.post(
        "https://api.stackflov.com/boards/multipart",
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            // Content-Type은 지정하지 않음 (자동 설정)
          },
          withCredentials: true,
        }
      );

      console.log("성공:", response.data);
      navigator("/tracelog");
    } catch (error) {
      console.error(
        "게시글 작성 실패:",
        error.response?.status,
        error.response?.data || error.message
      );
    }
  };

  return (
    <TraceCreateWrapper>
      <TraceCreateTopContent>
        <TraceTitleDiv>제목</TraceTitleDiv>
        <TraceTitleInputDiv
          placeholder="글 제목을 작성해주세요."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </TraceCreateTopContent>
      <TraceCategoryDiv>
        <TraceCategoryTitle>카테고리</TraceCategoryTitle>
        <TraceCategorySelectorItem
          selectCategory={selectCategory == 1 ? true : false}
          onClick={() => {
            setSelectCategory(1);
          }}
        >
          🏠 자취
        </TraceCategorySelectorItem>
        <TraceCategorySelectorItem
          selectCategory={selectCategory == 2 ? true : false}
          onClick={() => {
            setSelectCategory(2);
          }}
        >
          ⚡ 번개
        </TraceCategorySelectorItem>
        <TraceCategorySelectorItem
          selectCategory={selectCategory == 3 ? true : false}
          onClick={() => {
            setSelectCategory(3);
          }}
        >
          🍯️ 꿀팁
        </TraceCategorySelectorItem>
        <TraceCategorySelectorItem
          selectCategory={selectCategory == 4 ? true : false}
          onClick={() => {
            setSelectCategory(4);
          }}
        >
          🍙 레시피
        </TraceCategorySelectorItem>
      </TraceCategoryDiv>
      <TraceCreateMiddleContent>
        <TraceCreateContentInput
          placeholder="글 내용을 작성해주세요."
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </TraceCreateMiddleContent>
      <TraceCreateBottomContent>
        <TraceCreateCancleBtn
          onClick={(e) => {
            // handleCreatePost();
            handlePost(e);
          }}
        >
          😽 등록
        </TraceCreateCancleBtn>
        <TraceCreateBtn
          onClick={() => {
            navigator("/tracelog");
          }}
        >
          😽 취소
        </TraceCreateBtn>
      </TraceCreateBottomContent>
    </TraceCreateWrapper>
  );
};

export default TraceCreateForm;
