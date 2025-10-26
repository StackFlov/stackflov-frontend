// components/common/FilePicker.js
import styled from "styled-components";

export const FilePicker = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,.06);
  cursor: pointer;
  transition: background .2s ease, box-shadow .12s ease, transform .12s ease;

  &:hover { background: #F3F4F6; }
  &:active { transform: translateY(1px); }

  input { display: none; }
`;
