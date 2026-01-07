import React, { useEffect, useState } from "react";
import {
  HeaderBar,
  HeaderItem,
  HeaderWrapper,
  LinkWrapper,
  LoginWrapper,
  Logo,
  LogoWrapper,
} from "../styles/components/HeaderStyled";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import styled from "styled-components";

/* ===== 스타일 컴포넌트 (기존과 동일) ===== */
const NotiText = styled.span`
  position: relative;
  display: inline-block;
  padding-right: 18px;
`;
const DotBadge = styled.span`
  position: absolute;
  top: -6px; right: 0;
  min-width: 16px; height: 16px; padding: 0 4px;
  border-radius: 999px; background: #ef4444; color: #fff;
  font-size: 10px; line-height: 16px; text-align: center; font-weight: 700;
`;
const Overlay = styled.div`
  position: fixed; inset: 0;
  background: rgba(15,18,28,.45);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
`;
const Modal = styled.div`
  width: min(720px, 92vw);
  max-height: 80vh; overflow: auto;
  background: #fff; border-radius: 16px; box-shadow: 0 18px 48px rgba(0,0,0,.35);
  padding: 18px;
`;
const ModalHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;
  h3 { margin: 0; font-size: 20px; }
  .right { display: flex; gap: 8px; }
  button { border: 1px solid #e2e8f0; background: #fff; cursor: pointer; border-radius: 10px; padding: 8px 10px; font-size: 13px; }
`;
const List = styled.div` border-top: 1px solid #e5e7eb; `;
const Row = styled.div`
  display: grid; grid-template-columns: 96px 1fr 120px;
  gap: 10px; align-items: center; padding: 12px 0; border-bottom: 1px solid #f1f5f9;
`;
const TypePill = styled.span`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 6px 10px; font-size: 12px; border-radius: 999px;
  border: 1px solid #dbeafe; background: #eff6ff; color: #1d4ed8; font-weight: 700;
`;
const SmallBtn = styled.button`
  border: none; background: transparent; color: #111827; text-decoration: underline; cursor: pointer; font-size: 13px;
`;
const Empty = styled.div` padding: 32px 0; color: #94a3b8; text-align: center; `;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ 1. useState 문법 수정 (me 상태값과 setMe 함수 분리)
  const [me, setMe] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [unreadCount, setUnreadCount] = useState(0);
  const [notiOpen, setNotiOpen] = useState(false);
  const [notiLoading, setNotiLoading] = useState(false);
  const [notiItems, setNotiItems] = useState([]);

  const apiBase = process.env.REACT_APP_API_BASE_URL || "https://api.stackflov.com";

  const openProfile = () => {
    if (!isLoggedIn) { 
      navigate("/login"); 
      return; 
    }
    navigate("/profile");
  };

  const handleLogout = () => {
    const token = Cookies.get("accessToken");
    axios
      .post(`${apiBase}/auth/logout`, {}, {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then(() => {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        setIsLoggedIn(false);
        setMe({});
        setUnreadCount(0);
        alert("로그아웃 되었습니다.");
        navigate("/login");
      })
      .catch((err) => {
        console.error("Logout error:", err);
        // 에러가 나더라도 클라이언트 쿠키는 삭제 처리
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        setIsLoggedIn(false);
      });
  };

  // ✅ 2. 로그인 상태 체크 로직 보완
  // location.pathname이 바뀔 때마다(페이지 이동 시마다) 토큰 존재 여부를 다시 확인합니다.
  useEffect(() => {
    const token = Cookies.get("accessToken");
    
    if (!token) {
      setIsLoggedIn(false);
      setMe({});
      return;
    }

    axios.get(`${apiBase}/users/me`, {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      withCredentials: true,
    })
    .then((res) => { 
      setMe(res.data); 
      setIsLoggedIn(true); 
    })
    .catch(() => {
      setIsLoggedIn(false);
      setMe({});
    });
  }, [location.pathname, apiBase]); // location 변화에 반응하도록 수정

  // 알림 개수 로드
  useEffect(() => {
    if (!isLoggedIn) return;
    const token = Cookies.get("accessToken");
    
    axios.get(`${apiBase}/notifications/unread-count`, {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      withCredentials: true,
    })
    .then((res) => {
      const val = typeof res.data === "number" ? res.data : (res.data?.count ?? 0);
      setUnreadCount(val);
    })
    .catch(() => {});
  }, [isLoggedIn, apiBase]);

  const openNoti = () => {
    if (!isLoggedIn) { navigate("/login"); return; }
    setNotiOpen(true);
    setNotiLoading(true);
    const token = Cookies.get("accessToken");
    axios.get(`${apiBase}/notifications?page=0&size=6`, {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      withCredentials: true,
    })
    .then((res) => {
      const items = Array.isArray(res.data?.content) ? res.data.content
                  : Array.isArray(res.data) ? res.data : [];
      setNotiItems(items);
    })
    .catch(() => setNotiItems([]))
    .finally(() => setNotiLoading(false));
  };

  const isActive = (path) => {
    const p = location.pathname;
    if (path === "/") {
      const homeGroup = ["/", "/trace", "/boards"];
      return homeGroup.some((prefix) => p === prefix || p.startsWith(prefix + "/"));
    }
    return p === path || p.startsWith(path + "/");
  };

  return (
    <>
      <HeaderBar>
        <HeaderWrapper>
          <LogoWrapper>
            <Logo onClick={() => navigate("/")}>참치캔</Logo>
          </LogoWrapper>

          <LinkWrapper>
            <HeaderItem $active={isActive("/")} onClick={() => navigate("/")}>자취로그</HeaderItem>
            <HeaderItem $active={isActive("/nibangnebang")} onClick={() => navigate("/nibangnebang")}>니방내방</HeaderItem>
            <HeaderItem $active={isActive("/notices")} onClick={() => navigate("/notices")}>공지사항</HeaderItem>
          </LinkWrapper>

          <LoginWrapper>
            <HeaderItem $active={isActive("/notifications")} onClick={openNoti}>
              <NotiText>
                알림
                {unreadCount > 0 && <DotBadge>{unreadCount > 99 ? "99+" : unreadCount}</DotBadge>}
              </NotiText>
            </HeaderItem>

            {/* ✅ 로그인 상태에 따라 Logout / Login 텍스트 전환 */}
            {isLoggedIn ? (
              <HeaderItem onClick={handleLogout}>Logout</HeaderItem>
            ) : (
              <HeaderItem $active={isActive("/login")} onClick={() => navigate("/login")}>Login</HeaderItem>
            )}

            <HeaderItem
              $active={isActive("/profile")}
              onClick={openProfile}
            >
              Profile
            </HeaderItem>
          </LoginWrapper>
        </HeaderWrapper>
      </HeaderBar>

      {/* 알림 모달 부분은 기존과 동일하므로 생략 */}
      {/* ... */}
    </>
  );
};

export default Header;