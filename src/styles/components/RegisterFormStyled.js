import styled from "styled-components";
import "../../Fonts/fonts.css";

export const RegisterFormWrapper = styled.div`
  padding: 0px;
  width: 100%;
  height: 775px;
  font-family: "INTERVARIABLE";
  font-weight: bold;
`;

export const MainContainer = styled.div`
  width: 375px;
  height: 775px;
  margin: 0 auto;
  padding: 0;
`;

export const FormTitleWrapper = styled.div`
  width: 375px;
  height: 60px;
  font-size: 32px;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const FormTitle = styled.div`
  margin: 0 0 0 9rem;
`;

export const ImgSelectorWrapper = styled.div`
  width: 375px;
  height: 100px;
`;

export const ImgSelector = styled.img`
  width: 90px;
  height: 90px;
  margin: 0 0 0 9rem;
  border: 5px solid black;
  border-radius: 50px;
`;

export const InpuItemsWrapper = styled.div`
  width: 375px;
  height: 535px;
`;

export const InputItem = styled.div`
  width: 375px;
  height: 60px;
  display: flex; // 추가됨
  align-items: center; // 추가됨
  margin-bottom: 0.5rem; // 선택적으로 항목 간 간격
`;

export const InputLabel = styled.div`
  width: ${(props) => props.width}px;
  height: 30px;
  margin-right: 1rem; // 추가됨
`;

export const InputValue = styled.input`
  border-radius: 5px;
  width: ${(props) => props.width}px;
  height: 30px;
  background-color: rgba(208, 208, 208, 0.2);
  border: 1px solid rgb(110, 110, 110);
  transition-duration: 500ms;
  &:hover {
    color: black;
    background-color: rgba(208, 208, 208, 0.8);
  }
`;

export const IdCheckButton = styled.button`
  width: 80px;
  height: 33px;
  margin: 0 0 0 0.5rem;
  background-color: black;
  color: #ffffff;
  border: none;
  transition-duration: 500ms;
  border-radius: 8px;
  &:hover {
    color: black;
    background-color: rgba(208, 208, 208, 0.5);
  }
`;

export const FormButtonWrapper = styled.div`
  width: 375px;
  height: 40px;
  margin: 1rem 0 0 0;
`;

export const RegisterButton = styled.button`
  height: 30px;
  width: 375px;
  background-color: rgba(205, 216, 227, 0.8);
  color: #ffffff;
  border: none;
  transition-duration: 500ms;
  border-radius: 8px;
  &:hover {
    color: black;
    background-color: rgba(208, 208, 208, 0.5);
  }
`;
