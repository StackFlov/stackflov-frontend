import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { promisePool } from "../utils/promisePool";
import { useRecoEvent } from "../hooks/useRecoEvent";
import {
  getPersonalFeed,
  getBoardDetail,
  getPopularBoards,
  getRecentBoards,
} from "../api/recoApi";

export default function PersonalFeedPage() {
  const navigate = useNavigate();
  const send = useRecoEvent();

  const [mode, setMode] = useState("personal"); // personal | popular | recent
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState([]);
  const [error, setError] = useState("");

  const title = useMemo(() => {
    if (mode === "personal") return "맞춤 피드";
    if (mode === "popular") return "인기 피드";
    return "최신 피드";
  }, [mode]);

  useEffect(() => {
    let alive = true;

    async function load() {
      setLoading(true);
      setError("");

      try {
        if (mode === "personal") {
          const reco = await getPersonalFeed(20); // [{boardId, score}]
          const ids = (reco || []).map((r) => r.boardId);

          // 콜드스타트: 추천 없으면 인기글로 fallback
          if (!ids.length) {
            const popular = await getPopularBoards(20);
            if (!alive) return;
            setBoards(popular || []);
            setLoading(false);
            return;
          }

          // 상세 병렬 호출(동시성 제한)
          const tasks = ids.map((id) => () => getBoardDetail(id));
          const results = await promisePool(tasks, 6);

          if (!alive) return;

          // 추천 순서 유지
          const map = new Map(results.filter(Boolean).map((b) => [b.id, b]));
          const ordered = ids.map((id) => map.get(id)).filter(Boolean);

          setBoards(ordered);
          setLoading(false);
          return;
        }

        if (mode === "popular") {
          const popular = await getPopularBoards(20);
          if (!alive) return;
          setBoards(popular || []);
          setLoading(false);
          return;
        }

        const recent = await getRecentBoards(20);
        if (!alive) return;
        setBoards(recent || []);
        setLoading(false);
      } catch (e) {
        if (!alive) return;
        setError(e?.message || "불러오기 실패");
        setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, [mode]);

  const onClickBoard = async (boardId) => {
    await send({ boardId, type: "CLICK" });
    // ✅ 너희 상세 라우트에 맞게 변경
    navigate(`/boards/${boardId}`);
  };

  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: 16 }}>
      <h2 style={{ marginBottom: 10 }}>{title}</h2>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button onClick={() => setMode("personal")} disabled={mode === "personal"}>
          맞춤
        </button>
        <button onClick={() => setMode("popular")} disabled={mode === "popular"}>
          인기
        </button>
        <button onClick={() => setMode("recent")} disabled={mode === "recent"}>
          최신
        </button>
      </div>

      {loading && <div>로딩 중...</div>}
      {!loading && error && <div style={{ color: "tomato" }}>{error}</div>}

      {!loading && !error && boards.length === 0 && <div>게시글이 없어요.</div>}

      {!loading &&
        !error &&
        boards.map((b) => (
          <div
            key={b.id}
            onClick={() => onClickBoard(b.id)}
            style={{
              border: "1px solid #333",
              padding: 12,
              borderRadius: 10,
              cursor: "pointer",
              marginBottom: 10,
            }}
          >
            <div style={{ fontWeight: 700 }}>{b.title}</div>
            <div style={{ opacity: 0.8, marginTop: 6 }}>
              {b.content?.slice(0, 120)}
              {b.content?.length > 120 ? "..." : ""}
            </div>
            <div style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
              category: {b.category}
            </div>
          </div>
        ))}
    </div>
  );
}