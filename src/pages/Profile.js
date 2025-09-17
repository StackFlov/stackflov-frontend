import React, { useState } from "react";
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

const Profile = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const Menus = { 0: "내 프로필", 1: "내 게시글", 2: "내 댓글", 3: "북마크" };
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
