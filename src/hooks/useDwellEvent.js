import { useEffect, useRef } from "react";
import { useRecoEvent } from "./useRecoEvent";

export function useDwellEvent(boardId) {
  const send = useRecoEvent();
  const startRef = useRef(null);

  useEffect(() => {
    if (!boardId) return;

    startRef.current = Date.now();

    return () => {
      const start = startRef.current;
      if (!start) return;

      const ms = Date.now() - start;
      if (ms < 800) return; // 너무 짧은 체류는 노이즈 컷(원하면 제거)

      send({ boardId, type: "DWELL", value: ms });
    };
  }, [boardId, send]);
}