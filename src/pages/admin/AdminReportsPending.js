import React, { useEffect, useMemo, useState } from "react";
import api from "../../utils/api";
import {
  PageWrap, Header, Title, Sub,
  SearchCard, Row, Input, Spacer,
  PrimaryBtn, GhostBtn, MutedBtn, DangerBtn,
  TableCard, Table, Th, Td, Badge, Actions,
  Pagination, PageInfo, ErrorText, InfoText, Empty
} from "../../styles/components/admin/AdminCommonStyled";

const PAGE_SIZE = 10;
const NEXT_STATUSES = [
  { v: "REVIEWED", label: "승인(삭제)" },
  { v: "REJECTED", label: "기각" },
  { v: "PENDING",  label: "보류" },
];

export default function AdminReportsPending() {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ totalPages: 0, number: 0, first: true, last: true });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const [adminComment, setAdminComment] = useState("");
  const [busyRow, setBusyRow] = useState(null);

  const params = useMemo(() => ({ page, size: PAGE_SIZE }), [page]);

  const load = async () => {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get("/admin/reports/pending", { params });
      const content = data?.content ?? [];
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

  useEffect(() => { load(); }, [/* eslint-disable-line */ params]);

  const processReport = async (id, status) => {
    if (!status) return;
    setBusyRow(id);
    try {
      await api.post(`/admin/reports/${id}/process`, {
        status,
        adminComment: adminComment || "",
      });
      await load();
    } catch (e) {
      alert(`처리 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyRow(null);
    }
  };

  function buildContentPath(r) {
    if (r.contentUrl) return r.contentUrl;
    const type = r.contentType || r.type;
    if (type === "BOARD")  return `/trace/detail/${r.contentId}`;
    if (type === "REVIEW") return `/reviews/${r.contentId}`;
    if (type === "COMMENT") {
      if (r.parentType === "BOARD"  && r.parentBoardId)  return `/boards/${r.parentBoardId}#comment-${r.contentId}`;
      if (r.parentType === "REVIEW" && r.parentReviewId) return `/reviews/${r.parentReviewId}#comment-${r.contentId}`;
      return `/comments/board/${r.contentId}`; // 폴백
    }
    return "#";
  }

  const statusBadge = (v) => {
    if (v === "REVIEWED") return <Badge type="success">REVIEWED</Badge>;
    if (v === "REJECTED") return <Badge type="danger">REJECTED</Badge>;
    return <Badge>PENDING</Badge>;
  };

  return (
    <PageWrap>
      <Header>
        <Title>신고 관리(대기중)</Title>
        <Sub>대기 중인 신고를 검토하고 처리 상태를 변경합니다.</Sub>
      </Header>

      {/* 상단 컨트롤 */}
      <SearchCard>
        <Row>
          <Input
            value={adminComment}
            onChange={(e) => setAdminComment(e.target.value)}
            placeholder="관리자 코멘트(선택)"
          />
          <PrimaryBtn onClick={load}>새로고침</PrimaryBtn>
          <Spacer />
        </Row>
      </SearchCard>

      {/* 상태 */}
      {loading && <InfoText>불러오는 중…</InfoText>}
      {err && <ErrorText>오류: {String(err)}</ErrorText>}

      {/* 리스트 */}
      {!loading && !err && (
        items.length === 0 ? (
          <Empty>결과 없음</Empty>
        ) : (
          <>
            <TableCard>
              <Table>
                <thead>
                  <tr>
                    <Th w={60}>#</Th>
                    <Th w={100}>상태</Th>
                    <Th w={110}>유형</Th>
                    <Th w={80}>콘텐츠ID</Th>
                    <Th w={100}>신고자</Th>
                    <Th w={100}>작성자</Th>
                    <Th w={100}>사유</Th>            {/* auto (남은 너비 전부) */}
                    <Th w={80}>링크</Th>
                    <Th w={300}>처리</Th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(r => (
                    <tr key={r.reportId}>
                      <Td w={60}>{r.reportId}</Td>
                          <Td w={100}>{statusBadge(r.status)}</Td>
                          <Td w={110}>{r.contentType || r.type}</Td>
                          <Td w={90}>{r.contentId}</Td>
                          <Td w={130} ellipsis>{r.reporterNickname || "-"}</Td>
                          <Td w={180} ellipsis>
                            {r.reportedUserId ? `${r.reportedUserId} (${r.reportedUserNickname})` : "-"}
                          </Td>
                          <Td ellipsis>{r.reason || "-"}</Td>
                          <Td w={80}>
                            <Actions>
                          <GhostBtn
                            onClick={() => {
                              const url = buildContentPath(r);
                              if (url && url !== "#") window.open(url, "_blank");
                              else alert("링크 정보를 찾을 수 없습니다.");
                            }}
                          >
                            보기
                          </GhostBtn>
                        </Actions>
                      </Td>
                      <Td w={200}>
                        <Actions>
                          <PrimaryBtn
                            disabled={busyRow === r.reportId}
                            onClick={() => processReport(r.reportId, "REVIEWED")}
                          >
                            {busyRow === r.reportId ? "처리 중…" : "승인(삭제)"}
                          </PrimaryBtn>
                          <DangerBtn
                            disabled={busyRow === r.reportId}
                            onClick={() => processReport(r.reportId, "REJECTED")}
                          >
                            {busyRow === r.reportId ? "처리 중…" : "기각"}
                          </DangerBtn>
                          <MutedBtn
                            disabled={busyRow === r.reportId}
                            onClick={() => processReport(r.reportId, "PENDING")}
                          >
                            {busyRow === r.reportId ? "처리 중…" : "보류"}
                          </MutedBtn>
                        </Actions>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableCard>

            {/* 페이지네이션 */}
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
