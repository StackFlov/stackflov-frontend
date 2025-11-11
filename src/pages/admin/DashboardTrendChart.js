import React, { useEffect, useMemo, useState } from "react";
import api from "../utils/api";
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

/**
 * 최근 14일 신규 유저/게시글 추이 라인차트
 * - 1순위: GET /admin/dashboard/trend?days=14 (권장 응답 형식)
 *   { daily: [{ date:"2025-11-01", newUsers:3, newBoards:10 }, ...] }
 * - 2순위: fallbackStats.daily / fallbackStats.dailyNewUsers 등 추정
 * - 3순위: 데이터 없으면 14일 0으로 채우고 마지막 날만 today* 값 반영
 */
export default function DashboardTrendChart({ fallbackStats }) {
  const [rows, setRows] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setErr(null);

    api
      .get("/admin/dashboard/trend?days=14")
      .then(({ data }) => {
        if (!alive) return;
        setRows(normalizeFromApi(data));
      })
      .catch(() => {
        if (!alive) return;
        // API가 없거나 실패하면 대시보드의 집계(stats)를 기반으로 안전하게 생성
        setRows(normalizeFromFallback(fallbackStats));
      })
      .finally(() => alive && setLoading(false));

    return () => {
      alive = false;
    };
  }, [fallbackStats]);

  const content = useMemo(() => {
    if (loading)
      return (
        <div
          style={{
            height: 260,
            display: "grid",
            placeItems: "center",
            color: "#6b7280",
          }}
        >
          불러오는 중…
        </div>
      );
    if (err)
      return (
        <div style={{ color: "#c00", padding: 8 }}>
          그래프 로딩 오류: {String(err)}
        </div>
      );
    if (!rows?.length)
      return (
        <div
          style={{
            height: 260,
            display: "grid",
            placeItems: "center",
            color: "#6b7280",
          }}
        >
          표시할 데이터가 없습니다.
        </div>
      );

    return (
      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer>
          <LineChart data={rows} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<PrettyTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="newUsers"
              name="신규 유저"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="newBoards"
              name="신규 글"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }, [loading, err, rows]);

  return content;
}

/* ---------------- helpers ---------------- */

function normalizeFromApi(apiData) {
  // 가능한 여러 응답 형태를 수용
  const list =
    apiData?.daily ??
    apiData?.data ??
    (Array.isArray(apiData) ? apiData : []);

  return fillLast14Days(list.map(pickFields));
}

function normalizeFromFallback(stats = {}) {
  const {
    daily, // [{date, newUsers, newBoards}] 형태일 수도 있음
    dailyNewUsers,
    dailyNewBoards,
    todayNewUsers,
    todayNewBoards,
  } = stats || {};

  if (Array.isArray(daily) && daily.length) {
    return fillLast14Days(daily.map(pickFields));
  }

  // 배열 두 개로 오는 경우(길이가 같다고 가정)
  if (Array.isArray(dailyNewUsers) || Array.isArray(dailyNewBoards)) {
    const today = new Date();
    const merged = lastNDates(14).map((d, iFromEnd) => {
      const idx = (dailyNewUsers?.length ?? 0) - (14 - iFromEnd);
      return {
        date: isoDate(d),
        newUsers: Number(dailyNewUsers?.[idx] ?? 0),
        newBoards: Number(dailyNewBoards?.[idx] ?? 0),
      };
    });
    return labelize(merged);
  }

  // 최소 보장: 14일 0으로 채우되, 오늘 칸에 today* 값을 넣음
  const days = fillLast14Days([]);
  const last = days[days.length - 1];
  last.newUsers = Number(todayNewUsers ?? 0);
  last.newBoards = Number(todayNewBoards ?? 0);
  return days;
}

function pickFields(x = {}) {
  return {
    date: x.date || x.day || x.key || x.createdDate || isoDate(new Date()),
    newUsers:
      x.newUsers ?? x.users ?? x.signup ?? x.countUsers ?? x.user ?? 0,
    newBoards:
      x.newBoards ?? x.boards ?? x.posts ?? x.countBoards ?? x.board ?? 0,
  };
}

function fillLast14Days(raw = []) {
  // 기준 그리드(마지막 14일) 만들고 raw 값을 덮어쓰기
  const grid = lastNDates(14).map((d) => ({
    date: isoDate(d),
    newUsers: 0,
    newBoards: 0,
  }));

  const map = new Map();
  raw.forEach((r) => {
    const key = toISODateKey(r.date);
    map.set(key, { newUsers: Number(r.newUsers ?? 0), newBoards: Number(r.newBoards ?? 0) });
  });

  const merged = grid.map((g) => {
    const m = map.get(g.date);
    return m ? { ...g, ...m } : g;
  });

  return labelize(merged);
}

function labelize(arr) {
  return arr.map((r) => ({
    ...r,
    label: labelDate(r.date),
  }));
}

function lastNDates(n) {
  const out = [];
  const base = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(base);
    d.setDate(base.getDate() - i);
    out.push(d);
  }
  return out;
}

function isoDate(d) {
  if (typeof d === "string") return toISODateKey(d);
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function toISODateKey(value) {
  // "2025-11-03", "2025/11/03", Date 객체 등 다양한 입력을 ISO-날짜문자열로 정규화
  try {
    if (value instanceof Date) return isoDate(value);
    const d = new Date(value);
    if (!isNaN(d)) return isoDate(d);
  } catch {}
  return isoDate(new Date());
}

function labelDate(dateLike) {
  const d = new Date(dateLike);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

function PrettyTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const u = payload.find((p) => p.dataKey === "newUsers")?.value ?? 0;
  const b = payload.find((p) => p.dataKey === "newBoards")?.value ?? 0;
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: "8px 10px",
        boxShadow: "0 6px 14px rgba(0,0,0,.06)",
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 4 }}>{label}</div>
      <div>신규 유저: {Number(u).toLocaleString()}</div>
      <div>신규 글: {Number(b).toLocaleString()}</div>
    </div>
  );
}
