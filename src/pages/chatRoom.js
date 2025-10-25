import { useEffect, useRef } from "react";
import { initChat } from "../chat/chatClient";

export default function ChatRoom() {
  const rootRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const apiBase = params.get("base") || "https://api.stackflov.com";
    const roomId = Number(params.get("roomId"));

    const cleanup = initChat(rootRef.current, { apiBase, roomId, autoConnect: true });
    return () => cleanup?.();
  }, []);

  return <div ref={rootRef} style={{ minHeight: 520, padding: 16 }} />;
}