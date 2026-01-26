import styled, { keyframes, css } from "styled-components";
import "../../Fonts/fonts.css";

/* ========= 디자인 토큰 (Tokens) ========= */
const light = {
  panel: "#ffffff",
  border: "#e5e7eb",
  softBorder: "#eef2f7",
  text: "#111827",
  sub: "#6b7280",
  accent: "#FFC341", // 자취 생존 컨셉의 포인트 컬러
  blue: "#77ABE0",
  blueBg: "#E3F0FE",
  danger: "#ef4444",
  shadow: "0 10px 28px rgba(0,0,0,.06)",
};

const focusRing = css`
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 195, 65, 0.25);
  border-color: ${light.accent};
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ========= 레이아웃 (Layout) ========= */
export const UserInfosWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
  grid-template-areas:
    "avatar bio"
    "level level"
    "history history"
    "actions actions";
  gap: 16px 24px;
  width: 100%;
  min-width: 0;
  animation: ${fadeIn} 0.28s ease both;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "avatar"
      "bio"
      "level"
      "history"
      "actions";
  }
`;

/* 프로필 이미지 섹션 */
export const UserImageDiv = styled.div`
  grid-area: avatar;
  background: ${light.panel};
  border: 1px solid ${light.softBorder};
  border-radius: 20px;
  padding: 24px;
  display: grid;
  place-items: center;
  box-shadow: ${light.shadow};

  .avatar {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  .avatar-fallback {
    font-size: 180px;
    color: #f1f3f5;
  }
`;

/* 상단 닉네임 및 활동 요약 섹션 */
export const UserInfosDiv = styled.div`
  grid-area: bio;
  background: ${light.panel};
  border: 1px solid ${light.softBorder};
  border-radius: 20px;
  padding: 24px;
  box-shadow: ${light.shadow};
  color: ${light.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopUserLevel = styled.div`
  font-size: 42px;
  display: inline-block;
  margin-right: 12px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
`;

export const TopUserNameDiv = styled.span`
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -1px;
`;

export const TopUserInfos = styled.div`
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
`;

export const UserInfoItems = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: ${light.text};
`;

export const UserIngoItemIcon = styled.span`
  padding: 6px 12px;
  border-radius: 10px;
  color: ${light.blue};
  background: ${light.blueBg};
  font-size: 13px;
  font-weight: 800;
`;

/* ========= 등급(Level) 섹션 최적화 ========= */
export const UserLevelDiv = styled.div`
  grid-area: level;
  background: ${light.panel};
  border: 1px solid ${light.softBorder};
  border-radius: 20px;
  padding: 24px;
  box-shadow: ${light.shadow};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BottomUserLevel = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: ${light.text};
  display: flex;
  align-items: center;
  gap: 8px;
  &::before {
    content: "";
    width: 4px;
    height: 18px;
    background: ${light.accent};
    border-radius: 2px;
  }
`;

export const BottomUserLevelIconDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  /* 10단계가 자연스럽게 흐르도록 설정 */
  padding: 10px 0;
`;

export const BottomUserLevelIcon = styled.button`
  padding: 8px 16px;
  border: 2px solid ${({ $active }) => ($active ? light.accent : light.softBorder)};
  border-radius: 999px;
  background: ${({ $active }) => ($active ? "#FFF9EB" : "#fff")};
  color: ${({ $active }) => ($active ? light.text : light.sub)};
  font-size: 14px;
  font-weight: 800;
  cursor: default;
  transition: all 0.2s ease;
  box-shadow: ${({ $active }) => ($active ? "0 4px 10px rgba(255, 195, 65, 0.2)" : "none")};

  &:hover {
    ${({ $active }) => !$active && `border-color: #d1d5db; background: #f9fafb;`}
  }
`;

export const UserLevelGuidDiv = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: ${light.sub};
  background: #f8fafc;
  padding: 16px;
  border-radius: 12px;
  strong {
    color: ${light.text};
    font-weight: 800;
  }
`;

