import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 15, 25, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  width: min(760px, 92vw);
  max-height: 86vh;
  overflow: auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.35);
`;

export const TextArea = styled.textarea`
  flex: 1 1 520px;
  min-height: 96px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;
  &:focus {
    border-color: #94a3b8;
    box-shadow: 0 0 0 3px rgba(148,163,184,.25);
  }
`;

export const MemoList = styled.div`
  display: grid;
  gap: 10px;
`;

export const MemoCard = styled.div`
  background: #fff;
  border: 1px solid #eef2f7;
  border-radius: 12px;
  padding: 12px;
`;

export const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px;
  margin-bottom: 8px;
  color: #475569;
  font-size: 13px;
`;

export const MetaLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;

export const MetaMono = styled.span`
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  color: #64748b;
`;

export const Dot = styled.span`
  color: #cbd5e1;
`;

export const MetaActions = styled.div`
  display: flex;
  gap: 6px;
`;

export const Content = styled.div`
  white-space: pre-wrap;
  line-height: 1.6;
  color: #0f172a;
  font-size: 14px;
`;
