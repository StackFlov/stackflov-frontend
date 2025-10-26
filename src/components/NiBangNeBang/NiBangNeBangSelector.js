import React from "react";
import { NiBangNeBangBigTitleWrapper } from "../../styles/components/NiBangNeBangStyled";
import {
  NiBangNeBangSelectorItem,
  NiBangNeBangSelectors,
  NiBangNeBangSelectorWrapper,
  TraceCreateDiv,
} from "../../styles/components/NiBangNeBangSelectorStyled";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const NiBangNeBangSelector = ({ nowCategory, setNowCategory }) => {
  const location = useLocation();
  const navigator = useNavigate();
  const accessToken = Cookies.get("accessToken");
  return (
    <NiBangNeBangSelectorWrapper>
      <NiBangNeBangSelectors>
        {location.pathname == "/" && (
          <>
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
          </>
        )}
        <TraceCreateDiv
          onClick={() => {
            if (accessToken != undefined) {
              navigator("/nibangnebang/create");
            } else {
              alert("로그인이 필요한 기능입니다.");
            }
          }}
        >
          글쓰기
        </TraceCreateDiv>
      </NiBangNeBangSelectors>
    </NiBangNeBangSelectorWrapper>
  );
};

export default NiBangNeBangSelector;
