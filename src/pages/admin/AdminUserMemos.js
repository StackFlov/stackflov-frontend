import React, { useEffect, useState } from "react";
import api from "../../utils/api";

export default function AdminUserMemos({ user, onClose }) {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);
  const [err, setErr] = useState(null);

  const load = async () => {
    if (!user?.id) return;
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get(`/admin/users/${user.id}/memos`);
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      setErr(e?.response?.data?.message || e.message || "불러오기 실패");
    } finally {
      setLoading(false);
    }
  };

  const add = async () => {
    const body = text.trim();
    if (!body) return alert("메모 내용을 입력하세요.");
    setPosting(true);
    try {
      await api.post(`/admin/users/${user.id}/memos`, { content: body });
      setText("");
      await load();
    } catch (e) {
      alert(`등록 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setPosting(false);
    }
  };

  useEffect(() => { load(); }, [user?.id]);

  // 간단 모달 스타일 (프로젝트 css에 맞게 바꿔도 됨)
  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h3 style={{ margin: 0 }}>운영 메모 – {user?.email || user?.name || user?.id}</h3>
          <button onClick={onClose}>닫기</button>
        </div>

        {/* 입력 */}
        <div className="card" style={{ padding: 12, marginBottom: 12 }}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            placeholder="메모를 입력하세요"
            style={{ width: "100%" }}
          />
          <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
            <button onClick={add} disabled={posting}>{posting ? "등록 중…" : "메모 등록"}</button>
            <button onClick={load}>새로고침</button>
          </div>
        </div>

        {/* 상태 */}
        {loading && <div>불러오는 중…</div>}
        {err && <div style={{ color: "#c00" }}>오류: {String(err)}</div>}

        {/* 목록 */}
        {!loading && !err && (
          <div style={{ maxHeight: 360, overflow: "auto" }}>
            {items.length === 0 && <div style={{ color: "#666" }}>메모 없음</div>}
            {items.map((m) => (
              <div key={m.id} className="card" style={{ padding: 12, marginBottom: 8 }}>
                <div style={{ fontSize: 12, color: "#666", marginBottom: 4 }}>
                  #{m.id} · 작성자: {m.adminEmail || m.authorEmail || "-"} · {m.createdAt || "-"}
                </div>
                <div>{m.content || m.message || m.memo}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const backdropStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle = {
  width: "min(760px, 92vw)",
  background: "#fff",
  borderRadius: 12,
  padding: 16,
  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
};
