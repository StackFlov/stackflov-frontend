import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  color: #111827;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 10px 18px;
  border-radius: 8px;
  background: #111827;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  &:hover { opacity: 0.9; }
`;

export const SubBtn = styled.button`
  padding: 10px 18px;
  border-radius: 8px;
  background: #fff;
  color: #374151;
  font-weight: 600;
  border: 1px solid #d1d5db;
  cursor: pointer;
  &:hover { background: #f9fafb; }
`;

export const TableWrap = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 200px 80px 120px;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #f3f4f6;
  &:last-child { border-bottom: 0; }
  background: ${({ $unread }) => $unread ? "#fcfdff" : "#fff"};
`;

export const Cell = styled.div`
  font-size: 15px;
  color: #374151;
`;

export const TypeBadge = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 28px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: ${({ $color }) => `${$color}15`};
  color: ${({ $color }) => $color};
  border: 1px solid ${({ $color }) => `${$color}30`};
`;

export const ReadBadge = styled.span`
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  background: ${({ $read }) => $read ? "#f3f4f6" : "#ecfccb"};
  color: ${({ $read }) => $read ? "#6b7280" : "#3f6212"};
`;

export const LinkBtn = styled(Link)`
  color: #111827;
  text-decoration: underline;
  font-weight: 500;
  text-underline-offset: 4px;
`;

export const Pager = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 30px;
`;