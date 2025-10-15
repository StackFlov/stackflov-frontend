// src/pages/AdminDetailedStats.js
import React, { useEffect, useMemo, useState } from "react";
import api from "../../utils/api";

// 기간 프리셋
const PRESETS = [
  { v: "7d",  label: "최근 7일" },
  { v: "30d", label: "최근 30일" },
  { v: "90d", label: "최근 90일" },
  { v: "custom", label: "사용자 지정" },
];

export default function AdminDetailedStats() {
  const [preset, setPreset] = useState("7d");
  const [from, setFrom]   = useState("");   // YYYY-MM-DD
  const [to, setTo]       = useState("");   // YYYY-MM-DD
  const [loading, setLoading] = useState(false);
  const [err, setErr]         = useState(null);
  const [stats, setStats]     = useState(null);

  const params = useMemo(() => {
    const p = {};
    if (preset !== "custom") {
      p.range = preset; // 서버가 range 프리셋을 지원한다면 사용
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

  useEffect(() => { load(); }, [params]); // preset/from/to 바뀔 때마다 재조회

  const entries =
    stats && typeof stats === "object" ? Object.entries(stats) : [];

  // 합계/최근값 도우미
  const sum  = (arr, key) =>
    Array.isArray(arr) ? arr.reduce((a, r) => a + (Number(r[key]) || 0), 0) : 0;
  const last = (arr, key) =>
    Array.isArray(arr) && arr.length ? (Number(arr[arr.length - 1][key]) || 0) : 0;

  return (
    <div>
      <h2 style={{ marginBottom: 12 }}>상세 통계</h2>

      {/* 상단 컨트롤 */}
      <div
        className="card"
        style={{
          padding: 12,
          marginBottom: 12,
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <select value={preset} onChange={(e) => setPreset(e.target.value)}>
          {PRESETS.map((p) => (
            <option key={p.v} value={p.v}>
              {p.label}
            </option>
          ))}
        </select>
        {preset === "custom" && (
          <>
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <span>~</span>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </>
        )}
        <button onClick={load}>새로고침</button>
      </div>

      {/* 요약 카드: 합계 기준 (원하면 last(...)로 최근값 카드로 변경 가능) */}
      <div className="admin-card-grid" style={{ marginBottom: 12 }}>
        <SumCard title="신규 사용자" value={fmt(sum(stats?.dailySignups,  "count"))} />
        <SumCard title="신규 게시글" value={fmt(sum(stats?.dailyBoards,   "count"))} />
        <SumCard title="신규 댓글"  value={fmt(sum(stats?.dailyComments, "count"))} />
        <SumCard title="신규 리뷰"  value={fmt(sum(stats?.dailyReviews,  "count"))} />
      </div>

      {/* 상태 */}
      {loading && <div>불러오는 중…</div>}
      {err && <div style={{ color: "#c00" }}>오류: {String(err)}</div>}

      {/* 원본 키-값 표 (백엔드 반환 전체 가시화) */}
      {!loading && !err && (
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: 260 }}>키</th>
              <th>값</th>
            </tr>
          </thead>
          <tbody>
            {entries.length === 0 && (
              <tr>
                <td colSpan={2} style={{ textAlign: "center", color: "#666" }}>
                  데이터 없음
                </td>
              </tr>
            )}
            {entries.map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{renderValue(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function SumCard({ title, value }) {
  return (
    <div className="admin-card">
      <div className="admin-card__title">{title}</div>
      <div className="admin-card__value">{value}</div>
    </div>
  );
}

const fmt   = (n) => (typeof n === "number" ? n.toLocaleString() : n ?? "-");
const isObj = (v) => v && typeof v === "object";
const isArr = (v) => Array.isArray(v);

function renderValue(value) {
  if (isArr(value)) {
    // DailyStatDto[] 가정: [{ date: 'YYYY-MM-DD', count: 3 }, ...]
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
    <table className="table" style={{ margin: 0 }}>
      <thead>
        <tr>
          <th style={{ width: 140 }}>날짜</th>
          <th style={{ width: 120, textAlign: "right" }}>수치</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r, i) => (
          <tr key={i}>
            <td>{fmtDate(r[dateKey])}</td>
            <td style={{ textAlign: "right" }}>
              {typeof r[countKey] === "number"
                ? r[countKey].toLocaleString()
                : String(r[countKey] ?? "-")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
