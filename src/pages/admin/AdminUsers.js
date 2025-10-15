// src/pages/admin/AdminUsers.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import AdminUserMemos from "./AdminUserMemos";
import {
  PageWrap, Header, Title, Sub,
  SearchCard, Row, Input, PrimaryBtn, GhostBtn, MutedBtn,
  Select, TableCard, Table, Th, Td, Actions,
  Pagination, PageInfo, ErrorText, InfoText, Empty,
} from "../../styles/components/admin/AdminCommonStyled";

const PAGE_SIZE = 10;

export default function AdminUsers() {
  const [page, setPage] = useState(0);
  const [q, setQ] = useState("");
  const [resp, setResp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [busyId, setBusyId] = useState(null);
  const [memoUser, setMemoUser] = useState(null); // {id, email, name}

  async function fetchPage(p = 0) {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get("/admin/users", {
        params: { page: p, size: PAGE_SIZE /*, q: q.trim()*/ },
      });
      setResp(data);
      setPage(p);
    } catch (e) {
      setErr(e?.response?.data?.message || e.message || "불러오기 실패");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchPage(0); }, []);

  const content = resp?.content || [];
  const totalPages = resp?.totalPages ?? 0;

  // 액션들
  const updateRole = async (userId, role, el) => {
    if (!role) return;
    setBusyId(userId);
    try {
      await api.put(`/admin/users/${userId}/role`, { role });
      await fetchPage(page);
    } catch (e) {
      alert(`역할 변경 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyId(null);
      if (el) el.value = "";
    }
  };

  const updateStatus = async (userId, status, el) => {
    if (!status) return;
    setBusyId(userId);
    try {
      await api.put(`/admin/users/${userId}/status`, { status });
      await fetchPage(page);
    } catch (e) {
      alert(`상태 변경 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyId(null);
      if (el) el.value = "";
    }
  };

  const suspendUser = async (userId, period, el) => {
    if (!period) return;
    if (!window.confirm(`정말 이 사용자를 ${period}로 정지하시겠습니까?`)) {
      if (el) el.value = "";
      return;
    }
    setBusyId(userId);
    try {
      await api.put(`/admin/users/${userId}/suspend`, { period });
      await fetchPage(page);
    } catch (e) {
      alert(`정지 처리 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyId(null);
      if (el) el.value = "";
    }
  };

  const onSearch = () => fetchPage(0);
  const onReset = () => { setQ(""); fetchPage(0); };

  return (
    <PageWrap>
      <Header>
        <Title>사용자 관리</Title>
        <Sub>역할/상태/정지 처리를 관리하고, 게시글·댓글 열람으로 이어집니다.</Sub>
      </Header>

      {/* 검색 바 */}
      <SearchCard>
        <Row>
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
            placeholder="이메일/닉네임 검색"
          />
          <PrimaryBtn onClick={onSearch}>검색</PrimaryBtn>
          <GhostBtn onClick={onReset}>초기화</GhostBtn>
        </Row>
      </SearchCard>

      {loading && <InfoText>불러오는 중…</InfoText>}
      {err && <ErrorText>오류: {String(err)}</ErrorText>}

      {!loading && !err && (
        content.length === 0 ? (
          <Empty>결과 없음</Empty>
        ) : (
          <>
            <TableCard>
              <Table>
                <thead>
                  <tr>
                    <Th w={260}>Email</Th>
                    <Th w={90}>Nickname</Th>
                    <Th w={80}>Role</Th>
                    <Th w={80}>Status</Th>
                    <Th w={80}>가입일</Th>
                    <Th>액션</Th>
                  </tr>
                </thead>
                <tbody>
                  {content.map((u) => {
                    const created =
                      (u.createdAt && String(u.createdAt).slice(0, 10)) ||
                      (u.created_date && String(u.created_date).slice(0, 10)) ||
                      "-";
                    const role   = u.role || (u.roles && u.roles.join(", ")) || "-";
                    const status = u.status || (u.active ? "ACTIVE" : "INACTIVE");
                    const nick   = u.nickname || u.name || "-"; // ← 닉네임 우선

                    return (
                      <tr key={u.userId}>
                        <Td w={260} ellipsis title={u.email}>{u.email}</Td>
                        <Td w={90} ellipsis title={nick}>{nick}</Td>
                        <Td w={80} ellipsis title={role}>{role}</Td>
                        <Td w={80}>{status}</Td>
                        <Td w={80}>{created}</Td>
                        <Td>
                           <Actions>
                            <PrimaryBtn
                              compact
                              onClick={() => setMemoUser({ id: u.userId, email: u.email, name: nick })}
                            >
                              메모
                            </PrimaryBtn>

                            <Select
                              compact
                              defaultValue=""
                              disabled={busyId === u.userId}
                              onChange={(e) => updateRole(u.userId, e.target.value, e.target)}
                              aria-label="역할 변경"
                            >
                              <option value="" disabled>역할 변경</option>
                              <option value="ROLE_USER">ROLE_USER</option>
                              <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                            </Select>

                            <Select
                              compact
                              defaultValue=""
                              disabled={busyId === u.userId}
                              onChange={(e) => updateStatus(u.userId, e.target.value, e.target)}
                              aria-label="상태 변경"
                            >
                              <option value="" disabled>상태 변경</option>
                              <option value="ACTIVE">ACTIVE</option>
                              <option value="INACTIVE">INACTIVE</option>
                            </Select>

                            <Select
                              compact
                              defaultValue=""
                              disabled={busyId === u.userId}
                              onChange={(e) => suspendUser(u.userId, e.target.value, e.target)}
                              aria-label="정지 기간"
                            >
                              <option value="" disabled>정지 기간</option>
                              <option value="THREE_DAYS">3일</option>
                              <option value="SEVEN_DAYS">7일</option>
                              <option value="TEN_DAYS">10일</option>
                              <option value="THIRTY_DAYS">30일</option>
                              <option value="SIX_MONTHS">6개월</option>
                              <option value="PERMANENT">영구</option>
                            </Select>

                            {/* ★ 게시글/댓글 버튼: 개수 > 0일 때만 노출 */}
                            {Number(u.boardCount) > 0 && (
                              <PrimaryBtn
                                as={Link}
                                to={`/admin/users/${u.userId}/boards`}
                                compact
                                title={`게시글 ${u.boardCount.toLocaleString()}개`}
                              >
                                게시글 보기
                              </PrimaryBtn>
                            )}
                            {Number(u.commentCount) > 0 && (
                              <GhostBtn
                                as={Link}
                                to={`/admin/users/${u.userId}/comments`}
                                compact
                                title={`댓글 ${u.commentCount.toLocaleString()}개`}
                              >
                                댓글 보기
                              </GhostBtn>
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
              <MutedBtn disabled={page <= 0} onClick={() => fetchPage(page - 1)}>
                이전
              </MutedBtn>
              <PageInfo>{page + 1} / {totalPages || 1}</PageInfo>
              <MutedBtn disabled={page >= (totalPages - 1)} onClick={() => fetchPage(page + 1)}>
                다음
              </MutedBtn>
            </Pagination>
          </>
        )
      )}

      {/* 사용자 메모 모달 */}
      {memoUser && (
        <AdminUserMemos
          user={memoUser}
          onClose={() => setMemoUser(null)}
        />
      )}
    </PageWrap>
  );
}
