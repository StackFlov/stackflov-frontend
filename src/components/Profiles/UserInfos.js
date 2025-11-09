import React, { useEffect, useState } from "react";
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
import Cookies from "js-cookie";

const UserInfos = () => {
  const [nickName, setNickName] = useState("");
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");
  const accessToken = Cookies.get("accessToken");
  const [me, setMe] = useState({});

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

  useEffect(() => {
    setNickName(me?.nickname || "");
    setPhone(me?.phoneNumber || "");
    setAddr(me?.address || "");
  }, [me]);

  const levelIcon = me?.level === 0 ? "🥉" : me?.level === 1 ? "🥈" : "🥇";
  const levelName =
    me?.level === 0 ? "피츄" : me?.level === 1 ? "피카츄" : "라이츄";

  return (
    <UserInfosWrapper>
      {/* 상단: 아바타 + 요약 */}
      <UserImageDiv>
        {me?.profileImage ? (
          <img src={me.profileImage} alt="user" className="avatar" />
        ) : (
          <AccountCircleIcon className="avatar-fallback" />
        )}
      </UserImageDiv>

      <UserInfosDiv>
        <TopUserLevel aria-label={`등급 ${levelName}`}>{levelIcon}</TopUserLevel>
        <TopUserNameDiv>{me?.nickname || "user"}</TopUserNameDiv>님
        <TopUserInfos>
          <UserInfoItems>
            <UserIngoItemIcon>팔로워</UserIngoItemIcon>1
          </UserInfoItems>
          <UserInfoItems>
            <UserIngoItemIcon>팔로우</UserIngoItemIcon>2
          </UserInfoItems>
          <UserInfoItems>
            <UserIngoItemIcon>북마크</UserIngoItemIcon>3
          </UserInfoItems>
        </TopUserInfos>
      </UserInfosDiv>

      {/* 등급 카드 */}
      <UserLevelDiv>
        <BottomUserLevel>등급</BottomUserLevel>
        <BottomUserLevelIconDiv>
          <BottomUserLevelIcon $active={me?.level === 0}>
            🥉 피츄
          </BottomUserLevelIcon>
          <BottomUserLevelIcon $active={me?.level === 1}>
            🥈 피카츄
          </BottomUserLevelIcon>
          <BottomUserLevelIcon $active={me?.level === 2}>
            🥇 라이츄
          </BottomUserLevelIcon>
        </BottomUserLevelIconDiv>
        <UserLevelGuidDiv>
          현재 등급은 <strong>{levelIcon} {levelName}</strong> 입니다.
          <br />
          게시글 5개를 더 작성해서{" "}
          <strong>{me?.level === 0 ? "🥈 피카츄" : "🥇 라이츄"}</strong>
          {" "}등급을 달성해 보세요!
        </UserLevelGuidDiv>
      </UserLevelDiv>

      {/* 프로필 정보 폼 */}
      <UserHIstoryDiv>
        <UserHistoryItem>
          <UserCreatedAtDiv>가입일</UserCreatedAtDiv>
          <UserCreatedAtView>{me?.createdAt?.slice(0, 10) || "-"}</UserCreatedAtView>
        </UserHistoryItem>

        <UserHistoryItem>
          <UserEmailDiv>ID</UserEmailDiv>
          <UserEmailView>{me?.email || "-"}</UserEmailView>
        </UserHistoryItem>

        <UserHistoryItem>
          <UserNickNameDiv>닉네임</UserNickNameDiv>
          <UserNickNameInput
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            placeholder="닉네임"
          />
        </UserHistoryItem>

        <UserHistoryItem>
          <UserPhoneDiv>전화번호</UserPhoneDiv>
          <UserPhoneInput
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="010-0000-0000"
          />
        </UserHistoryItem>

        <UserHistoryItem className="zip-row">
          <UserAddrDiv>주소</UserAddrDiv>
          <UserZipCodeInput
            value={addr}
            onChange={(e) => setAddr(e.target.value)}
            placeholder="기본 주소"
          />
          <UserZipCodeBtn type="button">우편번호</UserZipCodeBtn>
        </UserHistoryItem>

        <UserHistoryItem className="addr-row">
          <UserAddrInput placeholder="상세 주소" />
        </UserHistoryItem>

        <UserAddrDetialInput placeholder="참고 항목 (선택)" />
      </UserHIstoryDiv>

      {/* 액션 */}
      <UserInfoBtnDiv>
        <UserInfoUpdateCancleBtn type="button">취소</UserInfoUpdateCancleBtn>
        <UserInfoUpdateBtn type="button">저장</UserInfoUpdateBtn>
      </UserInfoBtnDiv>
    </UserInfosWrapper>
  );
};

export default UserInfos;
