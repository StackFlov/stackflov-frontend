import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";
import {
  DetailPage, BackBtn, Title, Meta, Card, Content, Footer,
  LoadingText, ErrorText
} from "../styles/components/admin/NoticeDetailStyled";

export default function NoticeDetail() {
  const { noticeId } = useParams();
  const nav = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setErr(null);
      try {
        const { data } = await api.get(`/notices/${noticeId}`);
        setItem(data);
      } catch (e) {
        setErr(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [noticeId]);

  if (loading) return <LoadingText>불러오는 중...</LoadingText>;
  if (err) return <ErrorText>존재하지 않거나 삭제된 공지입니다.</ErrorText>;
  if (!item) return null;

  const created = item.createdAt ? new Date(item.createdAt).toLocaleString() : "";

  return (
    <DetailPage>
      <BackBtn onClick={() => nav(-1)}>← 뒤로</BackBtn>
      <Title>{item.title}</Title>
      <Meta>
        {item.authorNickname} · 조회 {item.viewCount ?? 0} · {created}
      </Meta>

      <Card>
        <Content>{item.content}</Content>
      </Card>

      <Footer>
        <Link to="/notices">목록으로</Link>
      </Footer>
    </DetailPage>
  );
}
