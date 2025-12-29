import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const GlobalChat = () => {
    const [view, setView] = useState('closed');
    const [rooms, setRooms] = useState([]);
    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [myInfo, setMyInfo] = useState(null);
    
    const stompClient = useRef(null);
    const scrollRef = useRef();
    const pendingMessages = useRef([]); // ⭐ 연결 전 보낸 메시지들을 담을 대기열
    
    const accessToken = Cookies.get("accessToken");
    const apiBase = "https://api.stackflov.com";

    const currentRoom = rooms.find(r => r.roomId === selectedRoomId);
    const chatPartnerName = currentRoom ? currentRoom.otherUserNickname : "대화 중";

    // 1. 내 정보 및 목록 로드 로직 (기존과 동일)
    useEffect(() => {
        if (accessToken) {
            axios.get(`${apiBase}/users/me`, { headers: { Authorization: `Bearer ${accessToken}` } }).then(res => setMyInfo(res.data));
        }
    }, [accessToken]);

    useEffect(() => {
        if (view === 'list' && accessToken) {
            axios.get(`${apiBase}/chat/rooms`, { headers: { Authorization: `Bearer ${accessToken}` } }).then(res => setRooms(res.data));
        }
    }, [view, accessToken]);

    // 2. 채팅 연결 및 대기열 처리
    useEffect(() => {
        if (view === 'chat' && selectedRoomId && accessToken) {
            axios.get(`${apiBase}/chat/rooms/${selectedRoomId}/messages`, { headers: { Authorization: `Bearer ${accessToken}` } })
                 .then(res => setMessages(res.data));

            const client = new Client({
                brokerURL: 'ws://api.stackflov.com/ws-stomp',
                connectHeaders: { Authorization: `Bearer ${accessToken}` },
                webSocketFactory: () => new SockJS(`${apiBase}/ws-stomp`),
                onConnect: () => {
                    console.log("✅ 연결 성공 - 대기열 확인 중...");
                    
                    // ⭐ 연결이 완료되면 대기열(Queue)에 쌓인 메시지를 순서대로 전송
                    while (pendingMessages.current.length > 0) {
                        const msgPayload = pendingMessages.current.shift();
                        client.publish(msgPayload);
                        console.log("🚀 대기 메시지 전송 완료");
                    }
                    
                    client.subscribe(`/sub/chat/room/${selectedRoomId}`, (m) => {
                        const serverMsg = JSON.parse(m.body);
                        setMessages(prev => {
                            const isMyMessage = serverMsg.senderEmail === myInfo?.email;
                            if (isMyMessage) {
                                // 낙관적 메시지 교체 로직
                                const filtered = prev.filter(msg => !(msg.isTemp && msg.content === serverMsg.content));
                                return [...filtered, serverMsg];
                            }
                            return [...prev, serverMsg];
                        });
                    });
                }
            });

            client.activate();
            stompClient.current = client;
            return () => client.deactivate();
        }
    }, [view, selectedRoomId, accessToken, myInfo]);

    // 3. 메시지 전송 (즉시 화면 반영 + 필요시 큐에 저장)
    const sendMessage = () => {
        if (!input.trim() || !myInfo) return;

        const currentInput = input;
        setInput(""); // 즉시 비우기

        const optimisticMsg = {
            messageId: `temp-${Date.now()}`,
            content: currentInput,
            senderNickname: myInfo.nickname,
            senderEmail: myInfo.email,
            sentAt: new Date().toISOString(),
            isTemp: true
        };

        // ⭐ UI는 즉시 업데이트 (연결 여부 무관)
        setMessages(prev => [...prev, optimisticMsg]);

        const payload = {
            destination: "/pub/chat/message",
            body: JSON.stringify({ roomId: selectedRoomId, message: currentInput })
        };

        // ⭐ 연결 상태에 따른 분기 처리
        if (stompClient.current && stompClient.current.connected) {
            stompClient.current.publish(payload);
        } else {
            console.log("⏳ 아직 연결 전입니다. 대기열에 추가합니다.");
            pendingMessages.current.push(payload); // 연결될 때까지 큐에 보관
        }
    };

    const formatTime = (dateStr) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages]);

    return (
        <FixedWrapper>
            {view === 'closed' && <FloatingBtn onClick={() => setView('list')}>💬</FloatingBtn>}

            {(view === 'list' || view === 'chat') && (
                <ChatWindow>
                    <WindowHeader>
                        {view === 'chat' && <button onClick={() => setView('list')}>←</button>}
                        <span>{view === 'list' ? '채팅 목록' : chatPartnerName}</span>
                        <button onClick={() => setView('closed')}>×</button>
                    </WindowHeader>

                    {view === 'list' ? (
                        <ListBody>
                            {rooms.map(r => (
                                <RoomItem key={r.roomId} onClick={() => { setSelectedRoomId(r.roomId); setView('chat'); }}>
                                    <div className="room-icon">👤</div>
                                    <div className="room-info"><b>{r.otherUserNickname}</b><p>채팅을 시작하세요.</p></div>
                                </RoomItem>
                            ))}
                        </ListBody>
                    ) : (
                        <>
                            <MessageList ref={scrollRef}>
                                {messages.map((m, i) => {
                                    const isMe = m.senderEmail === myInfo?.email;
                                    return (
                                        <MsgBubble key={m.messageId || i} $isMe={isMe} $isTemp={m.isTemp}>
                                            {!isMe && <div className="sender-name">{m.senderNickname}</div>}
                                            <div className="bubble-row">
                                                <div className="text">{m.content}</div>
                                                <div className="time">{formatTime(m.sentAt)}</div>
                                            </div>
                                        </MsgBubble>
                                    );
                                })}
                            </MessageList>
                            <InputBox>
                                <input 
                                    value={input} 
                                    onChange={(e) => setInput(e.target.value)} 
                                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()} 
                                    placeholder="메시지 입력..." 
                                    autoFocus // ⭐ 들어가자마자 바로 타이핑 가능
                                />
                                <button onClick={sendMessage}>전송</button>
                            </InputBox>
                        </>
                    )}
                </ChatWindow>
            )}
        </FixedWrapper>
    );
};

