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
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import axios from "axios";

const TraceList = ({ nowCategory, setNowCategory }) => {
  const [viewList, setViewList] = useState();
  const [list, setList] = useState([]);
  const navigator = useNavigate();

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
        return (
          <TraceListItem>
            <ItemWrapper
              onClick={() => {
                navigator(`/trace/detail/${item.id}`);
              }}
            >
              <TraceListCreatedAt>
                {item.createdAt?.slice(0, 10)}
              </TraceListCreatedAt>
              <TraceListContent>
                <TraceListTitle>{item.title}</TraceListTitle>
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
                {/* <TraceListGood>
                  <ThumbUpOffAltIcon
                    style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                  />
                  {item.good}
                </TraceListGood>
                <TraceListBookMark>
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
