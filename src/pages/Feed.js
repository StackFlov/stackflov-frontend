import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import {
  Page, Header, Title, Sub, Grid, Card, Thumb, Body, CardTitle,
  MetaRow, AuthorLink, StatRow, Pager, PagerBtn, PagerInfo,
  LoadingText, ErrorText, Empty
} from "../styles/components/FeedStyled";

const PAGE_SIZE = 12;

const fmtN = (n) => (typeof n === "number" ? n.toLocaleString() : "-");
const fmtDate = (d) => (d ? new Date(d).toLocaleString() : "");

export default function Feed() {
  const [params, setParams] = useSearchParams();
  const pageParam = Number(params.get("page") ?? 0);
  const [page, setPage] = useState(Number.isNaN(pageParam) ? 0 : pageParam);

  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ totalPages: 0, number: 0, first: true, last: true });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const query = useMemo(() => ({ page, size: PAGE_SIZE, sort: "createdAt,DESC" }), [page]);

  const load = useCallback(async () => {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get("/feed", { params: query });
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
  }, [query]);

  useEffect(() => { load(); }, [load]);
  useEffect(() => { setParams({ page }); }, [page, setParams]);

  const go = (p) => {
    if (p < 0 || p >= meta.totalPages) return;
    setPage(p);
  };

  return (
    <Page>
      <Header>
        <div>
          <Title>피드</Title>
          <Sub>내가 팔로우한 사람들의 최신 게시글</Sub>
        </div>
      </Header>

      {loading && <LoadingText>불러오는 중...</LoadingText>}
      {err && <ErrorText>피드를 불러오지 못했습니다.</ErrorText>}
      {!loading && items.length === 0 && <Empty>팔로우한 사용자의 게시글이 아직 없어요.</Empty>}

      {items.length > 0 && (
        <>
          <Grid>
            {items.map((b) => {
              const toBoard = `/boards/${b.id}`; // ← 프로젝트 상세 경로에 맞게 필요 시 수정
              const toAuthor = `/users/${b.authorId}`; // ← 프로필 경로에 맞게 필요 시 수정
              return (
                <Card to={toBoard} key={b.id}>
                  <Thumb>
                    {b.thumbnailUrl ? (
                      <img src={b.thumbnailUrl} alt="" />
                    ) : null}
                  </Thumb>
                  <Body>
                    <CardTitle title={b.title}>{b.title}</CardTitle>
                    <MetaRow>
                      <AuthorLink to={toAuthor}>{b.authorNickname}</AuthorLink>
                      <span>{fmtDate(b.createdAt)}</span>
                    </MetaRow>
                    <StatRow>
                      <span>좋아요 {fmtN(b.likeCount)}</span>
                      <span>조회 {fmtN(b.viewCount)}</span>
                    </StatRow>
                  </Body>
                </Card>
              );
            })}
          </Grid>

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
