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
  // ✅ 추가된 스타일
  ExpGaugeWrapper,
  ExpHeader,
  ExpBarContainer,
  ExpBarFill,
  ExpValue,
} from "../../styles/components/UserInofsStyled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import Cookies from "js-cookie";

const LEVEL_DATA = [
  { name: "먼지 먹는 하마", icon: "🦛", desc: "집안일은 모르겠고 일단 숨만 쉬는 중." },
  { name: "편의점 미슐랭", icon: "🍱", desc: "편의점 꿀조합 레시피를 섭렵한 미식가." },
  { name: "배달 앱 VVIP", icon: "🛵", desc: "집 나가는 건 귀찮고 라이더님과 베프 먹음." },
  { name: "우리 동네 반장님", icon: "🚩", desc: "배달 기사님보다 지름길을 더 잘 아는 고수." },
  { name: "빨래 건조대 수호자", icon: "🧺", desc: "마른 빨래를 일주일 동안 안 치우고 버티는 자." },
  { name: "프로 자취 연금술사", icon: "🧪", desc: "유통기한 임박한 참치캔으로 5첩 반상을 만듦." },
  { name: "당근 온도 99도", icon: "🥕", desc: "중고 거래로 가구부터 가전까지 싹 맞춘 장인." },
  { name: "지박령", icon: "👻", desc: "집주인보다 건물의 하자를 더 잘 알고 있는 고인물." },
  { name: "자취방 만렙 교수", icon: "🎓", desc: "후배 자취생들에게 모든 꿀팁을 전수하는 스승." },
  { name: "StackFlov 성주", icon: "🏰", desc: "지식이 넘쳐서 서비스 이름을 지배한 전설의 유저." },
];

const UserInfos = () => {
  const [me, setMe] = useState({});
  const [nickName, setNickName] = useState("");
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");
  const [addrDetail, setAddrDetail] = useState("");
  
  const accessToken = Cookies.get("accessToken");
  const apiBase = "https://api.stackflov.com";

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

  useEffect(() => { fetchMe(); }, [accessToken]);

  useEffect(() => {
    setNickName(me?.nickname || "");
    setPhone(me?.phoneNumber || "");
    setAddr(me?.address || "");
    setAddrDetail(me?.addressDetail || "");
  }, [me]);

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) { setAddr(`(${data.zonecode}) ${data.address}`); },
    }).open();
  };

  const handleUpdate = async () => {
    if (!accessToken) return alert("로그인이 만료되었습니다.");
    try {
      await axios.put(`${apiBase}/users/me`, {
        nickname: nickName,
        phoneNumber: phone,
        address: addr,
        addressDetail: addrDetail,
        profileImage: me.profileImage,
      }, {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      });
      alert("정보가 성공적으로 수정되었습니다.");
      fetchMe();
    } catch (err) { alert("수정 중 오류가 발생했습니다."); }
  };

  // ✅ 레벨 및 경험치 계산
  const currentLevelIdx = Math.max(0, (me?.level || 1) - 1);
  const currentLevel = LEVEL_DATA[currentLevelIdx];
  const nextLevel = LEVEL_DATA[Math.min(currentLevelIdx + 1, 9)];
  
  // 경험치 공식: 레벨 * 100이 필요 경험치라고 가정
  const requiredExp = (me?.level || 1) * 100;
  const currentExp = me?.exp || 0;
  const expPercentage = Math.min(100, (currentExp / requiredExp) * 100);

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
        <div>
          <TopUserLevel>{currentLevel.icon}</TopUserLevel>
          <TopUserNameDiv>{me?.nickname || "user"}</TopUserNameDiv>님
        </div>
        <TopUserInfos>
          <UserInfoItems><UserIngoItemIcon>팔로워</UserIngoItemIcon> 1</UserInfoItems>
          <UserInfoItems><UserIngoItemIcon>팔로우</UserIngoItemIcon> 2</UserInfoItems>
          <UserInfoItems><UserIngoItemIcon>북마크</UserIngoItemIcon> 3</UserInfoItems>
        </TopUserInfos>
      </UserInfosDiv>

      <UserLevelDiv>
        <BottomUserLevel>자취 생존 등급</BottomUserLevel>
        
        {/* ✅ 경험치 게이지 추가 */}
        <ExpGaugeWrapper>
          <ExpHeader>
            <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '700' }}>다음 진화까지</span>
            <ExpValue>{currentExp} / {requiredExp} EXP</ExpValue>
          </ExpHeader>
          <ExpBarContainer>
            <ExpBarFill $percent={expPercentage} />
          </ExpBarContainer>
        </ExpGaugeWrapper>

        <BottomUserLevelIconDiv>
          {LEVEL_DATA.map((lv, idx) => (
            <BottomUserLevelIcon key={lv.name} $active={idx === currentLevelIdx}>
              {lv.icon} {lv.name}
            </BottomUserLevelIcon>
          ))}
        </BottomUserLevelIconDiv>
        
        <UserLevelGuidDiv>
          현재 등급은 <strong>{currentLevel.icon} {currentLevel.name}</strong> 입니다.
          <br />
          <span style={{ fontSize: "14px", color: "#6b7280" }}>"{currentLevel.desc}"</span>
          <br />
          {currentLevelIdx < 9 ? (
            <div style={{ marginTop: "8px" }}>
              게시글이나 댓글을 써서 <strong>{nextLevel.name}</strong>(이)가 되어보세요!
            </div>
          ) : (
            <div style={{ marginTop: "8px", color: "#FF9F00", fontWeight: "900" }}>
              🎉 성주님, 이제 더 이상 올라갈 곳이 없습니다!
            </div>
          )}
        </UserLevelGuidDiv>
      </UserLevelDiv>

      <UserHIstoryDiv>
        {/* 상세 정보 필드 생략 (위의 코드와 동일) */}
        <UserHistoryItem>
          <UserCreatedAtDiv>가입일</UserCreatedAtDiv>
          <UserCreatedAtView>{me?.createdAt?.slice(0, 10) || "-"}</UserCreatedAtView>
        </UserHistoryItem>
        <UserHistoryItem>
          <UserNickNameDiv>닉네임</UserNickNameDiv>
          <UserNickNameInput value={nickName} onChange={(e) => setNickName(e.target.value)} />
        </UserHistoryItem>
        <UserHistoryItem className="zip-row">
          <UserAddrDiv>주소</UserAddrDiv>
          <UserZipCodeInput value={addr} readOnly placeholder="주소 검색" />
          <UserZipCodeBtn type="button" onClick={handleAddressSearch}>주소 검색</UserZipCodeBtn>
        </UserHistoryItem>
        <UserHistoryItem className="addr-row">
          <UserAddrDetialInput value={addrDetail} onChange={(e) => setAddrDetail(e.target.value)} placeholder="상세 주소" />
        </UserHistoryItem>
      </UserHIstoryDiv>

      <UserInfoBtnDiv>
        <UserInfoUpdateCancleBtn type="button" onClick={() => fetchMe()}>취소</UserInfoUpdateCancleBtn>
        <UserInfoUpdateBtn type="button" onClick={handleUpdate}>저장</UserInfoUpdateBtn>
      </UserInfoBtnDiv>
    </UserInfosWrapper>
  );
};

export default UserInfos;