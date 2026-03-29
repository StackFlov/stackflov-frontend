import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import Cookies from "js-cookie";
import SortIcon from "@mui/icons-material/Sort";
import TurnedInIcon from "@mui/icons-material/TurnedIn";

// 스타일 컴포넌트들
import {
  UserPostsListDiv,
  UserPostTitleDiv,
  UserPostsTopDiv,
  UserPostsWrapper,
  UserPostCreateAtDiv,
  UserPostBookMarksDiv,
  UserPostsFilterSelector,
  UserPostsFilterIcon,
  UserPostsTitleDiv as TitleHeader, // 이름 중복 방지
} from "../../styles/components/UserPostsStyled";

const UserBookMarks = () => {
  const [myBookMark, setMyBookMark] = useState([]);
  const accessToken = Cookies.get("accessToken");
  const navigate = useNavigate();

  // 북마크 취소(삭제) 로직
  const handleTraceUnBookMakr = (id) => {
    axios
      .delete(`https://api.stackflov.com/bookmarks`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
        data: { boardId: id },
      })
      .then(() => {
        alert("북마크가 삭제되었습니다.");
        // UI에서 즉시 제거 (필터링)
        setMyBookMark((prev) => prev.filter((item) => item.boardId !== id));
      })
      .catch((error) => console.error("삭제 실패:", error));
  };

  // 데이터 가져오기
  useEffect(() => {
    axios
      .get("https://api.stackflov.com/bookmarks/my", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => setMyBookMark(res.data))
      .catch((err) => console.error("데이터 로딩 에러:", err));
  }, [accessToken]);

  return (
    <UserPostsWrapper>
      <UserPostsTopDiv>
        <TitleHeader>내 북마크</TitleHeader>
        <UserPostsFilterIcon><SortIcon /></UserPostsFilterIcon>
        <UserPostsFilterSelector>
          <option>등록일</option>
          <option>조회수</option>
        </UserPostsFilterSelector>
      </UserPostsTopDiv>

      {/* 별도의 state 없이 여기서 바로 map을 돌립니다. 훨씬 직관적이죠? */}
      {myBookMark.map((item) => (
        <UserPostsListDiv 
          key={item.boardId} 
          onClick={() => navigate(`/trace/detail/${item.boardId}`)} // 상세 페이지 이동
          style={{ cursor: "pointer" }}
        >
          <UserPostCreateAtDiv>
            {item.createdAt?.slice(0, 10)}
          </UserPostCreateAtDiv>
          
          <UserPostTitleDiv>{item.boardTitle}</UserPostTitleDiv>

          <UserPostBookMarksDiv
            onClick={(e) => {
              e.stopPropagation(); // ⭐ 클릭 이벤트 전파 방지 (상세 이동 막기)
              handleTraceUnBookMakr(item.boardId);
            }}
          >
            <TurnedInIcon style={{ fontSize: "40px", color: "#4338ca" }} />
          </UserPostBookMarksDiv>
        </UserPostsListDiv>
      ))}
    </UserPostsWrapper>
  );
};

export default UserBookMarks;