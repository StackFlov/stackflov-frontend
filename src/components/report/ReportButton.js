import { useMemo, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const REASONS = [
  { key: "SPAM", label: "스팸/광고" },
  { key: "ABUSE", label: "욕설/비방" },
  { key: "PORNOGRAPHY", label: "음란물" },
  { key: "ILLEGAL", label: "불법 정보" },
  { key: "OTHER", label: "기타(직접 입력)" },
];

export default function ReportButton({ contentId, contentType, accessToken, size = "sm" }) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("SPAM");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const disabled = useMemo(
    () => submitting || (reason === "OTHER" && details.trim().length === 0),
    [submitting, reason, details]
  );

  const submit = async () => {
    try {
      setSubmitting(true);
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL || "https://api.stackflov.com"}/reports`,
        {
          contentId,
          contentType,
          reason,
          details: reason === "OTHER" ? details.trim() : (details?.trim() || ""),
        },
        {
          headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
          withCredentials: true,
        }
      );
      alert("신고가 정상적으로 접수되었습니다.");
      setOpen(false);
      setReason("SPAM");
      setDetails("");
    } catch (e) {
      const s = e?.response?.status;
      if (s === 401) alert("로그인이 필요합니다.");
      else if (s === 409) alert("이미 신고된 콘텐츠입니다.");
      else if (s === 400) alert("입력값을 확인해 주세요.");
      else alert("신고 처리 중 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Btn $size={size} type="button" onClick={() => setOpen(true)} title="신고하기" aria-label="신고하기">
        <span style={{ transform: "translateY(-1px)" }}>🚩</span>
        <span>신고</span>
      </Btn>

      {open && (
        <Overlay onClick={() => !submitting && setOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginTop: 0 }}>신고하기</h3>

            <div style={{ marginBottom: 8, fontSize: 14, color: "#64748b" }}>
              대상: <b>{contentType}</b>{" "}
              <code style={{ color: "#475569" }}>#{contentId}</code>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
              {REASONS.map((r) => (
                <label key={r.key} style={{ display: "flex", gap: 8, alignItems: "center", border: "1px solid #e2e8f0", borderRadius: 8, padding: 8 }}>
                  <input type="radio" name="report-reason" value={r.key} checked={reason === r.key} onChange={() => setReason(r.key)} />
                  <span>{r.label}</span>
                </label>
              ))}
            </div>

            <div style={{ marginTop: 12 }}>
              <textarea
                placeholder={reason === "OTHER" ? "기타 사유를 구체적으로 적어주세요(필수)" : "추가 설명이 있으면 입력"}
                value={details}
                onChange={(e) => setDetails(e.target.value.slice(0, 2000))}
                style={{ width: "100%", minHeight: 96, border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 12px", fontSize: 14 }}
              />
              <div style={{ textAlign: "right", fontSize: 12, color: "#94a3b8" }}>{details.length}/2000</div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 12 }}>
              <button disabled={submitting} onClick={() => setOpen(false)} style={{ padding: "8px 12px", borderRadius: 10, border: "1px solid #e2e8f0", background: "#fff" }}>
                취소
              </button>
              <button disabled={disabled} onClick={submit} style={{ padding: "8px 12px", borderRadius: 10, border: "1px solid #1e293b", background: "#111827", color: "#fff", opacity: disabled ? 0.5 : 1 }}>
                {submitting ? "전송 중..." : "신고 접수"}
              </button>
            </div>
          </Modal>
        </Overlay>
      )}
    </>
  );
}

const Btn = styled.button`
  display: inline-flex; align-items: center; gap: 6px;
  border: 1px solid #e2e8f0; background: #fff; cursor: pointer;
  border-radius: 999px; line-height: 1;
  padding: ${(p) => (p.$size === "sm" ? "4px 8px" : "6px 10px")};
  font-size: ${(p) => (p.$size === "sm" ? "12px" : "14px")};
  &:hover { background: #f8fafc; }
`;

const Overlay = styled.div`
  position: fixed; inset: 0; background: rgba(15,18,28,.45);
  display:flex; align-items:center; justify-content:center; z-index: 9999;
`;

const Modal = styled.div`
  width:min(720px,92vw); max-height:86vh; overflow:auto;
  background:#fff; border-radius:16px; box-shadow:0 18px 48px rgba(0,0,0,.35);
  padding:18px;
`;
