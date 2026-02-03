// src/pages/Notifications.js
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import {
  Page, HeaderRow, Title, Actions, Button, SubBtn,
  TableWrap, Row, Cell, TypeBadge, ReadBadge, LinkBtn
} from "../styles/components/NotificationsStyled";

// ✅ 서버의 NotificationType Enum과 정확히 일치시켜야 합니다.
const TYPE_MAP = {
  COMMENT: { label: "COMMENT", color: "#3b82f6" },
  LIKE: { label: "LIKE", color: "#ef4444" },
  FOLLOW: { label: "FOLLOW", color: "#10b981" },
  REPORT: { label: "REPORT", color: "#6366f1" },
  LEVELUP: { label: "LEVELUP", color: "#8b5cf6" }, // SYSTEM 대신 LEVELUP 사용
  MENTION: { label: "MENTION", color: "#fd7e14" }
};

export default function Notifications() {
  const nav = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/notifications", { params: { size: 20, sort: "createdAt,DESC" } });
      setItems(data.content ?? []);
    } catch (e) {
      console.error("알림 조회 실패");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const markAllRead = async () => {
    if (!window.confirm("모든 알림을 읽음 처리할까요?")) return;
    try {
      await api.post("/notifications/read-all");
      await load();
    } catch (e) {
      alert("처리 실패");
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

      <TableWrap>
        {!loading && items.length === 0 && <div style={{padding: '40px', textAlign: 'center'}}>알림이 없습니다.</div>}
        
        {items.map((n) => {
          // ✅ n.type 또는 n.notificationType 중 서버가 보내주는 정확한 필드를 사용해야 합니다.
          const typeKey = n.notificationType || n.type; 
          const typeInfo = TYPE_MAP[typeKey] || { label: typeKey || "알림", color: "#9ca3af" };
          const dateStr = n.createdAt ? new Date(n.createdAt).toLocaleString() : "-";

          return (
            <Row key={n.id} $unread={!n.read}>
              <Cell>
                {/* ✅ 배지 안에 typeKey 대신 typeInfo.label이 들어가야 텍스트가 보입니다. */}
                <TypeBadge $color={typeInfo.color}>
                  {typeInfo.label}
                </TypeBadge>
              </Cell>
              <Cell style={{ fontWeight: n.read ? 500 : 700 }}>
                {n.message}
              </Cell>
              <Cell style={{ color: "#6b7280", fontSize: "14px" }}>{dateStr}</Cell>
              <Cell>
                <ReadBadge $read={n.read}>{n.read ? "읽음" : "신규"}</ReadBadge>
              </Cell>
              <Cell>
                {n.link && <LinkBtn to={n.link}>바로가기</LinkBtn>}
              </Cell>
            </Row>
          );
        })}
      </TableWrap>
    </Page>
  );
}