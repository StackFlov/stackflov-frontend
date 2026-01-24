import styled, { keyframes } from "styled-components";
import "../../Fonts/fonts.css";

// --- 애니메이션: 카드 등장 효과 ---
const reveal = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const TraceListWrapper = styled.div`
  margin: 40px auto 0;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

export const TraceListItemWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
`;

export const TraceListItem = styled.li`
  list-style: none;
`;

// --- 자취로그 카드 메인 컨테이너 ---
export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  /* 초기 등장 애니메이션 로직 */
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: var(--reveal-delay, 0ms);

  &[data-show="true"] {
    opacity: 1;
    transform: translateY(0);
  }

  /* ✅ 수정: 호버 시 지연 시간을 즉시 0으로 만들어 반응 속도 개선 */
  &:hover {
    transition-delay: 0ms !important; 
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }

  will-change: opacity, transform;
`;

// --- 자취로그 이미지 섹션 ---
export const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  position: relative;
  background: ${props => props.$hasImage ? "#f8f9fa" : "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.2, 0, 0.2, 1);
    /* ✅ 호버 반응 속도를 위해 지연 시간 제거 */
    transition-delay: 0ms !important;
    will-change: transform;
  }

  /* 카드 호버 시 이미지 줌인 */
  ${ItemWrapper}:hover & img {
    transform: scale(1.1);
  }

  .placeholder-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    gap: 10px;
    transition: transform 0.6s cubic-bezier(0.2, 0, 0.2, 1);
    transition-delay: 0ms !important;

    .cate-icon { font-size: 3rem !important; }
    .logo-text { font-size: 1.1rem; font-weight: 800; opacity: 0.8; letter-spacing: 1px; }
  }

  ${ItemWrapper}:hover & .placeholder-content {
    transform: scale(1.1);
  }
`;

// --- 자취로그 정보 영역 ---
export const CardInfoBox = styled.div`
  padding: 20px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
  border-top: 1px solid #f1f3f5;
`;

export const TraceListTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #212529;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 2.8em;
  transition: color 0.2s;

  ${ItemWrapper}:hover & {
    color: #007bff;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #adb5bd;
  .author { 
    display: flex; 
    align-items: center; 
    gap: 4px; 
    font-weight: 600;
    color: #495057;
  }
`;

export const StatsRow = styled.div`
  display: flex;
  gap: 15px;
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid #f1f3f5;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-weight: 700;
  color: ${props => props.$active ? (props.$isBookmark ? "#0ea5e9" : "#ff4757") : "#adb5bd"};
  svg { font-size: 18px !important; }
`;

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 80px 20px;
  color: #adb5bd;
  background: #f8f9fa;
  border: 2px dashed #e9ecef;
  border-radius: 20px;
  span { display: block; margin-top: 10px; font-size: 15px; font-weight: 600; }
`;

export const LoadingSkeleton = styled.div`
  height: 320px;
  border-radius: 20px;
  background: linear-gradient(90deg, #f1f3f5 25%, #f8f9fa 50%, #f1f3f5 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite linear;

  @keyframes skeleton-loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;