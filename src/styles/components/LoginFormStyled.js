import styled from "styled-components";
import "../../Fonts/fonts.css";

export const LoginFormWrapper = styled.div`
  padding: 0px;
  width: 1890px;
  height: 775px;
  font-family: "INTERVARIABLE";
`;

export const MainContainer = styled.div`
  width: 375px;
  height: 608px;
  background-color: #ffffff;
  margin: 0 35%;
`;

export const FormItemsWrapper = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const FormTitleWrapper = styled.li`
width 375px;
height:60px;
font-size: 32px;
border-bottom: 1px solid black;
margin-bottom: 3rem;
font-weight:bold;
`;

export const FormTitle = styled.li`
  margin: 0 0 0 9rem;
`;

export const FormInputWrapper = styled.li`
  padding: 0px;
  label {
    width: 375px;
  }
  input {
    width: 367px;
    height: 40px;
    border: 1px solid #dfdfdf;
    border-radius: 5px;
    margin: 0.5rem 0 1.5rem 0;
  }
`;

export const FormLoginButton = styled.button`
  width: 375px;
  height: 48px;
  color: #ffffff;
  background-color: black;
  margin-top: 3rem;
  transition-duration: 500ms;
  &:hover {
    border: 1px solid rgba(208, 208, 208, 0.8);
    background-color: rgba(208, 208, 208, 0.8);
    color: black;
  }
`;

export const EasyRegisterButtonsWrapper = styled.li`
  margin: 1.5rem 0 2rem 4.5rem;
  width: 250px;
  height: 52px;
`;

export const EasyRegisterButton = styled.img`
  width: 52px;
  height: 52px;
  margin-left: 1rem;
`;

export const FormUserButtonsWrapper = styled.li`
  padding: 0px;
  width: 225px;
  height: 48px;
  margin-left: 4rem;
`;

export const FormUserButton = styled.button`
  border: none;
  margin-left: 1rem;
  width: ${(props) => {
    return props.width;
  }}px;
  height: 30px;
  background-color: #ffffff;
  transition-duration: 500ms;
  border-radius: 8px;
  &:hover {
    background-color: rgba(208, 208, 208, 0.5);
  }
`;
