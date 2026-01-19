import styled, { keyframes } from "styled-components";
import "../../Fonts/fonts.css";

const reveal = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const ListOuter = styled.div`
  margin: 20px auto 0;
  width: 100%;
  max-width: 1200px;
  padding: 0 16px;
`;

/* ✅ 리스트에서 격자(Grid) 구조로 변경 */
export const ListUL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

export const CardLI = styled.li`
  width: 100%;
`;

/* ✅ 카드 전체 스타일: 그림자 및 애니메이션 */
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  /* ✅ 박스 그림자 추가 */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  animation: ${reveal} 0.5s ease-out forwards;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
  }
`;

/* ✅ 상단 이미지 영역 */
export const CardImage = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
  /* ✅ 이미지가 없을 때 그라데이션 */
  background: ${props => props.$hasImage ? "#f1f5f9" : "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img { transform: scale(1.1); }

  .placeholder {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    gap: 8px;

    .cate-icon { font-size: 40px !important; opacity: 0.9; }
    .cate-text { font-size: 10px; font-weight: 800; letter-spacing: 1px; opacity: 0.7; }
  }
`;

/* ✅ 하단 회색 정보 박스 */
export const CardInfoBox = styled.div`
  padding: 16px;
  background: #eeeeee; /* 요청하신 회색 */
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
`;

export const CreatedAt = styled.div`
  font-size: 12px;
  color: #94a3b8;
`;

export const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: 800;
  color: #111827;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  min-height: 2.8em;
`;

export const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid #d1d5db;
`;

export const Author = styled.div`
  font-size: 13px;
  color: #64748b;
  font-weight: 600;
`;

export const LikeBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${props => props.$active ? "#ef4444" : "#64748b"};
  font-size: 13px;
  font-weight: 600;
  padding: 0;

  svg { font-size: 20px; }
  &:active { transform: scale(1.2); }
`;