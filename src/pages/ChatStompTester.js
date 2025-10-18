import React, { useEffect, useRef, useState } from "react";
import { ChatSocket, topicOf } from "../lib/chatSocket";

/** (선택) 토큰 만료 체크 */
function isExpired(token) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expMs = payload.exp * 1000;
    return Date.now() >= expMs - 5000; // 만료 5초 전부터 만료로 취급
  } catch {
    return true;
  }
}

/** (선택) 최신 토큰 보장 (리프레시 API 사용하면 여기서 갱신) */
async function getFreshAccessToken() {
  let t = localStorage.getItem("accessToken");
  // TODO: refresh-token 로직 있으면 여기서 갱신하도록 구현
  return t;
}

export default function ChatStompTester() {
  const [status, setStatus] = useState("disconnected"); // disconnected | connecting | connected
  const [roomId, setRoomId] = useState("");
  const [message, setMessage] = useState("");
  const [logs, setLogs] = useState([]);
  const socketRef = useRef(null);

  const appendLog = (line) => {
    const ts = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev, `[${ts}] ${line}`].slice(-500));
  };

  const connect = async () => {
    const rid = String(roomId || "").trim();
    if (!rid) {
      appendLog("roomId를 입력하세요.");
      return;
    }

    const token = await getFreshAccessToken();
    if (!token) {
      appendLog("로그인이 필요합니다. accessToken이 없습니다.");
      return;
    }
    if (isExpired(token)) {
      appendLog("만료된 토큰입니다. 새로 로그인하고 다시 시도하세요.");
      return;
    }

    // 기존 연결 정리
    try {
      await socketRef.current?.disconnect();
      socketRef.current = null;
    } catch {}

    setStatus("connecting");
    appendLog("connecting...");

    // ChatSocket 생성 (tokenSupplier로 항상 최신 토큰을 사용)
    const chat = new ChatSocket({
      roomId: rid,
      debug: false,
      tokenSupplier: async () => {
        const t = await getFreshAccessToken();
        return t || ""; // 빈 문자열이면 서버에서 거부됨
      },
      onConnect: () => {
        setStatus("connected");
        appendLog("connected");

        // 구독
        const dest = topicOf(rid);
        try {
          chat.subscribe(dest, (payload) => {
            // payload는 JSON 파싱 성공 시 객체, 실패 시 문자열
            appendLog(`RECV: ${typeof payload === "string" ? payload : JSON.stringify(payload)}`);
          });
          appendLog(`subscribed: ${dest}`);
        } catch (e) {
          appendLog(`subscribe error: ${e?.message || e}`);
        }
      },
      onDisconnect: () => {
        setStatus("disconnected");
        appendLog("disconnected");
      },
      onError: (err) => {
        appendLog(`ERROR: ${err?.message || err}`);
      },
      endpoints: {
        // 필요 시 오버라이드 가능 (기본값: https://api.stackflov.com + /ws/chat)
        // baseWs: "https://api.stackflov.com",
        // sockJsPath: "/ws/chat",
      },
    });

    socketRef.current = chat;
    await chat.connect();
  };

  const disconnect = async () => {
    try {
      await socketRef.current?.disconnect();
      socketRef.current = null;
      appendLog("manual disconnect");
      setStatus("disconnected");
    } catch (e) {
      appendLog(`disconnect error: ${e?.message || e}`);
    }
  };

  const sendMessage = () => {
    const chat = socketRef.current;
    if (!chat || !chat.isConnected()) {
      appendLog("아직 연결되지 않았습니다.");
      return;
    }

    // 서버의 @MessageMapping 규칙에 맞게 destination 수정하세요.
    // 예: /pub/chat.send.{roomId}
    const dest = `/pub/chat.send.${roomId}`;
    const body = { roomId, content: message || "(empty)" };

    try {
      chat.send(dest, body);
      appendLog(`SEND: ${JSON.stringify(body)} -> ${dest}`);
    } catch (e) {
      appendLog(`send error: ${e?.message || e}`);
    }
  };

  useEffect(() => {
    return () => {
      try {
        socketRef.current?.disconnect();
      } catch {}
    };
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        <label style={{ marginRight: 8 }}>
          roomId:&nbsp;
          <input
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="예: 864"
            style={{ width: 160 }}
          />
        </label>
        <button onClick={connect} disabled={status === "connecting"} style={{ marginRight: 8 }}>
          Connect
        </button>
        <button onClick={disconnect} style={{ marginRight: 8 }}>
          Disconnect
        </button>
        <span>
          state:&nbsp;
          {status === "connected" ? "🟢 connected" : status === "connecting" ? "🟡 connecting" : "🔴 disconnected"}
        </span>
      </div>

      <div style={{ marginBottom: 8 }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message"
          style={{ width: 300, marginRight: 8 }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <div
        style={{
          background: "#0b0f0c",
          color: "#96ff91",
          padding: 12,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          whiteSpace: "pre-wrap",
          minHeight: 320,
          borderRadius: 6,
        }}
      >
        {logs.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}
