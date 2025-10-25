import styled from "styled-components";

export const ListPage = styled.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
`;

export const NewBtn = styled.button`
  padding: 8px 12px;
  border-radius: 10px;
  background: #0f172a;
  color: #fff;
  border: 1px solid #0f172a;
  cursor: pointer;
  transition: transform .04s ease, box-shadow .15s ease;
  &:hover { box-shadow: 0 6px 16px rgba(15,23,42,.18); }
  &:active { transform: translateY(1px); }
`;

export const TableWrap = styled.div`
  border-top: 1px solid #e2e8f0;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 160px 160px 120px;
  gap: 8px;
  padding: 12px 12px;
  border-bottom: 1px solid #e2e8f0;
  &:last-child { border-bottom: 0; }
`;

export const CellTitle = styled.div`
  font-weight: 700;
  color: #0f172a;
  a { color: inherit; text-decoration: none; }
`;

export const CellText = styled.span`
  color: #64748b;
  align-self: center;
`;

export const CellActions = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: flex-start;

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
`;

export const PagerBtn = styled.button`
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #fff;
  cursor: pointer;
  &:disabled { opacity: .5; cursor: not-allowed; }
`;

export const LoadingText = styled.p`
  color: #475569;
`;

export const ErrorText = styled.p`
  color: #c00;
`;

export const Empty = styled.p`
  color: #64748b;
  padding: 16px 0;
`;
