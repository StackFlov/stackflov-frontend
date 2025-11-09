import styled, { keyframes, css } from "styled-components";

/* ========= Tokens ========= */
const light = {
  panel: "#ffffff",
  border: "#e5e7eb",
  softBorder: "#eef2f7",
  text: "#111827",
  sub: "#6b7280",
  accent: "#FFC341",
  blue: "#77ABE0",
  blueBg: "#E3F0FE",
  danger: "#ef4444",
  shadow: "0 10px 28px rgba(0,0,0,.06)",
};
const focusRing = css`
  outline: none;
  box-shadow: 0 0 0 3px rgba(255,195,65,.25);
  border-color: ${light.accent};
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ========= Layout ========= */
export const UserInfosWrapper = styled.div`
  /* 2열 그리드: 아바타/요약 → 등급 → 정보 → 버튼 */
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
  animation: ${fadeIn} .28s ease both;

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

export const UserImageDiv = styled.div`
  grid-area: avatar;
  background: ${light.panel};
  border: 1px solid ${light.softBorder};
  border-radius: 16px;
  padding: 20px;
  display: grid;
  place-items: center;
  box-shadow: ${light.shadow};

  .avatar {
    width: 180px; height: 180px; border-radius: 50%; object-fit: cover;
  }
  .avatar-fallback {
    font-size: 180px; color: ${light.sub};
  }
`;

export const UserInfosDiv = styled.div`
  grid-area: bio;
  background: ${light.panel};
  border: 1px solid ${light.softBorder};
  border-radius: 16px;
  padding: 20px;
  box-shadow: ${light.shadow};
  color: ${light.text};
`;

export const TopUserLevel = styled.div`
  font-size: 36px;
  display: inline-block;
  margin-right: 10px;
`;

export const TopUserNameDiv = styled.span`
  font-size: 32px;
  font-weight: 800;
  margin-right: 4px;
`;

export const TopUserInfos = styled.div`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
`;

export const UserInfoItems = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
  color: ${light.text};
`;

export const UserIngoItemIcon = styled.span`
  padding: 6px 10px;
  border-radius: 12px;
  color: ${light.blue};
  background: ${light.blueBg};
  font-weight: 600;
`;

export const UserLevelDiv = styled.div`
  grid-area: level;
  background: ${light.panel};
  border: 1px solid ${light.softBorder};
  border-radius: 16px;
  padding: 18px;
  box-shadow: ${light.shadow};
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const BottomUserLevel = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: ${light.text};
`;

export const BottomUserLevelIconDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const BottomUserLevelIcon = styled.button`
  padding: 6px 14px;
  border: 2px solid ${light.softBorder};
  border-radius: 999px;
  background: ${({ $active }) => ($active ? "#F3F6FA" : "#fff")};
  color: ${light.text};
  cursor: default;
  font-weight: 700;
  transition: border-color .15s ease, background .15s ease;
  ${({ $active }) => $active && `border-color: ${light.accent};`}
`;

export const UserLevelGuidDiv = styled.div`
  grid-column: 1 / -1;
  font-size: 16px;
  color: ${light.sub};
`;

export const UserHIstoryDiv = styled.div`
  grid-area: history;
  background: ${light.panel};
  border: 1px solid ${light.softBorder};
  border-radius: 16px;
  padding: 20px;
  box-shadow: ${light.shadow};
  display: grid;
  gap: 14px;

  /* 각 행 기본 2열(라벨/필드) */
  .zip-row { grid-template-columns: 120px 1fr auto; }
  .addr-row { grid-template-columns: 120px 1fr; }
`;

export const UserHistoryItem = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 10px 16px;
`;

export const labelBase = css`
  font-size: 16px;
  font-weight: 800;
  color: ${light.text};
`;

export const fieldBase = css`
  min-width: 0;
  height: 42px;
  font-size: 16px;
  border: 1px solid ${light.border};
  border-radius: 10px;
  padding: 0 12px;
  box-sizing: border-box;
  transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
  &:focus { ${focusRing} }
  &::placeholder { color: ${light.sub}; }
`;

export const UserCreatedAtDiv = styled.div`${labelBase}`;
export const UserCreatedAtView = styled.div`
  font-size: 16px; color: ${light.text};
`;

export const UserEmailDiv = styled.div`${labelBase}`;
export const UserEmailView = styled.div`
  font-size: 16px; color: ${light.text};
  word-break: break-all;
`;

export const UserNickNameDiv = styled.div`${labelBase}`;
export const UserNickNameInput = styled.input`${fieldBase}`;

export const UserPhoneDiv = styled.div`${labelBase}`;
export const UserPhoneInput = styled.input`${fieldBase}`;

export const UserAddrDiv = styled.div`${labelBase}`;
export const UserZipCodeInput = styled.input`${fieldBase}`;

export const UserZipCodeBtn = styled.button`
  height: 42px;
  padding: 0 14px;
  border: 1px solid ${light.border};
  border-radius: 999px;
  background: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease, background .12s ease;
  &:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(0,0,0,.06); }
  &:focus { ${focusRing} }
`;

export const UserAddrInput = styled.input`
  grid-column: 2 / -1;
  ${fieldBase};
`;

export const UserAddrDetialInput = styled.input`
  grid-column: 1 / -1;
  ${fieldBase};
  height: 42px;
`;

export const UserNameDiv = styled.div``; /* (미사용 유지) */

export const UserInfoBtnDiv = styled.div`
  grid-area: actions;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const actionBtn = css`
  height: 44px;
  padding: 0 18px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 999px;
  border: 1px solid ${light.border};
  background: #fff;
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease, background .12s ease, border-color .12s ease;
  &:hover { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(0,0,0,.07); }
  &:focus { ${focusRing} }
`;

export const UserInfoUpdateCancleBtn = styled.button`
  ${actionBtn};
`;

export const UserInfoUpdateBtn = styled.button`
  ${actionBtn};
  background: ${light.accent};
  border-color: ${light.accent};
`;
