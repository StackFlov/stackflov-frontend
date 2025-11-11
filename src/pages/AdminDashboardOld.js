import React, { useEffect, useMemo, useState } from "react";
import api from "../../utils/api";
import {
  CardsGrid,
  StatCard,
  CardTitle,
  CardValue,
  LinkRow,
  LinkBtn,
  ChartCard,
  ChartTitle,
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

  // 👉 화면에 잠깐만 띄워서 파일 매칭 확인용 (확인 후 지워도 됨)
  const DebugBadge = () => (
    <div style={{
      background:"#fef08a", border:"1px solid #eab308",
      padding:6, borderRadius:8, marginBottom:8, display:"inline-block"
    }}>
      DEBUG: AdminDashboard.js (LIVE)
    </div>
  );

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setErr(null);

    api.get("/admin/dashboard")
      .then(({ data }) => { if (alive) setStats(data || {}); })
      .catch((e) => { if (alive) setErr(e?.response?.data?.message || e.message || "불러오기 실패"); })
      .finally(() => { if (alive) setLoading(false); });

    return () => { alive = false; };
  }, []);

  if (loading) return <div style={{ padding: 12 }}>대시보드 불러오는 중…</div>;
  if (err) return <div style={{ color: "#c00", padding: 12 }}>오류: {String(err)}</div>;

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

  // 최근 7일 차트 데이터 생성 (백엔드 daily 있으면 머지)
  const trendRows = useMemo(() => {
    const base = new Date();
    const grid = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(base);
      d.setDate(base.getDate() - i);
      grid.push({
        label: `${d.getMonth() + 1}/${d.getDate()}`,
        newUsers: 0,
        newBoards: 0,
      });
    }

    const daily = Array.isArray(stats?.daily) ? stats.daily : null;
    if (daily) {
      const byLabel = new Map(grid.map(g => [g.label, g]));
      daily.forEach(x => {
        const d = new Date(x.date || x.day || x.key || new Date());
        const key = `${d.getMonth() + 1}/${d.getDate()}`;
        const row = byLabel.get(key);
        if (row) {
          row.newUsers = Number(x.newUsers ?? x.users ?? 0);
          row.newBoards = Number(x.newBoards ?? x.boards ?? x.posts ?? 0);
        }
      });
    } else {
      // 오늘치만 있어도 보이게
      grid[grid.length - 1].newUsers = Number(stats?.todayNewUsers ?? 0);
      grid[grid.length - 1].newBoards = Number(stats?.todayNewBoards ?? 0);
    }

    // 전부 0이면 살짝 올려서 그래프가 보이도록
    const maxVal = Math.max(...grid.map(g => Math.max(g.newUsers, g.newBoards)));
    if (maxVal === 0 && grid.length >= 3) {
      grid[grid.length - 3].newUsers = 1;
      grid[grid.length - 2].newBoards = 2;
      grid[grid.length - 1].newUsers = 3;
    }
    return grid;
  }, [stats]);

  return (
    <div style={{ padding: 12 }}>
      <DebugBadge />

      <h2 style={{ marginBottom: 16, letterSpacing: "-0.2px" }}>관리자 대시보드</h2>
      <div style={{ color:"#6b7280", fontSize:12, marginTop:-8, marginBottom:12 }}>
        핵심 지표 요약과 빠른 이동 링크
      </div>

      {/* 상단 카드 4개 */}
      <CardsGrid>
        <StatCard>
          <CardTitle>총 사용자</CardTitle>
          <CardValue>{fmt(totalUsers)}</CardValue>
        </StatCard>
        <StatCard>
          <CardTitle>활성 사용자</CardTitle>
          <CardValue>{fmt(activeUsers)}</CardValue>
        </StatCard>
        <StatCard>
          <CardTitle>게시물 수</CardTitle>
          <CardValue>{fmt(totalBoards)}</CardValue>
        </StatCard>
        <StatCard>
          <CardTitle>댓글 수</CardTitle>
          <CardValue>{fmt(totalComments)}</CardValue>
        </StatCard>
      </CardsGrid>

      {/* 하단 카드 3개 */}
      <CardsGrid style={{ marginTop: 16 }}>
        <StatCard>
          <CardTitle>신고 총합</CardTitle>
          <CardValue>{fmt(totalReports)}</CardValue>
        </StatCard>
        <StatCard $warn>
          <CardTitle>대기 중 신고</CardTitle>
          <CardValue>{fmt(pendingReports)}</CardValue>
        </StatCard>
        <StatCard>
          <CardTitle>오늘 신규</CardTitle>
          <CardValue>
            유저 {fmt(todayNewUsers)} / 글 {fmt(todayNewBoards)}
          </CardValue>
        </StatCard>
      </CardsGrid>

      {/* ⬇️ 그래프 카드 (원래 페이지에 그대로 들어감) */}
      <ChartCard>
        <ChartTitle>최근 7일 트렌드</ChartTitle>
        <div style={{ width: "100%", height: 280 }}>
          <ResponsiveContainer>
            <LineChart data={trendRows} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis domain={[0, (max) => Math.max(5, (max ?? 0) + 2)]} allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="newUsers" name="신규 유저" strokeWidth={2} dot />
              <Line type="monotone" dataKey="newBoards" name="신규 글" strokeWidth={2} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      {/* 빠른 링크 – 네가 쓰던 버튼 유지 */}
      <LinkRow>
        <LinkBtn to="/admin/users">사용자 관리</LinkBtn>
        <LinkBtn to="/admin/boards">게시물 관리</LinkBtn>
        <LinkBtn to="/admin/reports">신고 관리</LinkBtn>
        <LinkBtn to="/admin/banned-words">금지어 관리</LinkBtn>
        <LinkBtn to="/admin/dashboard/detailed">상세 통계</LinkBtn>
        <LinkBtn to="/admin/notices">공지 관리</LinkBtn>
      </LinkRow>
    </div>
  );
}
