import React, { useEffect, useState } from "react";
import UserInfos from "../components/Profiles/UserInfos";
import {
  ProfileContentDiv,
  ProfileMenuItem,
  ProfileSideDiv,
  ProfileTopDiv,
  ProfileWrapper,
} from "../styles/components/ProfileStyled";
import UserPosts from "../components/Profiles/UserPosts";
import UserReplys from "../components/Profiles/UserReplys";
import UserBookMarks from "../components/Profiles/UserBookMarks";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

/* 아이콘 */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";
import ChatIcon from "@mui/icons-material/Chat";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const tabs = [
  { id: 0, label: "내 프로필", icon: <AccountCircleIcon fontSize="small" /> },
  { id: 1, label: "내 게시글", icon: <ArticleIcon fontSize="small" /> },
  { id: 2, label: "내 댓글", icon: <ChatIcon fontSize="small" /> },
  { id: 3, label: "북마크", icon: <BookmarkIcon fontSize="small" /> },
];

const Profile = () => {
  const [me, setMe] = useState();
  const accessToken = Cookies.get("accessToken");
  const [selectMenu, setSelectMenu] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) return;

    axios
      .get("https://api.stackflov.com/users/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => setMe(res.data))
      .catch((err) => console.error("Error fetching user data:", err));
  }, [accessToken]);

  return (
    <ProfileWrapper>
      <ProfileTopDiv>마이 페이지</ProfileTopDiv>

      <ProfileSideDiv>
        {tabs.map((t) => (
          <ProfileMenuItem
            key={t.id}
            $active={selectMenu === t.id}
            onClick={() => setSelectMenu(t.id)}
            aria-current={selectMenu === t.id ? "page" : undefined}
          >
            <span className="icon">{t.icon}</span>
            <span className="label">{t.label}</span>
          </ProfileMenuItem>
        ))}

        {me?.role === "ADMIN" && (
          <ProfileMenuItem as="button" $admin onClick={() => navigate("/admin")}>
            <span className="icon">
              <AdminPanelSettingsIcon fontSize="small" />
            </span>
            <span className="label">어드민</span>
          </ProfileMenuItem>
        )}
      </ProfileSideDiv>

      {/* 탭 전환 시 페이드 애니메이션을 위해 key 부여 */}
      <ProfileContentDiv key={selectMenu}>
        {selectMenu === 0 && <UserInfos />}
        {selectMenu === 1 && <UserPosts />}
        {selectMenu === 2 && <UserReplys />}
        {selectMenu === 3 && <UserBookMarks />}
      </ProfileContentDiv>
    </ProfileWrapper>
  );
};

export default Profile;
