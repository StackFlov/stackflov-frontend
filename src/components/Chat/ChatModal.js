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
    // Client 객체 생성
    const client = new Client({
        brokerURL: 'ws://api.stackflov.com/ws-stomp', // 서버 주소
        connectHeaders: {
            Authorization: `Bearer ${accessToken}`,
        },
        debug: (str) => console.log(str),
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
    });

    // SockJS를 사용해야 하는 경우 (사용자님 설정)
    client.webSocketFactory = () => new SockJS('https://api.stackflov.com/ws-stomp');

    client.onConnect = () => {
        console.log('Connected!');
        client.subscribe(`/sub/chat/room/${roomId}`, (message) => {
            const newMessage = JSON.parse(message.body);
            setMessages((prev) => [...prev, newMessage]);
        });
    };

    client.activate(); // 연결 시작
    stompClient.current = client;

    return () => client.deactivate(); // 연결 해제
}, [roomId, accessToken]);

  const sendMessage = () => {
    if (!input.trim()) return;
    // 4. 메시지 전송
    if (stompClient.current && stompClient.current.connected) {
    stompClient.current.publish({
      destination: "/pub/chat/message",
      body: JSON.stringify({
        roomId: roomId,
        message: input
      }),
      // 필요시 headers: { Authorization: `Bearer ${accessToken}` } 추가 가능
    });
    setInput("");
  } else {
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