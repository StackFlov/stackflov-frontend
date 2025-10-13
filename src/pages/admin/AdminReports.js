import React, { useEffect, useMemo, useState } from "react";
import api from "../../utils/api";

const PAGE_SIZE = 10;
const STATUSES = ["ALL", "PENDING", "REVIEWED", "REJECTED"];

export default function AdminReports() {
  const [page, setPage] = useState(0);
  const [status, setStatus] = useState("ALL");
  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ totalPages: 0, number: 0, first: true, last: true });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [adminComment, setAdminComment] = useState("");

  const params = useMemo(() => {
    const p = { page, size: PAGE_SIZE, sort: "createdAt,DESC" };
    if (status !== "ALL") p.status = status; // 백엔드가 status 필터를 지원한다면 사용 (없어도 무해)
    return p;
  }, [page, status]);

  const load = async () => {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get("/admin/reports/pending", { params: { page, size: 10 }});
      const content = data?.content ?? data ?? [];
      setItems(content);
      setMeta({
        totalPages: data?.totalPages ?? 1,
        number: data?.number ?? page,
        first: data?.first ?? page === 0,
        last: data?.last ?? (data?.totalPages ? page >= data.totalPages - 1 : true),
      });
    } catch (e) {
      setErr(e?.response?.data?.message || e.message || "불러오기 실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); /* page/status 바뀔 때마다 */ }, [/* eslint-disable-line */ params]);

  const processReport = async (id, nextStatus) => {
    try {
      await api.post(`/admin/reports/${id}/process`, {
        status: nextStatus,               // REVIEWED | REJECTED | PENDING
        adminComment: adminComment || "", // 빈값 허용
      });
      // 처리 후 현재 페이지 다시 로드
      await load();
    } catch (e) {
      alert(`처리 실패: ${e?.response?.data?.message || e.message}`);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: 12 }}>신고 관리</h2>

      {/* 상단 컨트롤 */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
        <select value={status} onChange={(e) => { setPage(0); setStatus(e.target.value); }}>
          {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <input
          value={adminComment}
          onChange={(e) => setAdminComment(e.target.value)}
          placeholder="관리자 코멘트(처리 시 함께 저장)"
          style={{ flex: "0 1 360px" }}
        />

        <button onClick={load}>새로고침</button>
      </div>

      {/* 상태 표시 */}
      {loading && <div>불러오는 중…</div>}
      {err && <div style={{ color: "#c00" }}>오류: {String(err)}</div>}

      {/* 리스트 */}
      {!loading && !err && (
        <>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: 72 }}>#</th>
                <th style={{ width: 120 }}>상태</th>
                <th style={{ width: 120 }}>유형</th>
                <th style={{ width: 120 }}>콘텐츠ID</th>
                <th>신고자</th>
                <th>사유</th>
                <th style={{ width: 220 }}>처리</th>
              </tr>
            </thead>
            <tbody>
              {items.map(r => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.status}</td>
                  <td>{r.contentType || r.type}</td>
                  <td>{r.contentId}</td>
                  <td>{r.reporterEmail || r.reporter?.email}</td>
                  <td>{r.reason || r.message}</td>
                  <td>
                    <div className="hstack">
                      <button onClick={() => processReport(r.id, "REVIEWED")}>승인(삭제)</button>
                      <button onClick={() => processReport(r.id, "REJECTED")}>기각</button>
                      <button onClick={() => processReport(r.id, "PENDING")}>보류</button>
                    </div>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr><td colSpan={7} style={{ textAlign: "center", color: "#666" }}>결과 없음</td></tr>
              )}
            </tbody>
          </table>

          {/* 페이지네이션 */}
          <div className="hstack" style={{ marginTop: 12 }}>
            <button disabled={meta.first} onClick={() => setPage(p => Math.max(0, p - 1))}>이전</button>
            <span> { (meta.number ?? page) + 1 } / {meta.totalPages} </span>
            <button disabled={meta.last} onClick={() => setPage(p => p + 1)}>다음</button>
          </div>
        </>
      )}
    </div>
  );
}
