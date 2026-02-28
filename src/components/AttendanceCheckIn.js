// src/components/AttendanceCheckIn.jsx
import React, { useState } from "react";
import Cookies from "js-cookie";
import { checkInAttendance } from "../api/attendance";

export default function AttendanceCheckIn() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false); // 오늘 출석 완료 상태(프론트 로컬)

  const isLoggedIn = !!Cookies.get("accessToken");

  const handleCheckIn = async () => {
    if (!isLoggedIn) {
      setMessage("로그인이 필요한 기능입니다.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const resultMsg = await checkInAttendance();
      setMessage(resultMsg);
      setChecked(true);
    } catch (e) {
      // 백엔드에서 400 + message 내려주는 케이스 처리
      const serverMsg =
        e?.response?.data && typeof e.response.data === "string"
          ? e.response.data
          : e?.response?.data?.message;

      setMessage(serverMsg || "출석 체크에 실패했습니다.");
      // 이미 출석한 경우면 버튼 비활성화해도 됨
      if ((serverMsg || "").includes("이미 출석")) setChecked(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 14 }}>
      <div style={{ fontWeight: 800, marginBottom: 8 }}>📅 오늘의 출석</div>

      <button
        onClick={handleCheckIn}
        disabled={loading || checked}
        style={{
          padding: "10px 12px",
          borderRadius: 10,
          border: "1px solid #cbd5e1",
          background: checked ? "#f1f5f9" : "#ffffff",
          cursor: loading || checked ? "not-allowed" : "pointer",
          fontWeight: 700,
        }}
      >
        {loading ? "출석 처리 중..." : checked ? "오늘 출석 완료" : "출석 체크하기"}
      </button>

      {message && (
        <div style={{ marginTop: 10, fontSize: 14, opacity: 0.9 }}>
          {message}
        </div>
      )}
    </div>
  );
}