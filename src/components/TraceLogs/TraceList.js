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
        `https://api.stackflov.com/likes/${id}`,
        { boaddId: id },
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

  const handleTraceUnGood = (id) => {
    axios
      .delete(
        `https://api.stackflov.com/likes/${id}`,
        { boaddId: id },
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

  useEffect(() => {
    const response = axios
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
        setList(res.data.content);
      });
  }, []);

  useEffect(() => {
    const view = list.map((item) => {
      if (nowCategory == item.category || nowCategory == 99) {
        console.log(item);
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

                {/* <TraceListBookMark>
                  <BookmarkBorderIcon
                    style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                  />
                  {item.bookMark}
                </TraceListBookMark> */}
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
