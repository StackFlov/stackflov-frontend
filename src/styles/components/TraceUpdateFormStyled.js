// src/styles/components/TraceUpdateFormStyled.js
import styled, { keyframes } from "styled-components";
import "../../Fonts/fonts.css";

/* ======= Animations ======= */
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
  60%  { opacity: 1; transform: translateY(0)    scale(1.000); }
  100% { opacity: 1; transform: translateY(0)    scale(1.000); }
`;

/* ======= Wrapper ======= */
export const TraceUpdateWrapper = styled.div`
  --ink: #0f172a;
  --muted: #6b7280;
  --line: #e9e9ec;
  --brand: #6366f1;
  --accent: #8b5cf6;

  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 16px 16px 40px;
  color: var(--ink);

  opacity: 0; transform: translateY(8px);
  &[data-show="true"] { animation: ${rise} 420ms cubic-bezier(.2,.65,.2,1) both; }

  @media (max-width: 768px) {
    padding: 12px 12px 28px;
  }
`;

/* ======= Top ======= */
export const TraceUpdateTopContent = styled.div`
  display: grid;
  grid-template-columns: 84px 1fr;
  gap: 12px;
  align-items: center;
  padding: 10px 0 14px;
  border-bottom: 1px solid var(--line);
`;

export const TraceTitleDiv = styled.div`
  font-size: 18px;
  font-weight: 800;
  letter-spacing: .01em;
  color: var(--ink);
`;

export const TraceTitleInputDiv = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 14px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  outline: none;
  transition: box-shadow .15s ease, border-color .15s ease;

  &:focus {
    border-color: rgba(99,102,241,.45);
    box-shadow: 0 10px 24px rgba(99,102,241,.12);
    animation: ${pulse} 900ms ease 1;
  }
`;

/* ======= Category ======= */
export const TraceCategoryDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px 0 12px;
`;

export const TraceCategoryTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: var(--muted);
  margin-right: 6px;
`;

export const TraceCategorySelectorItem = styled.li`
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 92px;
  height: 36px;
  padding: 0 12px;
  border-radius: 999px;

  cursor: pointer;
  user-select: none;

  border: 1px solid
    ${(p) => (p.selectCategory ? "rgba(99,102,241,.45)" : "#e5e7eb")};
  color: ${(p) => (p.selectCategory ? "#1e1b4b" : "#374151")};
  background: ${(p) =>
    p.selectCategory
      ? "linear-gradient(180deg, #edf2ff, #e9ecff)"
      : "#ffffff"};

  transition: transform .02s ease, box-shadow .15s ease, border-color .15s ease, background .15s ease;

  &:hover {
    box-shadow: 0 8px 18px rgba(99,102,241,.16);
    border-color: rgba(99,102,241,.35);
  }
  &:active { transform: translateY(1px); }
`;

/* ======= Middle (Editor + Images) ======= */
export const TraceUpdateMiddleContent = styled.div`
  padding: 8px 0 0;
`;

export const TraceUpdateContentInput = styled.textarea`
  width: 100%;
  min-height: 340px;
  resize: vertical;

  margin-top: 12px;
  padding: 16px;
  font-size: 16px;
  line-height: 1.75;

  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  outline: none;

  transition: box-shadow .15s ease, border-color .15s ease;

  &:focus {
    border-color: rgba(99,102,241,.45);
    box-shadow: 0 12px 30px rgba(99,102,241,.12);
    animation: ${pulse} 900ms ease 1;
  }

  @media (max-width: 768px) {
    min-height: 260px;
  }
`;

export const SectionTitle = styled.div`
  margin-top: 18px;
  font-size: 14px;
  font-weight: 800;
  color: #6b7280;
  letter-spacing: .02em;
`;

export const Divider = styled.div`
  margin: 18px 0 6px;
  height: 1px;
  background: #eef2f7;
`;

/* Upload */
export const UploadLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  height: 38px;
  padding: 0 12px;
  border-radius: 999px;

  font-weight: 800;
  font-size: 14px;
  color: #1e1b4b;

  border: 1px solid rgba(99,102,241,.35);
  background: linear-gradient(180deg, #fff, #f6f7ff);

  cursor: pointer;
  transition: transform .02s ease, box-shadow .15s ease, background .15s ease;

  &:hover  { box-shadow: 0 6px 18px rgba(99,102,241,.18); background: #f3f4ff; }
  &:active { transform: translateY(1px); }
`;

export const UploadInput = styled.input`
  display: none;
`;

/* Previews */
export const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  margin-top: 8px;
`;

export const PreviewItem = styled.div`
  position: relative;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 8px 18px rgba(0,0,0,.06);
  animation: ${popIn} 360ms cubic-bezier(.2,.65,.2,1) both;

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    display: block;
    filter: ${(p) => (p.$removed ? "grayscale(1) opacity(.6)" : "none")};
    transition: filter .15s ease;
  }

  .badge {
    position: absolute;
    left: 8px;
    top: 8px;
    font-size: 12px;
    font-weight: 800;
    padding: 4px 8px;
    border-radius: 999px;
    color: #fff;
    background: #ef4444;
    box-shadow: 0 6px 16px rgba(239,68,68,.25);
  }
`;

export const RemoveThumbBtn = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;

  height: 28px;
  padding: 0 8px;
  border: none;
  border-radius: 8px;

  font-size: 12px;
  font-weight: 800;
  color: #fff;

  background: rgba(17,24,39,.78);
  cursor: pointer;
  transition: opacity .15s ease, transform .02s ease;

  &:hover { opacity: .92; }
  &:active { transform: translateY(1px); }
`;

/* ======= Bottom ======= */
export const TraceUpdateBottomContent = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 14px;
`;

const baseBtn = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-width: 120px;
  height: 44px;
  padding: 0 16px;

  font-size: 15px;
  font-weight: 800;
  letter-spacing: .01em;

  border-radius: 12px;
  cursor: pointer;
  transition: transform .02s ease, filter .15s ease, box-shadow .15s ease;
  border: 1px solid transparent;

  &:active { transform: translateY(1px); }
  &:disabled { opacity: .55; cursor: not-allowed; box-shadow: none; }
`;

export const TraceUpdateCancleBtn = styled.button`
  ${baseBtn}
  color: #fff;
  background: linear-gradient(180deg, #5a67ff, #3f51ff);
  box-shadow: 0 10px 22px rgba(63,81,255,.22), 0 1px 0 rgba(0,0,0,.06);

  &:hover { filter: brightness(1.03); box-shadow: 0 14px 26px rgba(63,81,255,.28); }
`;

export const TraceUpdateBtn = styled.button`
  ${baseBtn}
  background: #ffffff;
  color: #1f2937;
  border-color: #e5e7eb;

  &:hover { filter: brightness(1.02); box-shadow: 0 8px 18px rgba(0,0,0,.10); }
`;