/* ========= 사용자 정보(History) 섹션 ========= */
export const UserHIstoryDiv = styled.div`
  grid-area: history;
  background: ${light.panel};
  border: 1px solid ${light.softBorder};
  border-radius: 20px;
  padding: 24px;
  box-shadow: ${light.shadow};
  display: grid;
  gap: 18px;
`;

export const UserHistoryItem = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 12px 24px;

  &.zip-row {
    grid-template-columns: 120px 1fr auto;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    &.zip-row { grid-template-columns: 1fr auto; }
  }
`;

const labelBase = css`
  font-size: 15px;
  font-weight: 800;
  color: ${light.text};
`;

const fieldBase = css`
  width: 100%;
  height: 48px;
  font-size: 16px;
  border: 1px solid ${light.border};
  border-radius: 12px;
  padding: 0 16px;
  background: #fdfdfd;
  box-sizing: border-box;
  transition: all 0.2s ease;
  &:focus { ${focusRing} background: #fff; }
  &::placeholder { color: #cbd5e1; }
`;

export const UserCreatedAtDiv = styled.div`${labelBase}`;
export const UserCreatedAtView = styled.div`
  font-size: 16px; color: ${light.text}; font-weight: 600;
`;

export const UserEmailDiv = styled.div`${labelBase}`;
export const UserEmailView = styled.div`
  font-size: 16px; color: ${light.text}; font-weight: 600; word-break: break-all;
`;

export const UserNickNameDiv = styled.div`${labelBase}`;
export const UserNickNameInput = styled.input`${fieldBase}`;

export const UserPhoneDiv = styled.div`${labelBase}`;
export const UserPhoneInput = styled.input`${fieldBase}`;

export const UserAddrDiv = styled.div`${labelBase}`;
export const UserZipCodeInput = styled.input`${fieldBase}`;

export const UserZipCodeBtn = styled.button`
  height: 48px;
  padding: 0 20px;
  border-radius: 12px;
  border: 1.5px solid ${light.text};
  background: ${light.text};
  color: #fff;
  font-weight: 800;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover { background: #374151; transform: translateY(-1px); }
  &:active { transform: translateY(0); }
`;

export const UserAddrInput = styled.input`
  grid-column: 2 / -1;
  ${fieldBase};
  @media (max-width: 600px) { grid-column: 1 / -1; }
`;

export const UserAddrDetialInput = styled.input`
  grid-column: 1 / -1;
  ${fieldBase};
  margin-top: -8px;
`;

/* ========= 버튼(Actions) 섹션 ========= */
export const UserInfoBtnDiv = styled.div`
  grid-area: actions;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 10px 0 40px;
`;

const actionBtn = css`
  height: 52px;
  padding: 0 28px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
  &:active { transform: translateY(0); }
`;

export const UserInfoUpdateCancleBtn = styled.button`
  ${actionBtn};
  background: #f1f5f9;
  border: none;
  color: ${light.sub};
  &:hover { background: #e2e8f0; color: ${light.text}; }
`;

export const UserInfoUpdateBtn = styled.button`
  ${actionBtn};
  background: ${light.accent};
  border: none;
  color: ${light.text};
  &:hover { background: #ffb300; }
`;

export const UserNameDiv = styled.div`display: none;`;

/* ========= 경험치 게이지 스타일 ========= */
export const ExpGaugeWrapper = styled.div`
  width: 100%;
  margin-top: 8px;
`;

export const ExpHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;
`;

export const ExpBarContainer = styled.div`
  width: 100%;
  height: 12px;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
`;

export const ExpBarFill = styled.div`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background: linear-gradient(90deg, #FFC341, #FF9F00); /* 황금빛 참치 기름 테마 */
  border-radius: 999px;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 10px rgba(255, 195, 65, 0.4);
`;

export const ExpValue = styled.span`
  font-size: 14px;
  font-weight: 800;
  color: #FF9F00;
`;