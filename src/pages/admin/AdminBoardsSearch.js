import React, { useEffect, useMemo, useState } from "react";
import api from "../../utils/api";
import {
  PageWrap, Header, Title, Sub,
  SearchCard, Row, Select, Input, Spacer,
  PrimaryBtn, GhostBtn, DangerBtn, MutedBtn,
  TableCard, Table, Th, Td, Badge, Actions,
  Pagination, PageInfo, ErrorText, InfoText, Empty
} from "../../styles/components/admin/AdminBoardsSearchStyled";

const PAGE_SIZE = 10;
const TYPES = [
  { value: "TITLE",   label: "제목" },
  { value: "CONTENT", label: "내용" },
  { value: "AUTHOR",  label: "작성자" },
];

export default function AdminBoardsSearch() {
  const [type, setType] = useState("TITLE");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(0);

  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ totalPages: 0, number: 0, first: true, last: true });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);
  const [busyRow, setBusyRow] = useState(null);
  const [selected, setSelected] = useState(() => new Set());

  // ✅ 호환 유틸
  const getId = (b) => b.id ?? b.boardId;
  const getAuthor = (b) =>
    b.authorNickname || b.authorEmail || b.author?.nickname || b.author?.email || "-";
  const getActive = (b) =>
    (b.active ?? b.isActive) !== false;

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
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const toggleSelectAll = (checked) => {
    if (!checked) { setSelected(new Set()); return; }
    const allIds = items.map(it => getId(it));
    setSelected(new Set(allIds));
  };

  async function reactivateContent(type, id) {
    try {
      await api.put(`/admin/content/${type.toLowerCase()}/${id}/reactivate`);
    } catch {
      await api.put(`/admin/content/${type.toUpperCase()}/${id}/reactivate`);
    }
  }

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
    <PageWrap>
      <Header>
        <Title>게시물 관리</Title>
        <Sub>제목/내용/작성자 기준으로 검색하고 상태를 변경합니다.</Sub>
      </Header>

      {/* 검색 바 */}
      <SearchCard>
        <Row>
          <Select value={type} onChange={(e) => { setPage(0); setType(e.target.value); }}>
            {TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </Select>
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && setPage(0)}
            placeholder="검색어를 입력하세요"
          />
          <PrimaryBtn onClick={() => setPage(0)}>검색</PrimaryBtn>
          <GhostBtn onClick={search}>새로고침</GhostBtn>
          <Spacer />
          <DangerBtn onClick={bulkDeactivate} disabled={busy || selected.size === 0}>
            {busy ? "일괄 처리 중…" : `선택 비활성화 (${selected.size})`}
          </DangerBtn>
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
                      {/* ✅ 전체선택: b 참조 제거 */}
                      <input
                        type="checkbox"
                        checked={items.length > 0 && selected.size === items.length}
                        onChange={(e) => toggleSelectAll(e.target.checked)}
                        aria-label="select-all"
                      />
                    </Th>
                    <Th>제목</Th>
                    <Th w={200}>작성자</Th>
                    <Th w={140}>상태</Th>
                    <Th w={180}>작성일</Th>
                    <Th w={260}>액션</Th>
                  </tr>
                </thead>
                <tbody>
                {items.map(b => {
                  const id = getId(b);
                  const isActive = getActive(b);

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
                      <Td title={b.title} ellipsis>{b.title}</Td>
                      <Td w={200}>{getAuthor(b)}</Td>
                      <Td w={140}>
                        {isActive
                          ? <Badge type="success">ACTIVE</Badge>
                          : <Badge type="danger">INACTIVE</Badge>}
                      </Td>
                      <Td w={180}>{(b.createdAt || "").slice(0,10) || "-"}</Td>

                      {/* ✅ 여기만 변경 */}
                      <Td w={260}>
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
