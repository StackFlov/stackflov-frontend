// src/pages/admin/AdminNoticeList.js
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import {
  ListPage, HeaderRow, Title, NewBtn,
  TableWrap, Row, CellTitle, CellText, CellActions,
  Pager, PagerBtn, LoadingText, ErrorText, Empty
} from "../../styles/components/admin/NoticeListStyled";

const PAGE_SIZE = 10;

export default function AdminNoticeList() {
  const [params, setParams] = useSearchParams();
  const pageParam = Number(params.get("page") ?? 0);
  const [page, setPage] = useState(Number.isNaN(pageParam) ? 0 : pageParam);

  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ totalPages: 0, number: 0, first: true, last: true });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const nav = useNavigate();

  // 서버가 지원하면 active=true로만 내려오도록 시도 (무시돼도 안전)
  const query = useMemo(
    () => ({ page, size: PAGE_SIZE, sort: "createdAt,DESC", active: true }),
    [page]
  );

  const load = useCallback(async () => {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get("/notices", { params: query });

      // 서버 응답 리스트
      const list = Array.isArray(data?.content) ? data.content : [];
      // 프론트 방어 필터: active가 명시적으로 false인 항목은 숨김
      const filtered = list.filter(n => n?.active !== false);

      setItems(filtered);
      setMeta({
        totalPages: data?.totalPages ?? 0,
        number: data?.number ?? 0,
        first: !!data?.first,
        last: !!data?.last,
      });

      // 필터 때문에 현재 페이지가 비면 한 페이지 뒤로 보정
      if (filtered.length === 0 && (data?.totalPages ?? 0) > 0 && page > 0) {
        setPage(p => Math.max(0, p - 1));
      }
    } catch (e) {
      setErr(e);
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => { load(); }, [load]);
  useEffect(() => { setParams({ page }); }, [page, setParams]);

  const remove = async (id) => {
    if (!window.confirm("이 공지를 삭제(비활성화)하시겠습니까?")) return;
    try {
      await api.delete(`/admin/notices/${id}`); // 204
      await load();
      alert("삭제되었습니다.");
    } catch (e) {
      console.error(e);
      alert("삭제에 실패했습니다. 권한을 확인하세요.");
    }
  };

  const go = (p) => {
    if (p < 0 || p >= meta.totalPages) return;
    setPage(p);
  };

  return (
    <ListPage>
      <HeaderRow>
        <Title>공지 관리</Title>
        <NewBtn onClick={() => nav("/admin/notices/new")}>+ 새 공지</NewBtn>
      </HeaderRow>

      {loading && <LoadingText>불러오는 중...</LoadingText>}
      {err && <ErrorText>목록 로드 실패</ErrorText>}
      {!loading && items.length === 0 && <Empty>등록된 공지가 없습니다.</Empty>}

      {items.length > 0 && (
        <TableWrap>
          {items.map((n) => (
            <Row key={n.id}>
              <CellTitle>
                <Link to={`/notices/${n.id}`}>{n.title}</Link>
              </CellTitle>
              <CellText>{n.authorNickname || "관리자"}</CellText>
              <CellText>{n.createdAt ? new Date(n.createdAt).toLocaleString() : "-"}</CellText>
              <CellActions>
                <button onClick={() => nav(`/admin/notices/${n.id}/edit`)}>수정</button>
                <button onClick={() => remove(n.id)}>삭제</button>
              </CellActions>
            </Row>
          ))}
        </TableWrap>
      )}

      {meta.totalPages > 1 && (
        <Pager>
          <PagerBtn onClick={() => go(0)} disabled={meta.first}>≪</PagerBtn>
          <PagerBtn onClick={() => go(page - 1)} disabled={meta.first}>이전</PagerBtn>
          <span>{page + 1} / {meta.totalPages}</span>
          <PagerBtn onClick={() => go(page + 1)} disabled={meta.last}>다음</PagerBtn>
          <PagerBtn onClick={() => go(meta.totalPages - 1)} disabled={meta.last}>≫</PagerBtn>
        </Pager>
      )}
    </ListPage>
  );
}
