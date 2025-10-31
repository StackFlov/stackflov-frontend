// src/styles/components/LoginFormStyled.js
import styled, { keyframes } from "styled-components";
import "../../Fonts/fonts.css";

const pop = keyframes`
  0%   { opacity: 0; transform: translateY(8px) scale(.98); }
  70%  { opacity: 1; transform: translateY(0)   scale(1.01); }
  100% { opacity: 1; transform: translateY(0)   scale(1); }
`;

export const PageWrap = styled.section`
   min-height: calc(100vh - 60px);
  display: grid;
  /* 위쪽 배치 + 가로 중앙 정렬 */
  place-items: start center;
  /* 화면 크기에 따라 살짝만 내려오게: 6vh 정도 */
  padding: clamp(16px, 6vh, 72px) 16px 24px;
  background:
    radial-gradient(1200px 600px at 0% 0%, rgba(99,102,241,.06), transparent 60%),
    radial-gradient(1200px 600px at 100% 100%, rgba(14,165,233,.06), transparent 60%),
    #f7f8fb;
`;

export const Card = styled.div`
  width: min(420px, 92vw);
  background: #fff;
  border: 1px solid #eef0f3;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(18, 23, 38, 0.08);
  padding: 22px 22px 18px;
  animation: ${pop} .38s cubic-bezier(.2,.65,.2,1) both;
`;

export const TitleRow = styled.div`
  margin-bottom: 14px;
`;

export const Title = styled.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #111827;
`;

export const SubTitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
`;

export const Form = styled.div`
  margin-top: 6px;
`;

export const Field = styled.div`
  display: grid;
  gap: 6px;
  margin-top: 12px;
`;

export const Label = styled.label`
  font-size: 13px;
  color: #374151;
`;

export const Input = styled.input`
  height: 44px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 0 12px;
  font-size: 15px;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease, background .2s ease;

  &:hover {
    background: #fafafa;
  }
  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99,102,241,.14);
    background: #fff;
  }
`;

export const ErrorText = styled.div`
  margin-top: 8px;
  font-size: 13px;
  color: #ef4444;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 46px;
  margin-top: 16px;

  background: #111827;
  color: #fff;
  border: 1px solid #111827;
  border-radius: 12px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;

   transition: transform .05s ease, box-shadow .15s ease,
            background .15s ease, border-color .15s ease, color .15s ease;

 /* 마우스 올리면 회색 버튼 + 검정 글자 */
 &:hover {
   background: #e5e7eb;     /* 밝은 회색 */
   border-color: #e5e7eb;
   color: #111827;          /* 글자는 검정 */
 }
 &:focus-visible {
   outline: 2px solid #cbd5e1;
   outline-offset: 2px;
 }
  &:active { transform: translateY(1px); }
  &:disabled {
    opacity: .65;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 18px 0 12px;

  &::before, &::after {
    content: "";
    height: 1px;
    flex: 1 1 auto;
    background: #eef0f3;
  }
`;

export const DividerText = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const SocialBtn = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: #fff;
  cursor: pointer;
  padding: 0;
  display: grid;
  place-items: center;
  transition: transform .05s ease, box-shadow .15s ease, border-color .15s ease, background .15s ease;

  img { width: 26px; height: 26px; object-fit: contain; }

  &:hover {
    border-color: #cfd6de;
    background: #fafafa;
    box-shadow: 0 6px 16px rgba(18, 23, 38, 0.06);
  }
  &:active { transform: translateY(1px); }
`;

export const BottomRow = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 13px;
`;

export const LinkBtn = styled.button`
  border: none;
  background: transparent;
  color: #111827;
  font-weight: 700;
  cursor: pointer;
  padding: 0 2px;
  border-radius: 6px;

  &:hover { text-decoration: underline; }
`;
