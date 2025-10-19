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
  const [list, setList] = useState([]); // API로 받은 원본 데이터 리스트
  const navigator = useNavigate();
  const accessToken = Cookies.get("accessToken");

  // --- 데이터 로딩 ---
  useEffect(() => {
    // accessToken이 없으면 API를 호출하지 않음
    if (!accessToken) return;

    axios
      .get("https://api.stackflov.com/boards", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        // 데이터가 배열이 아니거나 없으면 빈 배열로 초기화
        setList(Array.isArray(res.data.content) ? res.data.content : []);
      })
      .catch((err) => {
        console.error("게시글 목록 로딩 실패:", err);
      });
  }, [accessToken]); // accessToken이 변경될 때마다 다시 로드

  const handleLikeToggle = (id, isLiked) => {
    const method = isLiked ? "delete" : "post";
    const url = isLiked
      ? `https://api.stackflov.com/likes?boardId=${id}`
      : `https://api.stackflov.com/likes`;

    axios({
      method: method,
      url: url,
      data: isLiked ? null : { boardId: id }, // POST일 때만 data 포함
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    })
      .then(() => {
        // API 성공 시, UI 상태 즉시 업데이트
        setList((prevList) =>
          prevList.map((item) =>
            item.id === id ? { ...item, liked: !isLiked } : item
          )
        );
      })
      .catch((error) => {
        console.error("좋아요 처리 실패:", error.response || error);
      });
  };

  // --- 북마크 토글 핸들러 ---
  const handleBookmarkToggle = (id, isBookmarked) => {
    console.log(isBookmarked);
    const method = isBookmarked ? "delete" : "post";
    const url = isBookmarked
      ? `https://api.stackflov.com/bookmarks`
      : `https://api.stackflov.com/bookmarks`;

    axios({
      method: method,
      url: url,
      data: isBookmarked == false ? null : { boardId: id }, // POST일 때만 data 포함
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    })
      .then(() => {
        // API 성공 시, UI 상태 즉시 업데이트
        setList((prevList) =>
          prevList.map((item) =>
            item.id === id ? { ...item, bookmarked: !isBookmarked } : item
          )
        );
      })
      .catch((error) => {
        console.error("북마크 처리 실패:", error.response || error);
      });
  };

  // --- 렌더링할 목록 필터링 ---
  // useMemo를 사용해 nowCategory나 list가 변경될 때만 재계산
  const filteredList = useMemo(() => {
    if (nowCategory === 99) {
      return list; // '전체' 카테고리면 모든 목록 반환
    }
    return list.filter((item) => item.category === nowCategory);
  }, [nowCategory, list]);

  return (
    <TraceListWrapper>
      <TraceListItemWrapper>
        {filteredList.map((item) => (
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
                  {/* 숫자 카운트가 유효할 때만 표시 */}
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
                  {/* 숫자 카운트 표시 */}
                  {typeof item.good === "number" && item.good > 0 && item.good}
                </TraceListGood>

                {/* === 북마크 버튼 === */}
                <TraceListBookMark
                  onClick={() => handleBookmarkToggle(item.id, item.bookmarked)}
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
        ))}
      </TraceListItemWrapper>
    </TraceListWrapper>
  );
};

export default TraceList;
