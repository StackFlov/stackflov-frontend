import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import {
  PageWrap, Header, Title, Sub,
} from "../../styles/components/admin/AdminCommonStyled";
import {
  CardsGrid, StatCard, CardTitle, CardValue,
  LinkRow, LinkBtn
} from "../../styles/components/admin/AdminDashboardStyled";

const fmt = (n) => (typeof n === "number" ? n.toLocaleString() : "-");

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setErr(null);

    api.get("/admin/dashboard/stats")
      .then(({ data }) => { if (alive) setStats(data || {}); })
      .catch((e) => {
        if (alive) setErr(e?.response?.data?.message || e.message || "불러오기 실패");
      })
      .finally(() => { if (alive) setLoading(false); });

    return () => { alive = false; };
  }, []);

  if (loading) return <PageWrap>대시보드 불러오는 중…</PageWrap>;
  if (err)      return <PageWrap style={{ color:"#c00" }}>오류: {String(err)}</PageWrap>;

  const {
    totalUsers, activeUsers, totalBoards, totalComments,
    totalReports, pendingReports, todayNewUsers, todayNewBoards,
  } = stats || {};

  return (
    <PageWrap>
      <Header>
        <Title>관리자 대시보드</Title>
        <Sub>핵심 지표 요약과 빠른 이동 링크</Sub>
      </Header>

      {/* 상단 카드 */}
      <CardsGrid>
        <DashCard title="총 사용자"    value={fmt(totalUsers)}   to="/admin/users" />
        <DashCard title="활성 사용자"   value={fmt(activeUsers)} />
        <DashCard title="게시물 수"     value={fmt(totalBoards)}  to="/admin/boards" />
        <DashCard title="댓글 수"       value={fmt(totalComments)} />
      </CardsGrid>

      {/* 하단 카드 */}
      <CardsGrid style={{ marginTop: 16 }}>
        <DashCard title="신고 총합"   value={fmt(totalReports)}  to="/admin/reports" />
        <DashCard title="대기 중 신고" value={fmt(pendingReports)} to="/admin/reports" warn />
        <DashCard title="오늘 신규"   value={`유저 ${fmt(todayNewUsers)} / 글 ${fmt(todayNewBoards)}`} />
      </CardsGrid>

      {/* 링크 모음 */}
      <LinkRow>
        <LinkBtn to="/admin/users">사용자 관리</LinkBtn>
        <LinkBtn to="/admin/boards">게시물 관리</LinkBtn>
        <LinkBtn to="/admin/reports">신고 관리</LinkBtn>
        <LinkBtn to="/admin/banned-words">금지어 관리</LinkBtn>
        <LinkBtn to="/admin/dashboard/detailed">상세 통계</LinkBtn>
      </LinkRow>
    </PageWrap>
  );
}

function DashCard({ title, value, to, warn }) {
  const body = (
    <StatCard $warn={warn}>
      <CardTitle>{title}</CardTitle>
      <CardValue>{value}</CardValue>
    </StatCard>
  );
  return to ? <Link to={to} style={{ textDecoration:"none" }}>{body}</Link> : body;
}
