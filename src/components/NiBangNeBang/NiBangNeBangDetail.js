import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  TraceListDummyData,
  UserDummyData,
  ReplyDummyData,
  MyInfoDUmmyDatas,
} from "../../utils/dummyDatas";
import {
  TraceDiv,
  TraceContentDiv,
  TraceCreatedAtDiv,
  TraceDetailBottomContent,
  TraceCategorySelectorItem,
  TraceDetailMiddleContent,
  TraceDetailTopContent,
  TraceDetailWrapper,
  TraceTitleDiv,
  UserImageDiv,
  UserInfoDiv,
  TraceCategoryDiv,
  UserNickName,
  UserFollowBtn,
  ReplyDiv,
  ReplyUserUserNameDiv,
  ReplyContentDiv,
  ReplyUserImageDiv,
  ReplyCreateAtDiv,
  ReplyCreateDiv,
  ReplyInput,
  ReplyCreateBtn,
  ReplyContentWrapper,
  ReplyHeader,
  TraceUpdateDiv,
} from "../../styles/components/TraceDetailStyled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import Cookies from "js-cookie";

const NiBangNeBangDetail = () => {
  const [traceInfo, setTraceInfo] = useState({});
  const [me, setMe] = useState({});
  const [view, setView] = useState();
  const accessToken = Cookies.get("accessToken");
  const navigator = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.stackflov.com/map/reviews`,

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        const results = res.data.content;
        const exportResult = results.filter((item) => {
          if (item.id == id) {
            return item;
          }
        });
        setTraceInfo(exportResult[0]);
        axios
          .get("https://api.stackflov.com/users/me", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          })
          .then((userData) => {
            setMe(userData.data);
          });
      });
  }, []);

  useEffect(() => {
    const test = (
      <TraceDetailWrapper>
        <TraceDetailTopContent>
          <TraceDiv>자취로그</TraceDiv>
          <TraceTitleDiv>{traceInfo.title}</TraceTitleDiv>
        </TraceDetailTopContent>
        <TraceDetailMiddleContent>
          <TraceCreatedAtDiv>
            작성일 : {traceInfo?.createdAt?.slice(0, 10)}
          </TraceCreatedAtDiv>
          {traceInfo.authorNickname === me.nickname && (
            <TraceUpdateDiv
              onClick={() => {
                navigator(`/nibangnebang/update/${id}`);
              }}
            >
              수정
            </TraceUpdateDiv>
          )}
          <TraceContentDiv>{traceInfo.content}</TraceContentDiv>
        </TraceDetailMiddleContent>
        <TraceDetailBottomContent>
          <UserImageDiv>
            {me.profileImage === null ? (
              <AccountCircleIcon style={{ fontSize: "150px" }} />
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
          <UserInfoDiv>
            <UserNickName>{me.email}</UserNickName>
            <UserFollowBtn>😽 팔로우하기</UserFollowBtn>
          </UserInfoDiv>
        </TraceDetailBottomContent>
      </TraceDetailWrapper>
    );
    setView(test);
  }, [me]);

  return <>{view}</>;
};

export default NiBangNeBangDetail;
