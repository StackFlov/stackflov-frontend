// src/styles/components/TraceCategorySelectorStyled.js
import styled, { keyframes } from "styled-components";
import "../../Fonts/fonts.css";

/* ---------- Animations ---------- */
const fadeUp = keyframes`
  0%   { opacity: 0; transform: translateY(8px) scale(.99); }
  100% { opacity: 1; transform: translateY(0)   scale(1); }
`;
const pop = keyframes`
  0%   { opacity: 0; transform: translateY(6px) scale(.98); }
  70%  { opacity: 1; transform: translateY(0)   scale(1.02); }
  100% { opacity: 1; transform: translateY(0)   scale(1); }
`;

/* ---------- Wrapper ---------- */
export const TraceCategorySelectorWrapper = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 6px 16px 0;     /* 상단 살짝만 띄우고, 아래 여백 최소화 */
`;

/* ---------- Title ---------- */
export const TraceLogBigTitleWrapper = styled.h1`
  margin: 4px 0 12px;
  padding-bottom: 10px;          /* 선이 들어갈 공간 확보 */
  overflow: visible;
  font-size: 42px;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.2;
  position: relative;
  animation: ${fadeUp} .35s ease both;

  /* 굵은 검은 줄 대신, 포인트 언더라인 */
  &::after {
    content: "";
    position: absolute;
    left: 0; bottom: clamp(140px, 20vw, 280px);
    width: 88px; height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #111827, #6366f1);
  }
`;

/* ---------- Category Bar ---------- */
export const TraceCategorySelectors = styled.ul`
  margin: 10px 0 8px;     /* 리스트와 간격 줄이기 */
  padding: 0;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

/* 개별 버튼(Pill) */
export const TraceCategorySelectorItem = styled.button`
  --active-border: rgba(99,102,241,.45);
  --idle-border: #cdd8e3;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  height: 36px;
  padding: 0 14px;

  border: 1.5px solid ${({ $active }) => ($active ? "var(--active-border)" : "var(--idle-border)")};
  border-radius: 999px;
  background: ${({ $active }) => ($active ? "rgba(99,102,241,.08)" : "#fff")};
  color: #111827;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  cursor: pointer;

  transition: background .15s ease, border-color .15s ease, transform .05s ease, box-shadow .15s ease;
  animation: ${pop} .36s cubic-bezier(.2,.65,.2,1) both;
  animation-delay: var(--stagger, 0ms);

  &:hover {
    background: ${({ $active }) => ($active ? "rgba(99,102,241,.12)" : "#f8fafc")};
    border-color: ${({ $active }) => ($active ? "rgba(99,102,241,.55)" : "#bfd0e0")};
  }
  &:active { transform: translateY(1px); }
  &:focus-visible {
    outline: 2px solid rgba(99,102,241,.35);
    outline-offset: 2px;
  }
`;

/* ---------- 글쓰기 버튼(오른쪽) ---------- */
export const TraceCreateDiv = styled.button`
  margin-left: auto;              /* 우측 끝으로 밀기 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 14px;

  border-radius: 999px;
  border: 1.5px solid #cdd8e3;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background .15s ease, border-color .15s ease, transform .05s ease;

  &:hover { background: #f0f5fb; border-color: #b7c8d9; }
  &:active { transform: translateY(1px); }
`;
