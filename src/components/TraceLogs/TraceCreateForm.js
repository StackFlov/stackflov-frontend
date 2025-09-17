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
        "http://3.106.223.65/boards",
        {
          category: selectCategory,
          title: title,
          content: content,
          imageUrls: ["string"],
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
          onClick={() => {
            handleCreatePost();
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
