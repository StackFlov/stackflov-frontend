import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../utils/api";
import {
  Page, HeaderRow, Title, Actions, Button, SubBtn,
  TableWrap, Row, Cell, TypeBadge, ReadBadge, LinkBtn, Ops,
  Pager, PagerBtn, PagerInfo, LoadingText, ErrorText, Empty
} from "../styles/components/NotificationsStyled";

const PAGE_SIZE = 10;

export default function Notifications() {
  const nav = useNavigate();
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
      const { data } = await api.get("/notifications", { params: query });
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

  const markRead = async (id) => {
    try {
      await api.post(`/notifications/${id}/read`);
      await load();
    } catch (e) {
      alert("읽음 처리 실패");
    }
  };

  const markAllRead = async () => {
    if (!window.confirm("모든 알림을 읽음 처리할까요?")) return;
    try {
      await api.post("/notifications/read-all");
      // 첫 페이지로 돌려서 최신 상태 다시 로드
      setPage(0);
      await load();
    } catch (e) {
      alert("전체 읽음 처리 실패");
    }
  };

  const toAppPath = (link) => {
  if (!link) return "#";
  try {
    const u = new URL(link, window.location.origin);
    // 같은 오리진 => pathname(+query/hash)만 사용 (SPA 라우팅)
    if (u.origin === window.location.origin) {
      return u.pathname + u.search + u.hash;
    }
    // 외부 오리진은 그대로 둠
    return link;
  } catch {
    // 이미 상대경로면 그대로
    return link;
  }
};

// 임시 보정: TRACE 관련 알림인데 /boards/{id}로 오면 /trace/detail/{id}로 교정
const fixPath = (link) => {
   const p = toAppPath(link);
   const m = p.match(/^\/boards\/(\d+)/);
   if (m) return `/trace/detail/${m[1]}`;
   return p;
};
const goAndMarkRead = async (n) => {
 const to = fixPath(n.link);
  try {
    if (!n.read) {
      await api.post(`/notifications/${n.id}/read`);
      // 목록 상태 최신화(선택): 현재 페이지에서 읽음 뱃지 바로 반영하고 싶으면 아래 한 줄
      await load();
    }
  } catch (_) {
    // 실패해도 이동은 진행
  } finally {
    nav(to);
  }
};

  return (
    <Page>
      <HeaderRow>
        <Title>알림</Title>
        <Actions>
          <SubBtn onClick={load}>새로고침</SubBtn>
          <Button onClick={markAllRead}>전체 읽음</Button>
        </Actions>
      </HeaderRow>

      {loading && <LoadingText>불러오는 중...</LoadingText>}
      {err && <ErrorText>목록을 불러오지 못했습니다.</ErrorText>}
      {!loading && items.length === 0 && <Empty>알림이 없습니다.</Empty>}

      {items.length > 0 && (
        <>
          <TableWrap>
            {items.map((n) => {
              const created = n.createdAt ? new Date(n.createdAt).toLocaleString() : "";
              return (
                <Row key={n.id}>
                  <Cell><TypeBadge>{n.type}</TypeBadge></Cell>
                  <Cell style={{ fontWeight: 700 }}>{n.message}</Cell>
                  <Cell>{created}</Cell>
                  <Cell><ReadBadge $read={n.read}>{n.read ? "읽음" : "안 읽음"}</ReadBadge></Cell>
                  <Ops>
                    {n.link && (
                       <LinkBtn
                            to={fixPath(n.link)}
                            onClick={(e) => {
                                e.preventDefault();        // 기본 이동 막고
                                goAndMarkRead(n);          // 읽음 처리 후 이동
                            }}>바로가기
                        </LinkBtn>
                    )}
                    {!n.read && (
                      <button onClick={() => markRead(n.id)}>읽음</button>
                    )}
                  </Ops>
                </Row>
              );
            })}
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
