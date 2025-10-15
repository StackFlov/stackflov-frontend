// src/pages/admin/AdminUserMemos.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";

export default function AdminUserMemos({ user, onClose }) {
  const { userId: routeUserId } = useParams(); // /admin/users/:userId/memos
  const uid = user?.id ?? (routeUserId ? Number(routeUserId) : undefined);
  const displayName = user?.email || user?.name || uid || "-";
  const isModal = !!onClose;

  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);
  const [err, setErr] = useState(null);

  // 수정 상태
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [saving, setSaving] = useState(false);

  // 서버 응답을 안전하게 정규화
  const normalize = (raw) => {
    const id =
      raw?.id ??
      raw?.memoId ??
      raw?.noteId ??
      raw?.adminNoteId ??
      raw?.admin_note_id;
    const content = raw?.content ?? raw?.message ?? raw?.memo ?? "";
    const adminEmail =
      raw?.adminEmail ?? raw?.authorEmail ?? raw?.admin?.email ?? "-";
    const createdAt = raw?.createdAt ?? raw?.created_at ?? "-";
    return { ...raw, _id: id, _content: content, _adminEmail: adminEmail, _createdAt: createdAt };
  };

  const load = async () => {
    if (!uid) return;
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get(`/admin/users/${uid}/memos`);
      const list = Array.isArray(data) ? data : [];
      setItems(list.map(normalize));
    } catch (e) {
      setErr(e?.response?.data?.message || e.message || "불러오기 실패");
    } finally {
      setLoading(false);
    }
  };

  const add = async () => {
    const body = text.trim();
    if (!body) return alert("메모 내용을 입력하세요.");
    if (!uid) return alert("userId가 없습니다.");
    setPosting(true);
    try {
      await api.post(`/admin/users/${uid}/memos`, { content: body }); // DTO 키 다르면 수정
      setText("");
      await load();
    } catch (e) {
      alert(`등록 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setPosting(false);
    }
  };

  const remove = async (memoId) => {
    if (!uid) return alert("userId가 없습니다.");
    if (!memoId) return alert("memoId가 없습니다.");
    if (!window.confirm(`메모 #${memoId} 를 삭제할까요?`)) return;
    try {
      await api.delete(`/admin/users/${uid}/memos/${memoId}`);
      await load();
    } catch (e) {
      alert(`삭제 실패: ${e?.response?.data?.message || e.message}`);
    }
  };

  const startEdit = (m) => {
    setEditingId(m._id);
    setEditText(m._content || "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const saveEdit = async () => {
    if (!uid) return alert("userId가 없습니다.");
    if (!editingId) return alert("memoId가 없습니다.");
    const body = editText.trim();
    if (!body) return alert("수정할 내용을 입력하세요.");
    setSaving(true);
    try {
      await api.put(`/admin/users/${uid}/memos/${editingId}`, { content: body });
      setEditingId(null);
      setEditText("");
      await load();
    } catch (e) {
      alert(`수정 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => { load(); }, [uid]);

  const handleClose = isModal ? onClose : () => window.history.back();

  return (
    <div style={isModal ? backdropStyle : { padding: 16 }} onClick={isModal ? handleClose : undefined}>
      <div style={isModal ? modalStyle : { maxWidth: 760, margin: "0 auto" }} onClick={(e) => e.stopPropagation?.()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h3 style={{ margin: 0 }}>운영 메모 – {displayName}</h3>
          <button onClick={handleClose}>닫기</button>
        </div>

        {/* 입력(신규) */}
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

        {loading && <div>불러오는 중…</div>}
        {err && <div style={{ color: "#c00" }}>오류: {String(err)}</div>}

        {/* 목록 */}
        {!loading && !err && (
          <div style={{ maxHeight: isModal ? 360 : "auto", overflow: "auto" }}>
            {items.length === 0 && <div style={{ color: "#666" }}>메모 없음</div>}
            {items.map((m) => {
              const isEditing = editingId === m._id;
              return (
                <div key={m._id ?? Math.random()} className="card" style={{ padding: 12, marginBottom: 8 }}>
                  <div style={{ fontSize: 12, color: "#666", marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>
                      #{m._id ?? "?"} · 작성자: {m._adminEmail} · {m._createdAt.slice(0,10)}
                    </span>
                    {!isEditing && (
                      <div className="hstack" style={{ gap: 8 }}>
                        <button onClick={() => startEdit(m)}>수정</button>
                        <button onClick={() => remove(m._id)}>삭제</button>
                      </div>
                    )}
                  </div>

                  {!isEditing ? (
                    <div>{m._content}</div>
                  ) : (
                    <div>
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        rows={4}
                        style={{ width: "100%" }}
                      />
                      <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                        <button onClick={saveEdit} disabled={saving}>{saving ? "저장 중…" : "저장"}</button>
                        <button onClick={cancelEdit} disabled={saving}>취소</button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
