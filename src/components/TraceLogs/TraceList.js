// src/components/trace/TraceList.jsx
import React, { useEffect, useState, useMemo, useRef } from "react";
import {
  ItemWrapper,
  TraceListContent,
  TraceListItem,
  TraceListItemWrapper,
  TraceListCreatedAt,
  TraceListWrapper,
  TraceListTitle,
  TraceListViews,
  TraceListGood,
  TraceListBookMark,
  TraceListUser,
  MetaRow,
  RightActions,
  IconButton,
  EmptyState,
  LoadingSkeleton,
} from "../../styles/components/TraceListStyled";
import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import axios from "axios";
import Cookies from "js-cookie";

const TraceList = ({ nowCategory }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigate();
  const wrapperRef = useRef(null);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    setLoading(true);

    axios
      .get("https://api.stackflov.com/boards", {
        headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
        withCredentials: true,
      })
      .then((res) => {
        setList(Array.isArray(res.data?.content) ? res.data.content : []);
      })
      .catch((err) => {
        console.error("게시글 목록 로딩 실패:", err);
        setList([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // 화면에 들어올 때 카드 하나씩 자연스러운 리빌
  useEffect(() => {
    if (!wrapperRef.current) return;
    const items = wrapperRef.current.querySelectorAll("[data-reveal='true']");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-show", "true");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [loading, nowCategory]);

  const handleLikeToggle = (id, isLiked) => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) return alert("로그인이 필요합니다.");

    const method = isLiked ? "delete" : "post";
    const url = isLiked
      ? `https://api.stackflov.com/likes?boardId=${id}`
      : `https://api.stackflov.com/likes`;

    axios({
      method,
      url,
      data: isLiked ? null : { boardId: id },
      headers: { Authorization: `Bearer ${accessToken}` },
      withCredentials: true,
    })
      .then(() => {
        setList((prev) =>
          prev.map((it) =>
            it.id === id
              ? {
                  ...it,
                  liked: !isLiked,
                  good:
                    typeof it.good === "number"
                      ? it.good + (isLiked ? -1 : 1)
                      : it.good,
                }
              : it
          )
        );
      })
      .catch((error) =>
        console.error("좋아요 처리 실패:", error.response || error)
      );
  };

  const handleBookmarkToggle = (id, isBookmarked) => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) return alert("로그인이 필요합니다.");

    const method = isBookmarked ? "delete" : "post";
    const url = `https://api.stackflov.com/bookmarks`;

    axios({
      method,
      url,
      data: { boardId: id },
      headers: { Authorization: `Bearer ${accessToken}` },
      withCredentials: true,
    })
      .then(() => {
        setList((prev) =>
          prev.map((it) =>
            it.id === id ? { ...it, bookmarked: !isBookmarked } : it
          )
        );
      })
      .catch((error) =>
        console.error("북마크 처리 실패:", error.response || error)
      );
  };

  const filteredList = useMemo(() => {
    if (nowCategory === 99) return list;
    return list.filter((item) => item.category === nowCategory);
  }, [nowCategory, list]);

  if (loading) {
    return (
      <TraceListWrapper>
        <TraceListItemWrapper ref={wrapperRef}>
          {Array.from({ length: 6 }).map((_, i) => (
            <LoadingSkeleton key={i} />
          ))}
        </TraceListItemWrapper>
      </TraceListWrapper>
    );
  }

  if (!filteredList.length) {
    return (
      <TraceListWrapper>
        <EmptyState>
          아직 표시할 게시글이 없어요.
          <span>첫 글을 작성해보세요!</span>
        </EmptyState>
      </TraceListWrapper>
    );
  }

  return (
    <TraceListWrapper>
      <TraceListItemWrapper ref={wrapperRef}>
        {filteredList.map((item, idx) => (
          <TraceListItem key={item.id}>
            <ItemWrapper
              data-reveal="true"
              style={{ "--reveal-delay": `${Math.min(idx, 8) * 60}ms` }}
            >
              <TraceListContent>
                <TraceListTitle
                  role="button"
                  tabIndex={0}
                  onClick={() => navigator(`/trace/detail/${item.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") navigator(`/trace/detail/${item.id}`);
                  }}
                  title={item.title}
                >
                  {item.title}
                </TraceListTitle>

                <MetaRow>
                  <TraceListCreatedAt>
                    {item.createdAt?.slice(0, 10)}
                  </TraceListCreatedAt>

                  <TraceListUser title={item.authorNickname}>
                    <PersonOutlineIcon className="meta-icon" />
                    <span className="meta-text">{item.authorNickname}</span>
                  </TraceListUser>

                  <TraceListViews title={`조회수 ${item.viewCount ?? 0}`}>
                    <RemoveRedEyeIcon className="meta-icon" />
                    <span className="meta-text">
                      {typeof item.viewCount === "number" ? item.viewCount : 0}
                    </span>
                  </TraceListViews>
                </MetaRow>
              </TraceListContent>

              <RightActions>
                <IconButton
                  aria-label={item.liked ? "좋아요 취소" : "좋아요"}
                  $active={!!item.liked}
                  onClick={() => handleLikeToggle(item.id, item.liked)}
                >
                  {item.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  <span className="count">
                    {typeof item.good === "number" && item.good > 0
                      ? item.good
                      : ""}
                  </span>
                </IconButton>

                <IconButton
                  aria-label={item.bookmarked ? "북마크 취소" : "북마크"}
                  $bookmark
                  $active={!!item.bookmarked}
                  onClick={() =>
                    handleBookmarkToggle(item.id, item.bookmarked)
                  }
                >
                  {item.bookmarked ? <TurnedInIcon /> : <BookmarkBorderIcon />}
                  <span className="count">
                    {typeof item.bookMark === "number" && item.bookMark > 0
                      ? item.bookMark
                      : ""}
                  </span>
                </IconButton>
              </RightActions>
            </ItemWrapper>
          </TraceListItem>
        ))}
      </TraceListItemWrapper>
    </TraceListWrapper>
  );
};

export default TraceList;
