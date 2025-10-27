import styled from "styled-components";
import "../../Fonts/fonts.css";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 36px;
  font-size: 24px;
  font-weight: thin;
  font-family: "INTERVARIABLE";

  /* ✔ flex 레이아웃 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 8px;
  box-sizing: border-box;
`;

/* 개별 메뉴 아이템 */
export const HeaderItem = styled.div`
  height: 106px;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-weight: ${(props) => props.nowNavigator};

  div {
    transition: background-color 500ms, font-weight 500ms;
    padding: 5px 8px;
    cursor: pointer;
    border-radius: 10px;
    background-color: ${(props) =>
      props.nowNavigator === "thin" ? "#ffffff" : "rgba(208, 208, 208, 0.8)"};

    &:hover {
      background-color: rgba(208, 208, 208, 0.5);
      font-weight: bold;
    }
  }
`;

export const HeaderItemWrapper = styled.div`
  height: 106px;
`;

/* 로고 영역: 내용만큼 */
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  min-width: 120px;
`;

export const Logo = styled.li`
  display: flex;
  align-items: center;
`;

/* 가운데 메뉴: 유동 폭 */
export const LinkWrapper = styled.div`
  height: 106px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;      /* 남는 공간 사용 */
  gap: 20px;
  min-width: 320px;    /* 너무 좁아지지 않게 가드 */
`;

/* 오른쪽: 알림 · Login · Profile */
export const LoginWrapper = styled.div`
  height: 106px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 auto;
  gap: 16px;
  white-space: nowrap;  /* 줄바꿈 방지 */
`;

export const LoginButton = styled.div``;
export const RegisterButton = styled.div``;