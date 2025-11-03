// src/styles/components/TraceCreateFormStyled.js
import styled, { keyframes } from "styled-components";
import "../../Fonts/fonts.css";

const rise = keyframes`
  0%   { opacity: 0; transform: translateY(10px) scale(.985); }
  60%  { opacity: 1; transform: translateY(0)     scale(1); }
  100% { opacity: 1; transform: translateY(0)     scale(1); }
`;

const pulse = keyframes`
  0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,.0); }
  50%     { box-shadow: 0 0 0 6px rgba(99,102,241,.08); }
`;

const popIn = keyframes`
  0%   { opacity: 0; transform: translateY(6px) scale(.985); }
  60%  { opacity: 1; transform: translateY(0)    scale(1.00); }
  100% { opacity: 1; transform: translateY(0)    scale(1.00); }
`;

export const TraceCreateWrapper = styled.div`
  --ink: #111827;
  --muted: #6b7280;
  --line: #e5e7eb;
  --brand: #6366f1;
  --accent: #8b5cf6;
  --surface: #f8fafc;

  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 16px;
  box-sizing: border-box;
  color: var(--ink);
`;

export const TraceCreateTopContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 12px;
  align-items: center;
  padding: 12px 0 14px;
  border-bottom: 1px solid var(--line);

  &::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -2px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, var(--brand), var(--accent));
    opacity: .75;
  }

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${rise} 420ms cubic-bezier(.2,.65,.2,1) both; }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    &::after { height: 2px; bottom: -1px; }
  }
`;

export const TraceTitleDiv = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: var(--muted);
`;

export const TraceTitleInputDiv = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  border: 1px solid var(--line);
  padding: 0 14px;
  font-size: 20px;
  outline: none;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,.03);

  &:focus {
    border-color: rgba(99,102,241,.45);
    animation: ${pulse} 900ms ease 1;
  }
`;

export const TraceCategoryDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 14px 0;

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${rise} 420ms cubic-bezier(.2,.65,.2,1) 40ms both; }
`;

export const TraceCategoryTitle = styled.div`
  font-size: 16px;
  font-weight: 900;
  color: var(--muted);
  margin-right: 6px;
`;

export const TraceCategorySelectorItem = styled.li`
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 88px;
  height: 36px;
  padding: 0 12px;
  border-radius: 999px;

  background: ${(p) =>
    p.selectCategory
      ? "linear-gradient(180deg, #edf2ff, #e9ecff)"
      : "#ffffff"};
  border: 1px solid
    ${(p) => (p.selectCategory ? "rgba(99,102,241,.45)" : "#e5e7eb")};
  color: ${(p) => (p.selectCategory ? "#1e1b4b" : "#111827")};
  font-weight: 800;
  font-size: 13px;

  cursor: pointer;
  transition: transform .02s ease, box-shadow .15s ease, background .15s ease;

  &:hover { box-shadow: 0 6px 18px rgba(99,102,241,.18); }
  &:active { transform: translateY(1px); }
`;

export const TraceCreateMiddleContent = styled.div`
  padding-top: 6px;

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${rise} 420ms cubic-bezier(.2,.65,.2,1) 80ms both; }
`;

export const TraceCreateContentInput = styled.textarea`
  width: 100%;
  min-height: 280px;
  border-radius: 14px;
  border: 1px solid var(--line);
  padding: 14px;
  font-size: 16px;
  line-height: 1.75;
  outline: none;
  resize: vertical;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,.03);

  &:focus {
    border-color: rgba(99,102,241,.45);
    animation: ${pulse} 900ms ease 1;
  }
`;

/* ===== 업로드 UI ===== */
export const UploadRow = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  .count {
    color: #6b7280;
    font-size: 14px;
  }
`;

export const UploadLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 40px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid rgba(99,102,241,.35);
  background: linear-gradient(180deg, #fff, #f6f7ff);
  color: #1e1b4b;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  transition: transform .02s ease, box-shadow .15s ease, background .15s ease;
  &:hover  { box-shadow: 0 6px 18px rgba(99,102,241,.18); background: #f3f4ff; }
  &:active { transform: translateY(1px); }
`;

export const UploadInput = styled.input`
  display: none;
`;

export const PreviewGrid = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 12px;
`;

export const PreviewItem = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 18px rgba(0,0,0,.06);
  animation: ${popIn} 320ms ease both;

  img {
    position: absolute;
    inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
  }
`;

export const RemoveThumbBtn = styled.button`
  position: absolute;
  top: 6px; right: 6px;
  background: rgba(17,24,39,.75);
  color: #fff;
  border: 0;
  border-radius: 8px;
  font-size: 12px;
  padding: 4px 6px;
  cursor: pointer;

  &:hover { background: rgba(17,24,39,.9); }
`;

/* ===== 하단 버튼 ===== */
export const TraceCreateBottomContent = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 16px 0;
  margin-top: 10px;

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${rise} 420ms cubic-bezier(.2,.65,.2,1) 120ms both; }
`;

export const TraceCreateBtn = styled.button`
  min-width: 110px;
  height: 44px;
  padding: 0 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  background: linear-gradient(180deg, #5a67ff, #3f51ff);
  color: #fff;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: .02em;

  box-shadow: 0 10px 22px rgba(63,81,255,.22), 0 1px 0 rgba(0,0,0,.06);
  transition: transform .02s ease, filter .15s ease, box-shadow .15s ease;

  &:hover  { filter: brightness(1.03); box-shadow: 0 14px 26px rgba(63,81,255,.28); }
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .55; cursor: not-allowed; box-shadow: none; }
`;

export const TraceCreateCancleBtn = styled.button`
  min-width: 110px;
  height: 44px;
  padding: 0 16px;

  border-radius: 12px;
  border: 1px solid #cdd8e3;
  background: #fff;
  color: #111827;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;

  transition: background .15s ease, border-color .15s ease, transform .02s ease;

  &:hover  { background: #f6f7f9; border-color: #bfc9d4; }
  &:active { transform: translateY(1px); }
`;

/* ===== (호환용) 기존에 쓰던 것들 ===== */
export const TraceDiv = styled.div`
  font-size: 14px;
  color: var(--muted);
`;

export const TraceContentDiv = styled.div`
  font-size: 16px;
  color: var(--ink);
`;
