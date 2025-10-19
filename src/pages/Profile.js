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

const Profile = () => {
  const [me, setMe] = useState();
  const accessToken = Cookies.get("accessToken");
  const [selectMenu, setSelectMenu] = useState(0);
  const navigator = useNavigate();
  const Menus = { 0: "내 프로필", 1: "내 게시글", 2: "내 댓글", 3: "북마크" };

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
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    }
  }, [accessToken]);

  return (
    <ProfileWrapper>
      <ProfileTopDiv>마이 페이지</ProfileTopDiv>
      <ProfileSideDiv>
        <ProfileMenuItem
          select={selectMenu == 0 ? true : false}
          onClick={() => {
            setSelectMenu(0);
          }}
        >
          내 프로필
        </ProfileMenuItem>
        <ProfileMenuItem
          select={selectMenu == 1 ? true : false}
          onClick={() => {
            setSelectMenu(1);
          }}
        >
          내 게시글
        </ProfileMenuItem>
        <ProfileMenuItem
          select={selectMenu == 2 ? true : false}
          onClick={() => {
            setSelectMenu(2);
          }}
        >
          내 댓글
        </ProfileMenuItem>
        <ProfileMenuItem
          select={selectMenu == 3 ? true : false}
          onClick={() => {
            setSelectMenu(3);
          }}
        >
          북마크
        </ProfileMenuItem>
        {me?.role == "ADMIN" && (
          <ProfileMenuItem
            select={selectMenu == 3 ? true : false}
            onClick={() => {
              navigator("/admin");
            }}
          >
            어드민
          </ProfileMenuItem>
        )}
      </ProfileSideDiv>
      <ProfileContentDiv>
        {selectMenu == 0 && <UserInfos />}
        {selectMenu == 1 && <UserPosts />}
        {selectMenu == 2 && <UserReplys />}
        {selectMenu == 3 && <UserBookMarks />}
      </ProfileContentDiv>
    </ProfileWrapper>
  );
};

export default Profile;
