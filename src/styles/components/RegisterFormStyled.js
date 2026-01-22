import styled, { keyframes, css } from "styled-components";

// --- 애니메이션 정의 ---
// 위로 부드럽게 떠오르는 애니메이션
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 부드럽게 나타나는 애니메이션
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// 강조를 위한 부드러운 펄스(맥박) 애니메이션
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(40, 167, 69, 0); }
  100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); }
`;

// --- 스타일 컴포넌트 ---
export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  width: 100%;
  min-height: 100vh;
  /* 고급스러운 은은한 그라데이션 배경 */
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: "INTERVARIABLE", sans-serif;
`;

export const RegisterCard = styled.div`
  width: 100%;
  max-width: 480px; /* 너비를 약간 더 넓혀 시원하게 */
  background: #ffffff;
  padding: 45px;
  border-radius: 20px; /* 더 둥글게 */
  /* 깊이감 있는 부드러운 그림자 */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  /* 등장 애니메이션 적용 */
  animation: ${fadeInUp} 0.7s ease-out forwards;
`;

export const FormHeader = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;
  text-align: center;
  h2 {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 10px;
    color: #2d3436;
    letter-spacing: -0.5px;
  }
  p {
    color: #636e72;
    font-size: 15px;
  }
`;

export const ProfileUploadSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
  cursor: pointer;
  group: "profile";

  .image-container {
    position: relative;
    width: 120px;
    height: 120px;
    border: 4px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    transition: all 0.3s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    .overlay {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0; /* 기본은 숨김 */
      background: rgba(0, 123, 255, 0.7);
      color: white;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      opacity: 0;
    }
  }

  /* 호버 효과 강화 */
  &:hover .image-container {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(0, 123, 255, 0.2);
    border-color: #007bff;
  }
  &:hover img {
    transform: scale(1.05);
  }
  &:hover .overlay {
    height: 30%; /* 호버 시 올라오도록 */
    opacity: 1;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
  width: 100%;
  position: relative;

  .input-with-button {
    display: flex;
    gap: 10px;
    width: 100%;
    input { flex: 1; }
  }
`;

// 조건부 렌더링 영역에 적용할 페이드인 래퍼
export const FadeInSection = styled.div`
  animation: ${fadeIn} 0.4s ease-in-out;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #2d3436;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 18px;
  border-radius: 12px;
  border: 2px solid #dfe6e9; /* 초기 보더 색상을 더 연하게 */
  background-color: #fdfdfd;
  font-size: 16px;
  box-sizing: border-box;
  /* 부드러운 전환 효과 */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:focus {
    outline: none;
    border-color: #007bff;
    background-color: #fff;
    /* 포커스 시 살짝 떠오르며 빛나는 효과 */
    box-shadow: 0 8px 20px rgba(0, 123, 255, 0.15);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #b2bec3;
  }
`;

export const ActionButton = styled.button`
  padding: 0 20px;
  height: 54px;
  /* 버튼 색상 조금 더 선명하게 */
  background-color: ${props => props.variant === 'primary' ? '#007bff' : props.variant === 'success' ? '#28a745' : '#636e72'};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  /* 통통 튀는 듯한 탄성있는 전환 효과 */
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover:not(:disabled) {
    transform: scale(1.05); /* 살짝 커짐 */
    filter: brightness(1.1); /* 약간 더 밝게 */
  }

  &:active:not(:disabled) {
    transform: scale(0.98); /* 클릭 시 살짝 눌림 */
  }

  &:disabled {
    background-color: #dfe6e9;
    color: #b2bec3;
    cursor: not-allowed;
  }

  /* 인증 확인 버튼에 펄스 효과 적용 (활성화 시) */
  ${props => props.variant === 'success' && !props.disabled && css`
     animation: ${pulse} 2s infinite;
  `}
`;

export const TimerText = styled.span`
  color: #e84118;
  font-size: 13px;
  font-weight: 600;
  background: rgba(232, 65, 24, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
`;

export const TermsContainer = styled.div`
  margin-top: 30px;
  .terms-box {
    width: 100%;
    height: 120px;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 12px;
    background: #fafafa;
    font-size: 13px;
    line-height: 1.6;
    overflow-y: auto;
    white-space: pre-line;
    color: #636e72;
    /* 스크롤바 디자인 */
    &::-webkit-scrollbar { width: 6px; }
    &::-webkit-scrollbar-thumb { background-color: #ccc; border-radius: 3px; }
  }
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
  justify-content: flex-end;
  cursor: pointer;
  color: #2d3436;

  input {
    accent-color: #007bff; /* 체크박스 색상 변경 */
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  &:hover { color: #007bff; }
`;

// 메인 제출 버튼: 그라데이션 및 강력한 호버 효과
export const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 35px;
  background: ${props => props.disabled
    ? '#dfe6e9'
    : 'linear-gradient(to right, #0062E6, #33AEFF)'}; /* 그라데이션 배경 */
  color: ${props => props.disabled ? '#b2bec3' : 'white'};
  border: none;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 800;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover:not(:disabled) {
    transform: translateY(-3px) scale(1.02);
    /* 버튼이 빛나는 듯한 그림자 효과 */
    box-shadow: 0 10px 25px rgba(0, 98, 230, 0.4);
  }
  &:active:not(:disabled) { transform: scale(0.98); }
`;