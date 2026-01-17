import styled, { keyframes } from "styled-components";
import "../../Fonts/fonts.css";

const reveal = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const TraceListWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 20px 16px;
`;

export const TraceListItemWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`;

export const TraceListItem = styled.li`
  list-style: none;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  /* ✅ 더 깊고 선명한 그림자 추가 */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;

  &[data-show="true"] {
    animation: ${reveal} 600ms ease forwards;
    animation-delay: var(--reveal-delay, 0ms);
  }

  &:hover {
    /* ✅ 호버 시 그림자가 더 커지고 카드가 떠오름 */
    transform: translateY(-12px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background: #f3f4f6;
  img {
    width: 100%;
    height: 100%;
    /* ✅ 핵심: 이미지가 찌그러지지 않고 비율에 맞춰 꽉 차게 함 */
    object-fit: cover; 
    display: block;
  }
  .no-img-placeholder {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #94a3b8;
  }
`;

export const CardInfoBox = styled.div`
  padding: 16px;
  background: #eeeeee; 
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
`;

export const TraceListTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  color: #111827;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.4;
`;

export const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #64748b;
  .author { display: flex; align-items: center; gap: 4px; }
`;

export const StatsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid #d1d5db;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: ${props => props.$active ? (props.$isBookmark ? "#0ea5e9" : "#ef4444") : "#64748b"};
  svg { font-size: 16px !important; }
`;

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 20px;
  color: #64748b;
  border: 1px dashed #cbd5e1;
  border-radius: 16px;
  span { display: block; margin-top: 8px; font-size: 14px; }
`;

export const LoadingSkeleton = styled.div`
  height: 320px;
  border-radius: 16px;
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 37%, #f1f5f9 63%);
  background-size: 400% 100%;
  animation: shine 1.2s infinite;
  @keyframes shine {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;