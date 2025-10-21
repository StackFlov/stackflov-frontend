import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  gap: 12px;
`;

export const Field = styled.label`
  display: grid;
  gap: 6px;
  font-size: 14px;
  color: #0f172a;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;
  &:focus {
    border-color: #0f172a;
    box-shadow: 0 0 0 3px rgba(15,23,42,.12);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 160px;
  padding: 8px 10px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  resize: vertical;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;
  &:focus {
    border-color: #0f172a;
    box-shadow: 0 0 0 3px rgba(15,23,42,.12);
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

export const SubmitBtn = styled.button`
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
