import React, { useEffect, useState } from "react";
margin: 24px auto;
padding: 0 16px;
`;


const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
gap: 16px;
`;


const Card = styled.div`
border: 1px solid #eee;
border-radius: 14px;
overflow: hidden;
background: #fff;
transition: box-shadow .2s ease;
&:hover { box-shadow: 0 6px 18px rgba(0,0,0,0.08); }
`;


const Thumb = styled.div`
width: 100%;
aspect-ratio: 16 / 9;
background: #f6f6f6;
background-image: url(${p => p.src || ""});
background-size: cover;
background-position: center;
`;


const Body = styled.div`
padding: 12px 14px 14px;
`;


const Title = styled.h3`
font-size: 16px;
line-height: 1.35;
margin: 0 0 8px;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
`;


const Meta = styled.div`
font-size: 12px;
color: #666;
display: flex;
gap: 8px;
align-items: center;
flex-wrap: wrap;
`;


const Footer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 14px 14px;
font-size: 12px;
color: #444;
`;


const Badge = styled.span`
font-size: 11px;
background: #f1f3f5;
color: #555;
border-radius: 999px;
padding: 2px 8px;
`;


const Pager = styled.div`
display: flex;
gap: 8px;
margin: 20px 0 0;
justify-content: center;
`;


const Btn = styled.button`
padding: 8px 12px;
border: 1px solid #ddd;
background: #fff;
border-radius: 10px;
cursor: pointer;
&:disabled { opacity: .5; cursor: not-allowed; }
`;


export default function FeedPage() {
const [page, setPage] = useState(0);
const [pageSize] = useState(20);
const [data, setData] = useState({ content: [], totalPages: 0, number: 0 });
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const navigate = useNavigate();


useEffect(() => {
(async () => {
try {
setLoading(true);
const res = await fetchFeed({ page, size: pageSize, sort: "createdAt,desc" });
setData(res);
setError("");
} catch (e) {
console.error(e);
}