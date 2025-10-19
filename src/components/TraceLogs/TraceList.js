import React, { useEffect, useState } from "react";
import { TraceListDummyData } from "../../utils/dummyDatas";
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
  const [viewList, setViewList] = useState();
  const [list, setList] = useState([]);
  const navigator = useNavigate();
  const accessToken = Cookies.get("accessToken");

  const handleTraceGood = (id) => {
    axios
      .post(
        `https://api.stackflov.com/likes`,
        { boardId: id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .catch((error) => {
        console.error("게시글 작성 실패:", error);
      });
  };

  const handleTraceUnGood = (id) => {
    if (!accessToken) {
      console.error("액세스 토큰이 없습니다. 로그인이 필요합니다.");
      return;
    }

    axios
      .delete(
        `https://api.stackflov.com/likes?boardId=${id}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("좋아요 취소 성공:", response);
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            `좋아요 취소 실패 (상태 코드: ${error.response.status}):`,
            error.response.data
          );
          if (error.response.status === 401) {
            alert("인증 정보가 유효하지 않습니다. 다시 로그인해주세요.");
          }
        } else {
          console.error("네트워크 오류 또는 서버 응답 없음:", error.message);
        }
      });
  };

  const handleTraceBookMakr = (id) => {
    axios
      .post(
        `https://api.stackflov.com/bookmarks`,
        { boardId: id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .catch((error) => {
        console.error("게시글 작성 실패:", error);
        // 실패 시 처리
      });
  };

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
    const response = axios
      .get(
        "https://api.stackflov.com/boards",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true, // ← 백엔드에서 allowCredentials(true)면 이거 필수
        }
      )
      .then((res) => {
        setList(res.data.content);
      });
  }, []);

  useEffect(() => {
    const view = list.map((item) => {
      if (nowCategory == item.category || nowCategory == 99) {
        return (
          <TraceListItem>
            <ItemWrapper>
              <TraceListCreatedAt>
                {item.createdAt?.slice(0, 10)}
              </TraceListCreatedAt>
              <TraceListContent>
                <TraceListTitle
                  onClick={() => {
                    navigator(`/trace/detail/${item.id}`);
                  }}
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
                  {item.viewCount}
                </TraceListViews>
                {item.liked == false ? (
                  <TraceListGood
                    onClick={(e) => {
                      handleTraceGood(item.id);
                    }}
                  >
                    <FavoriteBorderIcon
                      style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                    />
                    {item.good}
                  </TraceListGood>
                ) : (
                  <TraceListGood
                    onClick={(e) => {
                      handleTraceUnGood(item.id);
                    }}
                  >
                    <FavoriteIcon
                      style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                    />
                    {item.good}
                  </TraceListGood>
                )}
                <TraceListBookMark>
                  {item.bookmarked == false ? (
                    <BookmarkBorderIcon
                      onClick={() => {
                        handleTraceBookMakr(item.id);
                      }}
                      style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                    />
                  ) : (
                    <TurnedInIcon
                      onClick={() => {
                        handleTraceUnBookMakr(item.id);
                      }}
                      style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                    />
                  )}

                  {item.bookMark}
                </TraceListBookMark>
              </TraceListContent>
            </ItemWrapper>
          </TraceListItem>
        );
      }
    });
    setViewList(view);
  }, [nowCategory, list]);
  return (
    <TraceListWrapper>
      <TraceListItemWrapper>{viewList}</TraceListItemWrapper>
    </TraceListWrapper>
  );
};

export default TraceList;
