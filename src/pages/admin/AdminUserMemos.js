// src/pages/admin/AdminUserMemos.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import {
  PageWrap, Header, Title, Sub,
  SearchCard, Row, PrimaryBtn, GhostBtn, MutedBtn, DangerBtn,
  ErrorText, InfoText, Empty,
} from "../../styles/components/admin/AdminCommonStyled";
import styled from "styled-components";

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

  // 서버 응답 정규화
  const normalize = (raw) => {
    const id =
      raw?.id ?? raw?.memoId ?? raw?.noteId ?? raw?.adminNoteId ?? raw?.admin_note_id;
    const content = raw?.content ?? raw?.message ?? raw?.memo ?? "";
    const adminEmail = raw?.adminEmail ?? raw?.authorEmail ?? raw?.admin?.email ?? "-";
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
      await api.post(`/admin/users/${uid}/memos`, { content: body });
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

  const Body = (
    <PageWrap style={{ maxWidth: isModal ? 760 : 1100, padding: isModal ? 8 : 16 }}>
      <Header style={{ marginBottom: 8 }}>
        <Title>운영 메모</Title>
        <Sub>대상: <b>{displayName}</b></Sub>
      </Header>

      {/* 입력 영역 */}
      <SearchCard>
        <Row style={{ alignItems: "flex-start" }}>
          <TextArea
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="메모를 입력하세요"
          />
          <PrimaryBtn onClick={add} disabled={posting}>
            {posting ? "등록 중…" : "메모 등록"}
          </PrimaryBtn>
          <GhostBtn onClick={load}>새로고침</GhostBtn>
          <MutedBtn onClick={handleClose}>닫기</MutedBtn>
        </Row>
      </SearchCard>

      {loading && <InfoText>불러오는 중…</InfoText>}
      {err && <ErrorText>오류: {String(err)}</ErrorText>}

      {/* 목록 */}
      {!loading && !err && (
        items.length === 0 ? (
          <Empty>메모 없음</Empty>
        ) : (
          <MemoList>
            {items.map((m) => {
              const isEditing = editingId === m._id;
              return (
                <MemoCard key={m._id ?? Math.random()}>
                  <MetaRow>
                    <MetaLeft>
                      <MetaMono>#{m._id ?? "?"}</MetaMono>
                      <span>· 작성자: {m._adminEmail}</span>
                      <Dot>·</Dot>
                      <span>{String(m._createdAt).slice(0,10)}</span>
                    </MetaLeft>
                    {!isEditing && (
                      <MetaActions>
                        <MutedBtn onClick={() => startEdit(m)}>수정</MutedBtn>
                        <DangerBtn onClick={() => remove(m._id)}>삭제</DangerBtn>
                      </MetaActions>
                    )}
                  </MetaRow>

                  {!isEditing ? (
                    <Content>{m._content}</Content>
                  ) : (
                    <>
                      <TextArea
                        rows={4}
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <Row style={{ marginTop: 8 }}>
                        <PrimaryBtn onClick={saveEdit} disabled={saving}>
                          {saving ? "저장 중…" : "저장"}
                        </PrimaryBtn>
                        <GhostBtn onClick={cancelEdit} disabled={saving}>
                          취소
                        </GhostBtn>
                      </Row>
                    </>
                  )}
                </MemoCard>
              );
            })}
          </MemoList>
        )
      )}
    </PageWrap>
  );

  // 모달/페이지 모드
  if (isModal) {
    return (
      <Overlay onClick={handleClose}>
        <Modal onClick={(e) => e.stopPropagation()}>
          {Body}
        </Modal>
      </Overlay>
    );
  }
  return <div style={{ padding: 0 }}>{Body}</div>;
}

/* ---------- styled ---------- */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 15, 25, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  width: min(760px, 92vw);
  max-height: 86vh;
  overflow: auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.35);
`;

const TextArea = styled.textarea`
  flex: 1 1 520px;
  min-height: 96px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;
  &:focus {
    border-color: #94a3b8;
    box-shadow: 0 0 0 3px rgba(148,163,184,.25);
  }
`;

const MemoList = styled.div`
  display: grid;
  gap: 10px;
`;

const MemoCard = styled.div`
  background: #fff;
  border: 1px solid #eef2f7;
  border-radius: 12px;
  padding: 12px;
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px;
  margin-bottom: 8px;
  color: #475569;
  font-size: 13px;
`;

const MetaLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;

const MetaMono = styled.span`
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  color: #64748b;
`;

const Dot = styled.span`
  color: #cbd5e1;
`;

const MetaActions = styled.div`
  display: flex;
  gap: 6px;
`;

const Content = styled.div`
  white-space: pre-wrap;
  line-height: 1.6;
  color: #0f172a;
  font-size: 14px;
`;
