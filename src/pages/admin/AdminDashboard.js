import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import {
  PageWrap, Header, Title, Sub,
} from "../../styles/components/admin/AdminCommonStyled";
import {
  CardsGrid, StatCard, CardTitle, CardValue,
  LinkRow, LinkBtn, ChartCard, ChartTitle,
} from "../../styles/components/admin/AdminDashboardStyled";

import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

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

  // ✅ 훅은 조기 리턴보다 위에서 호출되어야 함
  const trendRows = useMemo(() => buildTrendRows(stats), [stats]);

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

      {/* 그래프 */}
      <ChartCard>
        <ChartTitle>최근 14일 트렌드</ChartTitle>
        <div style={{ width: "100%", height: 280 }}>
          <ResponsiveContainer>
            <LineChart data={trendRows} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis domain={[0, (max) => Math.max(5, (max ?? 0) + 2)]} allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="newUsers"  name="신규 유저" strokeWidth={2} dot />
              <Line type="monotone" dataKey="newBoards" name="신규 글"  strokeWidth={2} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      {/* 링크 모음 */}
      <LinkRow>
        <LinkBtn to="/admin/users">사용자 관리</LinkBtn>
        <LinkBtn to="/admin/boards">게시물 관리</LinkBtn>
        <LinkBtn to="/admin/reports">신고 관리</LinkBtn>
        <LinkBtn to="/admin/banned-words">금지어 관리</LinkBtn>
        <LinkBtn to="/admin/dashboard/detailed">상세 통계</LinkBtn>
        <LinkBtn to="/admin/notices">공지 관리</LinkBtn>
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

/* ---------------- helpers (chart) ---------------- */

function buildTrendRows(stats = {}) {
  const days = 14;
  const base = new Date();

  // 최근 14일 기본 그리드
  const grid = Array.from({ length: days }, (_, i) => {
    const d = new Date(base);
    d.setDate(base.getDate() - (days - 1 - i));
    return {
      dateISO: isoDate(d),
      label: `${d.getMonth() + 1}/${d.getDate()}`,
      newUsers: 0,
      newBoards: 0,
    };
  });

  // 백엔드 daily가 있으면 반영
  const daily = Array.isArray(stats?.daily) ? stats.daily : null;
  if (daily) {
    const byISO = new Map(grid.map(g => [g.dateISO, g]));
    daily.forEach((x) => {
      const key = toISODateKey(x.date || x.day || x.key);
      const row = byISO.get(key);
      if (row) {
        row.newUsers  = Number(x.newUsers  ?? x.users  ?? 0);
        row.newBoards = Number(x.newBoards ?? x.boards ?? x.posts ?? 0);
      }
    });
  } else {
    // daily 없으면 오늘 값만 채워서 보이게
    const last = grid[grid.length - 1];
    last.newUsers  = Number(stats?.todayNewUsers  ?? 0);
    last.newBoards = Number(stats?.todayNewBoards ?? 0);
  }

  return grid;
}

function isoDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function toISODateKey(v) {
  try {
    const d = v instanceof Date ? v : new Date(v);
    if (!isNaN(d)) return isoDate(d);
  } catch {}
  return isoDate(new Date());
}
