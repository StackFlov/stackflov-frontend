import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import {
  PageWrap, Header, Title, Sub,
} from "../../styles/components/admin/AdminCommonStyled";
import {
  CardsGrid, StatCard, CardTitle, CardValue,
  LinkRow, LinkBtn, ChartCard, ChartTitle,
} from "../../styles/components/admin/AdminDashboardStyled";

// recharts (JS 그대로 사용)
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
  const [animSeed, setAnimSeed] = useState(0); // 애니메이션 재생용 키

  // 데이터 로드
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

  // stats가 바뀔 때마다 차트를 재마운트해서 애니메이션 재생
  useEffect(() => {
    setAnimSeed((s) => s + 1);
  }, [stats]);

  // 그래프 데이터 (훅 아님 → ESLint hooks 경고 없음)
  const trendRows = buildTrendRows(stats);

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

      {/* ✅ 트렌드 그래프 (애니메이션 포함) */}
      <ChartCard>
        <ChartTitle>최근 14일 트렌드</ChartTitle>
        <div style={{ width: "100%", height: 280 }}>
          <ResponsiveContainer>
            {/* key=animSeed 로 데이터 변경 시마다 부드럽게 재생 */}
            <LineChart
              key={animSeed}
              data={trendRows}
              margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis domain={[0, (max) => Math.max(5, (max ?? 0) + 2)]} allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="newUsers"
                name="신규 유저"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
                isAnimationActive
                animationBegin={0}
                animationDuration={900}
                animationEasing="ease-out"
              />
              <Line
                type="monotone"
                dataKey="newBoards"
                name="신규 글"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
                isAnimationActive
                animationBegin={0}
                animationDuration={900}
                animationEasing="ease-out"
              />
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
      // 비교키(YYYY-MM-DD)
      dateISO: toISODateKey(d),
      label: `${d.getMonth() + 1}/${d.getDate()}`,
      newUsers: 0,
      newBoards: 0,
    };
  });

  // daily가 오면 병합
  const daily = Array.isArray(stats?.daily) ? stats.daily : null;
  if (daily) {
    const byISO = new Map(grid.map(g => [g.dateISO, g]));
    daily.forEach((row) => {
      // 날짜 키 여러 형태 지원
      const k = toISODateKey(row.date ?? row.day ?? row.key ?? row.createdDate);
      const slot = byISO.get(k);
      if (!slot) return;

      // ▼ 숫자 필드 별칭 폭넓게 지원
      slot.newUsers = pickNum(row, [
        "newUsers", "users", "user",
        "signups", "signup",
        "newUser", "newUserCount", "userCount",
        "countUsers"
      ], 0);

      slot.newBoards = pickNum(row, [
        "newBoards", "boards", "board",
        "posts", "post",
        "boardCount", "postCount",
        "countBoards"
      ], 0);
    });
  } else {
    // daily가 없으면 오늘값만 채워서라도 보이게
    const last = grid[grid.length - 1];
    last.newUsers  = Number(stats?.todayNewUsers  ?? 0);
    last.newBoards = Number(stats?.todayNewBoards ?? 0);
  }

  return grid;
}

// 날짜 문자열/Date 어떤게 와도 YYYY-MM-DD로 정규화
function toISODateKey(v) {
  try {
    if (v instanceof Date) {
      const y = v.getFullYear();
      const m = String(v.getMonth() + 1).padStart(2, "0");
      const d = String(v.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    }
    if (v) {
      // 문자열일 때 앞 10자(YYYY-MM-DD) 우선, 실패하면 Date 파싱
      const s = String(v);
      if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
      const d2 = new Date(s);
      if (!isNaN(d2)) return toISODateKey(d2);
    }
  } catch {}
  const now = new Date();
  return toISODateKey(now);
}

// 안전한 숫자 추출
function pickNum(obj, keys, def = 0) {
  for (const k of keys) {
    const val = obj?.[k];
    if (val !== undefined && val !== null && !Number.isNaN(Number(val))) {
      return Number(val);
    }
  }
  return def;
}