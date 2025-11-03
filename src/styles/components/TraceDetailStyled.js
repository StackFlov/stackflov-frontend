// src/styles/components/TraceDetailStyled.js
import styled, { keyframes, css } from "styled-components";
import "../../Fonts/fonts.css";

/* =========================
   Theme (detail page)
========================= */
const rise = keyframes`
  0%   { opacity: 0; transform: translateY(10px) scale(.985); }
  60%  { opacity: 1; transform: translateY(0)     scale(1); }
  100% { opacity: 1; transform: translateY(0)     scale(1); }
`;

const pulse = keyframes`
  0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,.0); }
  50%     { box-shadow: 0 0 0 6px rgba(99,102,241,.07); }
`;

/* =========================
   Wrapper
========================= */
export const TraceDetailWrapper = styled.div`
  --bg: #ffffff;
  --ink: #111827;
  --muted: #6b7280;
  --line: #e9e9ec;
  --brand: #6366f1;      /* indigo */
  --accent: #8b5cf6;     /* violet */
  --surface: #f8fafc;

  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 16px 16px 40px;
  box-sizing: border-box;
  color: var(--ink);

  @media (max-width: 768px) {
    padding: 12px 12px 28px;
  }
`;

/* =========================
   Top (breadcrumb, title, chips)
========================= */
export const TraceDetailTopContent = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 14px 0 18px;
  border-bottom: 1px solid var(--line);

  /* gradient underline */
  &::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -2px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, var(--brand), var(--accent));
    opacity: .75;
  }

  /* reveal */
  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${rise} 420ms cubic-bezier(.2,.65,.2,1) both; }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 6px;
    &::after { bottom: -1px; height: 2px; }
  }
`;

export const TraceDiv = styled.div`
  grid-column: 1 / -1;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: .02em;
  color: var(--muted);
  text-transform: uppercase;
`;

export const TraceTitleDiv = styled.h1`
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: -.01em;

  @media (max-width: 768px) { font-size: 22px; }
`;

export const TraceCategoryDiv = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  justify-self: end;

  @media (max-width: 600px) { justify-self: start; }
`;

export const TraceCategorySelectorItem = styled.li`
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 96px;
  height: 36px;
  padding: 0 12px;
  border-radius: 999px;

  background: linear-gradient(180deg, #edf2ff, #e9ecff);
  border: 1px solid rgba(99,102,241,.35);
  color: #1e1b4b;
  font-weight: 800;
  font-size: 13px;

  transition: transform .04s ease, box-shadow .15s ease;
  &:hover { box-shadow: 0 4px 14px rgba(99,102,241,.18); }
  &:active { transform: translateY(1px); }
`;

/* =========================
   Meta + Body
========================= */
export const MetaRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 12px 0 10px;
`;

export const TraceCreatedAtDiv = styled.span`
  font-size: 14px;
  color: var(--muted);
`;

export const TraceDetailMiddleContent = styled.section`
  padding: 14px 0 8px;

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${rise} 420ms cubic-bezier(.2,.65,.2,1) 40ms both; }
`;

export const TraceContentDiv = styled.article`
  font-size: 18px;
  line-height: 1.8;
  color: #1f2937;
  word-break: break-word;
  margin-top: 6px;

  @media (max-width: 768px) { font-size: 16px; }
`;

export const TraceImagesWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid var(--line);

  img {
    width: 100%;
    max-width: 760px;
    height: 420px;
    display: block;
    margin: 14px auto 0;
    object-fit: contain;
    background: var(--surface);
    border: 1px solid #eef2f7;
    border-radius: 14px;
    transition: transform .2s ease, box-shadow .2s ease;
  }

  img:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 28px rgba(0,0,0,.08);
  }

  @media (max-width: 1200px) { img { height: 320px; max-width: 620px; } }
  @media (max-width:  600px) { img { height: 200px; max-width: 100%; } }
`;

/* =========================
   Author section
========================= */
export const TraceDetailBottomContent = styled.section`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px 0;
  border-top: 1px solid var(--line);

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${rise} 420ms cubic-bezier(.2,.65,.2,1) 80ms both; }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const UserImageDiv = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 999px;
  overflow: hidden;
  background: #e6e6e6;
  display: grid;
  place-items: center;
  outline: 3px solid #eef2ff;

  @media (max-width: 768px) { width: 72px; height: 72px; }
  @media (max-width: 600px)  { width: 56px; height: 56px; }
`;

export const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UserNickName = styled.div`
  font-size: 18px;
  font-weight: 800;

  @media (max-width: 768px) { font-size: 16px; }
`;

