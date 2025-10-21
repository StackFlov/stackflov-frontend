import styled from "styled-components";

export const DetailPage = styled.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
`;

export const BackBtn = styled.button`
  margin-bottom: 12px;
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #fff;
  cursor: pointer;
  transition: background .12s ease;
  &:hover { background: #f8fafc; }
`;

export const Title = styled.h1`
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.2px;
`;

export const Meta = styled.div`
  color: #64748b;
  margin-bottom: 16px;
  font-size: 14px;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
`;

export const Content = styled.pre`
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.7;
  margin: 0;
  font-family: inherit;
  font-size: 15px;
  color: #0f172a;
`;

export const Footer = styled.div`
  margin-top: 24px;
  a {
    color: #0f172a;
    text-decoration: none;
    border-bottom: 1px solid #0f172a;
    padding-bottom: 1px;
  }
`;

export const LoadingText = styled.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
  color: #475569;
`;

export const ErrorText = styled.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
  color: #c00;
`;
