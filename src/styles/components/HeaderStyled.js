import styled from "styled-components";
import "../../Fonts/fonts.css";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 106px;
  list-style: none;
  font-size: 24px;
  font-weight: thin;
  font-family: "INTERVARIABLE";
`;

export const HeaderItem = styled.div`
  height: 106px;
  float: left;
  margin: 0 0 0 1rem;
  font-weight: ${(props) => props.nowNavigator};
  div {
    transition: background-color 500ms, font-weight 500ms;
    margin: 0 auto;
    padding: 5px;
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
  list-style: none;
  height: 106px;
`;

export const LogoWrapper = styled.div`
  width: 45%;
  height: 106px;
  float: left;
`;

export const Logo = styled.li`
  float: left;
`;

export const LinkWrapper = styled.div`
  height: 106px;
  width: 42%;
  float: left;
`;

export const LoginWrapper = styled.div`
  height: 106px;
  width: 13%;
  float: left;
`;

export const LoginButton = styled.div``;
export const RegisterButton = styled.div``;
