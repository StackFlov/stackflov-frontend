import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import api from "../../utils/api";

const PAGE_SIZE = 10;

export default function AdminUserBoards() {
  const params = useParams();                 // /admin/users/:userId/boards
  const [sp] = useSearchParams();             // /admin/users/boards?userId=...
  const userId = params.userId || sp.get("userId");

  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ totalPages: 0, number: 0, first: true, last: true });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [busyRow, setBusyRow] = useState(null);

  // ---- 공통 복구 헬퍼 (소문자 → 대문자 폴백) ----
  async function reactivateContent(type, id) {
    try {
      await api.put(`/admin/content/${type.toLowerCase()}/${id}/reactivate`);
      return;
    } catch (_) {
      await api.put(`/admin/content/${type.toUpperCase()}/${id}/reactivate`);
    }
  }

  const paramsMemo = useMemo(() => ({
    page,
    size: PAGE_SIZE,
  }), [page]);

  const load = async () => {
    if (!userId) return;
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get(`/admin/users/${userId}/boards`, { params: paramsMemo });
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

  useEffect(() => { load(); /* page 변경 시 재조회 */ }, [/* eslint-disable-line */ paramsMemo, userId]);

  const deactivateOne = async (boardId) => {
    if (!window.confirm(`게시글 #${boardId} 을(를) 비활성화할까요?`)) return;
    setBusyRow(boardId);
    try {
      await api.delete(`/admin/boards/${boardId}`);
      await load();
    } catch (e) {
      alert(`비활성화 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyRow(null);
    }
  };

  const reactivateOne = async (boardId) => {
    if (!window.confirm(`게시글 #${boardId} 을(를) 복구할까요?`)) return;
    setBusyRow(boardId);
    try {
      await reactivateContent("board", boardId);
      await load();
    } catch (e) {
      alert(`복구 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyRow(null);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: 12 }}>사용자별 게시글</h2>

      {/* 상단 바 */}
      <div className="card" style={{ padding: 12, marginBottom: 12, display: "flex", gap: 8, alignItems: "center" }}>
        <div>대상 사용자 ID: <b>{userId || "-"}</b></div>
        <div style={{ flex: "1 1 auto" }} />
        <Link to="/admin/users" className="admin-linkbtn">사용자 목록으로</Link>
        <button onClick={load}>새로고침</button>
      </div>

      {/* 상태 */}
      {loading && <div>불러오는 중…</div>}
      {err && <div style={{ color: "#c00" }}>오류: {String(err)}</div>}

      {/* 테이블 */}
      {!loading && !err && (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>제목</th>
                <th style={{ width: 120 }}>상태</th>
                <th style={{ width: 200 }}>작성일</th>
                <th style={{ width: 220 }}>액션</th>
              </tr>
            </thead>
            <tbody>
              {items.map(b => (
                <tr key={b.id}>
                  <td>{b.title}</td>
                  <td>{b.active === false ? "INACTIVE" : "ACTIVE"}</td>
                  <td>{b.createdAt.slice(0,10) || "-"}</td>
                  <td>
                    <div className="hstack" style={{ gap: 8, flexWrap: "wrap" }}>
                      <button disabled={busyRow === b.id} onClick={() => deactivateOne(b.id)}>
                        {busyRow === b.id ? "처리 중…" : "비활성화"}
                      </button>
                      <button disabled={busyRow === b.id} onClick={() => reactivateOne(b.id)}>
                        {busyRow === b.id ? "처리 중…" : "복구"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", color: "#666" }}>결과 없음</td>
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
