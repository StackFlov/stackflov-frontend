import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const StatCard = styled.div`
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #fff;
  transition: transform .06s ease, box-shadow .15s ease, border-color .15s ease;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(0,0,0,.06);
    border-color: #e3e6ef;
  }

  ${(p) => p.$warn && css`
    border-color: #ffe4e6;
    background: #fff1f2;
    &:hover {
      box-shadow: 0 6px 14px rgba(244,63,94,.12);
      border-color: #fecdd3;
    }
  `}
`;

export const CardTitle = styled.div`
  color: #6b7280;
  font-size: 14px;
  font-weight: 700;
`;

export const CardValue = styled.div`
  margin-top: 4px;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.3px;
  color: #111827;
`;

export const LinkRow = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const LinkBtn = styled(Link)`
  height: 40px;
  padding: 0 14px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  color: #111827;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  text-decoration: none;
  transition: background .15s ease, transform .06s ease, border-color .15s ease;
  &:hover {
    background: #eef2f7;
    transform: translateY(-1px);
    border-color: #e3e6ef;
  }
`;

export const ChartCard = styled.div`
  margin-top: 18px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 1px 0 rgba(17,24,39,0.02);
`;

export const ChartTitle = styled.div`
  font-weight: 800;
  font-size: 16px;
  letter-spacing: -0.2px;
  color: #111827;
  margin-bottom: 8px;
`;
