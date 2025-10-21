import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import Cookies from "js-cookie";

/**
 * @param {HTMLElement} rootEl - UI를 붙일 루트 DOM
 * @param {{ apiBase: string, roomId: number, autoConnect?: boolean }} opts
 * @returns {() => void} cleanup
 */
export function initChat(rootEl, { apiBase, roomId, autoConnect = true }) {
  if (!rootEl) throw new Error("root element is required");
  if (!apiBase) apiBase = "https://api.stackflov.com";

  rootEl.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:12px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <strong>채팅방 #<span id="sf-room-id"></span></strong>
        <span id="sf-status" style="font-size:12px;color:#6b7280">연결 안 됨</span>
      </div>

      <div id="sf-err" style="font-size:12px;color:#b91c1c"></div>

      <div id="sf-messages" style="height:420px;overflow:auto;border:1px solid #eef0f4;border-radius:12px;padding:12px;background:#fff"></div>

      <div style="display:flex;gap:8px;align-items:flex-start">
        <textarea id="sf-input" rows="2" placeholder="메시지를 입력하세요..." style="flex:1;border:1px solid #d1d5db;border-radius:10px;padding:9px 10px"></textarea>
        <button id="sf-send" disabled>전송</button>
      </div>

      <div style="display:flex;gap:8px;align-items:center">
        <button id="sf-connect">연결</button>
        <button id="sf-disconnect" disabled>해제</button>
      </div>
    </div>
  `;

  const $ = (sel) => rootEl.querySelector(sel);
  const status = $("#sf-status");
  const err = $("#sf-err");
  const messagesBox = $("#sf-messages");
  const input = $("#sf-input");
  const btnConnect = $("#sf-connect");
  const btnDisconnect = $("#sf-disconnect");
  const btnSend = $("#sf-send");
  $("#sf-room-id").textContent = String(roomId ?? "");

  let client = null;
  let subscription = null;

  function setStatus(t, color) { status.textContent = t; status.style.color = color || "#6b7280"; }
  function showErr(e) { err.textContent = e ? String(e) : ""; }
  function appendMsg(m) {
    const row = document.createElement("div");
    row.style.margin = "8px 0";
    const meta = document.createElement("div");
    meta.style.fontSize = "12px";
    meta.style.color = "#6b7280";
    meta.textContent = `${m.senderNickname ?? "나"} · ${formatTime(m.sentAt)}`;
    const content = document.createElement("div");
    content.style.whiteSpace = "pre-wrap";
    content.style.fontSize = "15px";
    content.textContent = m.content ?? m.message ?? "";
    row.appendChild(meta); row.appendChild(content);
    messagesBox.appendChild(row);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }
  function formatTime(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function connect() {
    const at = Cookies.get("accessToken");
    if (!at) { showErr("accessToken 쿠키가 없습니다. 로그인 후 시도하세요."); return; }
    if (!roomId) { showErr("roomId가 필요합니다."); return; }
    if (client?.active) return;

    showErr("");
    setStatus("연결 중…", "#b45309");

    client = new Client({
      webSocketFactory: () => new SockJS(`${apiBase.replace(/\/$/, "")}/ws/chat`),
      connectHeaders: { Authorization: `Bearer ${at}` },
      debug: (msg) => console.log("[STOMP]", msg), 
      reconnectDelay: 5000,
      heartbeatOutgoing: 10000,
      heartbeatIncoming: 10000,
      debug: () => {},
      onStompError: (frame) => showErr(frame.headers?.message || "Broker error"),
      onWebSocketClose: () => {
        setStatus("연결 끊김", "#6b7280");
        btnSend.disabled = true;
        btnDisconnect.disabled = true;
      },
    });

    client.onConnect = () => {
      setStatus("연결됨", "#059669");
      showErr("");
      btnSend.disabled = false;
      btnDisconnect.disabled = false;

      // 구독
      subscription = client.subscribe(`/sub/chat/room/${roomId}`, (payload) => {
        try { appendMsg(JSON.parse(payload.body)); } catch {}
      });
    };

    client.activate();
  }

  function disconnect() {
    try { subscription?.unsubscribe(); } catch {}
    subscription = null;
    try { client?.deactivate(); } catch {}
    client = null;
    setStatus("연결 안 됨", "#6b7280");
    btnSend.disabled = true;
    btnDisconnect.disabled = true;
  }

  function send() {
    const text = (input.value || "").trim();
    if (!text || !client || !client.active) return;
    try {
      client.publish({
        destination: "/pub/chat/message",
        body: JSON.stringify({ roomId: Number(roomId), message: text }),
      });
      input.value = "";
    } catch (e) {
      showErr(e.message || e);
    }
  }

  // 이벤트 바인딩
  btnConnect.addEventListener("click", connect);
  btnDisconnect.addEventListener("click", disconnect);
  btnSend.addEventListener("click", send);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });

  // 자동 연결(옵션)
  if (autoConnect) connect();

  // cleanup
  return () => {
    try { subscription?.unsubscribe(); } catch {}
    subscription = null;
    try { client?.deactivate(); } catch {}
    client = null;
    rootEl.innerHTML = "";
  };
}