import React, { useEffect, useMemo, useState } from "react";
import api from "../../utils/api";

// 공통 스타일
import {
  PageWrap, Header, Title, Sub,
  SearchCard, Row, Select, Input, Spacer,
  PrimaryBtn, GhostBtn,
  TableCard, Table, Th, Td,
  ErrorText, InfoText, Empty
} from "../../styles/components/admin/AdminCommonStyled";

// 대시보드 카드/그리드 재사용 (없다면 주석 처리하고 임시 SumCard 써도 OK)
import {
  CardsGrid, StatCard, CardTitle, CardValue
} from "../../styles/components/admin/AdminDashboardStyled";

// 기간 프리셋
const PRESETS = [
  { v: "7d",  label: "최근 7일" },
  { v: "30d", label: "최근 30일" },
  { v: "90d", label: "최근 90일" },
  { v: "custom", label: "사용자 지정" },
];

export default function AdminDetailedStats() {
  const [preset, setPreset] = useState("7d");
  const [from, setFrom]     = useState("");   // YYYY-MM-DD
  const [to, setTo]         = useState("");   // YYYY-MM-DD
  const [loading, setLoading] = useState(false);
  const [err, setErr]         = useState(null);
  const [stats, setStats]     = useState(null);

  const params = useMemo(() => {
    const p = {};
    if (preset !== "custom") {
      p.range = preset;
    } else {
      if (from) p.startDate = from;
      if (to)   p.endDate   = to;
    }
    return p;
  }, [preset, from, to]);

  const load = async () => {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get("/admin/dashboard/detailed-stats", { params });
      setStats(data || {});
    } catch (e) {
      setErr(e?.response?.data?.message || e.message || "불러오기 실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); /* preset/from/to 바뀔 때마다 재조회 */ }, [/* eslint-disable-line */ params]);

  const entries = stats && typeof stats === "object" ? Object.entries(stats) : [];

  // 합계/최근값 유틸
  const sum  = (arr, key) => Array.isArray(arr) ? arr.reduce((a, r) => a + (Number(r[key]) || 0), 0) : 0;
  // const last = (arr, key) => Array.isArray(arr) && arr.length ? (Number(arr[arr.length - 1][key]) || 0) : 0;

  return (
    <PageWrap>
      <Header>
        <Title>상세 통계</Title>
        <Sub>기간별 지표를 조회하고, 원본 데이터를 표로 확인할 수 있어요.</Sub>
      </Header>

      {/* 상단 컨트롤 */}
      <SearchCard>
        <Row>
          <Select value={preset} onChange={(e) => setPreset(e.target.value)}>
            {PRESETS.map(p => <option key={p.v} value={p.v}>{p.label}</option>)}
          </Select>

          {preset === "custom" && (
            <>
              <Input type="date" value={from} onChange={(e) => setFrom(e.target.value)} style={{ flex: "0 0 180px" }} />
              <span>~</span>
              <Input type="date" value={to} onChange={(e) => setTo(e.target.value)} style={{ flex: "0 0 180px" }} />
            </>
          )}

          <PrimaryBtn onClick={load}>새로고침</PrimaryBtn>
          <Spacer />
        </Row>
      </SearchCard>

      {/* 요약 카드 (합계 기준) */}
      <CardsGrid style={{ marginBottom: 12 }}>
        <DashCard title="신규 사용자(합계)" value={fmt(sum(stats?.dailySignups,  "count"))} />
        <DashCard title="신규 게시글(합계)" value={fmt(sum(stats?.dailyBoards,   "count"))} />
        <DashCard title="신규 댓글(합계)"   value={fmt(sum(stats?.dailyComments, "count"))} />
        <DashCard title="신규 리뷰(합계)"   value={fmt(sum(stats?.dailyReviews,  "count"))} />
      </CardsGrid>

      {loading && <InfoText>불러오는 중…</InfoText>}
      {err && <ErrorText>오류: {String(err)}</ErrorText>}

      {/* 원본 키-값 표 */}
      {!loading && !err && (
        entries.length === 0 ? (
          <Empty>데이터 없음</Empty>
        ) : (
          <TableCard>
            <Table>
              <thead>
                <tr>
                  <Th w={260}>키</Th>
                  <Th>값</Th>
                </tr>
              </thead>
              <tbody>
                {entries.map(([key, value]) => (
                  <tr key={key}>
                    <Td w={260}>{key}</Td>
                    <Td>{renderValue(value)}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableCard>
        )
      )}
    </PageWrap>
  );
}

function DashCard({ title, value }) {
  return (
    <StatCard>
      <CardTitle>{title}</CardTitle>
      <CardValue>{value}</CardValue>
    </StatCard>
  );
}

const fmt   = (n) => (typeof n === "number" ? n.toLocaleString() : n ?? "-");
const isObj = (v) => v && typeof v === "object";
const isArr = (v) => Array.isArray(v);

function renderValue(value) {
  if (isArr(value)) {
    // DailyStatDto[]: [{ date: 'YYYY-MM-DD', count: 3 }, ...] 등
    if (value.length > 0 && typeof value[0] === "object") {
      return <MiniSeriesTable data={value} />;
    }
    return <pre style={{ margin: 0 }}>{JSON.stringify(value, null, 2)}</pre>;
  }
  if (isObj(value)) {
    return <pre style={{ margin: 0 }}>{JSON.stringify(value, null, 2)}</pre>;
  }
  return String(value);
}

function MiniSeriesTable({ data }) {
  // DailyStatDto: { date, count } 또는 { day/date, value/count } 방어적 처리
  const pick = (row, keys) => (row ? keys.find((k) => k in row) : undefined);
  const dateKey  = data.length ? pick(data[0], ["date", "day"]) : "date";
  const countKey = data.length ? pick(data[0], ["count", "value"]) : "count";

  const fmtDate = (d) =>
    Array.isArray(d)
      ? `${d[0]}-${String(d[1]).padStart(2, "0")}-${String(d[2]).padStart(2, "0")}`
      : d;

  return (
    <Table style={{ margin: 0 }}>
      <thead>
        <tr>
          <Th w={140}>날짜</Th>
          <Th w={120} style={{ textAlign: "right" }}>수치</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((r, i) => (
          <tr key={i}>
            <Td w={140}>{fmtDate(r[dateKey])}</Td>
            <Td w={120} style={{ textAlign: "right" }}>
              {typeof r[countKey] === "number"
                ? r[countKey].toLocaleString()
                : String(r[countKey] ?? "-")}
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
