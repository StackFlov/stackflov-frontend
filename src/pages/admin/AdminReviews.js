// src/pages/AdminReviews.js
import React, { useState } from "react";
import api from "../../utils/api";

// 복구 엔드포인트는 /admin/content/{contentType}/{contentId}/reactivate
async function reactivateContent(type, id) {
  try {
    await api.put(`/admin/content/${type.toLowerCase()}/${id}/reactivate`);
    return;
  } catch (_) {
    await api.put(`/admin/content/${type.toUpperCase()}/${id}/reactivate`);
  }
}

export default function AdminReviews() {
  const [reviewId, setReviewId] = useState("");
  const [bulkIds, setBulkIds] = useState(""); // 줄바꿈/콤마 구분
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState([]);

  const addLog = (text) => setLog((prev) => [{ ts: new Date().toISOString(), text }, ...prev].slice(0, 200));

  const parseIds = (s) => {
    return s
      .split(/[\s,]+/)
      .map((x) => x.trim())
      .filter(Boolean)
      .map((x) => Number(x))
      .filter((n) => Number.isInteger(n) && n > 0);
  };

  const deactivateOne = async (id) => {
    if (!id) return alert("리뷰 ID를 입력하세요.");
    if (!window.confirm(`리뷰 #${id} 을(를) 비활성화할까요?`)) return;
    setBusy(true);
    try {
      await api.delete(`/admin/reviews/${id}`);
      addLog(`비활성화 완료: #${id}`);
    } catch (e) {
      addLog(`비활성화 실패: #${id} - ${e?.response?.data?.message || e.message}`);
      alert(`실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusy(false);
    }
  };

  const reactivateOne = async (id) => {
    if (!id) return alert("리뷰 ID를 입력하세요.");
    if (!window.confirm(`리뷰 #${id} 을(를) 복구할까요?`)) return;
    setBusy(true);
    try {
      await reactivateContent("review", id);
      addLog(`복구 완료: #${id}`);
    } catch (e) {
      addLog(`복구 실패: #${id} - ${e?.response?.data?.message || e.message}`);
      alert(`실패: ${e?.response?.data?.message || e.message}`);
    } finally {
      setBusy(false);
    }
  };

  const bulkDeactivate = async () => {
    const ids = parseIds(bulkIds);
    if (ids.length === 0) return alert("ID 목록을 입력하세요.");
    if (!window.confirm(`${ids.length}개 리뷰를 비활성화할까요?`)) return;
    setBusy(true);
    try {
      // 리뷰는 bulk 엔드포인트가 없으니 순차 호출
      for (const id of ids) {
        try {
          await api.delete(`/admin/reviews/${id}`);
          addLog(`비활성화 완료: #${id}`);
        } catch (e) {
          addLog(`비활성화 실패: #${id} - ${e?.response?.data?.message || e.message}`);
        }
      }
      alert("일괄 처리 완료(자세한 결과는 로그 참조)");
    } finally {
      setBusy(false);
    }
  };

  const bulkReactivate = async () => {
    const ids = parseIds(bulkIds);
    if (ids.length === 0) return alert("ID 목록을 입력하세요.");
    if (!window.confirm(`${ids.length}개 리뷰를 복구할까요?`)) return;
    setBusy(true);
    try {
      for (const id of ids) {
        try {
          await reactivateContent("review", id);
          addLog(`복구 완료: #${id}`);
        } catch (e) {
          addLog(`복구 실패: #${id} - ${e?.response?.data?.message || e.message}`);
        }
      }
      alert("일괄 처리 완료(자세한 결과는 로그 참조)");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: 12 }}>리뷰 관리</h2>

      {/* 단건 처리 */}
      <div className="card" style={{ padding: 12, marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <input
            value={reviewId}
            onChange={(e) => setReviewId(e.target.value)}
            placeholder="리뷰 ID"
            type="number"
            style={{ width: 180 }}
          />
          <button disabled={busy} onClick={() => deactivateOne(Number(reviewId))}>{busy ? "처리 중…" : "비활성화"}</button>
          <button disabled={busy} onClick={() => reactivateOne(Number(reviewId))}>{busy ? "처리 중…" : "복구"}</button>
        </div>
      </div>

      {/* 일괄 처리 */}
      <div className="card" style={{ padding: 12, marginBottom: 12 }}>
        <details open>
          <summary style={{ cursor: "pointer", userSelect: "none" }}>일괄 처리 (줄바꿈/쉼표로 구분)</summary>
          <textarea
            value={bulkIds}
            onChange={(e) => setBulkIds(e.target.value)}
            rows={6}
            placeholder={"예)\n101,102,103\n또는\n201\n202\n203"}
            style={{ width: "100%", marginTop: 8 }}
          />
          <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button disabled={busy} onClick={bulkDeactivate}>{busy ? "처리 중…" : "일괄 비활성화"}</button>
            <button disabled={busy} onClick={bulkReactivate}>{busy ? "처리 중…" : "일괄 복구"}</button>
          </div>
        </details>
      </div>

      {/* 처리 로그 */}
      <div className="card" style={{ padding: 12 }}>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>처리 로그</div>
        <div style={{ maxHeight: 280, overflow: "auto" }}>
          {log.length === 0 && <div style={{ color: "#666" }}>아직 로그가 없습니다.</div>}
          {log.map((L, i) => (
            <div key={i} style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace", fontSize: 12, marginBottom: 4 }}>
              <span style={{ color: "#666" }}>[{L.ts}]</span> {L.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
