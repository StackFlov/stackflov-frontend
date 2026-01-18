import styled, { keyframes } from "styled-components";

const reveal = keyframes`
  0% { opacity: 0; transform: translateY(15px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const TraceListWrapper = styled.div`
  margin: 0 auto; width: 100%; max-width: 1200px; padding: 20px 16px;
`;

export const TraceListItemWrapper = styled.ul`
  list-style: none; padding: 0; margin: 0;
  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;
`;

export const TraceListItem = styled.li` list-style: none; `;

export const ItemWrapper = styled.div`
  display: flex; flex-direction: column; background: #fff; border-radius: 16px;
  overflow: hidden; cursor: pointer;
  /* ✅ 박스 그림자 강화 */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease; opacity: 0;

  &[data-show="true"] {
    animation: ${reveal} 500ms ease forwards;
    animation-delay: var(--reveal-delay, 0ms);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

export const CardImage = styled.div`
  width: 100%; height: 180px; position: relative; overflow: hidden;
  /* ✅ 이미지가 없으면 그라데이션 적용 */
  background: ${props => props.$hasImage ? "#f1f5f9" : "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"};

  img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
  ${ItemWrapper}:hover img { transform: scale(1.1); }

  .placeholder-content {
    height: 100%; display: flex; flex-direction: column; align-items: center;
    justify-content: center; color: white; gap: 8px;
    .cate-icon { font-size: 40px !important; opacity: 0.9; }
    .logo-text { font-size: 10px; font-weight: 800; letter-spacing: 2px; opacity: 0.6; }
  }
`;

export const CardInfoBox = styled.div`
  padding: 16px; background: #eeeeee; display: flex; flex-direction: column; gap: 10px; flex-grow: 1;
`;

export const TraceListTitle = styled.h3`
  margin: 0; font-size: 17px; font-weight: 800; color: #111827; line-height: 1.4;
  overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
`;

export const MetaRow = styled.div`
  display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #64748b;
  .author { display: flex; align-items: center; gap: 4px; }
`;

export const StatsRow = styled.div`
  display: flex; gap: 12px; margin-top: auto; padding-top: 10px; border-top: 1px solid #d1d5db;
`;

export const StatItem = styled.div`
  display: flex; align-items: center; gap: 4px; font-size: 12px;
  color: ${props => props.$active ? (props.$isBookmark ? "#0ea5e9" : "#ef4444") : "#64748b"};
  svg { font-size: 16px !important; }
`;

export const EmptyState = styled.div`
  grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #94a3b8;
  border: 1px dashed #cbd5e1; border-radius: 16px;
  span { display: block; margin-top: 8px; font-size: 14px; }
`;

export const LoadingSkeleton = styled.div`
  height: 300px; border-radius: 16px; background: #f1f5f9;
`;