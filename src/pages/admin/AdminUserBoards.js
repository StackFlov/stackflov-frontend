// src/pages/admin/AdminUserBoards.js
import React, { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import {
  PageWrap, Header, Title, Sub,
  SearchCard, Row, PrimaryBtn, GhostBtn, MutedBtn,
  TableCard, Table, Th, Td, Badge, Actions,
  Pagination, PageInfo, ErrorText, InfoText, Empty,
} from "../../styles/components/admin/AdminCommonStyled";

const PAGE_SIZE = 10;

const getBoardId = (b) =>
  b?.id ??
  b?.boardId ??
  b?.board_id ??
  b?.boardNo ??
  b?.no ??
  b?.board?.id ??
  null;

const getCreatedAt = (b) => b?.createdAt ?? b?.created_at ?? b?.created_date ?? null;
const getTitle = (b) => b?.title ?? b?.subject ?? b?.name ?? "";
const isActive = (b) => (b?.active ?? b?.isActive ?? b?.status === "ACTIVE") !== false;

export default function AdminUserBoards() {
  const params = useParams();
  const [sp] = useSearchParams();
  const userId = params.userId || sp.get("userId");

  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ totalPages: 0, number: 0, first: true, last: true });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [busyRow, setBusyRow] = useState(null);

  const query = useMemo(() => ({ page, size: PAGE_SIZE }), [page]);

  const load = async () => {
    if (!userId) return;
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get(`/admin/users/${userId}/boards`, { params: query });
      const content = Array.isArray(data?.content) ? data.content : [];
      setItems(content);
      setMeta({
        totalPages: data?.totalPages ?? 1,
        number: data?.number ?? page,
        first: data?.first ?? page === 0,
        last: data?.last ?? (data?.totalPages ? page >= data.totalPages - 1 : true),
      });
    } catch (e) {
      setErr(e?.response?.data?.message || e.message || "불러오기 실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, [userId, query]);

  const deactivateOne = async (boardObj) => {
    const boardId = getBoardId(boardObj);
    if (!boardId) return alert("게시글 ID가 없습니다.");
    if (!window.confirm(`게시글 #${boardId} 을(를) 비활성화할까요?`)) return;

    setBusyRow(boardId);
    try {
      await api.delete(`/admin/boards/${encodeURIComponent(boardId)}`);
      await load();
    } catch (e) {
      alert(`비활성화 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyRow(null);
    }
  };

  const navigate = useNavigate();
  const reactivateOne = async (boardObj) => {
    const boardId = getBoardId(boardObj);
    if (!boardId) return alert("게시글 ID가 없습니다.");
    if (!window.confirm(`게시글 #${boardId} 을(를) 복구할까요?`)) return;

    setBusyRow(boardId);
    try {
      await api.put(`/admin/content/board/${encodeURIComponent(boardId)}/reactivate`);
      await load();
    } catch (e) {
      alert(`복구 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyRow(null);
    }
  };

  const fmtDate = (d) => (d ? String(d).slice(0, 10) : "-");

  return (
    <PageWrap>
      <Header>
        <Title>사용자별 게시글</Title>
        <Sub>선택 사용자(<b>{userId ?? "-"}</b>)의 게시글 상태를 조회/관리합니다.</Sub>
      </Header>

      <SearchCard>
        <Row>
          <GhostBtn onClick={() => navigate("/admin/users")}>사용자 목록으로</GhostBtn>
          <PrimaryBtn onClick={load}>새로고침</PrimaryBtn>
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
                    <Th>제목</Th>
                    <Th w={140}>상태</Th>
                    <Th w={180}>작성일</Th>
                    <Th w={260}>액션</Th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((b) => {
                    const id = getBoardId(b);
                    const active = isActive(b);
                    const title = getTitle(b);
                    const createdAt = getCreatedAt(b);

                    return (
                      <tr key={id ?? title}>
                        <Td title={title} ellipsis>{title}</Td>
                        <Td w={140}>
                          {active ? (
                            <Badge type="success">ACTIVE</Badge>
                          ) : (
                            <Badge type="danger">INACTIVE</Badge>
                          )}
                        </Td>
                        <Td w={180}>{fmtDate(createdAt)}</Td>
                        <Td w={260}>
                          <Actions>
                            {active ? (
                              <MutedBtn
                                disabled={busyRow === id}
                                onClick={() => deactivateOne(b)}
                              >
                                {busyRow === id ? "처리 중…" : "비활성화"}
                              </MutedBtn>
                            ) : (
                              <PrimaryBtn
                                disabled={busyRow === id}
                                onClick={() => reactivateOne(b)}
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
              <MutedBtn disabled={meta.first} onClick={() => setPage((p) => Math.max(0, p - 1))}>
                이전
              </MutedBtn>
              <PageInfo>{(meta.number ?? page) + 1} / {meta.totalPages}</PageInfo>
              <MutedBtn disabled={meta.last} onClick={() => setPage((p) => p + 1)}>
                다음
              </MutedBtn>
            </Pagination>
          </>
        )
      )}
    </PageWrap>
  );
}
