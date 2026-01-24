import styled, { keyframes } from "styled-components";
import "../../Fonts/fonts.css";

// --- 등장 애니메이션 ---
const reveal = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const ListOuter = styled.div`
  margin: 40px auto 0;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

export const ListUL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
`;

export const CardLI = styled.li`
  width: 100%;
  list-style: none;
`;

// --- 카드 메인 (호버 지연 버그 수정됨) ---
export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  /* 등장 애니메이션 */
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: var(--reveal-delay, 0ms);

  &[data-show="true"] {
    opacity: 1;
    transform: translateY(0);
  }

  /* ✅ 수정: 호버 시 지연 시간을 강제로 0으로 만들어 즉각 반응하도록 함 */
  &:hover {
    transition-delay: 0ms !important; 
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }

  will-change: opacity, transform;
`;

// --- 이미지 섹션 ---
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
    /* ✅ 이미지 줌인도 지연 없이 즉시 작동 */
    transition-delay: 0ms !important;
    will-change: transform;
  }

  ${Card}:hover & img {
    transform: scale(1.1);
  }

  .placeholder {
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

  ${Card}:hover & .placeholder {
    transform: scale(1.1);
  }
`;

export const CardInfoBox = styled.div`
  padding: 20px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
  border-top: 1px solid #f1f3f5;
`;

export const CreatedAt = styled.div`
  font-size: 13px;
  color: #adb5bd;
  font-weight: 500;
`;

export const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
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

  ${Card}:hover & {
    color: #007bff;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid #f1f3f5;
`;

export const Author = styled.div`
  font-size: 13px;
  color: #495057;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LikeBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-weight: 700;
  color: ${props => props.$active ? "#ff4757" : "#adb5bd"};
  padding: 0;
  
  svg { 
    font-size: 18px !important;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:active svg {
    transform: scale(1.3);
  }
`;