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
import { toast } from "react-toastify"; // ✅ 토스트 알림 추가

/* ===== 알림 배지 스타일 ===== */
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

/* ===== ✅ 출석 체크 버튼 스타일 추가 ===== */
const AttendanceBtn = styled.button`
  background: linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%);
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(139, 92, 246, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(139, 92, 246, 0.4);
  }

  &:disabled {
    background: #e2e8f0;
    color: #94a3b8;
    cursor: default;
    transform: none;
    box-shadow: none;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false); // ✅ 출석 로딩 상태
  const [, setMe] = useState({}); 

  const apiBase = "https://api.stackflov.com";

  // ✅ 출석 체크 요청 함수
  const handleAttendance = async () => {
    const token = Cookies.get("accessToken");
    if (!token) return;

    setLoading(true);
    try {
      // 이전에 설정한 /attendance/check-in 경로로 호출합니다.
      const response = await axios.post(`${apiBase}/attendance/check-in`, {}, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      toast.success(`🎉 ${response.data}`); // "N일 연속 출석!" 메시지 출력
    } catch (err) {
      const errorMsg = err.response?.data || "이미 출석했거나 오류가 발생했습니다.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

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
        window.dispatchEvent(new Event("logoutSuccess"));
        setIsLoggedIn(false);
        setMe({});
        setUnreadCount(0);
        alert("로그아웃 되었습니다.");
        navigate("/login");
      });
  };

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) {
      setIsLoggedIn(false);
      setMe({});
      return;
    }

    setIsLoggedIn(true);

    axios.get(`${apiBase}/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
    })
    .then((res) => { 
      setMe(res.data); 
    })
    .catch((err) => {
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
    <HeaderBar>
      <HeaderWrapper>
        <LogoWrapper>
          <Logo onClick={() => navigate("/")} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
            <img 
              src="/logo.png" 
              alt="StackFlov Logo" 
              style={{ height: "42px", objectFit: "contain" }} 
            />
          </Logo>
        </LogoWrapper>

        <LinkWrapper>
          <HeaderItem $active={isActive("/")} onClick={() => navigate("/")}>자취로그</HeaderItem>
          <HeaderItem $active={isActive("/nibangnebang")} onClick={() => navigate("/nibangnebang")}>니방내방</HeaderItem>
          <HeaderItem $active={isActive("/notices")} onClick={() => navigate("/notices")}>공지사항</HeaderItem>
        </LinkWrapper>

        <LoginWrapper>
          {/* ✅ 출석 체크 버튼: 로그인 상태일 때만 노출 */}
          {isLoggedIn && (
            <AttendanceBtn onClick={handleAttendance} disabled={loading}>
              {loading ? "확인 중..." : "출석 체크"}
            </AttendanceBtn>
          )}

          <HeaderItem $active={isActive("/notifications")} onClick={() => navigate("/notifications")}>
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
  );
};

export default Header;