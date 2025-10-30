// src/components/trace/TraceCategorySelector.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  TraceCategorySelectorItem,
  TraceCategorySelectors,
  TraceCategorySelectorWrapper,
  TraceCreateDiv,
  TraceLogBigTitleWrapper,
} from "../../styles/components/TraceCategorySelectorStyled";

const TraceCategorySelector = ({ nowCategory, setNowCategory }) => {
  const accessToken = Cookies.get("accessToken");
  const navigate = useNavigate();

  const categories = [
    { key: 99, label: "전체" },
    { key: 0, label: "🏠 자취" },
    { key: 1, label: "⚡ 번개" },
    { key: 2, label: "🍯 꿀팁" },
    { key: 3, label: "🍙 레시피" },
  ];

  return (
    <TraceCategorySelectorWrapper>
      <TraceLogBigTitleWrapper>자취로그</TraceLogBigTitleWrapper>

      <TraceCategorySelectors>
        {categories.map((c, i) => (
          <li key={c.key} style={{ listStyle: "none" }}>
            <TraceCategorySelectorItem
              $active={nowCategory === c.key}
              aria-pressed={nowCategory === c.key}
              onClick={() => setNowCategory(c.key)}
              style={{ "--stagger": `${i * 60}ms` }}  /* 스태거 리빌 */
            >
              {c.label}
            </TraceCategorySelectorItem>
          </li>
        ))}

        <TraceCreateDiv
          onClick={() => {
            if (!accessToken) return alert("로그인이 필요한 기능입니다.");
            navigate("/trace/create");
          }}
          style={{ "--stagger": `${categories.length * 60}ms` }}
          title="글쓰기"
        >
          글쓰기
        </TraceCreateDiv>
      </TraceCategorySelectors>
    </TraceCategorySelectorWrapper>
  );
};

export default TraceCategorySelector;
