import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TraceCategorySelectorItem,
  TraceCategorySelectors,
  TraceCategorySelectorWrapper,
  TraceCreateDiv,
  TraceLogBigTitleWrapper,
} from "../../styles/components/TraceCategorySelectorStyled";

const TraceCategorySelector = ({ nowCategory, setNowCategory }) => {
  const navigator = useNavigate();
  const [selectCategory, setSelectCategory] = useState(99);
  return (
    <TraceCategorySelectorWrapper>
      <TraceLogBigTitleWrapper>자취로그</TraceLogBigTitleWrapper>
      <TraceCategorySelectors>
        <TraceCategorySelectorItem
          selectCategory={nowCategory == 99 ? true : false}
          onClick={() => {
            setNowCategory(99);
          }}
        >
          전체
        </TraceCategorySelectorItem>
        <TraceCategorySelectorItem
          selectCategory={nowCategory == 1 ? true : false}
          onClick={() => {
            setNowCategory(1);
          }}
        >
          🏠 자취
        </TraceCategorySelectorItem>
        <TraceCategorySelectorItem
          selectCategory={nowCategory == 2 ? true : false}
          onClick={() => {
            setNowCategory(2);
          }}
        >
          ⚡ 번개
        </TraceCategorySelectorItem>
        <TraceCategorySelectorItem
          selectCategory={nowCategory == 3 ? true : false}
          onClick={() => {
            setNowCategory(3);
          }}
        >
          🍯️ 꿀팁
        </TraceCategorySelectorItem>
        <TraceCategorySelectorItem
          selectCategory={nowCategory == 4 ? true : false}
          onClick={() => {
            setNowCategory(4);
          }}
        >
          🍙 레시피
        </TraceCategorySelectorItem>
        <TraceCreateDiv
          onClick={() => {
            navigator("/trace/create");
          }}
        >
          글쓰기
        </TraceCreateDiv>
      </TraceCategorySelectors>
    </TraceCategorySelectorWrapper>
  );
};

export default TraceCategorySelector;
