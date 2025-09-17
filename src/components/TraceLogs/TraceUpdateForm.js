import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  TraceCategoryDiv,
  TraceCategoryTitle,
  TraceUpdateTopContent,
  TraceUpdateWrapper,
  TraceTitleDiv,
  TraceTitleInputDiv,
  TraceCategorySelectorItem,
  TraceUpdateBottomContent,
  TraceUpdateMiddleContent,
  TraceUpdateContentInput,
  TraceUpdateCancleBtn,
  TraceUpdateBtn,
} from "../../styles/components/TraceUpdateFormStyled";
import { MyInfoDUmmyDatas, TraceListDummyData } from "../../utils/dummyDatas";
import Cookies from "js-cookie";

const TraceUpdateForm = () => {
  const navigator = useNavigate();
  const [traceInfo, setTraceInfo] = useState({});
  const [updateAble, setUpdateAble] = useState(false);
  const [traceTitle, setTraceTitle] = useState();
  const [traceContent, setTraceContent] = useState();
  const [traceCategory, setTraceCategory] = useState();
  const postNo = useParams();

  const [selectCategory, setSelectCategory] = useState(1);
  const accessToken = Cookies.get("accessToken");

  const handleCreatePost = () => {
    axios
      .put(
        `http://3.106.223.65/boards/${postNo.no}`,
        {
          category: selectCategory,
          title: traceTitle,
          content: traceContent,
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
        // 성공 시 추가 작업 (예: 페이지 이동 등)
      })
      .catch((error) => {
        console.error("게시글 작성 실패:", error);
        // 실패 시 처리
      });
  };

  const category = {
    0: "🏠 자취",
    1: "⚡ 번개",
    2: "🍯️ 꿀팁",
    3: "🍙 레시피",
  };
  const { no } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://3.106.223.65/boards/${no}`,

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // ← 백엔드에서 allowCredentials(true)면 이거 필수
        }
      )
      .then((res) => {
        setTraceInfo(res.data);
        setTraceTitle(res.data.title);
        setTraceContent(res.data.content);
        setTraceCategory(res.data.category);
      });
  }, [no]);

  return (
    <TraceUpdateWrapper>
      <TraceUpdateTopContent>
        <TraceTitleDiv>제목</TraceTitleDiv>
        <TraceTitleInputDiv
          placeholder="글 제목을 작성해주세요."
          value={traceTitle}
          onChange={(e) => {
            setTraceTitle(e.target.value);
          }}
        />
      </TraceUpdateTopContent>
      <TraceCategoryDiv>
        <TraceCategoryTitle>카테고리</TraceCategoryTitle>
        <TraceCategorySelectorItem
          selectCategory={traceCategory == 1 ? true : false}
          onClick={() => {
            setTraceCategory(1);
          }}
        >
          🏠 자취
        </TraceCategorySelectorItem>
        <TraceCategorySelectorItem
          selectCategory={traceCategory == 2 ? true : false}
          onClick={() => {
            setTraceCategory(2);
          }}
        >
          ⚡ 번개
        </TraceCategorySelectorItem>
        <TraceCategorySelectorItem
          selectCategory={traceCategory == 3 ? true : false}
          onClick={() => {
            setTraceCategory(3);
          }}
        >
          🍯️ 꿀팁
        </TraceCategorySelectorItem>
        <TraceCategorySelectorItem
          selectCategory={traceCategory == 4 ? true : false}
          onClick={() => {
            setTraceCategory(4);
          }}
        >
          🍙 레시피
        </TraceCategorySelectorItem>
      </TraceCategoryDiv>
      <TraceUpdateMiddleContent>
        <TraceUpdateContentInput
          placeholder="글 내용을 작성해주세요."
          value={traceContent}
          onChange={(e) => {
            setTraceContent(e.target.value);
          }}
        />
      </TraceUpdateMiddleContent>
      <TraceUpdateBottomContent>
        <TraceUpdateCancleBtn
          onClick={() => {
            handleCreatePost();
            navigator(`/trace/detail/${postNo.no}`);
          }}
        >
          😽 수정
        </TraceUpdateCancleBtn>
        <TraceUpdateBtn
          onClick={() => {
            navigator("/tracelog");
          }}
        >
          😽 취소
        </TraceUpdateBtn>
      </TraceUpdateBottomContent>
    </TraceUpdateWrapper>
  );
};

export default TraceUpdateForm;
