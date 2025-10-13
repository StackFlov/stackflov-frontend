import React, { useEffect, useMemo, useState } from "react";
import api from "../../utils/api";

const PAGE_SIZE = 10;

export default function AdminCommentsSearch() {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(0);

  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ totalPages: 0, number: 0, first: true, last: true });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);      // 일괄 처리 진행
  const [busyRow, setBusyRow] = useState(null); // 행 단위 진행
  const [selected, setSelected] = useState(() => new Set());

  const params = useMemo(() => ({
    keyword: keyword.trim(),
    page,
    size: PAGE_SIZE,
  }), [keyword, page]);

  const search = async () => {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get("/admin/comments/search", { params });
      const content = data?.content ?? [];
      setItems(content);
      setMeta({
        totalPages: data?.totalPages ?? 1,
        number: data?.number ?? page,
        first: data?.first ?? page === 0,
        last: data?.last ?? (data?.totalPages ? page >= data.totalPages - 1 : true),
      });
      setSelected(new Set()); // 검색마다 선택 초기화
    } catch (e) {
      setErr(e?.response?.data?.message || e.message || "불러오기 실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { search(); /* keyword/page 바뀔 때 */ }, [/* eslint-disable-line */ params]);

  const toggleSelect = (id, checked) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const toggleSelectAll = (checked) => {
    if (!checked) { setSelected(new Set()); return; }
    const allIds = items.map(it => it.id);
    setSelected(new Set(allIds));
  };

  // ---- 공통 복구 헬퍼 (소문자 → 대문자 폴백) ----
  async function reactivateContent(type, id) {
    try {
      await api.put(`/admin/content/${type.toLowerCase()}/${id}/reactivate`);
      return;
    } catch (_) {
      await api.put(`/admin/content/${type.toUpperCase()}/${id}/reactivate`);
    }
  }

  // --- 액션: 단건 비활성화 / 복구 / 일괄 비활성화 ---
  const deactivateOne = async (id) => {
    if (!window.confirm(`댓글 #${id} 을(를) 비활성화할까요?`)) return;
    setBusyRow(id);
    try {
      await api.delete(`/admin/comments/${id}`);
      await search();
    } catch (e) {
      alert(`비활성화 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyRow(null);
    }
  };

  const reactivateOne = async (id) => {
    if (!window.confirm(`댓글 #${id} 을(를) 복구할까요?`)) return;
    setBusyRow(id);
    try {
      await reactivateContent("comment", id);
      await search();
    } catch (e) {
      alert(`복구 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyRow(null);
    }
  };

  const bulkDeactivate = async () => {
    const ids = Array.from(selected);
    if (ids.length === 0) return alert("선택된 댓글이 없습니다.");
    if (!window.confirm(`${ids.length}개 댓글을 비활성화할까요?`)) return;
    setBusy(true);
    try {
      await api.post("/admin/comments/bulk-deactivate", { ids });
      await search();
    } catch (e) {
      alert(`일괄 비활성화 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: 12 }}>댓글 관리</h2>

      {/* 검색 바 */}
      <div className="card" style={{ padding: 12, marginBottom: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && setPage(0)}
          placeholder="댓글 내용/작성자 이메일 등 키워드"
          style={{ flex: "1 1 360px" }}
        />
        <button onClick={() => setPage(0)}>검색</button>
        <button onClick={search}>새로고침</button>
        <div style={{ flex: "1 1 auto" }} />
        <button onClick={bulkDeactivate} disabled={busy || selected.size === 0}>
          {busy ? "일괄 처리 중…" : `선택 비활성화 (${selected.size})`}
        </button>
      </div>

      {/* 상태 */}
      {loading && <div>불러오는 중…</div>}
      {err && <div style={{ color: "#c00" }}>오류: {String(err)}</div>}

      {/* 결과 테이블 */}
      {!loading && !err && (
        <>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: 44 }}>
                  <input
                    type="checkbox"
                    checked={items.length > 0 && selected.size === items.length}
                    onChange={(e) => toggleSelectAll(e.target.checked)}
                    aria-label="select-all"
                  />
                </th>
                <th style={{ width: 80 }}>ID</th>
                <th>내용</th>
                <th style={{ width: 180 }}>작성자</th>
                <th style={{ width: 140 }}>상태</th>
                <th style={{ width: 220 }}>작성일</th>
                <th style={{ width: 260 }}>액션</th>
              </tr>
            </thead>
            <tbody>
              {items.map(c => (
                <tr key={c.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selected.has(c.id)}
                      onChange={(e) => toggleSelect(c.id, e.target.checked)}
                      aria-label={`select-${c.id}`}
                    />
                  </td>
                  <td>{c.id}</td>
                  <td>{c.content || c.text}</td>
                  <td>{c.authorEmail || c.author?.email || "-"}</td>
                  <td>{c.active === false ? "INACTIVE" : "ACTIVE"}</td>
                  <td>{c.createdAt || "-"}</td>
                  <td>
                    <div className="hstack" style={{ gap: 8, flexWrap: "wrap" }}>
                      <button
                        disabled={busyRow === c.id}
                        onClick={() => deactivateOne(c.id)}
                      >
                        {busyRow === c.id ? "처리 중…" : "비활성화"}
                      </button>
                      <button
                        disabled={busyRow === c.id}
                        onClick={() => reactivateOne(c.id)}
                      >
                        {busyRow === c.id ? "처리 중…" : "복구"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", color: "#666" }}>
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
