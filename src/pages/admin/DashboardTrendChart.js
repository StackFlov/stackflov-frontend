import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  Bar,
  Line,
  CartesianGrid,
} from "recharts";

/**
 * 시도하는 엔드포인트: /admin/dashboard/daily?days=14
 * 응답 예시: [{ date:"2025-11-01", newUsers:1, newBoards:3, newComments:2, reports:0 }, ...]
 * 엔드포인트 없으면 props로 받은 snapshot(stats)로 막대 그래프 대체
 */
export default function DashboardTrendChart({ fallbackStats }) {
  const [rows, setRows] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let alive = true;
    setErr(null);

    api.get("/admin/dashboard/daily?days=14")
      .then(({ data }) => {
        if (!alive) return;
        const arr = (Array.isArray(data) ? data : data?.days || []).map((d) => ({
          date: (d.date || "").slice(5).replace("-", "/"), // MM/DD
          newUsers: d.newUsers ?? 0,
          newBoards: d.newBoards ?? 0,
          newComments: d.newComments ?? 0,
          reports: d.reports ?? 0,
        }));
        setRows(arr);
      })
      .catch((e) => {
        if (alive) {
          setErr(e?.response?.data?.message || e.message || "불러오기 실패");
          setRows([]); // fallback 사용
        }
      });

    return () => { alive = false; };
  }, []);

  // 1) 일자별 데이터가 있으면 트렌드 차트
  if (rows && rows.length > 0) {
    return (
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <ComposedChart data={rows} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={(v) => (v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v)} />
            <Tooltip />
            <Legend />
            <Bar dataKey="newBoards" name="신규 글" barSize={20} />
            <Bar dataKey="newComments" name="신규 댓글" barSize={20} />
            <Area type="monotone" dataKey="newUsers" name="신규 유저" fillOpacity={0.2} />
            <Line type="monotone" dataKey="reports" name="신고" dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }

  // 2) 엔드포인트 없으면 스냅샷 막대 그래프
  const snap = [
    { name: "총 사용자", value: fallbackStats?.totalUsers ?? 0 },
    { name: "게시물",   value: fallbackStats?.totalBoards ?? 0 },
    { name: "댓글",     value: fallbackStats?.totalComments ?? 0 },
    { name: "신고",     value: fallbackStats?.totalReports ?? 0 },
    { name: "대기중",   value: fallbackStats?.pendingReports ?? 0 },
  ];

  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer>
        <ComposedChart data={snap} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" name="현재 합계" barSize={24} />
        </ComposedChart>
      </ResponsiveContainer>

      {err && (
        <div style={{ marginTop: 8, fontSize: 12, color: "#6b7280" }}>
          일자별 데이터 API가 없어 스냅샷 그래프로 대체했어요. ({String(err)})
        </div>
      )}
    </div>
  );
}
