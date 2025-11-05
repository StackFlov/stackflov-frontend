// src/styles/components/NiBangNeBangDetailStyled.js
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);  }
`;

/** 상단 영역 래퍼 (float 해제용) */
export const TopSection = styled.div`
  display: flow-root;
`;

/** 본문 영역 래퍼 (float 해제 + 폭 100%) */
export const MidSection = styled.section`
  display: flow-root;
  width: 100%;
`;

/** 자취로그와 동일한 포인트 언더라인 타이틀 바 */
export const TitleBar = styled.div`
  position: relative;
  margin: 4px 0 12px;
  padding-bottom: 10px;
  animation: ${fadeUp} 0.3s ease both;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 88px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #111827, #6366f1);
  }
`;

/** pill 버튼 행 */
export const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

/** 공용 pill 버튼 (variant 지원) */
export const PillBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 13px;
  line-height: 1;
  border: 1px solid
    ${(p) =>
      p.$variant === "danger"
        ? "#fecaca"
        : p.$variant === "ghost"
        ? "#e2e8f0"
        : p.$variant === "success"
        ? "#86efac"
        : "#cbd5e1"};
  background: ${(p) =>
    p.$variant === "danger"
      ? "#fff1f2"
      : p.$variant === "ghost"
      ? "#ffffff"
      : p.$variant === "success"
      ? "#ecfdf5"
      : "#f8fafc"};
  color: ${(p) =>
    p.$variant === "danger"
      ? "#b91c1c"
      : p.$variant === "ghost"
      ? "#334155"
      : p.$variant === "success"
      ? "#065f46"
      : "#111827"};
  cursor: pointer;
  transition: background 0.15s ease, box-shadow 0.15s ease, transform 0.02s ease;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);

  &:hover {
    background: ${(p) =>
      p.$variant === "danger"
        ? "#ffe4e6"
        : p.$variant === "ghost"
        ? "#f8fafc"
        : p.$variant === "success"
        ? "#dcfce7"
        : "#eef2ff"};
  }
  &:active { transform: translateY(1px); }
  &:disabled { opacity: 0.55; cursor: not-allowed; }
`;

/** 주소/평점/신고 등을 담는 칩 컨테이너 */
export const Chips = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

/** 개별 칩 */
export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #334155;
  font-size: 13px;
`;

/** 별점 표시 */
export const Stars = styled.div`
  display: inline-flex;
  gap: 2px;
  font-size: 16px;
  line-height: 1;
  transform: translateY(1px);
`;

/** 본문 이미지 (라운드 + cover) */
export const Img = styled.img`
  width: 100%;
  height: clamp(220px, 39vw, 420px);
  object-fit: cover;
  border-radius: 16px;
  display: block;
  background: #f3f4f6;
`;
