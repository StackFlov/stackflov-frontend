import React, { useEffect, useState, useMemo } from "react";
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

const TraceList = ({ nowCategory, setNowCategory }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState();
  const navigator = useNavigate();

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
      setLoading(false);
      setList([]);
      return;
    }

    setLoading(true);
    axios
      .get("https://api.stackflov.com/boards", {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((res) => {
        setList(Array.isArray(res.data.content) ? res.data.content : []);
      })
      .catch((err) => {
        console.error("게시글 목록 로딩 실패:", err);
        setList([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleLikeToggle = (id, isLiked) => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) return alert("로그인이 필요합니다.");

    const method = isLiked ? "delete" : "post";
    const url = isLiked
      ? `https://api.stackflov.com/likes?boardId=${id}`
      : `https://api.stackflov.com/likes`;

    axios({
      method: method,
      url: url,
      data: isLiked ? null : { boardId: id },
      headers: { Authorization: `Bearer ${accessToken}` },
      withCredentials: true,
    })
      .then(() => {
        setList((prevList) =>
          prevList.map((item) =>
            item.id === id ? { ...item, liked: !isLiked } : item
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
      method: method,
      url: url,
      data: { boardId: id },
      headers: { Authorization: `Bearer ${accessToken}` },
      withCredentials: true,
    })
      .then(() => {
        setList((prevList) =>
          prevList.map((item) =>
            item.id === id ? { ...item, bookmarked: !isBookmarked } : item
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

  return (
    <TraceListWrapper>
      <TraceListItemWrapper>
        {loading ? (
          <p>목록을 불러오는 중입니다...</p>
        ) : filteredList.length === 0 ? (
          <p>표시할 게시글이 없습니다.</p>
        ) : (
          filteredList.map((item) => (
            <TraceListItem key={item.id}>
              <ItemWrapper>
                <TraceListCreatedAt>
                  {item.createdAt?.slice(0, 10)}
                </TraceListCreatedAt>
                <TraceListContent>
                  <TraceListTitle
                    onClick={() => navigator(`/trace/detail/${item.id}`)}
                  >
                    {item.title}
                  </TraceListTitle>

                  <TraceListUser>
                    <PersonOutlineIcon
                      style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                    />
                    {item.authorNickname}
                  </TraceListUser>

                  <TraceListViews>
                    <RemoveRedEyeIcon
                      style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                    />
                    {typeof item.viewCount === "number" && item.viewCount}
                  </TraceListViews>

                  <TraceListGood
                    onClick={() => handleLikeToggle(item.id, item.liked)}
                  >
                    {item.liked ? (
                      <FavoriteIcon
                        style={{
                          color: "red",
                          fontSize: "40px",
                          padding: "0 5px 0 0",
                        }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                      />
                    )}
                    {typeof item.good === "number" &&
                      item.good > 0 &&
                      item.good}
                  </TraceListGood>

                  <TraceListBookMark
                    onClick={() =>
                      handleBookmarkToggle(item.id, item.bookmarked)
                    }
                  >
                    {item.bookmarked ? (
                      <TurnedInIcon
                        style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                      />
                    ) : (
                      <BookmarkBorderIcon
                        style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                      />
                    )}
                    {typeof item.bookMark === "number" &&
                      item.bookMark > 0 &&
                      item.bookMark}
                  </TraceListBookMark>
                </TraceListContent>
              </ItemWrapper>
            </TraceListItem>
          ))
        )}
      </TraceListItemWrapper>
    </TraceListWrapper>
  );
};

export default TraceList;
