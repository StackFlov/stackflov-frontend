// src/components/Chat/ChatModal.js
import React, { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import axios from 'axios';
import Cookies from 'js-cookie';
import styled from 'styled-components';

const ChatModal = ({ roomId, onClose }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [myInfo, setMyInfo] = useState(null);
    const stompClient = useRef(null);
    const scrollRef = useRef();
    const accessToken = Cookies.get("accessToken");

    useEffect(() => {
        const apiBase = "https://api.stackflov.com";
        
        // 1. 내 정보 가져오기 (좌우 배치를 위한 핵심 데이터)
        axios.get(`${apiBase}/users/me`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then(res => setMyInfo(res.data))
          .catch(() => console.error("내 정보 로드 실패"));

        // 2. 과거 메시지 로드
        axios.get(`${apiBase}/chat/rooms/${roomId}/messages`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then(res => setMessages(res.data));

        // 3. STOMP 연결
        const client = new Client({
            brokerURL: 'ws://api.stackflov.com/ws-stomp',
            connectHeaders: { Authorization: `Bearer ${accessToken}` },
            webSocketFactory: () => new SockJS('https://api.stackflov.com/ws-stomp'),
            onConnect: () => {
                client.subscribe(`/sub/chat/room/${roomId}`, (message) => {
                    setMessages(prev => [...prev, JSON.parse(message.body)]);
                });
            },
        });
        client.activate();
        stompClient.current = client;

        return () => client.deactivate();
    }, [roomId, accessToken]);

    // 자동 스크롤
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim() || !stompClient.current?.connected) return;
        stompClient.current.publish({
            destination: "/pub/chat/message",
            body: JSON.stringify({ roomId, message: input })
        });
        setInput("");
    };

    if (!myInfo) return null; // 내 정보가 로드되기 전엔 렌더링 방지

    return (
        /* ModalOverlay 제거하고 ModalContent만 남김 */
        <ModalContent>
            <Header>
                <h3>채팅방 #{roomId}</h3>
                <button onClick={onClose}>×</button>
            </Header>
            <MessageList ref={scrollRef}>
                {messages.map((m, i) => {
                    // 내 메시지인지 판별하는 핵심 로직
                    const isMe = m.senderEmail === myInfo.email;
                    return (
                        <MsgBubble key={i} $isMe={isMe}>
                            <div className="sender">{m.senderNickname}</div>
                            <div className="text">{m.content}</div>
                        </MsgBubble>
                    );
                })}
            </MessageList>
            <InputBox>
                <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="메시지를 입력하세요..."
                />
                <button onClick={sendMessage}>전송</button>
            </InputBox>
        </ModalContent>
    );
};

/* CSS 수정: 우측 하단 고정 및 디자인 개선 */
const ModalContent = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 380px;
    height: 500px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 9999;
    border: 1px solid #eef0f3;
`;

const Header = styled.div`
    padding: 14px 18px;
    background: #6366f1; /* 헤더에 포인트 컬러 적용 */
    color: white;
    display: flex; justify-content: space-between; align-items: center;
    h3 { margin: 0; font-size: 16px; font-weight: 600; }
    button { border: none; background: none; color: white; font-size: 22px; cursor: pointer; padding: 0; }
`;

const MessageList = styled.div`
    flex: 1; overflow-y: auto; padding: 16px;
    display: flex; flex-direction: column; gap: 10px;
    background: #f8fafc;
`;

const MsgBubble = styled.div`
    /* 메시지 좌우 배치 로직 */
    align-self: ${props => props.$isMe ? 'flex-end' : 'flex-start'};
    max-width: 75%;
    
    .sender { 
        font-size: 12px; color: #64748b; margin-bottom: 4px; 
        text-align: ${props => props.$isMe ? 'right' : 'left'}; 
    }
    .text { 
        padding: 10px 14px; border-radius: 14px; font-size: 14px; line-height: 1.4;
        /* 내 메시지는 보라색, 상대방은 흰색 배경 */
        background: ${props => props.$isMe ? '#6366f1' : 'white'};
        color: ${props => props.$isMe ? 'white' : '#1e293b'};
        border: ${props => props.$isMe ? 'none' : '1px solid #e2e8f0'};
        /* 말풍선 꼬리 효과 */
        border-bottom-right-radius: ${props => props.$isMe ? '2px' : '14px'};
        border-bottom-left-radius: ${props => props.$isMe ? '14px' : '2px'};
    }
`;

const InputBox = styled.div`
    padding: 12px; background: white; border-top: 1px solid #eef0f3; display: flex; gap: 8px;
    input { flex: 1; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 20px; outline: none; font-size: 14px; }
    input:focus { border-color: #6366f1; }
    button { padding: 0 18px; background: #6366f1; color: white; border: none; border-radius: 20px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
    button:hover { background: #4f46e5; }
`;

export default ChatModal;