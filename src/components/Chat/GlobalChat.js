import React, { useState, useEffect, useRef, useCallback } from 'react';
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
    const pendingMessages = useRef([]); // ✅ 연결 끊겼을 때 메시지를 담아둘 보관함
    
    const accessToken = Cookies.get("accessToken");
    const apiBase = "https://api.stackflov.com";

    // 1. 채팅방 목록 가져오기 (최신순 정렬)
    const fetchRooms = useCallback(() => {
        if (!accessToken) return;
        axios.get(`${apiBase}/chat/rooms`, { 
            headers: { Authorization: `Bearer ${accessToken}` } 
        }).then(res => {
            const sorted = [...res.data].sort((a, b) => {
                const timeA = new Date(a.lastMessageAt || 0);
                const timeB = new Date(b.lastMessageAt || 0);
                return timeB - timeA;
            });
            setRooms(sorted);
        }).catch(err => console.error("목록 로드 실패", err));
    }, [accessToken, apiBase]);

    // 2. 외부 이벤트 리스너 (게시글 등에서 1:1 채팅하기 클릭 시)
    useEffect(() => {
        const handleExternalOpen = (e) => {
            const { roomId } = e.detail;
            if (roomId) {
                setSelectedRoomId(roomId);
                setView('chat'); 
                fetchRooms();
            }
        };
        window.addEventListener("openChatRoom", handleExternalOpen);
        return () => window.removeEventListener("openChatRoom", handleExternalOpen);
    }, [fetchRooms]);

    // 3. 내 정보 로드
    useEffect(() => {
        if (accessToken) {
            axios.get(`${apiBase}/users/me`, { 
                headers: { Authorization: `Bearer ${accessToken}` } 
            }).then(res => setMyInfo(res.data));
        }
    }, [accessToken, apiBase]);

    // 4. 리스트 뷰일 때 목록 갱신
    useEffect(() => {
        if (view === 'list') fetchRooms();
    }, [view, fetchRooms]);

    // 5. 채팅방 입장 및 웹소켓 연결 (읽음 처리 포함)
    useEffect(() => {
        if (view === 'chat' && selectedRoomId && accessToken && myInfo) {
            // 과거 내역 가져오기
            axios.get(`${apiBase}/chat/rooms/${selectedRoomId}/messages`, { 
                headers: { Authorization: `Bearer ${accessToken}` } 
            }).then(res => setMessages(res.data));

            const client = new Client({
                webSocketFactory: () => new SockJS(`${apiBase}/ws-stomp`),
                connectHeaders: { Authorization: `Bearer ${accessToken}` },
                onConnect: () => {
                    console.log("WebSocket Connected!");
                    
                    // ✅ 연결 성공 시 보관함에 있던 메시지 전송
                    while (pendingMessages.current.length > 0) {
                        const msgPayload = pendingMessages.current.shift();
                        client.publish(msgPayload);
                    }

                    // 구독 시작
                    client.subscribe(`/sub/chat/room/${selectedRoomId}`, (m) => {
                        const serverData = JSON.parse(m.body);

                        // ✅ 실시간 읽음 처리 (READ_ALL 타입 수신 시)
                        if (serverData.type === 'READ_ALL') {
                            setMessages(prev => prev.map(msg => ({ ...msg, isRead: true })));
                        } else {
                            // 일반 메시지 수신
                            setMessages(prev => {
                                const isMyMessage = serverData.senderEmail === myInfo.email;
                                if (isMyMessage) {
                                    // 내가 보낸 메시지면 임시 메시지를 서버 데이터로 교체
                                    const exists = prev.some(msg => msg.isTemp && msg.content === serverData.content);
                                    if (exists) {
                                        return prev.map(msg => (msg.isTemp && msg.content === serverData.content) ? serverData : msg);
                                    }
                                }
                                return [...prev, serverData];
                            });
                            fetchRooms(); // 목록 갱신 (배지 숫자 등)
                        }
                    });
                },
            });
            client.activate();
            stompClient.current = client;
            return () => { if (stompClient.current) stompClient.current.deactivate(); };
        }
    }, [view, selectedRoomId, accessToken, myInfo, fetchRooms, apiBase]);

    // 6. 메시지 전송 (낙관적 업데이트 및 대기열 로직)
    const sendMessage = () => {
        if (!input.trim() || !selectedRoomId || !myInfo) return;
        
        const currentInput = input;
        setInput(""); // ✅ 입력창 즉시 비우기

        // ✅ 낙관적 업데이트: 화면에 먼저 메시지 띄우기
        const optimisticMsg = {
            messageId: `temp-${Date.now()}`,
            content: currentInput,
            senderNickname: myInfo.nickname,
            senderEmail: myInfo.email,
            sentAt: new Date().toISOString(),
            isRead: false,
            isTemp: true
        };
        setMessages(prev => [...prev, optimisticMsg]);

        const payload = {
            destination: "/pub/chat/message",
            body: JSON.stringify({ roomId: selectedRoomId, message: currentInput })
        };

        // 연결 상태 확인 후 전송 또는 보관함 저장
        if (stompClient.current?.connected) {
            stompClient.current.publish(payload);
        } else {
            console.warn("연결 안됨: 보관함에 저장");
            pendingMessages.current.push(payload);
        }
    };

    // 스크롤 하단 고정
    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages]);

    const formatTime = (dateStr) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    // ✅ 로그아웃 상태(토큰 없음)일 때 컴포넌트 전체 숨김
    if (!accessToken) return null;

    const currentRoom = rooms.find(r => r.roomId === selectedRoomId);
    const partnerName = currentRoom ? currentRoom.otherUserNickname : "대화 중";

    return (
        <FixedWrapper>
            {view === 'closed' && <FloatingBtn onClick={() => setView('list')}>💬</FloatingBtn>}

            {(view === 'list' || view === 'chat') && (
                <ChatWindow>
                    <WindowHeader>
                        {view === 'chat' ? (
                            <button onClick={() => { setView('list'); fetchRooms(); }}>←</button>
                        ) : <div style={{width: 20}} />}
                        <span>{view === 'list' ? '채팅 목록' : partnerName}</span>
                        <button onClick={() => setView('closed')}>×</button>
                    </WindowHeader>

                    {view === 'list' ? (
                        <ListBody>
                            {rooms.length > 0 ? rooms.map(r => (
                                <RoomItem key={r.roomId} onClick={() => { setSelectedRoomId(r.roomId); setView('chat'); }}>
                                    <div className="room-icon">👤</div>
                                    <div className="room-info">
                                        <b>{r.otherUserNickname}</b>
                                        <p>{r.lastMessage || "채팅 내역이 없습니다."}</p>
                                    </div>
                                    {/* 빨간색 안 읽음 배지 */}
                                    {r.unreadCount > 0 && (
                                        <UnreadBadge>{r.unreadCount > 99 ? '99+' : r.unreadCount}</UnreadBadge>
                                    )}
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
                                                <div className="meta">
                                                    {/* ✅ 내가 보낸 메시지이고 안 읽었으면 '1' 표시 */}
                                                    {isMe && !m.isRead && <span className="read-status">1</span>}
                                                    <span className="time">{formatTime(m.sentAt)}</span>
                                                </div>
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

/* --- Styled Components 정의 --- */
const FixedWrapper = styled.div` position: fixed; bottom: 20px; right: 20px; z-index: 9999; `;
const FloatingBtn = styled.button` width: 60px; height: 60px; border-radius: 50%; background: #6366f1; color: white; border: none; font-size: 24px; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.2); `;
const ChatWindow = styled.div` width: 360px; height: 550px; background: white; border-radius: 16px; display: flex; flex-direction: column; box-shadow: 0 10px 25px rgba(0,0,0,0.15); border: 1px solid #eee; overflow: hidden; `;
const WindowHeader = styled.div` padding: 14px; background: #6366f1; color: white; display: flex; justify-content: space-between; align-items: center; font-weight: bold; button { background: none; border: none; color: white; font-size: 20px; cursor: pointer; } `;
const ListBody = styled.div` flex: 1; overflow-y: auto; `;
const EmptyMsg = styled.div` text-align: center; padding: 50px 20px; color: #94a3b8; font-size: 14px; `;
const RoomItem = styled.div` padding: 15px; border-bottom: 1px solid #f1f5f9; cursor: pointer; display: flex; justify-content: space-between; align-items: center; &:hover { background: #f8fafc; } .room-info b { font-size: 14px; } .room-info p { margin: 4px 0 0; font-size: 12px; color: #64748b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px; } `;
const UnreadBadge = styled.div` background: #ef4444; color: white; border-radius: 999px; padding: 2px 6px; font-size: 10px; font-weight: bold; min-width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; `;
const MessageList = styled.div` flex: 1; overflow-y: auto; padding: 15px; display: flex; flex-direction: column; gap: 10px; background: #f8fafc; `;
const MsgBubble = styled.div` 
    align-self: ${props => props.$isMe ? 'flex-end' : 'flex-start'}; max-width: 80%;
    .bubble-row { display: flex; align-items: flex-end; flex-direction: ${props => props.$isMe ? 'row-reverse' : 'row'}; }
    .text { padding: 8px 12px; border-radius: 12px; font-size: 13px; background: ${props => props.$isMe ? '#6366f1' : 'white'}; color: ${props => props.$isMe ? 'white' : 'black'}; border: ${props => props.$isMe ? 'none' : '1px solid #e2e8f0'}; word-break: break-all; opacity: ${props => props.$isTemp ? 0.6 : 1}; }
    .meta { display: flex; flex-direction: column; align-items: ${props => props.$isMe ? 'flex-end' : 'flex-start'}; margin: 0 5px; }
    .read-status { color: #6366f1; font-size: 10px; font-weight: bold; margin-bottom: 2px; }
    .time { font-size: 9px; color: #94a3b8; }
    .sender-name { font-size: 11px; color: #64748b; margin-bottom: 4px; }
`;
const InputBox = styled.div` padding: 10px; display: flex; gap: 5px; border-top: 1px solid #eee; background: white; input { flex: 1; padding: 10px 15px; border: 1px solid #ddd; border-radius: 20px; outline: none; font-size: 14px; } button { padding: 8px 15px; background: #6366f1; color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold; } `;

export default GlobalChat;