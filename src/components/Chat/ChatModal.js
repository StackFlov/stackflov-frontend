import React, { useState, useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import Cookies from 'js-cookie';
import axios from 'axios';
import styled from 'styled-components';

const ChatModal = ({ roomId, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const stompClient = useRef(null);
  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
  if (!roomId || !accessToken) return;

  // 1. 과거 대화 내역 불러오기 (REST API 호출)
  axios.get(`https://api.stackflov.com/chat/rooms/${roomId}/messages`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true
  })
  .then(res => {
    // 서버 응답 데이터(List<ChatMessageResponseDto>)를 상태에 저장
    setMessages(res.data); 
    console.log("과거 내역 로드 완료:", res.data.length, "건");
  })
  .catch(err => console.error("과er 내역 로딩 실패:", err));

  // 2. 실시간 웹소켓 연결 로직 (기존 코드 유지)
  const client = new Client({
    brokerURL: 'ws://localhost:8080/ws-stomp',
    connectHeaders: { Authorization: `Bearer ${accessToken}` },
    // ... 나머지 설정 동일
  });

  // ... (생략)
}, [roomId, accessToken]);

  const sendMessage = () => {
  if (!input.trim()) return;

  // 1. .send() 대신 .publish()를 사용해야 합니다.
  // 2. 인자 전달 방식이 객체({}) 형태로 바뀌었습니다.
  if (stompClient.current && stompClient.current.connected) {
    stompClient.current.publish({
      destination: "/pub/chat/message",
      body: JSON.stringify({
        roomId: roomId,
        message: input
      })
    });
    setInput("");
  } else {
    // 연결 상태를 콘솔에서 확인해보세요.
    console.error("STOMP 연결 상태:", stompClient.current?.state);
    alert("연결이 원활하지 않습니다. 잠시 후 다시 시도해주세요.");
  }
};

  return (
    <ModalOverlay>
      <ModalContent>
        <Header>
          <span>채팅 ({roomId})</span>
          <button onClick={onClose}>X</button>
        </Header>
        <MessageList>
          {messages.map((m, i) => (
            <div key={i}><b>{m.senderNickname}:</b> {m.content}</div>
          ))}
        </MessageList>
        <InputArea>
          <input value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && sendMessage()} />
          <button onClick={sendMessage}>전송</button>
        </InputArea>
      </ModalContent>
    </ModalOverlay>
  );
};

// 스타일 생략 (기존 TraceDetailStyled 방식 참고하여 구현)
const ModalOverlay = styled.div` position: fixed; bottom: 20px; right: 20px; width: 300px; height: 400px; background: white; border: 1px solid #ccc; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-radius: 8px; z-index: 1000; display: flex; flex-direction: column; `;
const ModalContent = styled.div` display: flex; flex-direction: column; height: 100%; `;
const MessageList = styled.div` flex: 1; overflow-y: auto; padding: 10px; font-size: 14px; `;
const Header = styled.div` padding: 10px; background: #f8fafc; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; font-weight: bold; `;
const InputArea = styled.div` padding: 10px; display: flex; gap: 4px; border-top: 1px solid #eee; input { flex: 1; } `;

export default ChatModal;