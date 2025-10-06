import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

const fmt = (n) => (typeof n === "number" ? n.toLocaleString() : "-");

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setErr(null);

    api.get("/admin/dashboard")
      .then(({ data }) => {
        if (!alive) return;
        setStats(data || {});
      })
      .catch((e) => {
        if (!alive) return;
        setErr(e?.response?.data?.message || e.message || "불러오기 실패");
      })
      .finally(() => alive && setLoading(false));

    return () => { alive = false; };
  }, []);

  if (loading) return <div>대시보드 불러오는 중…</div>;
  if (err) return <div style={{color:"#c00"}}>오류: {String(err)}</div>;

  // 백엔드가 주는 키들이 프로젝트마다 조금씩 다를 수 있어서 안전하게 fallback 처리
  const {
    totalUsers,
    activeUsers,
    totalBoards,
    totalComments,
    totalReports,
    pendingReports,
    todayNewUsers,
    todayNewBoards,
  } = stats || {};

  return (
    <div>
      <h2 style={{marginBottom:16}}>관리자 대시보드</h2>

      {/* 상단 카드 4개 */}
      <div className="admin-card-grid">
        <DashboardCard title="총 사용자" value={fmt(totalUsers)} to="/admin/users" />
        <DashboardCard title="활성 사용자" value={fmt(activeUsers)} />
        <DashboardCard title="게시물 수" value={fmt(totalBoards)} to="/admin/boards" />
        <DashboardCard title="댓글 수" value={fmt(totalComments)} />
      </div>

      {/* 하단 카드 3개 */}
      <div className="admin-card-grid" style={{marginTop:16}}>
        <DashboardCard title="신고 총합" value={fmt(totalReports)} to="/admin/reports" />
        <DashboardCard title="대기 중 신고" value={fmt(pendingReports)} to="/admin/reports" highlight />
        <DashboardCard title="오늘 신규" value={`유저 ${fmt(todayNewUsers)} / 글 ${fmt(todayNewBoards)}`} />
      </div>

      {/* 링크 모음 */}
      <div style={{marginTop:24, display:"flex", gap:12, flexWrap:"wrap"}}>
        <Link className="admin-linkbtn" to="/admin/users">사용자 관리</Link>
        <Link className="admin-linkbtn" to="/admin/boards">게시물 관리</Link>
        <Link className="admin-linkbtn" to="/admin/reports">신고 관리</Link>
        <Link className="admin-linkbtn" to="/admin/banned-words">금지어 관리</Link>
      </div>
    </div>
  );
}

function DashboardCard({ title, value, to, highlight }) {
  const body = (
    <div className={`admin-card ${highlight ? "admin-card--warn": ""}`}>
      <div className="admin-card__title">{title}</div>
      <div className="admin-card__value">{value}</div>
    </div>
  );
  if (to) return <Link to={to} style={{textDecoration:"none"}}>{body}</Link>;
  return body;
}
