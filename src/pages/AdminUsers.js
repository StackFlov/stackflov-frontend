import React, { useEffect, useState } from "react";
import api from "../utils/api";

const PAGE_SIZE = 10;

export default function AdminUsers() {
  const [page, setPage] = useState(0);
  const [q, setQ] = useState("");            // 이메일/이름 검색어(백엔드에 쿼리 지원 시)
  const [resp, setResp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchPage = async (p = 0) => {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get("/admin/users", {
        params: {
          page: p,
          size: PAGE_SIZE,  
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

  useEffect(() => { fetchPage(0); /* 초기 로드 */ }, []);

  const content = resp?.content || [];
  const totalPages = resp?.totalPages ?? 0;

  return (
    <div>
      <h2 style={{marginBottom:12}}>사용자 관리</h2>

      {/* 검색 */}
      <div style={{display:"flex", gap:8, marginBottom:12}}>
        <input
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          placeholder="이메일/이름 검색"
          onKeyDown={(e)=>e.key==="Enter" && fetchPage(0)}
          style={{flex:"0 1 320px"}}
        />
        <button onClick={()=>fetchPage(0)}>검색</button>
      </div>

      {/* 상태 */}
      {loading && <div>불러오는 중…</div>}
      {err && <div style={{color:"#c00"}}>오류: {String(err)}</div>}

      {/* 테이블 */}
      {!loading && !err && (
        <>
          <table className="table">
            <thead>
              <tr>
                <th style={{width:72}}>ID</th>
                <th>Email</th>
                <th>Name</th>
                <th style={{width:140}}>Role</th>
                <th style={{width:140}}>Status</th>
                <th style={{width:160}}>가입일</th>
                {/* <th style={{width:200}}>액션</th> */}
              </tr>
            </thead>
            <tbody>
              {content.map(u => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.email}</td>
                  <td>{u.name}</td>
                  <td>{u.role || (u.roles && u.roles.join(", "))}</td>
                  <td>{u.status || (u.active ? "ACTIVE" : "INACTIVE")}</td>
                  <td>{u.createdAt || u.created_date}</td>
                  {/* 
                  액션은 백엔드 API가 준비되면 활성화:
                  <td>
                    <div className="hstack">
                      <button onClick={()=>updateRole(u.id, "ADMIN")}>ADMIN</button>
                      <button onClick={()=>updateRole(u.id, "USER")}>USER</button>
                      <button onClick={()=>toggleActive(u.id, !u.active)}>{u.active?"비활성화":"활성화"}</button>
                    </div>
                  </td>
                  */}
                </tr>
              ))}
              {content.length === 0 && (
                <tr><td colSpan={6} style={{textAlign:"center", color:"#666"}}>결과 없음</td></tr>
              )}
            </tbody>
          </table>

          {/* 페이지네이션 */}
          {totalPages > 0 && (
            <div className="hstack" style={{marginTop:12}}>
              <button disabled={page<=0} onClick={()=>fetchPage(page-1)}>이전</button>
              <span> {page+1} / {totalPages} </span>
              <button disabled={page>=totalPages-1} onClick={()=>fetchPage(page+1)}>다음</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}