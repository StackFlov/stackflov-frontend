import React, { useEffect, useState } from "react";
import { MyInfoDUmmyDatas } from "../../utils/dummyDatas";
import {
  UserInfosWrapper,
  UserImageDiv,
  UserInfosDiv,
  UserInfoItems,
  UserLevelDiv,
  BottomUserLevel,
  UserLevelGuidDiv,
  UserHIstoryDiv,
  UserCreatedAtDiv,
  UserCreatedAtView,
  UserEmailDiv,
  UserEmailView,
  UserNickNameDiv,
  UserNickNameInput,
  UserPhoneDiv,
  UserPhoneInput,
  UserZipCodeBtn,
  UserZipCodeInput,
  UserAddrDiv,
  UserAddrDetialInput,
  UserNameDiv,
  TopUserNameDiv,
  TopUserLevel,
  TopUserInfos,
  UserIngoItemIcon,
  BottomUserLevelIconDiv,
  BottomUserLevelIcon,
  UserHistoryItem,
  UserAddrInput,
  UserInfoBtnDiv,
  UserInfoUpdateCancleBtn,
  UserInfoUpdateBtn,
} from "../../styles/components/UserInofsStyled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const UserInfos = () => {
  const [nickName, setNickName] = useState();
  const [phone, setPhone] = useState();
  const [zipCode, setZipCode] = useState();
  const [addr, setAddr] = useState();
  const [addrDetail, setAddrDetail] = useState();
  const [UserLevel, setUserLevel] = useState(0);
  const location = useLocation();
  const accessToken = Cookies.get("accessToken");
  const [me, setMe] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  useEffect(() => {
    setNickName(me.nickname);
    setPhone(me.phoneNumber);
    setAddr(me.address);
  }, [me]);

  return (
    <UserInfosWrapper>
      <UserImageDiv>
        {me.profileImage === null ? (
          <AccountCircleIcon style={{ fontSize: "220px" }} />
        ) : (
          <img
            src={me.profileImage}
            alt="user"
            width="150"
            height="150"
            style={{ borderRadius: "50%" }}
          />
        )}
      </UserImageDiv>
      <UserInfosDiv>
        <TopUserLevel>
          {me.level == 0 ? <>🥉</> : me.level == 1 ? <>🥈</> : <>🥇</>}
        </TopUserLevel>
        <TopUserNameDiv>{me.nickname}</TopUserNameDiv>님
        <UserInfoItems>
          <UserIngoItemIcon>팔로워</UserIngoItemIcon>1
        </UserInfoItems>
        <UserInfoItems>
          <UserIngoItemIcon>팔로우</UserIngoItemIcon>2
        </UserInfoItems>
        <UserInfoItems>
          <UserIngoItemIcon>북마크</UserIngoItemIcon>3
        </UserInfoItems>
      </UserInfosDiv>
      <UserLevelDiv>
        <BottomUserLevel>등급</BottomUserLevel>
        <BottomUserLevelIconDiv>
          <BottomUserLevelIcon level={me.level == 0 ? true : false}>
            🥉 피츄
          </BottomUserLevelIcon>
          <BottomUserLevelIcon level={me.level == 1 ? true : false}>
            🥈 피카츄
          </BottomUserLevelIcon>
          <BottomUserLevelIcon level={me.level == 2 ? true : false}>
            🥇 라이츄
          </BottomUserLevelIcon>
        </BottomUserLevelIconDiv>
        <UserLevelGuidDiv>
          현재 등급은
          {me.level == 0 ? (
            <strong>🥉 피츄</strong>
          ) : me.level == 1 ? (
            <strong>🥈 피카츄</strong>
          ) : (
            <strong>🥇 라이츄</strong>
          )}
          입니다.
          <br />
          게시글 5개를 더 작성해서
          {me.level == 0 ? (
            <strong>🥈 피카츄</strong>
          ) : (
            <strong>🥇 라이츄</strong>
          )}
          등급을 달성해 보세요!
        </UserLevelGuidDiv>
      </UserLevelDiv>
      <UserHIstoryDiv>
        <UserHistoryItem>
          <UserCreatedAtDiv>가입일</UserCreatedAtDiv>
          <UserCreatedAtView>{me?.createdAt?.slice(0, 10)}</UserCreatedAtView>
        </UserHistoryItem>
        <UserHistoryItem>
          <UserEmailDiv>ID</UserEmailDiv>
          <UserEmailView>{me.email}</UserEmailView>
        </UserHistoryItem>
        <UserHistoryItem>
          <UserNickNameDiv>닉네임</UserNickNameDiv>
          <UserNickNameInput
            value={nickName}
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
        </UserHistoryItem>
        <UserHistoryItem>
          <UserPhoneDiv>전화번호</UserPhoneDiv>
          <UserPhoneInput
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </UserHistoryItem>
        <UserHistoryItem>
          <UserAddrDiv>주소</UserAddrDiv>
          <UserZipCodeInput
            value={addr}
            onChange={(e) => {
              setAddr(e.target.value);
            }}
          />
          <UserZipCodeBtn>우편 번호</UserZipCodeBtn>
        </UserHistoryItem>
        <UserHistoryItem>
          <UserAddrInput />
        </UserHistoryItem>
        <UserAddrDetialInput />
      </UserHIstoryDiv>
      <UserInfoBtnDiv>
        <UserInfoUpdateBtn>저장</UserInfoUpdateBtn>
        <UserInfoUpdateCancleBtn>취소</UserInfoUpdateCancleBtn>
      </UserInfoBtnDiv>
    </UserInfosWrapper>
  );
};

export default UserInfos;
