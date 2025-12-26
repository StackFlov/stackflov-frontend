import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ChatModal from "../components/Chat/ChatModal"; // 기존에 만든 모달 재사용

const ChatListPage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const accessToken = Cookies.get("accessToken");
  const navigate = useNavigate();

  const apiBase = "https://api.stackflov.com";

  useEffect(() => {
    // 1. 로그인 체크: 토큰이 없으면 로그인 페이지로 이동
    if (!accessToken) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    // 2. 참여 중인 채팅방 목록 불러오기
    axios.get(`${apiBase}/chat/rooms`, {
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}` 
      },
      withCredentials: true
    })
    .then(res => {
      // 서버에서 받은 채팅방 배열 저장
      setRooms(Array.isArray(res.data) ? res.data : []);
    })
    .catch(err => {
      console.error("채팅 목록 로딩 실패:", err);
    })
    .finally(() => setLoading(false));
  }, [accessToken, navigate]);

  return (
    <Container>
      <TitleSection>
        <h2>내 채팅 목록</h2>
        <p>참여 중인 1:1 대화 리스트입니다.</p>
      </TitleSection>

      {loading ? (
        <Empty>채팅방을 불러오는 중입니다...</Empty>
      ) : rooms.length === 0 ? (
        <Empty>참여 중인 채팅방이 없습니다. 게시글에서 대화를 시작해보세요!</Empty>
      ) : (
        <ListWrapper>
          {rooms.map(room => (
            <RoomRow key={room.roomId} onClick={() => setSelectedRoomId(room.roomId)}>
              <div className="room-info">
                <div className="target-name">
                  💬 {room.otherUserNickname || `방 #${room.roomId}`}
                </div>
                <div className="last-hint">클릭하여 대화에 참여하세요.</div>
              </div>
              <EnterBtn>입장하기</EnterBtn>
            </RoomRow>
          ))}
        </ListWrapper>
      )}

      {/* 선택된 방이 있을 때만 모달을 띄움 */}
      {selectedRoomId && (
        <ChatModal 
          roomId={selectedRoomId} 
          onClose={() => setSelectedRoomId(null)} 
        />
      )}
    </Container>
  );
};

/* 스타일 정의 (HeaderStyled.js의 감성을 유지함) */
const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 16px;
  font-family: system-ui, -apple-system, sans-serif;
`;

const TitleSection = styled.div`
  margin-bottom: 24px;
  h2 { margin: 0 0 8px 0; font-size: 24px; font-weight: 800; }
  p { margin: 0; color: #64748b; font-size: 14px; }
`;

const ListWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #eef0f3;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const RoomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #f1f5f9;
  cursor: pointer;
  transition: background 0.15s ease;

  &:last-child { border-bottom: none; }
  &:hover { background: #f8fafc; }

  .target-name { font-weight: 700; font-size: 16px; color: #1e293b; margin-bottom: 4px; }
  .last-hint { color: #94a3b8; font-size: 13px; }
`;

const EnterBtn = styled.button`
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid #6366f1;
  background: #fff;
  color: #6366f1;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #6366f1;
    color: #fff;
  }
`;

const Empty = styled.div`
  padding: 80px 0;
  text-align: center;
  color: #94a3b8;
  font-size: 15px;
`;

export default ChatListPage;