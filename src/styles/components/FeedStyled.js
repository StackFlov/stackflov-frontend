import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.div`
  max-width: 1100px;
  margin: 24px auto;
  padding: 0 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 12px;
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
`;

export const Sub = styled.p`
  margin: 0;
  color: #64748b;
  font-size: 14px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(260px, 1fr) );
  gap: 14px;
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 6px 18px rgba(15,23,42,.06);
  transition: transform .05s ease, box-shadow .15s ease;
  &:hover { box-shadow: 0 12px 24px rgba(15,23,42,.10); transform: translateY(-1px); }
`;

export const Thumb = styled.div`
  background: #f1f5f9;
  aspect-ratio: 16/9;
  width: 100%;
  img {
    width: 100%; height: 100%; object-fit: cover; display: block;
  }
`;

export const Body = styled.div`
  padding: 12px;
  display: grid;
  gap: 8px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
  color: #0f172a;
`;

export const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #64748b;
  font-size: 13px;
`;

export const AuthorLink = styled(Link)`
  color: #0f172a;
  font-weight: 700;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

export const StatRow = styled.div`
  display: flex;
  gap: 10px;
  color: #64748b;
  font-size: 13px;
`;

export const Pager = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 18px;
  align-items: center;
`;

export const PagerBtn = styled.button`
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #fff;
  cursor: pointer;
  &:disabled { opacity: .5; cursor: not-allowed; }
`;

export const PagerInfo = styled.span`
  padding: 0 8px;
  color: #0f172a;
`;

export const LoadingText = styled.p` color:#475569; `;
export const ErrorText = styled.p` color:#c00; `;
export const Empty = styled.p` color:#64748b; `;
