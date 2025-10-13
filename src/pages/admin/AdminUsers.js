import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import AdminUserMemos from "./AdminUserMemos";
import { Link } from "react-router-dom";

const PAGE_SIZE = 10;

export default function AdminUsers() {
  const [page, setPage] = useState(0);
  const [q, setQ] = useState("");
  const [resp, setResp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [busyId, setBusyId] = useState(null); // 행 단위 액션 진행 중 표시

  const [memoUser, setMemoUser] = useState(null); // {id, email, name} 선택된 사용자

  const fetchPage = async (p = 0) => {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get("/admin/users", {
        params: {
          page: p,
          size: PAGE_SIZE,
          // q: q.trim() || undefined, // 백엔드가 검색 파라미터 지원 시 사용
        },
      });
      setResp(data);
      setPage(p);
    } catch (e) {
      setErr(e?.response?.data?.message || e.message || "불러오기 실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPage(0); }, []);

  const content = resp?.content || [];
  const totalPages = resp?.totalPages ?? 0;

  // --- 액션 핸들러들 ---
  const updateRole = async (userId, role, el) => {
    if (!role) return;
    setBusyId(userId);
    try {
      await api.put(`/admin/users/${userId}/role`, { role });
      await fetchPage(page);
    } catch (e) {
      alert(`역할 변경 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyId(null);
      if (el) el.value = "";
    }
  };

  const updateStatus = async (userId, status, el) => {
    if (!status) return;
    setBusyId(userId);
    try {
      await api.put(`/admin/users/${userId}/status`, { status });
      await fetchPage(page);
    } catch (e) {
      alert(`상태 변경 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyId(null);
      if (el) el.value = "";
    }
  };

  const suspendUser = async (userId, period, el) => {
    if (!period) return;
    if (!window.confirm(`정말 이 사용자를 ${period}로 정지하시겠습니까?`)) {
      if (el) el.value = "";
      return;
    }
    setBusyId(userId);
    try {
      await api.put(`/admin/users/${userId}/suspend`, { period });
      await fetchPage(page);
    } catch (e) {
      alert(`정지 처리 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyId(null);
      if (el) el.value = "";
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: 12 }}>사용자 관리</h2>

      {/* 검색 (백엔드가 지원하면 사용) */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="이메일/이름 검색"
          onKeyDown={(e) => e.key === "Enter" && fetchPage(0)}
          style={{ flex: "0 1 320px" }}
        />
        <button onClick={() => fetchPage(0)}>검색</button>
        <button onClick={() => { setQ(""); fetchPage(0); }}>초기화</button>
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
                <th style={{ width: 72 }}>ID</th>
                <th>Email</th>
                <th>Name</th>
                <th style={{ width: 140 }}>Role</th>
                <th style={{ width: 140 }}>Status</th>
                <th style={{ width: 160 }}>가입일</th>
                <th style={{ width: 520 }}>액션</th>
              </tr>
            </thead>
            <tbody>
              {content.map((u) => {
                console.log(u)
                return(<tr key={u.userId}>
                  <td>{u.userId}</td>
                  <td>{u.email}</td>
                  <td>{u.name}</td>
                  <td>{u.role || (u.roles && u.roles.join(", "))}</td>
                  <td>{u.status || (u.active ? "ACTIVE" : "INACTIVE")}</td>
                  <td>{u.createdAt.slice(0,10) || u.created_date.slice(0,10)}</td>
                  <td>
                    <div className="hstack" style={{ gap: 8, flexWrap: "wrap" }}>
                      {/* 메모 보기/추가 */}
                      <button onClick={() => setMemoUser({ id: u.userId, email: u.email, name: u.name })}>
                        메모
                      </button>

                      {/* 역할 변경 */}
                      <select
                        defaultValue=""
                        disabled={busyId === u.userId}
                        onChange={(e) => updateRole(u.userId, e.target.value, e.target)}
                      >
                        <option value="" disabled>역할 변경</option>
                        <option value="ROLE_USER">ROLE_USER</option>
                        <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                      </select>

                      {/* 상태 변경 */}
                      <select
                        defaultValue=""
                        disabled={busyId === u.userId}
                        onChange={(e) => updateStatus(u.userId, e.target.value, e.target)}
                      >
                        <option value="" disabled>상태 변경</option>
                        <option value="ACTIVE">ACTIVE</option>
                        <option value="INACTIVE">INACTIVE</option>
                      </select>

                      {/* 정지 */}
                      <select
                        defaultValue=""
                        disabled={busyId === u.userId}
                        onChange={(e) => suspendUser(u.userId, e.target.value, e.target)}
                      >
                        <option value="" disabled>정지 기간</option>
                        <option value="THREE_DAYS">3일</option>
                        <option value="SEVEN_DAYS">7일</option>
                        <option value="TEN_DAYS">10일</option>
                        <option value="THIRTY_DAYS">30일</option>
                        <option value="SIX_MONTHS">6개월</option>
                        <option value="PERMANENT">영구</option>
                      </select>
                      
                      <Link to={`/admin/users/${u.userId}/boards`} className="admin-linkbtn">게시글 보기</Link>
                      <Link to={`/admin/users/${u.userId}/comments`} className="admin-linkbtn">댓글 보기</Link>
                    </div>
                  </td>
                </tr>)})}
              {content.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", color: "#666" }}>
                    결과 없음
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* 페이지네이션 */}
          {totalPages > 0 && (
            <div className="hstack" style={{ marginTop: 12 }}>
              <button disabled={page <= 0} onClick={() => fetchPage(page - 1)}>이전</button>
              <span> {page + 1} / {totalPages} </span>
              <button disabled={page >= totalPages - 1} onClick={() => fetchPage(page + 1)}>다음</button>
            </div>
          )}
        </>
      )}

      {/* 사용자 메모 모달 */}
      {memoUser && (
        <AdminUserMemos
          user={memoUser}
          onClose={() => setMemoUser(null)}
        />
      )}
    </div>
  );
}