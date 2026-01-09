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

/* ===== 스타일 컴포넌트 생략 (기존과 동일) ===== */
const NotiText = styled.span` position: relative; display: inline-block; padding-right: 18px; `;
const DotBadge = styled.span` position: absolute; top: -6px; right: 0; min-width: 16px; height: 16px; padding: 0 4px; border-radius: 999px; background: #ef4444; color: #fff; font-size: 10px; line-height: 16px; text-align: center; font-weight: 700; `;
const Overlay = styled.div` position: fixed; inset: 0; background: rgba(15,18,28,.45); display: flex; align-items: center; justify-content: center; z-index: 9999; `;
const Modal = styled.div` width: min(720px, 92vw); max-height: 80vh; overflow: auto; background: #fff; border-radius: 16px; box-shadow: 0 18px 48px rgba(0,0,0,.35); padding: 18px; `;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [me, setMe] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notiOpen, setNotiOpen] = useState(false);

  const apiBase = "https://api.stackflov.com";

  // 프로필 이동 로직 (토큰 우선 체크)
  const openProfile = () => {
    const token = Cookies.get("accessToken");
    if (!token) { 
      navigate("/login"); 
      return; 
    }
    navigate("/profile");
  };

  const handleLogout = () => {
    const token = Cookies.get("accessToken");
    axios
      .post(`${apiBase}/auth/logout`, {}, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .finally(() => {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        setIsLoggedIn(false);
        setMe({});
        setUnreadCount(0);
        alert("로그아웃 되었습니다.");
        navigate("/login");
      });
  };

  // 로그인 상태 체크 로직
  useEffect(() => {
    const token = Cookies.get("accessToken");
    
    if (!token) {
      setIsLoggedIn(false);
      setMe({});
      return;
    }

    // 서버 응답과 상관없이 토큰이 있으면 로그인된 UI(Logout 버튼)를 보여줌
    setIsLoggedIn(true);

    axios.get(`${apiBase}/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
    })
    .then((res) => { 
      setMe(res.data); 
    })
    .catch((err) => {
      // 오직 401(만료)일 때만 로그아웃 처리
      if (err.response?.status === 401) {
        setIsLoggedIn(false);
        setMe({});
        Cookies.remove("accessToken");
      }
    });
  }, [location.pathname]);

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
            {/* ✅ public 폴더의 logo.png 적용 */}
            <Logo onClick={() => navigate("/")} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
              <img 
                src="/logo.png" 
                alt="StackFlov Logo" 
                style={{ height: "36px", objectFit: "contain" }} 
              />
            </Logo>
          </LogoWrapper>

          <LinkWrapper>
            <HeaderItem $active={isActive("/")} onClick={() => navigate("/")}>자취로그</HeaderItem>
            <HeaderItem $active={isActive("/nibangnebang")} onClick={() => navigate("/nibangnebang")}>니방내방</HeaderItem>
            <HeaderItem $active={isActive("/notices")} onClick={() => navigate("/notices")}>공지사항</HeaderItem>
          </LinkWrapper>

          <LoginWrapper>
            <HeaderItem $active={isActive("/notifications")} onClick={() => setNotiOpen(true)}>
              <NotiText>
                알림
                {unreadCount > 0 && <DotBadge>{unreadCount > 99 ? "99+" : unreadCount}</DotBadge>}
              </NotiText>
            </HeaderItem>

            {isLoggedIn ? (
              <HeaderItem onClick={handleLogout}>Logout</HeaderItem>
            ) : (
              <HeaderItem $active={isActive("/login")} onClick={() => navigate("/login")}>Login</HeaderItem>
            )}

            <HeaderItem $active={isActive("/profile")} onClick={openProfile}>
              Profile
            </HeaderItem>
          </LoginWrapper>
        </HeaderWrapper>
      </HeaderBar>
    </>
  );
};

export default Header;