import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const GlobalChat = () => {
    const [view, setView] = useState('closed'); // closed, list, chat
    const [rooms, setRooms] = useState([]);
    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const [messages, setMessages] = useState([]); // ⭐ 사용됨 (Line 14)
    const [input, setInput] = useState(""); // ⭐ 사용됨 (Line 15)
    const [myInfo, setMyInfo] = useState(null); // ⭐ 사용됨 (Line 16)
    
    const stompClient = useRef(null);
    const scrollRef = useRef(); // ⭐ 사용됨 (Line 19)
    const accessToken = Cookies.get("accessToken");
    const apiBase = "https://api.stackflov.com";
    const currentRoom = rooms.find(r => r.roomId === selectedRoomId);
    const chatPartnerName = currentRoom ? currentRoom.otherUserNickname : "대화 중";

    // 시간 포맷 함수
    const formatTime = (dateStr) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: true });
    };
    useEffect(() => {
    const handleOpenChat = (e) => {
        const { roomId } = e.detail;
        setSelectedRoomId(roomId);
        setView('chat'); // 즉시 대화창 뷰로 전환
    };

    window.addEventListener("openChatRoom", handleOpenChat);
    return () => window.removeEventListener("openChatRoom", handleOpenChat);
}, []);

    // 내 정보 로드
    useEffect(() => {
        if (accessToken) {
            axios.get(`${apiBase}/users/me`, { headers: { Authorization: `Bearer ${accessToken}` } })
                 .then(res => setMyInfo(res.data));
        }
    }, [accessToken]);

    // 방 목록 로드
    useEffect(() => {
        if (view === 'list' && accessToken) {
            axios.get(`${apiBase}/chat/rooms`, { headers: { Authorization: `Bearer ${accessToken}` } })
                 .then(res => setRooms(res.data));
        }
    }, [view, accessToken]);

    // 채팅 연결 및 과거 메시지 로드
    useEffect(() => {
        if (view === 'chat' && selectedRoomId) {
            axios.get(`${apiBase}/chat/rooms/${selectedRoomId}/messages`, { headers: { Authorization: `Bearer ${accessToken}` } })
                 .then(res => setMessages(res.data));

            const client = new Client({
                brokerURL: 'ws://api.stackflov.com/ws-stomp',
                connectHeaders: { Authorization: `Bearer ${accessToken}` },
                webSocketFactory: () => new SockJS(`${apiBase}/ws-stomp`),
                onConnect: () => {
                    client.subscribe(`/sub/chat/room/${selectedRoomId}`, (m) => {
                        setMessages(prev => [...prev, JSON.parse(m.body)]);
                    });
                }
            });
            client.activate();
            stompClient.current = client;
            return () => client.deactivate();
        }
    }, [view, selectedRoomId, accessToken]);

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
            body: JSON.stringify({ roomId: selectedRoomId, message: input })
        });
        setInput("");
    };

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
                            {rooms.length === 0 ? (
                                <EmptyMsg>참여 중인 채팅방이 없습니다.</EmptyMsg>
                            ) : (
                                rooms.map(r => (
                                    <RoomItem key={r.roomId} onClick={() => { setSelectedRoomId(r.roomId); setView('chat'); }}>
                                        <div className="room-icon">👤</div>
                                        <div className="room-info">
                                            <b>{r.otherUserNickname}</b>
                                            <p>대화 내용을 확인하세요.</p>
                                        </div>
                                    </RoomItem>
                                ))
                            )}
                        </ListBody>
                    ) : (
                        <>
                            <MessageList ref={scrollRef}>
                                {messages.map((m, i) => {
                                    const isMe = m.senderEmail === myInfo?.email;
                                    return (
                                        <MsgBubble key={i} $isMe={isMe}>
                                        {/* ⭐ 상대방 메시지일 때만 말풍선 위에 닉네임 표시 */}
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
                                <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} placeholder="메시지 입력..." />
                                <button onClick={sendMessage}>전송</button>
                            </InputBox>
                        </>
                    )}
                </ChatWindow>
            )}
        </FixedWrapper>
    );
};

/* 스타일 정의 (기존과 동일하게 고도화) */
const FixedWrapper = styled.div` position: fixed; bottom: 20px; right: 20px; z-index: 9999; `;
const FloatingBtn = styled.button` width: 60px; height: 60px; border-radius: 50%; background: #6366f1; color: white; border: none; font-size: 24px; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.2); `;
const ChatWindow = styled.div` width: 360px; height: 550px; background: white; border-radius: 16px; display: flex; flex-direction: column; box-shadow: 0 10px 25px rgba(0,0,0,0.15); border: 1px solid #eee; overflow: hidden; `;
const WindowHeader = styled.div` padding: 14px; background: #6366f1; color: white; display: flex; justify-content: space-between; align-items: center; button { background: none; border: none; color: white; font-size: 20px; cursor: pointer; } `;
const ListBody = styled.div` flex: 1; overflow-y: auto; `;
const EmptyMsg = styled.div` padding: 40px; text-align: center; color: #94a3b8; `;
const RoomItem = styled.div` display: flex; align-items: center; padding: 15px; border-bottom: 1px solid #f1f5f9; cursor: pointer; &:hover { background: #f8fafc; } .room-icon { margin-right: 12px; font-size: 20px; } b { font-size: 14px; } p { margin: 0; font-size: 12px; color: #94a3b8; } `;
const MessageList = styled.div` flex: 1; overflow-y: auto; padding: 15px; display: flex; flex-direction: column; gap: 10px; background: #f8fafc; `;
const MsgBubble = styled.div` align-self: ${props => props.$isMe ? 'flex-end' : 'flex-start'}; max-width: 80%; .bubble-row { display: flex; align-items: flex-end; gap: 4px; flex-direction: ${props => props.$isMe ? 'row-reverse' : 'row'}; } .text { padding: 8px 12px; border-radius: 12px; font-size: 13px; background: ${props => props.$isMe ? '#6366f1' : 'white'}; color: ${props => props.$isMe ? 'white' : 'black'}; border: ${props => props.$isMe ? 'none' : '1px solid #e2e8f0'}; } .time { font-size: 9px; color: #94a3b8; } `;
const InputBox = styled.div` padding: 10px; display: flex; gap: 5px; border-top: 1px solid #eee; input { flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 20px; outline: none; } button { padding: 8px 15px; background: #6366f1; color: white; border: none; border-radius: 20px; cursor: pointer; } `;

export default GlobalChat;