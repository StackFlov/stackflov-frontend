import styled, { keyframes } from "styled-components";
import "../../Fonts/fonts.css";

// --- 자취로그와 동일한 애니메이션 스펙 ---
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
  gap: 32px; /* 자취로그 일치 */
`;

export const CardLI = styled.li`
  width: 100%;
  list-style: none;
`;

// --- 카드 메인 (자취로그의 ItemWrapper 스펙과 100% 일치) ---
export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px; /* 자취로그의 세련된 곡률 */
  overflow: hidden;
  cursor: pointer;
  position: relative;
  
  /* 자취로그와 동일한 그림자 */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  /* 등장 애니메이션 초기 상태 */
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: var(--reveal-delay, 0ms);

  /* JS Intersection Observer 대응 */
  &[data-show="true"] {
    opacity: 1;
    transform: translateY(0);
  }

  /* 호버 시 자취로그 특유의 리프팅 효과 */
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }

  will-change: opacity, transform;
`;

// --- 이미지 섹션 (자취로그의 CardImage 줌인 스펙 일치) ---
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
    will-change: transform;
  }

  /* 카드 호버 시 이미지 줌인 */
  ${Card}:hover & img {
    transform: scale(1.1);
  }

  /* 플레이스홀더 (STAY LOG) 스타일 */
  .placeholder {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    gap: 10px;
    transition: transform 0.6s cubic-bezier(0.2, 0, 0.2, 1);

    .cate-icon { font-size: 3rem !important; }
    .logo-text { font-size: 1.1rem; font-weight: 800; opacity: 0.8; letter-spacing: 1px; }
  }

  ${Card}:hover & .placeholder {
    transform: scale(1.1);
  }
`;

// --- 정보 영역 (자취로그의 CardInfoBox 화이트 테마 적용) ---
export const CardInfoBox = styled.div`
  padding: 20px;
  background: #ffffff; /* 화이트로 통일 */
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

// 타이틀 폰트 및 호버 색상 일치
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

// 좋아요 버튼 애니메이션 및 색상 일치
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