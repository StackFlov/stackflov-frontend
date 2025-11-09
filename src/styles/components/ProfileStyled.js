import styled, { keyframes } from "styled-components";
import "../../Fonts/fonts.css";

/* ===== Animations ===== */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`;
const underline = keyframes`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`;

/* ===== Light / Dark tokens ===== */
const light = {
  panel: "#fff",
  border: "#e5e7eb",
  text: "#0f172a",
  sub: "#6b7280",
  accent: "#FFC341",
  shadow: "0 12px 30px rgba(2,6,23,.06)",
};
const dark = {
  panel: "rgba(255,255,255,.06)",
  border: "rgba(255,255,255,.12)",
  text: "#e5e7eb",
  sub: "rgba(229,231,235,.7)",
  accent: "#FFC341",
  shadow: "0 12px 34px rgba(0,0,0,.35)",
};

export const ProfileWrapper = styled.div`
  --radius: 16px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;

  /* ✅ 2-컬럼 그리드 (float 제거, 오버플로 방지) */
  display: grid;
  grid-template-columns: minmax(180px, 240px) minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "side content";
  column-gap: 24px;
  row-gap: 12px;

  background: ${light.panel};
  border: 1px solid ${light.border};
  border-radius: var(--radius);
  box-shadow: ${light.shadow};
  animation: ${fadeIn} .35s ease both;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "side"
      "content";
    padding: 16px;
  }

  @media (prefers-color-scheme: dark) {
    background: ${dark.panel};
    border-color: ${dark.border};
    box-shadow: ${dark.shadow};
  }
`;

export const ProfileTopDiv = styled.div`
  grid-area: header;
  position: relative;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${light.text};
  padding-bottom: 16px;
  border-bottom: 1px dashed ${light.border};

  &::after {
    content: "";
    position: absolute;
    left: 0; bottom: -1px;
    height: 3px; width: 140px;
    background: linear-gradient(90deg, ${light.accent}, transparent 80%);
    transform-origin: left;
    animation: ${underline} 420ms ease-out both;
  }

  @media (prefers-color-scheme: dark) {
    color: ${dark.text};
    border-bottom-color: ${dark.border};
    &::after { background: linear-gradient(90deg, ${dark.accent}, transparent 80%); }
  }
`;

export const ProfileSideDiv = styled.div`
  grid-area: side;
  align-self: start;
  height: fit-content;
  background: ${light.panel};
  border: 1px solid ${light.border};
  border-radius: 14px;
  padding: 14px;
  box-shadow: inset 0 1px 0 rgba(0,0,0,.02);
  animation: ${slideIn} .3s ease both;
  position: sticky;
  top: 16px;

  @media (max-width: 900px) {
    position: static;
    display: flex;
    overflow-x: auto;
    gap: 8px;
  }

  @media (prefers-color-scheme: dark) {
    background: ${dark.panel};
    border-color: ${dark.border};
    box-shadow: inset 0 1px 0 rgba(255,255,255,.03);
  }
`;

/* transient prop($active)로 DOM에 안 내려가게 */
export const ProfileMenuItem = styled.button`
  width: 100%;
  display: flex; align-items: center; gap: 10px;
  padding: 12px 12px;
  margin-bottom: 8px;
  border: 1px solid ${({ $active }) => ($active ? light.accent : light.border)};
  border-radius: 12px;
  background: ${({ $active }) =>
    $active ? "rgba(255,195,65,.12)" : light.panel};
  color: ${light.text};
  font-size: 15px; font-weight: ${({ $active }) => ($active ? 700 : 500)};
  letter-spacing: -0.01em;
  cursor: pointer; outline: none;
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
  position: relative;

  &:hover {
    transform: translateX(2px);
    box-shadow: 0 6px 16px rgba(0,0,0,.08);
    border-color: ${light.accent};
  }

  /* 좌측 액센트 바 */
  &::before {
    content: "";
    position: absolute; left: 6px; top: 10px; bottom: 10px;
    width: 4px; border-radius: 3px;
    background: ${({ $active }) => ($active ? light.accent : "transparent")};
    transition: background .2s ease;
  }

  .icon { display: inline-flex; align-items: center; }
  .label { white-space: nowrap; }

  ${({ $admin }) => $admin && `border-style: dashed;`}

  @media (max-width: 900px) {
    min-width: max-content;
    margin-bottom: 0;
  }

  @media (prefers-color-scheme: dark) {
    border-color: ${({ $active }) => ($active ? dark.accent : dark.border)};
    background: ${({ $active }) =>
      $active ? "rgba(255,195,65,.16)" : dark.panel};
    color: ${dark.text};
    &:hover { box-shadow: 0 6px 16px rgba(0,0,0,.2); }
    &::before { background: ${({ $active }) => ($active ? dark.accent : "transparent")}; }
  }
`;

export const ProfileContentDiv = styled.div`
  grid-area: content;

  /* ✅ 내부가 넓어도 컨테이너 안으로 */
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
  & > * { max-width: 100%; min-width: 0; }

  background: ${light.panel};
  border: 1px solid ${light.border};
  border-radius: 14px;
  padding: 20px 22px; /* 오른쪽 살짝 여유 */
  color: ${light.text};
  box-shadow: inset 0 1px 0 rgba(0,0,0,.02);
  animation: ${fadeIn} .28s ease both;

  @media (prefers-color-scheme: dark) {
    background: ${dark.panel};
    border-color: ${dark.border};
    color: ${dark.text};
    box-shadow: inset 0 1px 0 rgba(255,255,255,.03);
  }
`;
