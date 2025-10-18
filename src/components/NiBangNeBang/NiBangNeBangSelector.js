import React from "react";
import { NiBangNeBangBigTitleWrapper } from "../../styles/components/NiBangNeBangStyled";
import {
  NiBangNeBangSelectorItem,
  NiBangNeBangSelectors,
  NiBangNeBangSelectorWrapper,
  TraceCreateDiv,
} from "../../styles/components/NiBangNeBangSelectorStyled";
import { useNavigate } from "react-router-dom";

const NiBangNeBangSelector = ({ nowCategory, setNowCategory }) => {
  const navigator = useNavigate();
  return (
    <NiBangNeBangSelectorWrapper>
      <NiBangNeBangSelectors>
        <NiBangNeBangSelectorItem
          selectCategory={nowCategory == 99 ? true : false}
          onClick={() => {
            setNowCategory(99);
          }}
        >
          전체
        </NiBangNeBangSelectorItem>
        <NiBangNeBangSelectorItem
          selectCategory={nowCategory == 1 ? true : false}
          onClick={() => {
            setNowCategory(1);
          }}
        >
          🏠 자취
        </NiBangNeBangSelectorItem>
        <NiBangNeBangSelectorItem
          selectCategory={nowCategory == 2 ? true : false}
          onClick={() => {
            setNowCategory(2);
          }}
        >
          ⚡ 번개
        </NiBangNeBangSelectorItem>
        <NiBangNeBangSelectorItem
          selectCategory={nowCategory == 3 ? true : false}
          onClick={() => {
            setNowCategory(3);
          }}
        >
          🍯️ 꿀팁
        </NiBangNeBangSelectorItem>
        <NiBangNeBangSelectorItem
          selectCategory={nowCategory == 4 ? true : false}
          onClick={() => {
            setNowCategory(4);
          }}
        >
          🍙 레시피
        </NiBangNeBangSelectorItem>
        <TraceCreateDiv
          onClick={() => {
            navigator("/nibangnebang/create");
          }}
        >
          글쓰기
        </TraceCreateDiv>
      </NiBangNeBangSelectors>
    </NiBangNeBangSelectorWrapper>
  );
};

export default NiBangNeBangSelector;
