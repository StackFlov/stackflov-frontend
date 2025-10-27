import React, { useEffect, useState } from "react";
import {
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

/* =========================
   알림 배지/모달 스타일
   ========================= */
const NotiText = styled.span`
  position: relative;
  display: inline-block;
  padding-right: 18px; /* 배지 자리 */
`;

const DotBadge = styled.span`
  position: absolute;
  top: -6px;
  right: 0;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ef4444;
  color: #fff;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  font-weight: 700;
`;

const Overlay = styled.div`
  position: fixed; inset: 0;
  background: rgba(15,18,28,.45);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
`;

const Modal = styled.div`
  width: min(720px, 92vw);
  max-height: 80vh;
  overflow: auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 18px 48px rgba(0,0,0,.35);
  padding: 18px;
`;

const ModalHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 12px;
  h3 { margin: 0; font-size: 20px; }
  .right { display: flex; gap: 8px; }
  button {
    border: 1px solid #e2e8f0; background: #fff; cursor: pointer;
    border-radius: 10px; padding: 8px 10px; font-size: 13px;
  }
`;

const List = styled.div`
  border-top: 1px solid #e5e7eb;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr 120px;
  gap: 10px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
`;

const TypePill = styled.span`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 6px 10px; font-size: 12px; border-radius: 999px;
  border: 1px solid #dbeafe; background: #eff6ff; color: #1d4ed8; font-weight: 700;
`;

const SmallBtn = styled.button`
  border: none; background: transparent; color: #111827;
  text-decoration: underline; cursor: pointer; font-size: 13px;
`;

const Empty = styled.div`
  padding: 32px 0; color: #94a3b8; text-align: center;
`;

/* ========================= */

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = Cookies.get("accessToken");

  const [me, setMe] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [unreadCount, setUnreadCount] = useState(0);
  const [notiOpen, setNotiOpen] = useState(false);
  const [notiLoading, setNotiLoading] = useState(false);
  const [notiItems, setNotiItems] = useState([]);

  const apiBase = process.env.REACT_APP_API_BASE_URL || "https://api.stackflov.com";

  const handleLogout = () => {
    axios
      .post(`${apiBase}/auth/logout`, {}, {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then(() => {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        setIsLoggedIn(false);
        setMe({});
        setUnreadCount(0);
      })
      .catch((err) => console.error("Logout error:", err));
  };

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      axios
        .get(`${apiBase}/users/me`, {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          withCredentials: true,
        })
        .then((res) => { setMe(res.data); setIsLoggedIn(true); })
        .catch(() => { setIsLoggedIn(false); });
    } else {
      setIsLoggedIn(false);
    }
  }, [accessToken, apiBase]);

  // 읽지 않은 개수
  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) return;
    axios
      .get(`${apiBase}/notifications/unread-count`, {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((res) => {
        const val = typeof res.data === "number" ? res.data : (res.data?.count ?? 0);
        setUnreadCount(val);
      })
      .catch(() => {});
  }, [isLoggedIn, apiBase]);

  // 모달 열릴 때 최근 알림 로드
  const openNoti = () => {
    if (!isLoggedIn) { navigate("/login"); return; }
    setNotiOpen(true);
    setNotiLoading(true);
    const token = Cookies.get("accessToken");
    axios
      .get(`${apiBase}/notifications?page=0&size=6`, {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((res) => {
        // 서버 응답 형식 방어적 파싱
        const items = Array.isArray(res.data?.content) ? res.data.content
                    : Array.isArray(res.data) ? res.data
                    : [];
        setNotiItems(items);
      })
      .catch(() => setNotiItems([]))
      .finally(() => setNotiLoading(false));
  };

  const getActive = (path) => {
    const p = location.pathname;
    if (path === "/") {
      const homeGroup = ["/", "/trace", "/boards"];
      const active = homeGroup.some((prefix) => p === prefix || p.startsWith(prefix + "/"));
      return active ? "bold" : "thin";
    }
    return p === path || p.startsWith(path + "/") ? "bold" : "thin";
  };

  return (
    <>
      <HeaderWrapper>
        <LogoWrapper>
          <Logo><div onClick={() => navigate("/")}>참치캔</div></Logo>
        </LogoWrapper>

        <LinkWrapper>
          <HeaderItem nowNavigator={getActive("/")}><div onClick={() => navigate("/")}>자취로그</div></HeaderItem>
          <HeaderItem nowNavigator={getActive("/nibangnebang")}><div onClick={() => navigate("/nibangnebang")}>니방내방</div></HeaderItem>
          <HeaderItem nowNavigator={getActive("/notices")}><div onClick={() => navigate("/notices")}>공지사항</div></HeaderItem>
        </LinkWrapper>

        <LoginWrapper>
        {/* 알림을 Login 왼쪽으로 */}
        <HeaderItem nowNavigator={getActive("/notifications")}>
          <div onClick={openNoti}>
            <NotiText>
              알림
              {unreadCount > 0 && <DotBadge>{unreadCount > 99 ? "99+" : unreadCount}</DotBadge>}
            </NotiText>
          </div>
        </HeaderItem>

        <HeaderItem nowNavigator={getActive("/login")}>
            {isLoggedIn ? (
              <div onClick={() => { handleLogout(); navigate("/login"); }}>Logout</div>
            ) : (
              <div onClick={() => navigate("/login")}>Login</div>
            )}
          </HeaderItem>

          <HeaderItem nowNavigator={getActive("/profile")}>
            <div onClick={() => navigate("/profile")}>Profile</div>
          </HeaderItem>

          {/* ✅ 알림: 버튼이 아닌 텍스트 메뉴 + 배지 */}
          
        </LoginWrapper>
      </HeaderWrapper>

      {/* ✅ 알림 모달 */}
      {notiOpen && (
        <Overlay onClick={() => setNotiOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h3>알림</h3>
              <div className="right">
                <button onClick={() => navigate("/notifications")}>전체 보기</button>
                <button onClick={() => setNotiOpen(false)}>닫기</button>
              </div>
            </ModalHeader>

            {notiLoading ? (
              <Empty>불러오는 중…</Empty>
            ) : notiItems.length === 0 ? (
              <Empty>새 알림이 없습니다.</Empty>
            ) : (
              <List>
                {notiItems.map((n) => (
                  <Row key={n.id ?? `${n.type}-${n.createdAt}`}>
                    <TypePill>{n.type || "INFO"}</TypePill>
                    <div style={{ fontSize: 15, fontWeight: n.read ? 400 : 700 }}>
                      {n.message || n.content || "알림 내용"}
                    </div>
                    <div style={{ textAlign: "right" }}>
                      {n.link || n.targetUrl ? (
                        <SmallBtn onClick={() => window.location.assign(n.link || n.targetUrl)}>
                          바로가기
                        </SmallBtn>
                      ) : (
                        <span style={{ color: "#94a3b8", fontSize: 12 }}>링크 없음</span>
                      )}
                    </div>
                  </Row>
                ))}
              </List>
            )}
          </Modal>
        </Overlay>
      )}
    </>
  );
};

export default Header;
