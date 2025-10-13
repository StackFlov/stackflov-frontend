import React, { useEffect, useMemo, useState } from "react";
import api from "../../utils/api";

const PAGE_SIZE = 10;
const TYPES = [
  { value: "TITLE", label: "제목" },
  { value: "CONTENT", label: "내용" },
  { value: "AUTHOR", label: "작성자" },
];

export default function AdminBoardsSearch() {
  const [type, setType] = useState("TITLE");
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
    type,
    keyword: keyword.trim(),
    page,
    size: PAGE_SIZE,
  }), [type, keyword, page]);

  const search = async () => {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get("/admin/boards/search", { params });
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

  useEffect(() => { search(); /* type/keyword/page 바뀔 때 */ }, [/* eslint-disable-line */ params]);

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
    } catch {
      // 서버가 Enum PathVariable(대문자)만 받는 경우
      await api.put(`/admin/content/${type.toUpperCase()}/${id}/reactivate`);
    }
  }

  // --- 액션: 단건 비활성화 / 복구 / 일괄 비활성화 ---
  const deactivateOne = async (id) => {
    if (!window.confirm(`게시글 #${id} 을(를) 비활성화할까요?`)) return;
    setBusyRow(id);
    try {
      await api.delete(`/admin/boards/${id}`);
      await search();
    } catch (e) {
      alert(`비활성화 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyRow(null);
    }
  };

  const reactivateOne = async (id) => {
    if (!window.confirm(`게시글 #${id} 을(를) 복구할까요?`)) return;
    setBusyRow(id);
    try {
      await reactivateContent("board", id);
      await search();
    } catch (e) {
      alert(`복구 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyRow(null);
    }
  };

  const bulkDeactivate = async () => {
    const ids = Array.from(selected);
    if (ids.length === 0) return alert("선택된 게시글이 없습니다.");
    if (!window.confirm(`${ids.length}개 게시글을 비활성화할까요?`)) return;
    setBusy(true);
    try {
      await api.post("/admin/boards/bulk-deactivate", { ids });
      await search();
    } catch (e) {
      alert(`일괄 비활성화 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: 12 }}>게시물 관리</h2>

      {/* 검색 바 */}
      <div className="card" style={{ padding: 12, marginBottom: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <select value={type} onChange={(e) => { setPage(0); setType(e.target.value); }}>
          {TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && setPage(0)}
          placeholder="검색어를 입력하세요"
          style={{ flex: "1 1 320px" }}
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
                <th>제목</th>
                <th style={{ width: 180 }}>작성자</th>
                <th style={{ width: 140 }}>상태</th>
                <th style={{ width: 220 }}>작성일</th>
                <th style={{ width: 260 }}>액션</th>
              </tr>
            </thead>
            <tbody>
              {items.map(b => (
                <tr key={b.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selected.has(b.id)}
                      onChange={(e) => toggleSelect(b.id, e.target.checked)}
                      aria-label={`select-${b.id}`}
                    />
                  </td>
                  <td>{b.id}</td>
                  <td>{b.title}</td>
                  <td>{b.authorEmail || b.author?.email || "-"}</td>
                  <td>{b.active === false ? "INACTIVE" : "ACTIVE"}</td>
                  <td>{b.createdAt.slice(0,10) || "-"}</td>
                  <td>
                    <div className="hstack" style={{ gap: 8, flexWrap: "wrap" }}>
                      <button
                        disabled={busyRow === b.id}
                        onClick={() => deactivateOne(b.id)}
                      >
                        {busyRow === b.id ? "처리 중…" : "비활성화"}
                      </button>
                      <button
                        disabled={busyRow === b.id}
                        onClick={() => reactivateOne(b.id)}
                      >
                        {busyRow === b.id ? "처리 중…" : "복구"}
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
