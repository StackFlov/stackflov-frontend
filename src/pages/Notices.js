import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../utils/api";
import {
  Page, Title, LoadingText, ErrorText, Empty,
  TableWrap, Row, TitleCell, MetaCell,
  Pager, PagerBtn, PagerInfo
} from "../styles/components/admin/NoticesStyled";

const PAGE_SIZE = 10;

export default function Notices() {
  const [params, setParams] = useSearchParams();
  const pageParam = Number(params.get("page") ?? 0);
  const [page, setPage] = useState(Number.isNaN(pageParam) ? 0 : pageParam);

  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ totalPages: 0, number: 0, first: true, last: true });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const query = useMemo(() => ({ page, size: PAGE_SIZE, sort: "createdAt,DESC" }), [page]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setErr(null);
      try {
        const { data } = await api.get("/notices", { params: query });
        setItems(data.content ?? []);
        setMeta({
          totalPages: data.totalPages,
          number: data.number,
          first: data.first,
          last: data.last,
        });
      } catch (e) {
        setErr(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [query]);

  useEffect(() => { setParams({ page }); }, [page, setParams]);

  const go = (p) => {
    if (p < 0 || p >= meta.totalPages) return;
    setPage(p);
  };

  return (
    <Page>
      <Title>공지사항</Title>

      {loading && <LoadingText>불러오는 중...</LoadingText>}
      {err && <ErrorText>목록을 불러오지 못했습니다.</ErrorText>}
      {!loading && items.length === 0 && <Empty>등록된 공지가 없습니다.</Empty>}

      {items.length > 0 && (
        <>
          <TableWrap>
            {items.map((n) => (
              <Row key={n.id}>
                <TitleCell>
                  <Link to={`/notices/${n.id}`}>{n.title}</Link>
                </TitleCell>
                <MetaCell>{n.authorNickname}</MetaCell>
                <MetaCell>조회 {n.viewCount ?? 0}</MetaCell>
                <MetaCell>{new Date(n.createdAt).toLocaleString()}</MetaCell>
              </Row>
            ))}
          </TableWrap>

          {meta.totalPages > 1 && (
            <Pager>
              <PagerBtn onClick={() => go(0)} disabled={meta.first}>≪</PagerBtn>
              <PagerBtn onClick={() => go(page - 1)} disabled={meta.first}>이전</PagerBtn>
              <PagerInfo>{page + 1} / {meta.totalPages}</PagerInfo>
              <PagerBtn onClick={() => go(page + 1)} disabled={meta.last}>다음</PagerBtn>
              <PagerBtn onClick={() => go(meta.totalPages - 1)} disabled={meta.last}>≫</PagerBtn>
            </Pager>
          )}
        </>
      )}
    </Page>
  );
}
