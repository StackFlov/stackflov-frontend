/**
 * 지원님 코드
import React from "react";
import { UserInfosWrapper } from "../../styles/components/UserInofsStyled";

const UserInfos = () => {
  return <UserInfosWrapper>이름 : 김철수</UserInfosWrapper>;
};

export default UserInfos;
*/

// src/components/Profiles/UserInfos.js
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { USER_DETAIL_REQUEST } from "../../constans/actionTypes";
import { UserInfosWrapper } from "../../styles/components/UserInofsStyled";

const UserInfos = () => {
  const dispatch = useDispatch();
  const { me, userDetailLoading } = useSelector((s) => s.user);

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      dispatch({ type: USER_DETAIL_REQUEST, data: token });
    }
  }, [dispatch]);

  if (userDetailLoading) return <div>불러오는 중...</div>;

  return (
    <UserInfosWrapper>
      이름 : {me?.name || me?.nickname || me?.username || "알 수 없음"}
    </UserInfosWrapper>
  );
};

export default UserInfos;
