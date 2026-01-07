import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const GlobalChat = () => {
    const [view, setView] = useState('closed'); // 'closed' | 'list' | 'chat'
    const [rooms, setRooms] = useState([]);
    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [myInfo, setMyInfo] = useState(null);
    
    const stompClient = useRef(null);
    const scrollRef = useRef();
    const pendingMessages = useRef([]); 
    
    const accessToken = Cookies.get("accessToken");
    const apiBase = "https://api.stackflov.com";

    // ✅ [추가] 외부(상세페이지)에서 채팅방 열기 신호를 받았을 때의 처리
    useEffect(() => {
        const handleExternalOpen = (e) => {
            const { roomId } = e.detail;
            if (roomId) {
                setSelectedRoomId(roomId);
                setView('chat');
            }
        };

        window.addEventListener("openChatRoom", handleExternalOpen);
        return () => window.removeEventListener("openChatRoom", handleExternalOpen);
    }, []);

    const currentRoom = rooms.find(r => r.roomId === selectedRoomId);
    const chatPartnerName = currentRoom ? currentRoom.otherUserNickname : "대화 중";

    // 내 정보 로드
    useEffect(() => {
        if (accessToken) {
            axios.get(`${apiBase}/users/me`, { 
                headers: { Authorization: `Bearer ${accessToken}` } 
            }).then(res => setMyInfo(res.data))
              .catch(err => console.error("내 정보 로드 실패", err));
        }
    }, [accessToken]);

    // 목록 로드
    const fetchRooms = useCallback(() => {
        if (accessToken) {
            axios.get(`${apiBase}/chat/rooms`, { 
                headers: { Authorization: `Bearer ${accessToken}` } 
            }).then(res => setRooms(res.data));
        }
    }, [accessToken]);

    useEffect(() => {
        if (view === 'list') fetchRooms();
    }, [view, fetchRooms]);

    // 채팅 연결 및 메시지 구독
    useEffect(() => {
        if (view === 'chat' && selectedRoomId && accessToken && myInfo) {
            // 과거 메시지 로드
            axios.get(`${apiBase}/chat/rooms/${selectedRoomId}/messages`, { 
                headers: { Authorization: `Bearer ${accessToken}` } 
            }).then(res => setMessages(res.data));

            const client = new Client({
                brokerURL: 'ws://api.stackflov.com/ws-stomp',
                connectHeaders: { Authorization: `Bearer ${accessToken}` },
                webSocketFactory: () => new SockJS(`${apiBase}/ws-stomp`),
                debug: (str) => console.log(str), // 디버깅용
                onConnect: () => {
                    console.log("✅ STOMP Connected");
                    
                    // 대기열 메시지 처리
                    while (pendingMessages.current.length > 0) {
                        const msgPayload = pendingMessages.current.shift();
                        client.publish(msgPayload);
                    }
                    
                    client.subscribe(`/sub/chat/room/${selectedRoomId}`, (m) => {
                        const serverMsg = JSON.parse(m.body);
                        setMessages(prev => {
                            // 내 메시지인 경우 낙관적 업데이트 결과물과 교체
                            const isMyMessage = serverMsg.senderEmail === myInfo.email;
                            if (isMyMessage) {
                                const exists = prev.some(msg => msg.isTemp && msg.content === serverMsg.content);
                                if (exists) {
                                    return prev.map(msg => (msg.isTemp && msg.content === serverMsg.content) ? serverMsg : msg);
                                }
                            }
                            return [...prev, serverMsg];
                        });
                    });
                },
                onStompError: (frame) => {
                    console.error('Broker reported error: ' + frame.headers['message']);
                },
            });

            client.activate();
            stompClient.current = client;
            return () => {
                if (stompClient.current) stompClient.current.deactivate();
            };
        }
    }, [view, selectedRoomId, accessToken, myInfo]);

    const sendMessage = () => {
        if (!input.trim() || !myInfo || !selectedRoomId) return;

        const currentInput = input;
        setInput(""); 

        const optimisticMsg = {
            messageId: `temp-${Date.now()}`,
            content: currentInput,
            senderNickname: myInfo.nickname,
            senderEmail: myInfo.email,
            sentAt: new Date().toISOString(),
            isTemp: true
        };

        setMessages(prev => [...prev, optimisticMsg]);

        const payload = {
            destination: "/pub/chat/message",
            body: JSON.stringify({ roomId: selectedRoomId, message: currentInput })
        };

        if (stompClient.current && stompClient.current.connected) {
            stompClient.current.publish(payload);
        } else {
            pendingMessages.current.push(payload);
        }
    };

    const formatTime = (dateStr) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <FixedWrapper>
            {view === 'closed' && <FloatingBtn onClick={() => setView('list')}>💬</FloatingBtn>}

            {(view === 'list' || view === 'chat') && (
                <ChatWindow>
                    <WindowHeader>
                        {view === 'chat' ? (
                            <button onClick={() => setView('list')}>←</button>
                        ) : <div style={{width: 20}} />}
                        <span>{view === 'list' ? '채팅 목록' : chatPartnerName}</span>
                        <button onClick={() => setView('closed')}>×</button>
                    </WindowHeader>

                    {view === 'list' ? (
                        <ListBody>
                            {rooms.length > 0 ? rooms.map(r => (
                                <RoomItem key={r.roomId} onClick={() => { setSelectedRoomId(r.roomId); setView('chat'); }}>
                                    <div className="room-icon">👤</div>
                                    <div className="room-info">
                                        <b>{r.otherUserNickname}</b>
                                        <p>{r.lastMessage || "채팅을 시작하세요."}</p>
                                    </div>
                                </RoomItem>
                            )) : <EmptyMsg>참여 중인 채팅방이 없습니다.</EmptyMsg>}
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
                                    autoFocus 
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

/* --- 스타일 (일부 보완) --- */
const FixedWrapper = styled.div` position: fixed; bottom: 20px; right: 20px; z-index: 9999; `;
const FloatingBtn = styled.button` width: 60px; height: 60px; border-radius: 50%; background: #6366f1; color: white; border: none; font-size: 24px; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.2); `;
const ChatWindow = styled.div` width: 360px; height: 550px; background: white; border-radius: 16px; display: flex; flex-direction: column; box-shadow: 0 10px 25px rgba(0,0,0,0.15); border: 1px solid #eee; overflow: hidden; `;
const WindowHeader = styled.div` padding: 14px; background: #6366f1; color: white; display: flex; justify-content: space-between; align-items: center; font-weight: bold; button { background: none; border: none; color: white; font-size: 20px; cursor: pointer; } `;
const ListBody = styled.div` flex: 1; overflow-y: auto; `;
const EmptyMsg = styled.div` text-align: center; padding: 50px 20px; color: #94a3b8; font-size: 14px; `;
const RoomItem = styled.div` display: flex; align-items: center; padding: 15px; border-bottom: 1px solid #f1f5f9; cursor: pointer; &:hover { background: #f8fafc; } .room-icon { width: 40px; height: 40px; background: #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; } .room-info { b { font-size: 14px; color: #1e293b; } p { margin: 0; font-size: 12px; color: #64748b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px; } } `;
const MessageList = styled.div` flex: 1; overflow-y: auto; padding: 15px; display: flex; flex-direction: column; gap: 10px; background: #f8fafc; `;
const MsgBubble = styled.div` align-self: ${props => props.$isMe ? 'flex-end' : 'flex-start'}; max-width: 80%; display: flex; flex-direction: column; align-items: ${props => props.$isMe ? 'flex-end' : 'flex-start'}; .text { padding: 8px 12px; border-radius: 12px; font-size: 13px; background: ${props => props.$isMe ? '#6366f1' : 'white'}; color: ${props => props.$isMe ? 'white' : 'black'}; border: ${props => props.$isMe ? 'none' : '1px solid #e2e8f0'}; opacity: ${props => props.$isTemp ? 0.6 : 1}; word-break: break-all; } .time { font-size: 9px; color: #94a3b8; margin: 0 4px; } .bubble-row { display: flex; align-items: flex-end; flex-direction: ${props => props.$isMe ? 'row-reverse' : 'row'}; } .sender-name { font-size: 11px; color: #64748b; margin-bottom: 4px; } `;
const InputBox = styled.div` padding: 10px; display: flex; gap: 5px; border-top: 1px solid #eee; background: white; input { flex: 1; padding: 10px 15px; border: 1px solid #ddd; border-radius: 20px; outline: none; font-size: 14px; &:focus { border-color: #6366f1; } } button { padding: 8px 15px; background: #6366f1; color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold; } `;

export default GlobalChat;