import styled from "styled-components";

export const Page = styled.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
`;

export const Title = styled.h1`
  margin: 0 0 16px;
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.2px;
`;

export const LoadingText = styled.p`
  color: #475569;
`;

export const ErrorText = styled.p`
  color: #c00;
`;

export const Empty = styled.p`
  color: #64748b;
`;

export const TableWrap = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 100px 160px;
  gap: 8px;
  padding: 12px 12px;
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: 0;
  }
`;

export const TitleCell = styled.div`
  font-weight: 700;
  color: #0f172a;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const MetaCell = styled.span`
  color: #64748b;
  align-self: center;
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

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`;

export const PagerInfo = styled.span`
  padding: 0 8px;
  color: #0f172a;
`;
