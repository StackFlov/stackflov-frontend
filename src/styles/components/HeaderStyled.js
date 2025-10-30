// src/styles/components/HeaderStyled.js
import styled from "styled-components";
import "../../Fonts/fonts.css";

/* 바깥 헤더 바(blur + sticky) */
export const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: saturate(140%) blur(6px);
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid #eef0f3;
`;

/* 내부 컨테이너 */
export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 60px;
  margin: 0 auto;
  padding: 0 16px;

  font-size: 16px;
  font-family: "INTERVARIABLE", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  color: #111827;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-sizing: border-box;
`;

/* 좌측 로고 */
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 120px;
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

/* 중앙 네비 */
export const LinkWrapper = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  gap: 10px;
  min-width: 280px;
`;

/* 우측 영역 */
export const LoginWrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex: 0 0 auto;
  white-space: nowrap;
`;

/* 공통 pill 버튼 */
export const HeaderItem = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 14px;
  border-radius: 999px;

  border: 1px solid ${({ $active }) => ($active ? "rgba(99,102,241,.45)" : "#d7dee6")};
  background: ${({ $active }) => ($active ? "rgba(99,102,241,.08)" : "#fff")};
  color: #111827;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  font-size: 14px;

  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.05s ease, box-shadow 0.15s ease;

  &:hover {
    background: ${({ $active }) => ($active ? "rgba(99,102,241,.12)" : "#f8fafc")};
    border-color: ${({ $active }) => ($active ? "rgba(99,102,241,.55)" : "#c7d2de")};
  }
  &:active {
    transform: translateY(1px);
  }
  &:focus-visible {
    outline: 2px solid rgba(99, 102, 241, 0.35);
    outline-offset: 2px;
  }
`;

/* 그룹 래퍼 (옵션) */
export const HeaderItemWrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LoginButton = styled.div``;
export const RegisterButton = styled.div``;
