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

const ROLE_VALUES = ["USER", "ADMIN"];
const STATUS_VALUES = ["ACTIVE", "INACTIVE"];

// ✅ 자취 생존 진화론 10단계 데이터
const LEVEL_DATA = [
  { name: "먼지 먹는 하마", icon: "🦛" },
  { name: "편의점 미슐랭", icon: "🍱" },
  { name: "배달 앱 VVIP", icon: "🛵" },
  { name: "우리 동네 반장님", icon: "🚩" },
  { name: "빨래 건조대 수호자", icon: "🧺" },
  { name: "프로 자취 연금술사", icon: "🧪" },
  { name: "당근 온도 99도", icon: "🥕" },
  { name: "지박령", icon: "👻" },
  { name: "자취방 만렙 교수", icon: "🎓" },
  { name: "StackFlov 성주", icon: "🏰" },
];

const normalizeRole = (v) => (v || "").replace(/^ROLE_/, "");
const toActiveBool = (status) => status === "ACTIVE";

export default function AdminUsers() {
  const [page, setPage] = useState(0);
  const [q, setQ] = useState("");
  const [resp, setResp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [busyId, setBusyId] = useState(null);
  const [memoUser, setMemoUser] = useState(null);

  async function fetchPage(p = 0) {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get("/admin/users", {
        params: { page: p, size: PAGE_SIZE, q: q || undefined },
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

  // ✅ 등급(레벨) 변경 함수
  const updateLevelExp = async (userId, newLevel, el) => {
    if (!newLevel) return;
    if (!window.confirm(`해당 사용자의 등급을 LV.${newLevel}로 변경하시겠습니까?`)) {
      if (el) el.value = "";
      return;
    }

    setBusyId(userId);
    try {
      await api.put(
        `/admin/users/${userId}/level-exp`,
        { 
          level: Number(newLevel), 
          exp: 0 
        },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
      alert("등급이 성공적으로 변경되었습니다.");
      await fetchPage(page);
    } catch (e) {
      alert(`등급 변경 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyId(null);
      if (el) el.value = ""; // 선택창 다시 "등급 변경"으로 초기화
    }
  };

  const updateRole = async (userId, roleRaw, el) => {
    const role = normalizeRole(roleRaw);
    setBusyId(userId);
    try {
      await api.put(
        `/admin/users/${userId}/role`,
        { role },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
      await fetchPage(page);
    } catch (e) {
      alert(`역할 변경 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyId(null);
      if (el) el.value = "";
    }
  };

  const updateStatus = async (userId, status, el) => {
    const active = toActiveBool(status);
    setBusyId(userId);
    try {
      await api.put(
        `/admin/users/${userId}/status`,
        { active },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
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
    if (!window.confirm(`정말 이 사용자를 ${period} 동안 정지하시겠습니까?`)) {
      if (el) el.value = "";
      return;
    }
    setBusyId(userId);
    try {
      await api.put(
        `/admin/users/${userId}/suspend`,
        { period },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
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

  const content = resp?.content || [];
  const totalPages = resp?.totalPages ?? 0;

  return (
    <PageWrap>
      <Header>
        <Title>사용자 관리</Title>
        <Sub>회원의 역할, 계정 상태, 자취 등급 및 정지 처리를 통합 관리합니다.</Sub>
      </Header>

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

      {loading && <InfoText>데이터를 불러오는 중입니다...</InfoText>}
      {err && <ErrorText>오류 발생: {String(err)}</ErrorText>}

      {!loading && !err && (
        content.length === 0 ? (
          <Empty>조회된 사용자가 없습니다.</Empty>
        ) : (
          <>
            <TableCard>
              <Table>
                <thead>
                  <tr>
                    <Th w={220}>Email</Th>
                    <Th w={100}>Nickname</Th>
                    <Th w={60}>Level</Th>
                    <Th w={60}>EXP</Th>
                    <Th w={100}>Role</Th>
                    <Th w={100}>Status</Th>
                    <Th w={100}>가입일</Th>
                    <Th>액션</Th>
                  </tr>
                </thead>
                <tbody>
                  {content.map((u) => {
                    const created = (u.createdAt && String(u.createdAt).slice(0, 10)) || "-";
                    const level = u.level ?? 1;
                    const exp = u.exp ?? 0;

                    return (
                      <tr key={u.userId}>
                        <Td w={220} ellipsis title={u.email}>{u.email}</Td>
                        <Td w={100} ellipsis title={u.nickname}>{u.nickname || "-"}</Td>
                        <Td w={60} style={{ fontWeight: 'bold' }}>{level}</Td>
                        <Td w={60}>{exp}</Td>
                        <Td w={100}>{normalizeRole(u.role)}</Td>
                        <Td w={100}>{u.active ? "ACTIVE" : "INACTIVE"}</Td>
                        <Td w={100}>{created}</Td>
                        <Td>
                          <Actions>
                            <PrimaryBtn
                              compact
                              onClick={() => setMemoUser({ id: u.userId, email: u.email, name: u.nickname })}
                            >
                              메모
                            </PrimaryBtn>

                            {/* ✅ 등급 변경: '등급 변경' 문구로 원복 */}
                            <Select
                              compact
                              defaultValue=""
                              disabled={busyId === u.userId}
                              onChange={(e) => updateLevelExp(u.userId, e.target.value, e.target)}
                            >
                              <option value="" disabled>등급 변경</option>
                              {LEVEL_DATA.map((lv, idx) => (
                                <option key={idx} value={idx + 1}>
                                  LV.{idx + 1} {lv.name}
                                </option>
                              ))}
                            </Select>

                            {/* 역할 변경 */}
                            <Select
                              compact
                              defaultValue=""
                              disabled={busyId === u.userId}
                              onChange={(e) => updateRole(u.userId, e.target.value, e.target)}
                            >
                              <option value="" disabled>역할 변경</option>
                              <option value="USER">USER</option>
                              <option value="ADMIN">ADMIN</option>
                            </Select>

                            {/* 상태 변경 */}
                            <Select
                              compact
                              defaultValue=""
                              disabled={busyId === u.userId}
                              onChange={(e) => updateStatus(u.userId, e.target.value, e.target)}
                            >
                              <option value="" disabled>상태 변경</option>
                              <option value="ACTIVE">ACTIVE</option>
                              <option value="INACTIVE">INACTIVE</option>
                            </Select>

                            {/* 정지 기간 */}
                            <Select
                              compact
                              defaultValue=""
                              disabled={busyId === u.userId}
                              onChange={(e) => suspendUser(u.userId, e.target.value, e.target)}
                            >
                              <option value="" disabled>정지 기간</option>
                              <option value="THREE_DAYS">3일</option>
                              <option value="SEVEN_DAYS">7일</option>
                              <option value="TEN_DAYS">10일</option>
                              <option value="THIRTY_DAYS">30일</option>
                              <option value="SIX_MONTHS">6개월</option>
                              <option value="PERMANENT">영구</option>
                            </Select>
                          </Actions>
                        </Td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </TableCard>

            <Pagination>
              <MutedBtn disabled={page <= 0} onClick={() => fetchPage(page - 1)}>이전</MutedBtn>
              <PageInfo>{page + 1} / {totalPages || 1}</PageInfo>
              <MutedBtn disabled={page >= (totalPages - 1)} onClick={() => fetchPage(page + 1)}>다음</MutedBtn>
            </Pagination>
          </>
        )
      )}

      {memoUser && (
        <AdminUserMemos
          user={memoUser}
          onClose={() => setMemoUser(null)}
        />
      )}
    </PageWrap>
  );
}