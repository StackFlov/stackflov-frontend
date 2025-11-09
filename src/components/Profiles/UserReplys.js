import React, { useEffect, useState } from "react";
import {
  UserReplysListDiv,
  UserReplysFilterSelector,
  UserReplysFilterIcon,
  UserReplysTopDiv,
  UserReplysWrapper,
  UserReplysCreateAtDiv,
  UserReplysDelBtn,
  UserReplyTitleDiv,
  UserReplyContentDiv,
  UserReplysToolbar,
  UserReplysListWrap,
} from "../../styles/components/UserReplysStyled";

import SortIcon from "@mui/icons-material/Sort";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const UserReplys = () => {
  const [replies, setReplies] = useState([]);
  const [sortKey, setSortKey] = useState("createdAt"); // 등록일 기본 (최신순)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    // 내 댓글 목록
    axios
      .get(`https://api.stackflov.com/my/comments/board`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setIsLoggedIn(true);
        setReplies(res?.data?.content ?? []);
      })
      .catch((err) => {
        console.error("Error fetching my replies:", err);
        setIsLoggedIn(false);
      });
  }, [accessToken]);

  const sorted = [...replies].sort((a, b) => {
    // createdAt 최신순
    return (b.createdAt || "").localeCompare(a.createdAt || "");
  });

  const handleReplyDel = (id) => {
    const token = Cookies.get("accessToken");
    if (!token) return;

    axios
      .delete(`https://api.stackflov.com/comments/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then(() => {
        setReplies((prev) => prev.filter((r) => r.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting reply:", err);
      });
  };

  return (
    <UserReplysWrapper>
      <UserReplysTopDiv>
        <UserReplyTitleDiv>내 댓글</UserReplyTitleDiv>

        <UserReplysToolbar>
          <UserReplysFilterSelector
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
            aria-label="정렬"
          >
            <option value="createdAt">등록일</option>
          </UserReplysFilterSelector>
          <UserReplysFilterIcon aria-hidden>
            <SortIcon fontSize="small" />
          </UserReplysFilterIcon>
        </UserReplysToolbar>
      </UserReplysTopDiv>

      <UserReplysListWrap>
        {sorted.map((item) => (
          <UserReplysListDiv
            key={item.id}
            onClick={() => {
              // 댓글이 달린 게시글 id가 있다면 상세로 이동
              if (item.boardId) navigate(`/trace/detail/${item.boardId}`);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" && item.boardId) {
                navigate(`/trace/detail/${item.boardId}`);
              }
            }}
          >
            <UserReplysCreateAtDiv>
              {item.createdAt?.slice(0, 10)}
            </UserReplysCreateAtDiv>

            <UserReplyContentDiv title={item.content}>
              {item.content}
            </UserReplyContentDiv>

            <UserReplysDelBtn
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleReplyDel(item.id);
              }}
              aria-label="삭제"
              title="삭제"
            >
              삭제
            </UserReplysDelBtn>
          </UserReplysListDiv>
        ))}
      </UserReplysListWrap>
    </UserReplysWrapper>
  );
};

export default UserReplys;
