import React, { useEffect, useState } from "react";
import {
  TraceListDummyData,
  UserDummyData,
  ReplyDummyData,
  MyInfoDUmmyDatas,
} from "../../utils/dummyDatas";

import {
  UserPostBookMarksDiv,
  UserPostCreateAtDiv,
  UserPostDelBtn,
  UserPostGoodsDiv,
  UserPostsFilterSelector,
  UserPostsFilterIcon,
  UserPostsListDiv,
  UserPostsTitleDiv,
  UserPostsTopDiv,
  UserPostsWrapper,
  UserPostTitleDiv,
  UserPostViewsDiv,
} from "../../styles/components/UserPostsStyled";

import SortIcon from "@mui/icons-material/Sort";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const UserPosts = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [viewPosts, setViewPosts] = useState();
  const navigator = useNavigate();
  const location = useLocation();
  const accessToken = Cookies.get("accessToken");
  const [me, setMe] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://api.stackflov.com/boards",

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // ← 백엔드에서 allowCredentials(true)면 이거 필수
        }
      )
      .then((res) => {
        const test = res.data.content;

        const list = test.filter((item) => item.authorEmail == me.email);

        setMyPosts(list);
      });
  }, [me]);

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

  useEffect(() => {
    const view = myPosts.map((item) => {
      return (
        <UserPostsListDiv
          onClick={() => {
            navigator(`/trace/detail/${item.id}`);
          }}
        >
          <UserPostCreateAtDiv>
            {item.createdAt?.slice(0, 10)}
          </UserPostCreateAtDiv>
          <UserPostTitleDiv>{item.title}</UserPostTitleDiv>
          <UserPostViewsDiv>
            <RemoveRedEyeIcon />
            {item.viewCount}
          </UserPostViewsDiv>
          {/* <UserPostGoodsDiv>
            <ThumbUpOffAltIcon />
            {item.good}
          </UserPostGoodsDiv>
          <UserPostBookMarksDiv>
            <BookmarkBorderIcon />
            {item.bookMark}
          </UserPostBookMarksDiv> */}
          <UserPostDelBtn>삭제</UserPostDelBtn>
        </UserPostsListDiv>
      );
    });
    setViewPosts(view);
  }, [myPosts]);
  return (
    <UserPostsWrapper>
      <UserPostsTopDiv>
        <UserPostsTitleDiv>내 게시글</UserPostsTitleDiv>
        <UserPostsFilterIcon>
          <SortIcon />
        </UserPostsFilterIcon>
        <UserPostsFilterSelector>
          <option>등록일</option>
          <option>조회수</option>
          <option>좋아요</option>
          <option>북마크</option>
        </UserPostsFilterSelector>
      </UserPostsTopDiv>
      {viewPosts}
    </UserPostsWrapper>
  );
};

export default UserPosts;
