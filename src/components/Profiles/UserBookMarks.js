import React, { useEffect, useState } from "react";
import {
  TraceListDummyData,
  UserDummyData,
  ReplyDummyData,
  MyInfoDUmmyDatas,
  BookMarkDummyData,
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

const UserBookMarks = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [viewPosts, setViewPosts] = useState();
  const [myBookMark, setMyBookMark] = useState([]);
  useEffect(() => {
    // 내가 북마크한 postId 목록 추출
    const myBookmarkedPostIds = BookMarkDummyData.filter(
      (item) => item.userId == MyInfoDUmmyDatas.userId
    ).map((item) => item.postId);

    // 해당 postId에 해당하는 게시물 정보 추출
    const myBookmarkedPosts = TraceListDummyData.filter((post) =>
      myBookmarkedPostIds.includes(post.tracePostId.toString())
    );

    setMyPosts(myBookmarkedPosts);
  }, []);

  useEffect(() => {}, [myPosts]);

  useEffect(() => {
    const view = myPosts.map((item) => {
      return (
        <UserPostsListDiv>
          <UserPostCreateAtDiv>{item.createdAt}</UserPostCreateAtDiv>
          <UserPostTitleDiv>{item.postTitle}</UserPostTitleDiv>
          <UserPostViewsDiv>
            <RemoveRedEyeIcon />
            {item.views}
          </UserPostViewsDiv>
          <UserPostGoodsDiv>
            <ThumbUpOffAltIcon />
            {item.good}
          </UserPostGoodsDiv>
          <UserPostBookMarksDiv>
            <BookmarkBorderIcon />
            {item.bookMark}
          </UserPostBookMarksDiv>
          <UserPostDelBtn>삭제</UserPostDelBtn>
        </UserPostsListDiv>
      );
    });
    setViewPosts(view);
  }, [myPosts]);
  return (
    <UserPostsWrapper>
      <UserPostsTopDiv>
        <UserPostsTitleDiv>내 북마크</UserPostsTitleDiv>
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

export default UserBookMarks;
