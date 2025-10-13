// src/pages/AdminDetailedStats.js
import React, { useEffect, useMemo, useState } from "react";
import api from "../../utils/api";

// 기간 프리셋
const PRESETS = [
  { v: "7d", label: "최근 7일" },
  { v: "30d", label: "최근 30일" },
  { v: "90d", label: "최근 90일" },
  { v: "custom", label: "사용자 지정" },
];

export default function AdminDetailedStats() {
  const [preset, setPreset] = useState("7d");
  const [from, setFrom] = useState("");   // YYYY-MM-DD
  const [to, setTo] = useState("");       // YYYY-MM-DD
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [stats, setStats] = useState(null);

  const params = useMemo(() => {
    // 백엔드가 start/end 같은 쿼리를 지원하면 자동으로 전달됨. (미지원이면 무시되어도 무해)
    const p = {};
    if (preset !== "custom") {
      p.range = preset; // 서버가 range 프리셋을 지원한다면 사용
    } else {
      if (from) p.startDate = from;
      if (to) p.endDate = to;
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

  useEffect(() => { load(); /* preset/from/to 바뀜마다 */ }, [/* eslint-disable-line */ params]);

  const entries = stats && typeof stats === "object"
    ? Object.entries(stats)
    : [];

  // 카드에 자주 쓸만한 값 키 힌트(백엔드 구조에 맞춰 자유롭게 교체)
  const k = (name, d = "-") => stats?.[name] ?? d;

  return (
    <div>
      <h2 style={{ marginBottom: 12 }}>상세 통계</h2>

      {/* 상단 컨트롤 */}
      <div className="card" style={{ padding: 12, marginBottom: 12, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <select value={preset} onChange={(e) => setPreset(e.target.value)}>
          {PRESETS.map(p => <option key={p.v} value={p.v}>{p.label}</option>)}
        </select>
        {preset === "custom" && (
          <>
            <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
            <span>~</span>
            <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
          </>
        )}
        <button onClick={load}>새로고침</button>
      </div>

      {/* 요약 카드 (원하는 키로 바꿔서 사용) */}
      <div className="admin-card-grid" style={{ marginBottom: 12 }}>
        <SumCard title="신규 사용자" value={fmt(k("newUsers"))} />
        <SumCard title="신규 게시글" value={fmt(k("newBoards"))} />
        <SumCard title="신규 댓글" value={fmt(k("newComments"))} />
        <SumCard title="신고 수" value={fmt(k("reportCount"))} />
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
              <tr><td colSpan={2} style={{ textAlign: "center", color: "#666" }}>데이터 없음</td></tr>
            )}
            {entries.map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>
                  {isObj(value) ? <pre style={{ margin: 0 }}>{JSON.stringify(value, null, 2)}</pre> : String(value)}
                </td>
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
const fmt = (n) => (typeof n === "number" ? n.toLocaleString() : (n ?? "-"));
const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);
