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
  const [selectedIds, setSelectedIds] = useState([]);

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

  const deleteOne = async (id) => {
    if (!window.confirm("이 알림을 삭제할까요?")) return;
    try {
      await api.delete(`/notifications/${id}`);
      setItems(prev => prev.filter(item => item.id !== id)); // 목록에서 즉시 제거
    } catch (e) {
      alert("삭제 실패");
    }
  };

  const deleteAll = async () => {
    if (!window.confirm("모든 알림을 삭제하시겠습니까? 복구할 수 없습니다.")) return;
    try {
      await api.delete("/notifications/all");
      setItems([]);
      setSelectedIds([]);
    } catch (e) {
      alert("전체 삭제 실패");
    }
  };

  const deleteSelected = async () => {
    if (selectedIds.length === 0) return alert("삭제할 알림을 선택해주세요.");
    if (!window.confirm(`${selectedIds.length}개의 알림을 삭제할까요?`)) return;
    
    try {
      // 💡 주의: axios.delete에서 body를 보낼 때는 { data: ... } 형식을 써야 합니다.
      await api.delete("/notifications/bulk-delete", { data: selectedIds });
      setItems(prev => prev.filter(item => !selectedIds.includes(item.id)));
      setSelectedIds([]);
    } catch (e) {
      alert("선택 삭제 실패");
    }
  };

  const toggleSelect = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedIds.length === items.length) setSelectedIds([]);
    else setSelectedIds(items.map(item => item.id));
  };
  
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
          <Button onClick={deleteSelected} disabled={selectedIds.length === 0} style={{backgroundColor: '#f59e0b'}}>
          선택 삭제 ({selectedIds.length})
          </Button>
          <Button onClick={deleteAll} style={{backgroundColor: '#ef4444'}}>전체 삭제</Button>
        </Actions>
      </HeaderRow>

      <TableWrap>
        <div style={{ padding: '10px 20px', borderBottom: '1px solid #eee' }}>
        <input 
          type="checkbox" 
          onChange={toggleAll} 
          checked={items.length > 0 && selectedIds.length === items.length} 
        />
        <span style={{ marginLeft: '10px', fontSize: '14px', color: '#666' }}>전체 선택</span>
        </div>
        {!loading && items.length === 0 && <div style={{padding: '40px', textAlign: 'center'}}>알림이 없습니다.</div>}
        
        {items.map((n) => {
          // ✅ n.type 또는 n.notificationType 중 서버가 보내주는 정확한 필드를 사용해야 합니다.
          const typeKey = n.notificationType || n.type; 
          const typeInfo = TYPE_MAP[typeKey] || { label: typeKey || "알림", color: "#9ca3af" };
          const dateStr = n.createdAt ? new Date(n.createdAt).toLocaleString() : "-";

          return (
            <Row key={n.id} $unread={!n.read}>
              <Cell>
                <input 
                  type="checkbox" 
                  checked={selectedIds.includes(n.id)}
                  onChange={() => toggleSelect(n.id)}
                />
              </Cell>
              <Cell>
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
              <button 
                onClick={() => deleteOne(n.id)}
                style={{ marginLeft: '10px', border: 'none', background: 'none', cursor: 'pointer', color: '#ccc' }}
              >
                삭제
              </button>
            </Row>
          );
        })}
      </TableWrap>
    </Page>
  );
}