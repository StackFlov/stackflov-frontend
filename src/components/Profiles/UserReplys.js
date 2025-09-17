import React, { useEffect, useState } from "react";
import {
  TraceListDummyData,
  UserDummyData,
  ReplyDummyData,
  MyInfoDUmmyDatas,
} from "../../utils/dummyDatas";

import {
  UserReplysListDiv,
  UserReplysFilterSelector,
  UserReplysFilterIcon,
  UserReplysTitleDiv,
  UserReplysTopDiv,
  UserReplysWrapper,
  UserReplysCreateAtDiv,
  UserReplysDelBtn,
  UserReplyTitleDiv,
  UserReplyContentDiv,
  UserReplysPostTitleDiv,
} from "../../styles/components/UserReplysStyled";

import SortIcon from "@mui/icons-material/Sort";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const UserReplys = () => {
  const [myReplts, setMyReplys] = useState([]);
  const [viewPosts, setViewPosts] = useState();
  const navigator = useNavigate();

  const location = useLocation();
  const accessToken = Cookies.get("accessToken");
  const [me, setMe] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get(
        "http://3.106.223.65/boards?page=0&size=10",

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // ← 백엔드에서 allowCredentials(true)면 이거 필수
        }
      )
      .then((res) => {
        const test = res.data.content;

        const list = test.filter(
          (item) => item.userId == MyInfoDUmmyDatas.userId
        );
      });
  }, []);

  useEffect(() => {
    const token = Cookies.get("accessToken");

    if (token) {
      axios
        .get("http://3.106.223.65/users/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        })
        .then((res) => {
          console.logo(res.data);
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
          setIsLoggedIn(false);
        });

      axios
        .get(`http://3.106.223.65/comments/board/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        })
        .then((res) => {
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
    const myReplys = ReplyDummyData.filter(
      (item) => item.userId == MyInfoDUmmyDatas.userId
    );
    setMyReplys(myReplys);
  }, []);

  useEffect(() => {
    const view = myReplts.map((item) => {
      const list = TraceListDummyData.filter(
        (post) => item.postId == post.tracePostId
      );

      return (
        <UserReplysListDiv
          onClick={() => {
            navigator(`/trace/detail/${list[0].tracePostId}`);
          }}
        >
          <UserReplysCreateAtDiv>
            {item.createdAt.slice(0, 10)}
          </UserReplysCreateAtDiv>
          <UserReplysPostTitleDiv>{list[0].postTitle}</UserReplysPostTitleDiv>
          <UserReplyContentDiv>{item.replyContent}</UserReplyContentDiv>
          <UserReplysDelBtn>삭제</UserReplysDelBtn>
        </UserReplysListDiv>
      );
    });
    setViewPosts(view);
  }, [myReplts]);
  return (
    <UserReplysWrapper>
      <UserReplysTopDiv>
        <UserReplyTitleDiv>내 댓글</UserReplyTitleDiv>
        <UserReplysFilterIcon>
          <SortIcon />
        </UserReplysFilterIcon>
        <UserReplysFilterSelector>
          <option>등록일</option>
          <option>조회수</option>
          <option>좋아요</option>
          <option>북마크</option>
        </UserReplysFilterSelector>
      </UserReplysTopDiv>
      {viewPosts}
    </UserReplysWrapper>
  );
};

export default UserReplys;
