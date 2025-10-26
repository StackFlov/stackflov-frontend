// components/common/Button.js
import styled, { css } from "styled-components";

export const Button = styled.button`
  --radius: 14px;
  --shadow: 0 10px 20px rgba(0,0,0,.08);
  --shadow-sm: 0 4px 10px rgba(0,0,0,.06);
  --ring: 0 0 0 3px rgba(79,70,229,.25);

  border: 0;
  border-radius: var(--radius);
  padding: 12px 18px;
  font-size: 16px;
  line-height: 1;
  font-weight: 700;
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease, background .2s ease, color .2s ease, opacity .2s ease;
  box-shadow: var(--shadow);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  user-select: none;

  &:active { transform: translateY(1px); }
  &:focus-visible { outline: none; box-shadow: var(--shadow), var(--ring); }
  &:disabled { opacity: .55; cursor: not-allowed; box-shadow: var(--shadow-sm); }

  /* size */
  ${({ $size }) => $size === "sm" && css`padding: 10px 14px; font-size: 14px;`}
  ${({ $size }) => $size === "lg" && css`padding: 14px 22px; font-size: 18px;`}

  /* variant */
  ${({ $variant }) => $variant === "primary" && css`
    color: #fff;
    background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%); /* indigo */
    &:hover { filter: brightness(1.05); }
  `}
  ${({ $variant }) => $variant === "secondary" && css`
    color: #111827;
    background: #F3F4F6; /* gray-100 */
    border: 1px solid #E5E7EB;
    &:hover { background: #E5E7EB; }
  `}
  ${({ $variant }) => $variant === "danger" && css`
    color: #fff;
    background: linear-gradient(135deg, #EF4444, #DC2626);
    &:hover { filter: brightness(1.05); }
  `}
`;
