import React, { useEffect, useMemo, useState } from "react";
import api from "../../utils/api";
import {
  PageWrap, Header, Title, Sub,
  SearchCard, Row, Input, Spacer,
  PrimaryBtn, GhostBtn, MutedBtn,
  TableCard, Table, Th, Td, Badge, Actions,
  Pagination, PageInfo, ErrorText, InfoText, Empty
} from "../../styles/components/admin/AdminCommonStyled"; // ✅ 공통 스타일

const PAGE_SIZE = 10;

// 응답 정규화 (키 이름 제각각이어도 프론트에서 일관 사용)
const normalize = (c) => {
  const id = c?.id ?? c?.commentId ?? c?.comment_id ?? c?.comment_id_seq;
  const content = c?.content ?? c?.text ?? c?.body ?? "";
  const author =
    c?.authorNickname ??
    c?.authorEmail ??
    c?.userEmail ??
    c?.writerEmail ??
    c?.author?.nickname ??
    c?.author?.email ??
    c?.user?.email ??
    "-";
  const active =
    typeof c?.active === "boolean" ? c.active
    : typeof c?.isActive === "boolean" ? c.isActive
    : true;
  const rawDate = c?.createdAt ?? c?.created_at ?? null;
  const created = rawDate
    ? (typeof rawDate === "string" ? rawDate.slice(0, 10) : String(rawDate).slice(0, 10))
    : "-";

  return { _id: id, _content: content, _author: author, _active: active, _created: created, __raw: c };
};

export default function AdminCommentsSearch() {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(0);

  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ totalPages: 0, number: 0, first: true, last: true });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);
  const [busyRow, setBusyRow] = useState(null);
  const [selected, setSelected] = useState(() => new Set());

  const params = useMemo(() => ({
    keyword: keyword.trim(),
    page,
    size: PAGE_SIZE,
  }), [keyword, page]);

  const search = async () => {
    setLoading(true); setErr(null);
    try {
      const { data } = await api.get("/admin/comments/search", { params });
      const content = (data?.content ?? []).map(normalize);
      setItems(content);
      setMeta({
        totalPages: data?.totalPages ?? 1,
        number: data?.number ?? page,
        first: data?.first ?? page === 0,
        last: data?.last ?? (data?.totalPages ? page >= data.totalPages - 1 : true),
      });
      setSelected(new Set());
    } catch (e) {
      setErr(e?.response?.data?.message || e.message || "불러오기 실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { search(); }, [/* eslint-disable-line */ params]);

  const toggleSelect = (id, checked) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (checked) next.add(id); else next.delete(id);
      return next;
    });
  };

  const toggleSelectAll = (checked) => {
    if (!checked) { setSelected(new Set()); return; }
    setSelected(new Set(items.map(it => it._id)));
  };

  async function reactivateContent(type, id) {
    try {
      await api.put(`/admin/content/${type.toLowerCase()}/${id}/reactivate`);
    } catch {
      await api.put(`/admin/content/${type.toUpperCase()}/${id}/reactivate`);
    }
  }

  const deactivateOne = async (id) => {
    if (!window.confirm(`댓글 #${id} 을(를) 비활성화할까요?`)) return;
    setBusyRow(id);
    try { await api.delete(`/admin/comments/${id}`); await search(); }
    catch (e) { alert(`비활성화 실패: ${e?.response?.data?.message || e.message}`); }
    finally { setBusyRow(null); }
  };

  const reactivateOne = async (id) => {
    if (!window.confirm(`댓글 #${id} 을(를) 복구할까요?`)) return;
    setBusyRow(id);
    try { await reactivateContent("comment", id); await search(); }
    catch (e) { alert(`복구 실패: ${e?.response?.data?.message || e.message}`); }
    finally { setBusyRow(null); }
  };

  const bulkDeactivate = async () => {
    const ids = Array.from(selected);
    if (ids.length === 0) return alert("선택된 댓글이 없습니다.");
    if (!window.confirm(`${ids.length}개 댓글을 비활성화할까요?`)) return;
    setBusy(true);
    try { await api.post("/admin/comments/bulk-deactivate", { ids }); await search(); }
    catch (e) { alert(`일괄 비활성화 실패: ${e?.response?.data?.message || e.message}`); }
    finally { setBusy(false); }
  };

  return (
    <PageWrap>
      <Header>
        <Title>댓글 관리</Title>
        <Sub>내용/작성자 기준으로 검색하고 상태를 변경합니다.</Sub>
      </Header>

      <SearchCard>
        <Row>
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && setPage(0)}
            placeholder="댓글 내용·작성자 키워드"
          />
          <PrimaryBtn onClick={() => setPage(0)}>검색</PrimaryBtn>
          <GhostBtn onClick={search}>새로고침</GhostBtn>
          <Spacer />
          <MutedBtn onClick={bulkDeactivate} disabled={busy || selected.size === 0}>
            {busy ? "일괄 처리 중…" : `선택 비활성화 (${selected.size})`}
          </MutedBtn>
        </Row>
      </SearchCard>

      {loading && <InfoText>불러오는 중…</InfoText>}
      {err && <ErrorText>오류: {String(err)}</ErrorText>}

      {!loading && !err && (
        items.length === 0 ? (
          <Empty>결과 없음</Empty>
        ) : (
          <>
            <TableCard>
              <Table>
                <thead>
                  <tr>
                    <Th w={44}>
                      <input
                        type="checkbox"
                        checked={items.length > 0 && selected.size === items.length}
                        onChange={(e) => toggleSelectAll(e.target.checked)}
                        aria-label="select-all"
                      />
                    </Th>
                    <Th>내용</Th>
                    <Th w={200}>작성자</Th>
                    <Th w={140}>상태</Th>
                    <Th w={180}>작성일</Th>
                    <Th w={200}>액션</Th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(c => {
                    const id = c._id;
                    const isActive = !!c._active;
                    return (
                      <tr key={id}>
                        <Td w={44}>
                          <input
                            type="checkbox"
                            checked={selected.has(id)}
                            onChange={(e) => toggleSelect(id, e.target.checked)}
                            aria-label={`select-${id}`}
                          />
                        </Td>
                        <Td title={c._content} ellipsis>{c._content}</Td>
                        <Td w={200}>{c._author}</Td>
                        <Td w={140}>
                          {isActive
                            ? <Badge type="success">ACTIVE</Badge>
                            : <Badge type="danger">INACTIVE</Badge>}
                        </Td>
                        <Td w={180}>{c._created}</Td>
                        <Td w={200}>
                          <Actions>
                            {isActive ? (
                              <MutedBtn
                                disabled={busyRow === id}
                                onClick={() => deactivateOne(id)}
                              >
                                {busyRow === id ? "처리 중…" : "비활성화"}
                              </MutedBtn>
                            ) : (
                              <PrimaryBtn
                                disabled={busyRow === id}
                                onClick={() => reactivateOne(id)}
                              >
                                {busyRow === id ? "처리 중…" : "복구"}
                              </PrimaryBtn>
                            )}
                          </Actions>
                        </Td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </TableCard>

            <Pagination>
              <MutedBtn disabled={meta.first} onClick={() => setPage(p => Math.max(0, p - 1))}>
                이전
              </MutedBtn>
              <PageInfo>{(meta.number ?? page) + 1} / {meta.totalPages}</PageInfo>
              <MutedBtn disabled={meta.last} onClick={() => setPage(p => p + 1)}>
                다음
              </MutedBtn>
            </Pagination>
          </>
        )
      )}
    </PageWrap>
  );
}
