// src/styles/components/NiBangNeBangListStyled.js
import styled from "styled-components";
import "../../Fonts/fonts.css";

/* 공통 너비: 지도와 동일 */
export const ListOuter = styled.div`
  margin: 16px auto 0;
  width: 100%;
  max-width: 1200px;  /* 지도와 동일 */
`;

export const ListUL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CardLI = styled.li`
  width: 100%;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;

  width: 97%;
  padding: 16px 18px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #eef2f7;
  box-shadow: 0 8px 18px rgba(0,0,0,.06);
  margin: 10px 0;
`;

export const CreatedAt = styled.div`
  grid-column: 1 / -1;
  font-size: 13px;
  color: #6b7280;
`;

export const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  color: #111827;
  &:hover { text-decoration: underline; }
`;

export const Author = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

export const LikeBtn = styled.button`
  justify-self: end;
  width: 44px; height: 44px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: #fff;
  display: grid; place-items: center;
  cursor: pointer;
  transition: box-shadow .15s ease, transform .02s ease;
  &:hover  { box-shadow: 0 6px 18px rgba(0,0,0,.08); }
  &:active { transform: translateY(1px); }
`;
