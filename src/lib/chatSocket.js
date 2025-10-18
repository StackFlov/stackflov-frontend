import SockJS from "sockjs-client";
import { Client as StompClient } from "@stomp/stompjs";

/** 서버 브로커 규칙에 맞춘 토픽 유틸 */
export const topicOf = (roomId) => `/topic/chat.${roomId}`;

/**
 * ChatSocket: SockJS + STOMP 래퍼
 *  - roomId: 문자열 또는 숫자
 *  - tokenSupplier: async () => "<accessToken>"  (항상 최신 토큰을 반환)
 *  - onConnect / onDisconnect / onError: 콜백
 *  - debug: true면 콘솔 로그
 *  - endpoints: { baseWs, sockJsPath }  (기본값: https://api.stackflov.com + /ws/chat)
 */
export class ChatSocket {
  constructor({
    roomId,
    tokenSupplier,
    onConnect,
    onDisconnect,
    onError,
    debug = false,
    endpoints = {},
  } = {}) {
    this.roomId = String(roomId ?? "");
    this.onConnect = onConnect;
    this.onDisconnect = onDisconnect;
    this.onError = onError;
    this.debug = debug;
    this.tokenSupplier = tokenSupplier || (async () => "");

    // 서버 경로
    this.baseWs = endpoints.baseWs || "https://api.stackflov.com";
    this.sockJsPath = endpoints.sockJsPath || "/ws/chat";

    this.client = null;
    this.subscriptions = {};
    this._onReconnectedResubscribe = this._onReconnectedResubscribe.bind(this);
  }

  log(...args) {
    if (this.debug) console.log("[ChatSocket]", ...args);
  }

  _createStompClient() {
    const sockUrl = `${this.baseWs}${this.sockJsPath}`;
    const sockFactory = () => new SockJS(sockUrl);

    const client = new StompClient({
      webSocketFactory: sockFactory,
      reconnectDelay: 5000, // 자동 재연결

      // ✅ 매 연결 시점마다 최신 토큰을 CONNECT 헤더에 주입
      beforeConnect: async () => {
        try {
          const token = await this.tokenSupplier();
          client.connectHeaders = token
            ? { Authorization: `Bearer ${token}` }
            : {}; // 토큰 없으면 서버가 거부함
        } catch (e) {
          this.log("beforeConnect tokenSupplier error:", e);
          client.connectHeaders = {};
        }
      },

      debug: this.debug ? (str) => console.log("[STOMP]", str) : undefined,

      onConnect: () => {
        this.log("connected");

        // 재연결 시 기존 구독 복구
        this._onReconnectedResubscribe();

        if (this.onConnect) this.onConnect();
      },

      onStompError: (frame) => {
        const msg =
          (frame && frame.headers && frame.headers.message) ||
          (frame && frame.body) ||
          "STOMP error";
        this.log("onStompError:", msg, frame);
        if (this.onError) this.onError(new Error(msg));
      },

      onWebSocketClose: (evt) => {
        this.log("websocket closed", evt && evt.code);
        if (this.onDisconnect) this.onDisconnect();
      },

      onDisconnect: () => {
        this.log("stomp disconnected");
        if (this.onDisconnect) this.onDisconnect();
      },
    });

    return client;
  }

  /** 연결 */
  async connect() {
    if (this.client && this.client.active) return;
    this.client = this._createStompClient();
    this.client.activate();
  }

  /** 연결 해제 */
  async disconnect() {
    if (!this.client) return;
    try {
      Object.values(this.subscriptions).forEach((sub) => sub?.unsubscribe());
      this.subscriptions = {};
      await this.client.deactivate();
      this.log("deactivated");
    } catch (e) {
      this.log("deactivate error", e);
    } finally {
      this.client = null;
    }
  }

  /** 현재 연결 여부 */
  isConnected() {
    return !!(this.client && this.client.connected);
  }

  /** 구독 */
  subscribe(destination, handler) {
    if (!this.client || !this.client.connected) {
      throw new Error("STOMP not connected");
    }
    const sub = this.client.subscribe(destination, (frame) => {
      try {
        const body = frame.body ? JSON.parse(frame.body) : null;
        handler(body);
      } catch (e) {
        this.log("parse error", e);
        handler(frame.body);
      }
    });
    // 재구독을 위해 핸들러/데스티네이션 기억
    this.subscriptions[destination] = { sub, destination, handler };
    return () => {
      try {
        this.subscriptions[destination]?.sub?.unsubscribe();
      } catch {}
      delete this.subscriptions[destination];
    };
  }

  /** 발행 */
  send(destination, body = {}, headers = {}) {
    if (!this.client || !this.client.connected) {
      throw new Error("STOMP not connected");
    }
    this.client.publish({
      destination,
      headers,
      body: JSON.stringify(body),
    });
  }

  /** 재연결 후 구독 자동 복구 */
  _onReconnectedResubscribe() {
    const entries = Object.entries(this.subscriptions);
    if (!entries.length) return;

    this.log("resubscribing...", entries.length);
    entries.forEach(([dest, info]) => {
      try {
        const newSub = this.client.subscribe(dest, (frame) => {
          try {
            const body = frame.body ? JSON.parse(frame.body) : null;
            info.handler(body);
          } catch (e) {
            this.log("parse error", e);
            info.handler(frame.body);
          }
        });
        this.subscriptions[dest].sub = newSub;
      } catch (e) {
        this.log("resubscribe error", dest, e);
      }
    });
  }
}
