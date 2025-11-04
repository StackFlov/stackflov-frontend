// src/styles/components/NiBangNeBangStyled.js
import styled, { keyframes } from "styled-components";
import "../../Fonts/fonts.css";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const NiBangNeBangWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 16px 24px;
  box-sizing: border-box;
`;

export const NiBangNeBangBigTitleWrapper = styled.h1`
  /* ── 자취로그(TraceLogBigTitleWrapper)와 동일 스타일 ── */
  margin: 4px 0 12px;
  padding-bottom: 10px;
  overflow: visible;
  font-size: 42px;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.2;
  position: relative;
  animation: ${fadeUp} .35s ease both;

  &::after {
    content: "";
    position: absolute;
    left: 0; bottom: clamp(140px, 20vw, 280px);
    width: 88px; height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #111827, #6366f1);
  }
`;

export const NiBangNeBangItems = styled.ul`
  margin: 10px 0 8px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const NiBangNeBangItem = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 82px;
  height: 36px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: ${(p) => (p.selectCategory ? "#EEF2FF" : "#fff")};
  color: #111827;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: .01em;
  transition: transform .04s ease, box-shadow .15s ease;
  &:hover  { box-shadow: 0 4px 14px rgba(99,102,241,.18); }
  &:active { transform: translateY(1px); }
`;

export const TraceCreateDiv = styled.button`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #fff;
  font-weight: 800;
  font-size: 14px;
  cursor: pointer;
  transition: background .15s ease, box-shadow .15s ease, transform .02s ease;
  &:hover  { background: #F8FAFC; box-shadow: 0 4px 14px rgba(0,0,0,.08); }
  &:active { transform: translateY(1px); }
`;
