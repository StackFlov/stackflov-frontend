import styled from "styled-components";

export const Wrap = styled.div`
  max-width: 1300px;
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

export const Card = styled.div`
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  margin-bottom: 16px;
`;

export const Toolbar = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1 1 320px;
  min-width: 220px;
  height: 40px;
  padding: 0 12px;
  border: 1.5px solid #d1d5db;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  transition: border-color .15s ease;
  &:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,.15); }
`;

export const BtnBase = styled.button`
  height: 40px;
  padding: 0 14px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform .05s ease, background .15s ease, opacity .15s ease;
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .6; cursor: not-allowed; }
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

export const Info = styled.div`
  padding: 12px 0;
  color: #374151;
`;

export const Error = styled.div`
  padding: 12px 0;
  color: #dc2626;
`;

export const ListCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
`;

export const ListHeader = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  color: #6b7280;
  font-size: 13px;
  background: #fafafa;
`;

export const Divider = styled.div`
  height: 1px;
  background: #eef2f7;
`;

export const ListBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-top: 1px solid #f3f4f6;
  &:first-child { border-top: 0; }
  &:hover { background: #fafafa; }
`;

export const Col = styled.div`
  flex: ${(p) => (p.w ? `0 0 ${p.w}px` : "1 1 auto")};
  text-align: ${(p) => p.align || "left"};
  color: ${(p) => (p.muted ? "#6b7280" : "inherit")};
  font-family: ${(p) =>
    p.mono
      ? "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
      : "inherit"};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DangerBtn = styled(BtnBase)`
  color: #b91c1c;
  background: #fff;
  border: 1px solid #fecaca;
  &:hover:not(:disabled) { background: #fee2e2; }
`;

export const Empty = styled.div`
  padding: 48px 12px;
  text-align: center;
  color: #6b7280;
  border: 1px dashed #e5e7eb;
  border-radius: 12px;
  background: #fafafa;
`;

export const EmptyEmoji = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
`;

export const EmptyText = styled.div`
  font-weight: 700;
  margin-bottom: 4px;
`;
