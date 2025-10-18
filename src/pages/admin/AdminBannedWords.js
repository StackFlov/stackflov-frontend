import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import {
  Wrap, Header, Title, Sub, Card, Toolbar, Input,
  PrimaryBtn, GhostBtn, Info, Error,
  ListCard, ListHeader, Divider, ListBody, Row, Col, DangerBtn,
  Empty, EmptyEmoji, EmptyText
} from "../../styles/components/admin/AdminBannedWordsStyled";


export default function AdminBannedWords() {
  const [items, setItems] = useState([]);
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [busyWord, setBusyWord] = useState(null);

  const load = async () => {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get("/admin/banned-words");
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      setErr(e?.response?.data?.message || e.message || "불러오기 실패");
    } finally {
      setLoading(false);
    }
  };

  const addOne = async () => {
    const w = word.trim();
    if (!w) return alert("단어를 입력하세요.");
    try {
      await api.post("/admin/banned-words", { word: w });
      setWord("");
      await load();
    } catch (e) {
      alert(`추가 실패: ${e?.response?.data?.message || e.message}`);
    }
  };

  const deleteWord = async (w) => {
    if (!window.confirm(`'${w}' 을(를) 삭제할까요?`)) return;
    setBusyWord(w);
    try {
      await api.delete("/admin/banned-words", { data: { word: w } });
      await load();
    } catch (e) {
      alert(`삭제 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyWord(null);
    }
  };

  useEffect(() => { load(); }, []);

  return (
    <Wrap>
      <Header>
        <Title>금지어 관리</Title>
        <Sub>커뮤니티 내 부적절한 단어를 등록/삭제합니다.</Sub>
      </Header>

      <Card>
        <Toolbar>
          <Input
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="예) 스팸단어"
            onKeyDown={(e) => e.key === "Enter" && addOne()}
          />
          <PrimaryBtn onClick={addOne} disabled={loading || !word.trim()}>
            추가
          </PrimaryBtn>
          <GhostBtn onClick={load} disabled={loading}>
            새로고침
          </GhostBtn>
        </Toolbar>
      </Card>

      {loading && <Info>불러오는 중…</Info>}
      {err && <Error>오류: {String(err)}</Error>}

      {!loading && !err && (
        items.length === 0 ? (
          <Empty>
            <EmptyEmoji>🗂️</EmptyEmoji>
            <EmptyText>등록된 금지어가 없습니다.</EmptyText>
            <small>상단 입력창에 단어를 추가해 보세요.</small>
          </Empty>
        ) : (
          <ListCard>
            <ListHeader>
              <Col w={200}>생성일</Col>
              <Col>단어</Col>
              <Col w={140} align="right">액션</Col>
            </ListHeader>
            <Divider />
            <ListBody>
              {items.map((it) => (
                <Row key={it.id}>
                  <Col w={200} muted>{fmtDate(it.createdAt)}</Col>
                  <Col title={it.word} mono>{it.word}</Col>
                  <Col w={140} align="right">
                    <DangerBtn
                      onClick={() => deleteWord(it.word)}
                      disabled={busyWord === it.word}
                    >
                      {busyWord === it.word ? "삭제 중…" : "삭제"}
                    </DangerBtn>
                  </Col>
                </Row>
              ))}
            </ListBody>
          </ListCard>
        )
      )}
    </Wrap>
  );
}

/* helpers */
function fmtDate(d) {
  try {
    if (!d) return "-";
    if (typeof d === "string") return d.slice(0, 10);
    const t = new Date(d);
    return isNaN(t.getTime()) ? "-" : t.toISOString().slice(0, 10);
  } catch {
    return "-";
  }
}

