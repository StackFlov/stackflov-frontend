import styled, { keyframes } from "styled-components";
import "../../Fonts/fonts.css";

/* Tokens */
const light = {
  panel: "#fff",
  border: "#e5e7eb",
  softBorder: "#eef2f7",
  text: "#0f172a",
  sub: "#6b7280",
  accent: "#FFC341",
  shadow: "0 10px 26px rgba(0,0,0,.06)",
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* Wrapper (카드) */
export const UserReplysWrapper = styled.div`
  width: 100%;
  min-width: 0;
  background: ${light.panel};
  border: 1px solid ${light.border};
  border-radius: 14px;
  box-shadow: ${light.shadow};
  padding: 18px 18px 8px;
  animation: ${fadeIn} .28s ease both;
  box-sizing: border-box;
`;

/* 상단 타이틀 + 툴바 */
export const UserReplysTopDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
`;

export const UserReplyTitleDiv = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: ${light.text};
  flex: 0 0 auto;
`;

export const UserReplysToolbar = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`;

/* 짧은 셀렉트 */
export const UserReplysFilterSelector = styled.select`
  height: 34px;
  padding: 0 28px 0 10px;
  font-size: 14px;
  border: 1px solid ${light.border};
  border-radius: 999px;
  background: #fff;
  width: 98px;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #111 50%),
                    linear-gradient(135deg, #111 50%, transparent 50%);
  background-position: calc(100% - 16px) 50%, calc(100% - 11px) 50%;
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
`;

/* 정렬 아이콘 버튼 */
export const UserReplysFilterIcon = styled.button`
  width: 34px; height: 34px;
  display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid ${light.border};
  border-radius: 999px;
  background: #fff;
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease, background .12s ease;
  &:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,.08); }
`;

/* 리스트 감싸는 래퍼 */
export const UserReplysListWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

/* 리스트 행: 날짜 | 내용 | 삭제 */
export const UserReplysListDiv = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 60px;
  align-items: center;
  gap: 8px 12px;

  padding: 12px 8px;
  border-bottom: 1px solid ${light.border};
  cursor: pointer;
  transition: background .14s ease, transform .12s ease;
  min-width: 0;

  &:hover { background: #fafafa; }
  &:active { transform: translateY(1px); }

  @media (max-width: 680px) {
    grid-template-columns: 90px 1fr 56px;
  }
`;

export const UserReplysCreateAtDiv = styled.div`
  font-size: 13px;
  color: ${light.sub};
`;

export const UserReplyContentDiv = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${light.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
`;

/* 삭제 버튼 (텍스트) */
export const UserReplysDelBtn = styled.button`
  height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid #fecaca;
  background: #fff;
  color: #ef4444;
  font-weight: 700;
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease, background .12s ease;
  justify-self: end;

  &:hover { background: rgba(239,68,68,.06); transform: translateY(-1px); }
`;

/* ───── 사용 안 하는 예전 스타일(호환 위해 유지, 원하면 삭제해도 됨) ───── */
export const UserReplysTitleIcon = styled.div``;
export const UserReplysPostTitleDiv = styled.div``;
export const UserPostTitleDiv = styled.div``;
export const UserPostViewsDiv = styled.div``;
export const UserPostGoodsDiv = styled.div``;
export const UserPostBookMarksDiv = styled.div``;
