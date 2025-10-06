import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import api from "../../utils/api";

// me 정보를 전역 상태로 이미 들고 있으면 그걸 써도 됨.
// 여긴 self-contained로 한번 불러오는 버전.
export default function RequireAdmin({ children }) {
  const location = useLocation();
  const [state, setState] = useState({ loading: true, ok: false });

  useEffect(() => {
    let alive = true;
    api.get("/users/me")
      .then(({ data }) => {
        const role = data?.role || data?.roles?.[0];
        const isAdmin = role === "ADMIN" || role === "ROLE_ADMIN" || (data?.roles || []).includes("ADMIN") || (data?.roles || []).includes("ROLE_ADMIN");
        if (alive) setState({ loading: false, ok: isAdmin });
      })
      .catch(() => alive && setState({ loading: false, ok: false }));
    return () => { alive = false; };
  }, []);

  if (state.loading) return <div>검증 중…</div>;
  if (!state.ok) return <Navigate to="/login" state={{ from: location }} replace />;
  return children;
}