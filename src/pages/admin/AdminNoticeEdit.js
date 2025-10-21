import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";
import NoticeForm from "../../components/admin/NoticeForm";
import {
  EditPage,
  Title,
  Card,
  LoadingText,
  ErrorText,
} from "../../styles/components/admin/NoticeEditStyled";

export default function AdminNoticeEdit() {
  const { noticeId } = useParams(); // "new" 또는 실제 id
  const nav = useNavigate();
  const isNew = !noticeId || noticeId === "new";

  const [initial, setInitial] = useState(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(null);

  // 수정 모드일 때 초기값 로드(상세 API)
  useEffect(() => {
    if (isNew) return;
    (async () => {
      try {
        const { data } = await api.get(`/notices/${noticeId}`);
        setInitial({ title: data.title, content: data.content });
      } catch (e) {
        setErr(e);
      }
    })();
  }, [isNew, noticeId]);

  const submit = async (payload) => {
    setBusy(true);
    setErr(null);
    try {
      if (isNew) {
        const { data: createdId } = await api.post("/admin/notices", payload);
        alert("생성되었습니다.");
        nav(`/notices/${createdId}`);
      } else {
        await api.put(`/admin/notices/${noticeId}`, payload);
        alert("수정되었습니다.");
        nav(`/notices/${noticeId}`);
      }
    } catch (e) {
      console.error(e);
      setErr(e);
      alert("저장에 실패했습니다. (권한 또는 입력값 확인)");
    } finally {
      setBusy(false);
    }
  };

  if (!isNew && !initial && !err) return <LoadingText>불러오는 중...</LoadingText>;
  if (err) return <ErrorText>공지 정보를 불러오지 못했습니다.</ErrorText>;

  return (
    <EditPage>
      <Title>{isNew ? "새 공지 작성" : "공지 수정"}</Title>
      <Card>
        <NoticeForm initial={initial} busy={busy} onSubmit={submit} />
      </Card>
    </EditPage>
  );
}