export const UserFollowBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  min-width: 104px;
  height: 38px;
  padding: 0 14px;

  border: 1px solid rgba(99,102,241,.35);
  border-radius: 999px;
  background: linear-gradient(180deg, #fff, #f6f7ff);
  color: #1e1b4b;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  transition: transform .02s ease, box-shadow .15s ease, background .15s ease;
  &:hover  { box-shadow: 0 6px 18px rgba(99,102,241,.18); background: #f3f4ff; }
  &:active { transform: translateY(1px); }
`;

/* =========================
   Reply: editor + card
========================= */

export const ReplyContentWrapper = styled.div`
  display: flex; flex-direction: column;
`;

export const ReplyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ReplyUserUserNameDiv = styled.span`
  font-size: 16px;
  font-weight: 800;
  color: #1f2937;
  margin-right: 12px;
`;

export const ReplyCreateAtDiv = styled.span`
  font-size: 13px;
  color: var(--muted);
`;

export const ReplyContentDiv = styled.div`
  margin-top: 8px;
  font-size: 15px;
  color: #222;
  word-break: break-word;
`;

/* =========================
   Legacy / compatibility
========================= */
export const TraceUpdateDiv = styled.div``;

/* (옵션) 리스트에서 쓰던 이미지 그리드/유저 이미지가 필요하면 유지 */
export const ReplyUserImageDiv = styled.div`
  width: 60px; height: 60px; border-radius: 50%;
  overflow: hidden; background: #e6e6e6;
  display: grid; place-items: center;
`;

export const ImagesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px; margin-top: 16px;
`;

const popIn = keyframes`
  0%   { opacity: 0; transform: translateY(8px) scale(.985); }
  60%  { opacity: 1; transform: translateY(0)    scale(1.00); }
  100% { opacity: 1; transform: translateY(0)    scale(1.00); }
`;

export const ReplyCreateDiv = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;

  margin-top: 22px;
  padding: 18px;
  border-radius: 16px;

  /* 은은한 유리카드 느낌 */
  background: rgba(248, 250, 252, .85);
  border: 1px solid #e5e7eb;
  backdrop-filter: blur(6px);

  /* 그RADIENT 외곽선 */
  &::before {
    content: "";
    position: absolute; inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    -webkit-mask:
      linear-gradient(#000 0 0) content-box, 
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    opacity: .15;
    pointer-events: none;
  }

  /* 등장 애니메이션 */
  opacity: 0; transform: translateY(6px);
  animation: ${popIn} 420ms cubic-bezier(.2,.65,.2,1) forwards;

  /* 포커스 들어오면 반짝 + 그림자 */
  &:focus-within {
    border-color: rgba(99,102,241,.45);
    box-shadow: 0 12px 30px rgba(99,102,241,.12);
    animation: ${popIn} 420ms cubic-bezier(.2,.65,.2,1) forwards, ${pulse} 900ms ease 1;
    &::before { opacity: .28; }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    padding: 12px;
  }
`;

export const ReplyInput = styled.textarea`
  flex: 1;
  min-height: 70px;
  max-height: 240px;
  resize: vertical;

  border: none;
  border-radius: 12px;
  background: #fff;
  padding: 14px 14px;
  font-size: 15px;
  line-height: 1.6;
  color: #111827;

  box-shadow: inset 0 0 0 1px #eef2f7;
  outline: none;
  transition: box-shadow .15s ease, background .15s ease;

  &::placeholder { color: #9aa3af; }

  &:focus {
    box-shadow: inset 0 0 0 1.6px rgba(99,102,241,.45);
    background: #ffffff;
  }

  @media (max-width: 600px) { font-size: 14px; min-height: 56px; }
`;

/* 제출 버튼 */
export const ReplyCreateBtn = styled.button`
  align-self: stretch;         /* 세로로 꽉 차서 시각적 균형 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-width: 118px;
  height: 46px;
  padding: 0 16px;

  border: none;
  border-radius: 12px;
  cursor: pointer;

  /* 인디고→블루 그라디언트 */
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

/* 댓글 카드 애니메이션 */
const replyEnter = keyframes`
  0%   { opacity: 0; transform: translateY(8px) scale(.985); }
  100% { opacity: 1; transform: translateY(0)    scale(1.00); }
`;
const replyExit = keyframes`
  0%   { opacity: 1; transform: scaleY(1); }
  100% { opacity: 0; transform: scaleY(.9); }
`;
const replyHighlight = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(99,102,241,.18); }
  100% { box-shadow: 0 0 0 0 rgba(99,102,241,0);  }
`;

export const ReplyDiv = styled.div`
  margin-top: 14px;
  padding: 18px 18px 16px;
  background: #ffffff;
  border: 1px solid #e9e9ec;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,.04);
  position: relative;
  overflow: hidden;
  transform-origin: top left;
  transition: box-shadow .2s ease, transform .06s ease, border-color .2s ease;

  /* 좌측 컬러 레일 */
  &::before {
    content: "";
    position: absolute;
    left: -1px; top: 0; bottom: 0;
    width: 4px;
    border-radius: 16px 0 0 16px;
    background: linear-gradient(180deg, var(--brand), var(--accent));
    opacity: .75;
  }

  &:hover  { box-shadow: 0 8px 26px rgba(0,0,0,.08); border-color: rgba(99,102,241,.25); }
  &:active { transform: translateY(1px); }

  /* ✅ 상태별 애니메이션 */
  ${({ $anim }) => $anim === "enter" && css`
    animation: ${replyEnter} .28s ease-out both;
  `}
  ${({ $anim }) => $anim === "new" && css`
    animation: ${replyEnter} .28s ease-out both, ${replyHighlight} 900ms ease .28s 1;
    box-shadow: 0 10px 24px rgba(99,102,241,.18);
    border-color: rgba(99,102,241,.35);
  `}
  ${({ $anim }) => $anim === "exit" && css`
    animation: ${replyExit} .26s ease-in forwards;
    pointer-events: none;
  `}
`;
