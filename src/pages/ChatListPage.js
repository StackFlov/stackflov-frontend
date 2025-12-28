// src/pages/ChatListPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import styled from "styled-components";
import ChatModal from "../components/Chat/ChatModal"; // 경로 주의!

const ChatListPage = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [loading, setLoading] = useState(true);
  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    // 백엔드에 추가한 GET /chat/rooms 호출
    axios.get("https://api.stackflov.com/chat/rooms", {
      headers: { Authorization: `Bearer ${accessToken}` },
      withCredentials: true
    })
    .then(res => setRooms(res.data)) // ChatRoomResponseDto 리스트 저장
    .catch(err => console.error("목록 로딩 실패:", err))
    .finally(() => setLoading(false));
  }, [accessToken]);

  return (
    <ListContainer>
      <h2>내 채팅 목록</h2>
      {loading ? (
        <StatusText>불러오는 중...</StatusText>
      ) : rooms.length === 0 ? (
        <StatusText>대화 중인 채팅방이 없습니다.</StatusText>
      ) : (
        <RoomList>
          {rooms.map(room => (
            <RoomItem key={room.roomId} onClick={() => setSelectedRoomId(room.roomId)}>
              <div className="avatar">💬</div>
              <div className="info">
                {/* 백엔드에서 추가한 otherUserNickname 사용 */}
                <div className="nickname">{room.otherUserNickname} 님과의 대화</div>
                <div className="preview">클릭하여 대화 내용을 확인하세요.</div>
              </div>
              <EnterIcon>〉</EnterIcon>
            </RoomItem>
          ))}
        </RoomList>
      )}

      {/* 모달 연동 */}
      {selectedRoomId && (
        <ChatModal 
          roomId={selectedRoomId} 
          onClose={() => setSelectedRoomId(null)} 
        />
      )}
    </ListContainer>
  );
};

/* 스타일 생략 (기존 스타일 감성 유지) */
const ListContainer = styled.div` max-width: 600px; margin: 40px auto; padding: 20px; `;
const RoomList = styled.div` background: #fff; border: 1px solid #eef0f3; border-radius: 12px; `;
const RoomItem = styled.div`
  display: flex; align-items: center; padding: 16px; border-bottom: 1px solid #f1f5f9; cursor: pointer;
  &:hover { background: #f8fafc; }
  .avatar { font-size: 24px; margin-right: 12px; }
  .nickname { font-weight: 700; color: #1e293b; }
  .preview { font-size: 13px; color: #94a3b8; }
`;
const EnterIcon = styled.div` color: #cbd5e1; font-weight: bold; `;
const StatusText = styled.div` text-align: center; padding: 40px; color: #94a3b8; `;

export default ChatListPage;