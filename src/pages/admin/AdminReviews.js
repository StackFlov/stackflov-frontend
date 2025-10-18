// src/pages/admin/AdminReviews.js
import React, { useState } from "react";
import api from "../../utils/api";
import {
  PageWrap, Header, Title, Sub,
  SearchCard, Row, Input,
  PrimaryBtn, DangerBtn, GhostBtn,
  ErrorText, InfoText,
} from "../../styles/components/admin/AdminCommonStyled";

// 복구 엔드포인트는 /admin/content/{contentType}/{contentId}/reactivate
async function reactivateContent(type, id) {
  try {
    await api.put(`/admin/content/${type.toLowerCase()}/${id}/reactivate`);
  } catch (_) {
    await api.put(`/admin/content/${type.toUpperCase()}/${id}/reactivate`);
  }
}

export default function AdminReviews() {
  const [reviewId, setReviewId] = useState("");
  const [bulkIds, setBulkIds] = useState(""); // 줄바꿈/콤마 구분
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState([]);

  const addLog = (text) =>
    setLog((prev) => [{ ts: new Date().toISOString(), text }, ...prev].slice(0, 200));

  const parseIds = (s) =>
    s
      .split(/[\s,]+/)
      .map((x) => x.trim())
      .filter(Boolean)
      .map(Number)
      .filter((n) => Number.isInteger(n) && n > 0);

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
    <PageWrap>
      <Header>
        <Title>리뷰 관리</Title>
        <Sub>리뷰 콘텐츠를 단건/일괄로 비활성화하거나 복구할 수 있습니다.</Sub>
      </Header>

      {/* 단건 처리 */}
      <SearchCard>
        <Row>
          <Input
            value={reviewId}
            onChange={(e) => setReviewId(e.target.value)}
            placeholder="리뷰 ID"
            type="number"
            style={{ maxWidth: 220 }}
          />
          <DangerBtn disabled={busy} onClick={() => deactivateOne(Number(reviewId))}>
            {busy ? "처리 중…" : "비활성화"}
          </DangerBtn>
          <PrimaryBtn disabled={busy} onClick={() => reactivateOne(Number(reviewId))}>
            {busy ? "처리 중…" : "복구"}
          </PrimaryBtn>
        </Row>
      </SearchCard>

      {/* 일괄 처리 */}
      <SearchCard>
        <details open>
          <summary style={{ cursor: "pointer", userSelect: "none", fontWeight: 600, marginBottom: 8 }}>
            일괄 처리 (줄바꿈/쉼표로 구분)
          </summary>
          <textarea
            value={bulkIds}
            onChange={(e) => setBulkIds(e.target.value)}
            rows={6}
            placeholder={"예)\n101,102,103\n또는\n201\n202\n203"}
            style={{
              width: "100%",
              border: "1px solid #e5e7eb",
              borderRadius: 10,
              padding: 10,
              outline: "none",
              fontFamily: "inherit",
              resize: "vertical",
              background: "#fff",
            }}
          />
          <Row style={{ marginTop: 8 }}>
            <DangerBtn disabled={busy} onClick={bulkDeactivate}>
              {busy ? "처리 중…" : "일괄 비활성화"}
            </DangerBtn>
            <PrimaryBtn disabled={busy} onClick={bulkReactivate}>
              {busy ? "처리 중…" : "일괄 복구"}
            </PrimaryBtn>
            <GhostBtn onClick={() => setBulkIds("")}>지우기</GhostBtn>
          </Row>
        </details>
      </SearchCard>

      {/* 처리 로그 */}
      <SearchCard>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>처리 로그</div>
        <div
          style={{
            maxHeight: 280,
            overflow: "auto",
            border: "1px dashed #e5e7eb",
            borderRadius: 12,
            padding: 10,
            background: "#fafafa",
          }}
        >
          {log.length === 0 && <InfoText>아직 로그가 없습니다.</InfoText>}
          {log.map((L, i) => (
            <div
              key={i}
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                fontSize: 12,
                marginBottom: 4,
                whiteSpace: "pre-wrap",
              }}
            >
              <span style={{ color: "#6b7280" }}>[{L.ts}]</span> {L.text}
            </div>
          ))}
        </div>
      </SearchCard>
    </PageWrap>
  );
}
