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

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = Cookies.get("accessToken");
  const [me, setMe] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    axios
      .post(
        "https://api.stackflov.com/auth/logout",
        {}, // 본문 데이터 (필요 없다면 빈 객체)
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        setIsLoggedIn(false);
        setMe({});
      })
      .catch((err) => {
        console.error("Logout error:", err);
      });
  };

  useEffect(() => {
    const token = Cookies.get("accessToken");

    if (token) {
      axios
        .get("https://api.stackflov.com/users/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        })
        .then((res) => {
          setMe(res.data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, [accessToken]);

  const getActive = (path) =>
    location.pathname.startsWith(path) ? "bold" : "thin";

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo>
          <div onClick={() => navigate("/")}>참치캔</div>
        </Logo>
      </LogoWrapper>
      <LinkWrapper>
        <HeaderItem nowNavigator={getActive("/")}>
          <div onClick={() => navigate("/")}>자취로그</div>
        </HeaderItem>
        <HeaderItem nowNavigator={getActive("/nibangnebang")}>
          <div onClick={() => navigate("/nibangnebang")}>니방내방</div>
        </HeaderItem>
      </LinkWrapper>
      <LoginWrapper>
        <HeaderItem nowNavigator={getActive("/login")}>
          {isLoggedIn ? (
            <div
              onClick={() => {
                handleLogout();
                navigate("/login");
              }}
            >
              Logout
            </div>
          ) : (
            <div onClick={() => navigate("/login")}>Login</div>
          )}
        </HeaderItem>
        <HeaderItem nowNavigator={getActive("/profile")}>
          <div onClick={() => navigate("/profile")}>Profile</div>
        </HeaderItem>
      </LoginWrapper>
    </HeaderWrapper>
  );
};

export default Header;
