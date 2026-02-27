import { useCallback } from "react";
import { postUserEvent } from "../api/recoApi";

export function useRecoEvent() {
  return useCallback(async ({ boardId, type, value = null }) => {
    try {
      await postUserEvent({ boardId, type, value });
    } catch {
      // 로깅 실패는 UX에 영향 없게 조용히 무시
    }
  }, []);
}