import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-wrap">
      <aside className="admin-aside">
        <h3>Admin</h3>
        <nav>
          <NavLink to="/admin" end>대시보드</NavLink>
          <NavLink to="/admin/users">사용자</NavLink>
          <NavLink to="/admin/reports">신고</NavLink>
          <NavLink to="/admin/boards">게시물</NavLink>
          <NavLink to="/admin/banned-words">금지어</NavLink>
        </nav>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}