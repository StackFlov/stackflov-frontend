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
  const [me, setMe] = useState({});
  const [nickName, setNickName] = useState("");
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");
  const [addrDetail, setAddrDetail] = useState(""); // ✅ 상세 주소 상태 추가
  
  const accessToken = Cookies.get("accessToken");
  const apiBase = "https://api.stackflov.com";

  // 1. 내 정보 불러오기
  const fetchMe = () => {
    if (!accessToken) return;
    axios
      .get(`${apiBase}/users/me`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((res) => setMe(res.data))
      .catch((err) => console.error("Error fetching user data:", err));
  };

  useEffect(() => {
    fetchMe();
  }, [accessToken]);

  // 서버 데이터를 input 상태로 동기화
  useEffect(() => {
    setNickName(me?.nickname || "");
    setPhone(me?.phoneNumber || "");
    setAddr(me?.address || "");
    setAddrDetail(me?.addressDetail || "");
  }, [me]);

  // ✅ 2. 주소 검색 기능 (Daum API)
  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        // (우편번호) 주소 형식으로 저장
        setAddr(`(${data.zonecode}) ${data.address}`);
      },
    }).open();
  };

  // ✅ 3. 정보 수정(저장) 처리
  const handleUpdate = async () => {
    if (!accessToken) return alert("로그인이 만료되었습니다.");

    // 백엔드 UserUpdateRequestDto 구조와 일치해야 함
    const body = {
      nickname: nickName,
      phoneNumber: phone,
      address: addr,
      addressDetail: addrDetail,
      profileImage: me.profileImage, // 이미지 변경 로직이 없다면 기존값 유지
    };

    try {
      await axios.put(`${apiBase}/users/me`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      alert("정보가 성공적으로 수정되었습니다.");
      fetchMe(); // 수정 후 최신 데이터 다시 불러오기
    } catch (err) {
      console.error("Update Error:", err);
      alert(err.response?.data?.message || "수정 중 오류가 발생했습니다.");
    }
  };

  // ✅ 4. 취소 처리 (입력값 초기화)
  const handleCancel = () => {
    if (window.confirm("수정 중인 내용을 취소하시겠습니까?")) {
      setNickName(me?.nickname || "");
      setPhone(me?.phoneNumber || "");
      setAddr(me?.address || "");
      setAddrDetail(me?.addressDetail || "");
    }
  };

  const levelIcon = me?.level === 0 ? "🥉" : me?.level === 1 ? "🥈" : "🥇";
  const levelName = me?.level === 0 ? "피츄" : me?.level === 1 ? "피카츄" : "라이츄";

  return (
    <UserInfosWrapper>
      <UserImageDiv>
        {me?.profileImage ? (
          <img src={me.profileImage} alt="user" className="avatar" />
        ) : (
          <AccountCircleIcon className="avatar-fallback" />
        )}
      </UserImageDiv>

      <UserInfosDiv>
        <TopUserLevel>{levelIcon}</TopUserLevel>
        <TopUserNameDiv>{me?.nickname || "user"}</TopUserNameDiv>님
        <TopUserInfos>
          <UserInfoItems><UserIngoItemIcon>팔로워</UserIngoItemIcon>1</UserInfoItems>
          <UserInfoItems><UserIngoItemIcon>팔로우</UserIngoItemIcon>2</UserInfoItems>
          <UserInfoItems><UserIngoItemIcon>북마크</UserIngoItemIcon>3</UserInfoItems>
        </TopUserInfos>
      </UserInfosDiv>

      <UserLevelDiv>
        <BottomUserLevel>등급</BottomUserLevel>
        <BottomUserLevelIconDiv>
          <BottomUserLevelIcon $active={me?.level === 0}>🥉 피츄</BottomUserLevelIcon>
          <BottomUserLevelIcon $active={me?.level === 1}>🥈 피카츄</BottomUserLevelIcon>
          <BottomUserLevelIcon $active={me?.level === 2}>🥇 라이츄</BottomUserLevelIcon>
        </BottomUserLevelIconDiv>
        <UserLevelGuidDiv>
          현재 등급은 <strong>{levelIcon} {levelName}</strong> 입니다.
          <br />
          게시글 5개를 더 작성해서 <strong>{me?.level === 0 ? "🥈 피카츄" : "🥇 라이츄"}</strong> 등급을 달성해 보세요!
        </UserLevelGuidDiv>
      </UserLevelDiv>

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
          <UserNickNameInput value={nickName} onChange={(e) => setNickName(e.target.value)} />
        </UserHistoryItem>

        <UserHistoryItem>
          <UserPhoneDiv>전화번호</UserPhoneDiv>
          <UserPhoneInput value={phone} onChange={(e) => setPhone(e.target.value)} />
        </UserHistoryItem>

        {/* ✅ 주소 필드 수정 (API 연동) */}
        <UserHistoryItem className="zip-row">
          <UserAddrDiv>주소</UserAddrDiv>
          <UserZipCodeInput value={addr} readOnly placeholder="주소 검색을 클릭하세요" />
          <UserZipCodeBtn type="button" onClick={handleAddressSearch}>주소 검색</UserZipCodeBtn>
        </UserHistoryItem>

        <UserHistoryItem className="addr-row">
          <UserAddrInput 
            value={addrDetail} 
            onChange={(e) => setAddrDetail(e.target.value)} 
            placeholder="상세 주소를 입력하세요" 
          />
        </UserHistoryItem>
      </UserHIstoryDiv>

      <UserInfoBtnDiv>
        {/* ✅ 버튼에 함수 연결 */}
        <UserInfoUpdateCancleBtn type="button" onClick={handleCancel}>취소</UserInfoUpdateCancleBtn>
        <UserInfoUpdateBtn type="button" onClick={handleUpdate}>저장</UserInfoUpdateBtn>
      </UserInfoBtnDiv>
    </UserInfosWrapper>
  );
};

export default UserInfos;