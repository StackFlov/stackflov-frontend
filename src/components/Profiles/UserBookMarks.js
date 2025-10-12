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
import Cookies from "js-cookie";
import SortIcon from "@mui/icons-material/Sort";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import axios from "axios";

const UserBookMarks = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [viewPosts, setViewPosts] = useState();
  const [myBookMark, setMyBookMark] = useState([]);
  const accessToken = Cookies.get("accessToken");

  const handleTraceUnBookMakr = (id) => {
    axios
      .delete(
        `https://api.stackflov.com/bookmarks`, // 실제 API 엔드포인트 URL
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
          // DELETE 요청 시 body 데이터는 'data' 키 안에 객체로 전달합니다.
          data: {
            boardId: id,
          },
        }
      )
      .then((response) => {
        console.log("북마크 삭제 성공:", response.data);
        // 성공 시 UI 업데이트 등의 후속 처리를 여기에 작성합니다.
        alert("북마크가 삭제되었습니다.");
      })
      .catch((error) => {
        console.error("북마크 삭제 실패:", error);
        // 실패 시 사용자에게 알림을 표시하는 등의 처리를 할 수 있습니다.
        if (error.response) {
          // 서버가 응답했지만 상태 코드가 2xx 범위가 아닐 때
          alert(
            `오류: ${
              error.response.data.message || "북마크 삭제에 실패했습니다."
            }`
          );
        } else {
          // 요청 설정 중에 에러가 발생했거나 네트워크 에러일 때
          alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
        }
      });
  };

  useEffect(() => {
    axios
      .get("https://api.stackflov.com/bookmarks/my", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true, // ← 백엔드에서 allowCredentials(true)면 이거 필수
      })
      .then((res) => {
        const test = res.data;
        setMyBookMark(test);
      });
  }, []);

  useEffect(() => {
    const view = myBookMark.map((item) => {
      return (
        <UserPostsListDiv>
          <UserPostCreateAtDiv>
            {item.createdAt.slice(0, 10)}
          </UserPostCreateAtDiv>
          <UserPostTitleDiv>{item.boardTitle}</UserPostTitleDiv>
          {/* <UserPostViewsDiv>
            <RemoveRedEyeIcon />
            {item.views}
          </UserPostViewsDiv>
          <UserPostGoodsDiv>
            <ThumbUpOffAltIcon />
            {item.good}
          </UserPostGoodsDiv> */}
          <UserPostBookMarksDiv
            onClick={() => {
              handleTraceUnBookMakr(item.boardId);
            }}
          >
            <TurnedInIcon style={{ fontSize: "40px" }} />
            {item.bookMark}
          </UserPostBookMarksDiv>
          {/* <UserPostDelBtn>삭제</UserPostDelBtn> */}
        </UserPostsListDiv>
      );
    });
    setViewPosts(view);
  }, [myBookMark]);
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
