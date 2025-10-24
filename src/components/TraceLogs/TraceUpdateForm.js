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

  const handleUpdagtePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const imgs = [];

    // ✅ DTO에 맞게 값 정의
    const dto = {
      title: traceTitle, // 입력값에서 받아와야 함
      content: traceContent, // content로 맞추기
      category: Number(selectCategory),
      removeImageUrls: [], // 필요하다면 값 넣기
    };

    // data라는 이름으로 JSON Blob 추가 (서버에서 @RequestParam("data")로 받음)
    formData.append(
      "data",
      new Blob([JSON.stringify(dto)], { type: "application/json" })
    );

    // 파일 배열이 비어있지 않으면 첨부
    imgs.forEach((file) => {
      if (file) formData.append("images", file);
    });

    try {
      const response = await axios.put(
        `https://api.stackflov.com/boards/${postNo.no}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            // Content-Type은 명시하지 않음!
          },
          withCredentials: true,
        }
      );

      console.log("성공:", response.data);
      navigator("/");
    } catch (error) {
      console.error(
        "게시글 작성 실패:",
        error.response?.status,
        error.response?.data || error.message
      );
    }
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
        `https://api.stackflov.com/boards/${no}`,

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
          onClick={(e) => {
            handleUpdagtePost(e);
            navigator(`/trace/detail/${postNo.no}`);
          }}
        >
          😽 수정
        </TraceUpdateCancleBtn>
        <TraceUpdateBtn
          onClick={() => {
            navigator("/");
          }}
        >
          😽 취소
        </TraceUpdateBtn>
      </TraceUpdateBottomContent>
    </TraceUpdateWrapper>
  );
};

export default TraceUpdateForm;
