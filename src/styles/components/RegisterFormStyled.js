import styled from "styled-components";
import "../../Fonts/fonts.css";

export const RegisterFormWrapper = styled.div`
  padding: 20px 0;
  width: 100%;
  min-height: 850px; /* 고정 height 대신 min-height 사용 */
  font-family: "INTERVARIABLE";
  font-weight: bold;
`;

export const MainContainer = styled.div`
  width: 375px;
  margin: 0 auto;
  padding: 0;
`;

export const FormTitleWrapper = styled.div`
  width: 375px;
  height: 60px;
  font-size: 32px;
  border-bottom: 1px solid black;
  margin-bottom: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center; /* 타이틀 중앙 정렬 */
  align-items: center;
`;

export const FormTitle = styled.div`
  /* 기존 margin 제거 */
`;

export const ImgSelectorWrapper = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const ImgSelector = styled.img`
  width: 100px;
  height: 100px;
  border: 3px solid black;
  border-radius: 50%;
  object-fit: cover;
`;

export const ImgInstruction = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 8px;
`;

export const InpuItemsWrapper = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  gap: 10px; /* 항목 간 간격 */
`;

export const InputItem = styled.div`
  width: 375px;
  display: flex;
  align-items: center;
  min-height: 40px;
`;

export const InputLabel = styled.div`
  width: ${(props) => props.width || 100}px;
  font-size: 14px;
`;

export const InputValue = styled.input`
  border-radius: 5px;
  width: ${(props) => props.width}px;
  height: 35px;
  padding: 0 10px;
  background-color: rgba(208, 208, 208, 0.2);
  border: 1px solid rgb(110, 110, 110);
  &:focus {
    outline: none;
    border-color: black;
  }
`;

export const IdCheckButton = styled.button`
  width: 80px;
  height: 35px;
  margin-left: 10px;
  background-color: ${(props) => props.backgroundColor || "black"};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const FormButtonWrapper = styled.div`
  width: 375px;
  margin-top: 2rem;
`;

export const RegisterButton = styled.button`
  height: 45px;
  width: 375px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#000")};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: 0.3s;
`;