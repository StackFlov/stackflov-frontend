// src/styles/components/NiBangNeBangCreateFormStyled.js
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
  100% { opacity: 1; transform: translateY(0)   scale(1); }
`;

export const NiBangNeBangCreateWrapper = styled.div`
  --ink: #111827;
  --muted: #6b7280;

  --brand: #6366f1;
  --accent: #8b5cf6;
  --surface: #f8fafc;

  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 16px 16px 28px;
  color: var(--ink);
`;

export const NiBangNeBangCreateTopContent = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 12px;
  align-items: center;
  padding: 14px 0 18px;
  border-bottom: 1px solid var(--line);

  &::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -2px;
    height: 3px;
    border-radius: 2px;
    border-bottom: 1px solid var(--line);
    opacity: .75;
  }

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${rise} 420ms cubic-bezier(.2,.65,.2,1) both; }

  @media (max-width: 560px) {
    grid-template-columns: 72px 1fr;
    &::after { height: 2px; bottom: -1px; }
  }
`;

export const NiBangNeBangAddress = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 12px;
  align-items: center;
  padding: 14px 0 18px;

  &::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -2px;
    height: 3px;
    border-radius: 2px;
    border-bottom: 1px solid var(--line);
    opacity: .75;
  }

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${rise} 420ms cubic-bezier(.2,.65,.2,1) both; }

  @media (max-width: 560px) {
    grid-template-columns: 72px 1fr;
    &::after { height: 2px; bottom: -1px; }
  }
`;

export const NiBangNeBangTitleDiv = styled.div`
  font-size: 20px;
  font-weight: 900;
  letter-spacing: .01em;
`;

export const NiBangNeBangTitleInputDiv = styled.input`
  height: 48px;
  border-radius: 12px;
  border: 1px solid var(--line);
  padding: 0 14px;
  font-size: 18px;
  outline: none;
  background: #fff;
  transition: box-shadow .15s ease, border-color .15s ease;

  &:focus {
    border-color: rgba(99,102,241,.45);
    box-shadow: 0 8px 24px rgba(99,102,241,.12);
    animation: ${pulse} 900ms ease 1;
  }
`;

export const NiBangNeBangCreateMiddleContent = styled.section`
  padding: 16px 0 10px;

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${rise} 420ms cubic-bezier(.2,.65,.2,1) 40ms both; }
`;

export const NiBangNeBangCreateContentInput = styled.textarea`
  width: 100%;
  min-height: 220px;
  border-radius: 14px;
  border: 1px solid var(--line);
  padding: 14px;
  font-size: 16px;
  line-height: 1.7;
  background: #fff;
  outline: none;
  resize: vertical;
  transition: box-shadow .15s ease, border-color .15s ease, background .15s ease;

  &:focus {
    border-color: rgba(99,102,241,.45);
    box-shadow: 0 10px 28px rgba(99,102,241,.12);
    background: #ffffff;
  }
`;

export const UploadRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;

  .count {
    color: var(--muted);
    font-size: 14px;
  }

  @media (max-width: 560px) {
    flex-wrap: wrap;
  }
`;

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

export const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
  gap: 12px;
  margin-top: 12px;
`;

export const PreviewItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  background: var(--surface);
  border: 1px solid #eef2f7;
  animation: ${popIn} 260ms ease both;

  &:hover img { transform: scale(1.02); }

  img {
    width: 100%;
    height: 108px;
    object-fit: cover;
    display: block;
    transition: transform .2s ease;
  }
`;

export const RemoveThumbBtn = styled.button`
  position: absolute;
  top: 8px; right: 8px;
  height: 28px;
  padding: 0 8px;
  border: none;
  border-radius: 8px;
  background: rgba(17,24,39,.75);
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  transition: opacity .15s ease;
  opacity: .95;
  &:hover { opacity: 1; }
`;

export const NiBangNeBangCreateBottomContent = styled.footer`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding-top: 12px;
  border-top: 1px solid var(--line);

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${rise} 420ms cubic-bezier(.2,.65,.2,1) 80ms both; }
`;

const baseBtn = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 120px;
  height: 44px;
  padding: 0 16px;
  border-radius: 12px;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: .01em;
  cursor: pointer;
  transition: transform .02s ease, filter .15s ease, box-shadow .15s ease;
  border: none;
`;

export const NiBangNeBangCreateBtn = styled.button`
  ${baseBtn}
  background: linear-gradient(180deg, #5a67ff, #3f51ff);
  color: #fff;
  box-shadow: 0 10px 22px rgba(63,81,255,.22), 0 1px 0 rgba(0,0,0,.06);

  &:hover { filter: brightness(1.03); box-shadow: 0 14px 26px rgba(63,81,255,.28); }
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .55; cursor: not-allowed; box-shadow: none; }
`;

export const NiBangNeBangCreateCancleBtn = styled.button`
  ${baseBtn}
  background: #ffffff;
  color: #111827;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 0 rgba(0,0,0,.04);

  &:hover { background: #f8fafc; }
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .55; cursor: not-allowed; box-shadow: none; }
`;

/* ===== Optional legacy exports to avoid breaking other imports ===== */
export const NiBangNeBangDiv = styled.div``;
export const NiBangNeBangCategoryDiv = styled.div``;
export const NiBangNeBangCategoryTitle = styled.div``;
export const NiBangNeBangCategorySelectorItem = styled.li``;
export const NiBangNeBangContentDiv = styled.div``;
