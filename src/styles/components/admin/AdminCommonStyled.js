import styled, { css } from "styled-components";

/* ========== Layout ========== */
export const PageWrap = styled.div`
  max-width: 1200px;        /* ✅ 요구사항: 고정 1100px */
  margin: 0 auto;
  padding: 16px;
`;

export const Header = styled.div`
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  margin: 0 0 4px;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.2px;
`;

export const Sub = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`;

/* ========== Cards ========== */
export const SearchCard = styled.div`
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  margin-bottom: 16px;
`;

/* ========== Controls ========== */
export const Row = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`;

export const Select = styled.select`
  height: 40px;
  padding: 0 10px;
  border: 1.5px solid #d1d5db;
  border-radius: 10px;
  background: #fff;
`;

export const Input = styled.input`
  flex: 1 1 360px;
  min-width: 240px;
  height: 40px;
  padding: 0 12px;
  border: 1.5px solid #d1d5db;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  }
`;

export const Spacer = styled.div`
  flex: 1 1 auto;
`;

/* ========== Buttons ========== */
const BtnBase = styled.button`
  height: 40px;
  padding: 0 14px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.05s ease, background 0.15s ease, opacity 0.15s ease;
  &:active { transform: translateY(1px); }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

export const PrimaryBtn = styled(BtnBase)`
  color: #fff;
  background: #111827;
  border: 1px solid #111827;
  &:hover:not(:disabled) { background: #0b1220; }
`;

export const GhostBtn = styled(BtnBase)`
  color: #111827;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  &:hover:not(:disabled) { background: #eef2f7; }
`;

export const MutedBtn = styled(BtnBase)`
  color: #111827;
  background: #fff;
  border: 1px solid #e5e7eb;
  &:hover:not(:disabled) { background: #f3f4f6; }
`;

export const DangerBtn = styled(BtnBase)`
  color: #b91c1c;
  background: #fff;
  border: 1px solid #fecaca;
  &:hover:not(:disabled) { background: #fee2e2; }
`;

export const Th = styled.th`
  text-align: left;
  padding: 12px 10px;
  color: #6b7280;
  font-size: 13px;
  border-bottom: 1px solid #eef2f7;
  ${(p) => p.w && css`width: ${p.w}px;`};
`;

export const Td = styled.td`
  padding: 12px 10px;
  border-top: 1px solid #f3f4f6;
  vertical-align: middle;
  ${(p) => p.w && css`width: ${p.w}px;`};
  ${(p) => p.ellipsis && css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `};
  ${(p) => p.mono && css`
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                 'Liberation Mono', 'Courier New', monospace;
  `};
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  ${(p) => p.type === "success" && css`
    color: #065f46; background: #d1fae5; border: 1px solid #a7f3d0;
  `};
  ${(p) => p.type === "danger" && css`
    color: #991b1b; background: #fee2e2; border: 1px solid #fecaca;
  `};
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

/* ========== Misc ========== */
export const Pagination = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const PageInfo = styled.span`
  color: #6b7280;
  font-size: 14px;
`;

export const ErrorText = styled.div`
  padding: 12px 0;
  color: #dc2626;
`;

export const InfoText = styled.div`
  padding: 12px 0;
  color: #374151;
`;

export const Empty = styled.div`
  padding: 48px 12px;
  text-align: center;
  color: #6b7280;
  border: 1px dashed #e5e7eb;
  border-radius: 12px;
  background: #fafafa;
`;

export const TableCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow-x: auto;      /* ← 추가 */
`;

// Table: 레이아웃 안정화
export const Table = styled.table`
  width: 100%;
  min-width: 880px;      /* ← 너무 줄어들지 않게 안전폭 */
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;   /* ← ellipsis 잘 동작 & 균등 배치 */
`;