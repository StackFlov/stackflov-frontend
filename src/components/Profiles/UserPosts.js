import React, { useEffect, useState } from "react";
import {
  UserPostCreateAtDiv,
  UserPostDelBtn,
  UserPostsFilterSelector,
  UserPostsFilterIcon,
  UserPostsListDiv,
  UserPostsTitleDiv,
  UserPostsTopDiv,
  UserPostsWrapper,
  UserPostTitleDiv,
  UserPostViewsDiv,
  UserPostsToolbar,
  UserPostsListWrap,
} from "../../styles/components/UserPostsStyled";

import SortIcon from "@mui/icons-material/Sort";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const UserPosts = () => {
  const [myPosts, setMyPosts] = useState([]);
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");
  const [me, setMe] = useState({});
  const [sortKey, setSortKey] = useState("createdAt"); // 등록일 기본

  // 내 정보
  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) return;
    axios
      .get("https://api.stackflov.com/users/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => setMe(res.data))
      .catch((err) => console.error("Error fetching user data:", err));
  }, [accessToken]);

  // 내 게시글
  useEffect(() => {
    if (!me?.email) return;
    axios
      .get("https://api.stackflov.com/boards", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        const list = (res.data?.content || []).filter(
          (item) => item.authorEmail === me.email
        );
        setMyPosts(list);
      })
      .catch((e) => console.error(e));
  }, [me]);

  const sorted = [...myPosts].sort((a, b) => {
    if (sortKey === "views") return (b.viewCount || 0) - (a.viewCount || 0);
    // createdAt 기본: 최신순
    return (b.createdAt || "").localeCompare(a.createdAt || "");
  });

  return (
    <UserPostsWrapper>
      <UserPostsTopDiv>
        <UserPostsTitleDiv>내 게시글</UserPostsTitleDiv>

        <UserPostsToolbar>
          <UserPostsFilterSelector
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
            aria-label="정렬"
          >
            <option value="createdAt">등록일</option>
            <option value="views">조회수</option>
          </UserPostsFilterSelector>
          <UserPostsFilterIcon aria-hidden>
            <SortIcon fontSize="small" />
          </UserPostsFilterIcon>
        </UserPostsToolbar>
      </UserPostsTopDiv>

      <UserPostsListWrap>
        {sorted.map((item) => (
          <UserPostsListDiv
            key={item.id}
            onClick={() => navigate(`/trace/detail/${item.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate(`/trace/detail/${item.id}`)}
          >
            <UserPostCreateAtDiv>
              {item.createdAt?.slice(0, 10)}
            </UserPostCreateAtDiv>

            <UserPostTitleDiv title={item.title}>{item.title}</UserPostTitleDiv>

            <UserPostViewsDiv>
              <RemoveRedEyeIcon fontSize="small" />
              <span className="count">{item.viewCount}</span>
            </UserPostViewsDiv>

            <UserPostDelBtn
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                // TODO: 삭제 로직 연결
                // onDelete(item.id)
                // 일단 UI만
                alert("삭제 기능은 추후 연결해주세요.");
              }}
              aria-label="삭제"
              title="삭제"
            >
              <DeleteOutlineIcon fontSize="small" />
            </UserPostDelBtn>
          </UserPostsListDiv>
        ))}
      </UserPostsListWrap>
    </UserPostsWrapper>
  );
};

export default UserPosts;
