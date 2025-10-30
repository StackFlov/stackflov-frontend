// src/styles/components/TraceListStyled.js
import styled, { keyframes } from "styled-components";
import "../../Fonts/fonts.css";

/* ---------- Theme & Container ---------- */
export const TraceListWrapper = styled.div`
  --card-radius: 16px;
  --card-border: 1px solid #e9e9ec;
  --card-hover: 0 6px 20px rgba(0, 0, 0, 0.06);
  --text-strong: #111827;
  --text-sub: #6b7280;
  --brand: #6366f1;
  --like: #ef4444;
  --bookmark: #0ea5e9;

  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 8px 16px 24px;

  @media (max-width: 768px) {
    padding: 8px 12px 20px;
  }
`;

/* ---------- List ---------- */
export const TraceListItemWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
`;

export const TraceListItem = styled.li`
  list-style: none;
`;

/* ---------- Reveal Animation ---------- */
const reveal = keyframes`
  0%   { opacity: 0; transform: translateY(8px) scale(0.99); }
  60%  { opacity: 1; transform: translateY(0)    scale(1.000); }
  100% { opacity: 1; transform: translateY(0)    scale(1.000); }
`;

/* ---------- Card ---------- */
export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 12px;

  background: #fff;
  border: var(--card-border);
  border-radius: var(--card-radius);
  padding: 16px 16px 14px;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;

  /* reveal 초기 상태 */
  opacity: 0;
  transform: translateY(4px) scale(0.995);

  /* 화면 진입 후 1회 재생 */
  &[data-show="true"] {
    animation: ${reveal} 420ms cubic-bezier(.2,.65,.2,1) both;
    animation-delay: var(--reveal-delay, 0ms);
  }

  &:hover {
    box-shadow: var(--card-hover);
    transform: translateY(-1px);
    border-color: rgba(99, 102, 241, 0.25);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    align-items: flex-start;
  }
`;

/* ---------- Left (title + meta) ---------- */
export const TraceListContent = styled.div`
  min-width: 0; /* ellipsis */
`;

export const TraceListTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 20px;
  font-weight: 800;
  line-height: 1.35;
  color: var(--text-strong);
  cursor: pointer;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* 2줄 말줄임 */
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
    color: var(--brand);
  }
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
  align-items: center;
`;

export const TraceListCreatedAt = styled.span`
  font-size: 14px;
  color: var(--text-sub);
`;

const metaBase = `
  display: inline-flex;
  gap: 6px;
  align-items: center;
  color: var(--text-sub);
  font-size: 14px;

  .meta-icon {
    font-size: 20px !important;
  }
  .meta-text {
    line-height: 1;
  }
`;

export const TraceListUser = styled.span`
  ${metaBase}
`;

export const TraceListViews = styled.span`
  ${metaBase}
`;

/* ---------- Right (actions) ---------- */
export const RightActions = styled.div`
  display: inline-flex;
  gap: 6px;
  align-items: center;
`;

export const IconButton = styled.button`
  display: inline-flex;
  gap: 6px;
  align-items: center;
  justify-content: center;

  border: 1px solid
    ${({ $active, $bookmark }) =>
      $active
        ? $bookmark
          ? "rgba(14, 165, 233, 0.35)"
          : "rgba(239, 68, 68, 0.35)"
        : "#e5e7eb"};
  background: ${({ $active, $bookmark }) =>
    $active
      ? $bookmark
        ? "rgba(14, 165, 233, 0.08)"
        : "rgba(239, 68, 68, 0.08)"
      : "#fff"};
  color: ${({ $active, $bookmark }) =>
    $active ? ($bookmark ? "#0ea5e9" : "#ef4444") : "#374151"};

  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.05s ease;

  svg {
    font-size: 22px;
  }

  .count {
    font-size: 14px;
    min-width: 10px;
  }

  &:hover {
    background: ${({ $bookmark }) =>
      $bookmark ? "rgba(14, 165, 233, 0.12)" : "rgba(239, 68, 68, 0.12)"};
    border-color: ${({ $bookmark }) =>
      $bookmark ? "rgba(14, 165, 233, 0.45)" : "rgba(239, 68, 68, 0.45)"};
  }

  &:active {
    transform: translateY(1px) scale(0.98);
  }
`;

/* ---------- States ---------- */
export const EmptyState = styled.div`
  border: 1px dashed #d1d5db;
  border-radius: 16px;
  padding: 32px 20px;
  text-align: center;
  color: #6b7280;
  background: linear-gradient(0deg, rgba(249, 250, 251, 0.6), rgba(249, 250, 251, 0.6)),
    repeating-linear-gradient(
      -45deg,
      rgba(99, 102, 241, 0.06) 0px,
      rgba(99, 102, 241, 0.06) 6px,
      transparent 6px,
      transparent 12px
    );
  span {
    display: block;
    margin-top: 6px;
    font-size: 14px;
  }
`;

/* ---------- Skeleton ---------- */
const shine = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const LoadingSkeleton = styled.div`
  height: 96px;
  border-radius: var(--card-radius);
  border: var(--card-border);
  background: linear-gradient(
    90deg,
    #f6f7f9 25%,
    #eceff3 37%,
    #f6f7f9 63%
  );
  background-size: 400% 100%;
  animation: ${shine} 1.1s ease-in-out infinite;
`;

/* (이 컴포넌트에서 직접 쓰지 않지만, 기존 인터페이스 유지용) */
export const TraceListGood = styled.span``;
export const TraceListBookMark = styled.span``;
