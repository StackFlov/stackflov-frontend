import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
`;

export const HeaderRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #0f172a;
  background: #0f172a;
  color: #fff;
  cursor: pointer;
  transition: transform .04s ease, box-shadow .15s ease, opacity .15s ease;
  &:hover { box-shadow: 0 6px 16px rgba(15,23,42,.18); }
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .6; cursor: not-allowed; }
`;

export const SubBtn = styled.button`
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  cursor: pointer;
`;

export const TableWrap = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 140px 110px 120px;
  gap: 8px;
  padding: 12px 12px;
  border-bottom: 1px solid #e2e8f0;
  &:last-child { border-bottom: 0; }
`;

export const Cell = styled.div`
  display: flex;
  align-items: center;
  color: #0f172a;
`;

export const TypeBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
`;

export const ReadBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  ${({ $read }) =>
    $read
      ? `background:#ecfccb;color:#3f6212;border:1px solid #d9f99d;`
      : `background:#fee2e2;color:#991b1b;border:1px solid #fecaca;`}
`;

export const LinkBtn = styled(Link)`
  color: #0f172a;
  text-decoration: none;
  border-bottom: 1px solid #0f172a;
  padding-bottom: 1px;
`;

export const Ops = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;

  button {
    padding: 6px 10px;
    border-radius: 10px;
    border: 1px solid #cbd5e1;
    background: #fff;
    cursor: pointer;
  }
`;

export const Pager = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
  align-items: center;
`;

export const PagerBtn = styled.button`
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #fff;
  cursor: pointer;
  &:disabled { opacity: .5; cursor: not-allowed; }
`;

export const PagerInfo = styled.span`
  padding: 0 8px;
  color: #0f172a;
`;

export const LoadingText = styled.p` color:#475569; `;
export const ErrorText = styled.p` color:#c00; `;
export const Empty = styled.p` color:#64748b; `;
