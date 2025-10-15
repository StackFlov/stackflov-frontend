import React, { useEffect, useMemo, useState } from "react";
import api from "../../utils/api";

const PAGE_SIZE = 10;
const NEXT_STATUSES = [
  { v: "REVIEWED", label: "승인(삭제)" },
  { v: "REJECTED", label: "기각" },
  { v: "PENDING",  label: "보류" },
];

export default function AdminReportsPending() {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ totalPages: 0, number: 0, first: true, last: true });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const [adminComment, setAdminComment] = useState("");
  const [busyRow, setBusyRow] = useState(null);

  const params = useMemo(() => ({
    page,
    size: PAGE_SIZE,
  }), [page]);

  const load = async () => {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get("/admin/reports/pending", { params });
      const content = data?.content ?? [];
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

  useEffect(() => { load(); }, [params]);

  const processReport = async (id, status) => {
    if (!status) return;
    setBusyRow(id);
    try {
      await api.post(`/admin/reports/${id}/process`, {
        status,
        adminComment: adminComment || "",
      });
      await load();
    } catch (e) {
      alert(`처리 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyRow(null);
    }
  };

  function buildContentPath(r) {
    if (r.contentUrl) return r.contentUrl;
    const type = r.contentType || r.type;
    if (type === "BOARD") {
      // 당신의 실제 게시글 상세 라우트에 맞게 유지
      return `/trace/detail/${r.contentId}`;
    }
    if (type === "REVIEW") {
      return `/reviews/${r.contentId}`;
    }
    if (type === "COMMENT") {
      // 부모 정보 있을 때 딥링크
      if (r.parentType === "BOARD" && r.parentBoardId) {
        return `/boards/${r.parentBoardId}#comment-${r.contentId}`;
      }
      if (r.parentType === "REVIEW" && r.parentReviewId) {
        return `/reviews/${r.parentReviewId}#comment-${r.contentId}`;
      }
      // 마지막 폴백(임시)
      return `/comments/board/${r.contentId}`;
    }
    return "#";
  }

  return (
    <div>
      <h2 style={{ marginBottom: 12 }}>신고 관리(대기중)</h2>

      {/* 상단 컨트롤 */}
      <div className="card" style={{ padding: 12, marginBottom: 12, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <input
          value={adminComment}
          onChange={(e) => setAdminComment(e.target.value)}
          placeholder="관리자 코멘트(선택)"
          style={{ flex: "1 1 360px" }}
        />
        <button onClick={load}>새로고침</button>
      </div>

      {/* 상태 */}
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
                <th style={{ width: 140 }}>유형</th>
                <th style={{ width: 120 }}>콘텐츠ID</th>
                <th>신고자</th>
                <th>작성자</th>
                <th>사유</th>
                <th>링크</th>
                <th style={{ width: 260 }}>처리</th>
              </tr>
            </thead>
            <tbody>
              {items.map(r => (
                <tr key={r.reportId}>
                  <td>{r.reportId}</td>
                  <td>{r.status}</td>
                  <td>{r.contentType || r.type}</td>
                  <td>{r.contentId}</td>
                  <td>{r.reporterNickname || "-"}</td>
                  <td>{r.reportedUserId} ({r.reportedUserNickname})</td>
                  <td>{r.reason || "-"}</td>
                  <td>
                    <button
                      onClick={() => {
                        const url = buildContentPath(r);
                        if (url && url !== "#") window.open(url, "_blank");
                        else alert("링크 정보를 찾을 수 없습니다.");
                      }}
                    >
                      보기
                    </button>
                  </td>
                  <td>
                    <div className="hstack" style={{ gap: 8, flexWrap: "wrap" }}>
                      {NEXT_STATUSES.map(s => (
                        <button
                          key={s.v}
                          disabled={busyRow === r.reportId}
                          onClick={() => processReport(r.reportId, s.v)}
                        >
                          {busyRow === r.reportId ? "처리 중…" : s.label}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td colSpan={9} style={{ textAlign: "center", color: "#666" }}>
                    결과 없음
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* 페이지네이션 */}
          <div className="hstack" style={{ marginTop: 12 }}>
            <button disabled={meta.first} onClick={() => setPage(p => Math.max(0, p - 1))}>이전</button>
            <span> {(meta.number ?? page) + 1} / {meta.totalPages} </span>
            <button disabled={meta.last} onClick={() => setPage(p => p + 1)}>다음</button>
          </div>
        </>
      )}
    </div>
  );
}
