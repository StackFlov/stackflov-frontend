import React, { useEffect, useState } from "react";
import api from "../../utils/api";

export default function AdminBannedWords() {
  const [items, setItems] = useState([]);
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [busyWord, setBusyWord] = useState(null); // 삭제 진행 표시용

  const load = async () => {
    setLoading(true);
    setErr(null);
    try {
      // GET /admin/banned-words  -> List<BannedWord>
      const { data } = await api.get("/admin/banned-words");
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      setErr(e?.response?.data?.message || e.message || "불러오기 실패");
    } finally {
      setLoading(false);
    }
  };

  const addOne = async () => {
    const w = word.trim();
    if (!w) return alert("단어를 입력하세요.");
    try {
      // POST /admin/banned-words  -> { word }
      await api.post("/admin/banned-words", { word: w });
      setWord("");
      await load();
    } catch (e) {
      alert(`추가 실패: ${e?.response?.data?.message || e.message}`);
    }
  };

  const deleteWord = async (w) => {
    if (!window.confirm(`'${w}' 을(를) 삭제할까요?`)) return;
    setBusyWord(w);
    try {
      // ★ 여기가 문제의 코드가 들어가는 자리입니다.
      // DELETE /admin/banned-words  (body: { word })
      await api.delete("/admin/banned-words", { data: { word: w } });
      await load();
    } catch (e) {
      alert(`삭제 실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusyWord(null);
    }
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h2 style={{ marginBottom: 12 }}>금지어 관리</h2>

      {/* 추가 & 새로고침 */}
      <div className="card" style={{ padding: 12, marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          <input
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="금지어"
            style={{ flex: "0 1 260px" }}
          />
          <button onClick={addOne}>추가</button>
          <button onClick={load}>새로고침</button>
        </div>
      </div>

      {/* 상태 */}
      {loading && <div>불러오는 중…</div>}
      {err && <div style={{ color: "#c00" }}>오류: {String(err)}</div>}

      {/* 목록 */}
      {!loading && !err && (
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: 72 }}>ID</th>
              <th>단어</th>
              <th style={{ width: 180 }}>생성일</th>
              <th style={{ width: 120 }}>액션</th>
            </tr>
          </thead>
          <tbody>
            {items.map((bw) => (
              <tr key={bw.id}>
                <td>{bw.id}</td>
                <td>{bw.word}</td>
                <td>{bw.createdAt || "-"}</td>
                <td>
                  <button
                    disabled={busyWord === bw.word}
                    onClick={() => deleteWord(bw.word)}
                  >
                    {busyWord === bw.word ? "삭제 중…" : "삭제"}
                  </button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", color: "#666" }}>
                  결과 없음
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