/* --- 스타일 (변동 없음) --- */
const FixedWrapper = styled.div` position: fixed; bottom: 20px; right: 20px; z-index: 9999; `;
const FloatingBtn = styled.button` width: 60px; height: 60px; border-radius: 50%; background: #6366f1; color: white; border: none; font-size: 24px; cursor: pointer; `;
const ChatWindow = styled.div` width: 360px; height: 550px; background: white; border-radius: 16px; display: flex; flex-direction: column; box-shadow: 0 10px 25px rgba(0,0,0,0.15); border: 1px solid #eee; overflow: hidden; `;
const WindowHeader = styled.div` padding: 14px; background: #6366f1; color: white; display: flex; justify-content: space-between; align-items: center; button { background: none; border: none; color: white; font-size: 20px; cursor: pointer; } `;
const ListBody = styled.div` flex: 1; overflow-y: auto; `;
const RoomItem = styled.div` display: flex; align-items: center; padding: 15px; border-bottom: 1px solid #f1f5f9; cursor: pointer; b { font-size: 14px; } p { margin: 0; font-size: 12px; color: #94a3b8; } `;
const MessageList = styled.div` flex: 1; overflow-y: auto; padding: 15px; display: flex; flex-direction: column; gap: 10px; background: #f8fafc; `;
const MsgBubble = styled.div` align-self: ${props => props.$isMe ? 'flex-end' : 'flex-start'}; max-width: 80%; display: flex; flex-direction: column; align-items: ${props => props.$isMe ? 'flex-end' : 'flex-start'}; .text { padding: 8px 12px; border-radius: 12px; font-size: 13px; background: ${props => props.$isMe ? '#6366f1' : 'white'}; color: ${props => props.$isMe ? 'white' : 'black'}; border: ${props => props.$isMe ? 'none' : '1px solid #e2e8f0'}; opacity: ${props => props.$isTemp ? 0.6 : 1}; } .time { font-size: 9px; color: #94a3b8; } .bubble-row { display: flex; align-items: flex-end; gap: 4px; flex-direction: ${props => props.$isMe ? 'row-reverse' : 'row'}; } .sender-name { font-size: 11px; color: #64748b; margin-bottom: 4px; } `;
const InputBox = styled.div` padding: 10px; display: flex; gap: 5px; border-top: 1px solid #eee; input { flex: 1; padding: 10px 15px; border: 1px solid #ddd; border-radius: 20px; outline: none; } button { padding: 8px 15px; background: #6366f1; color: white; border: none; border-radius: 20px; cursor: pointer; } `;

export default GlobalChat;