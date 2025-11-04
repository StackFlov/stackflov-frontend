// src/components/NiBangNeBang/NiBangNeMangList.jsx
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  ListOuter,
  ListUL,
  CardLI,
  Card,
  CreatedAt,
  ContentCol,
  Title,
  Author,
  LikeBtn,
} from "../../styles/components/NiBangNeBangListStyled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const NiBangNeMangList = ({ postsToDisplay }) => {
  const [listItems, setListItems] = useState([]);
  const [me, setMe] = useState(null);

  const accessToken = Cookies.get("accessToken");
  const nav = useNavigate();

  useEffect(() => { setListItems(postsToDisplay || []); }, [postsToDisplay]);

  useEffect(() => {
    if (!accessToken) return;
    axios
      .get("https://api.stackflov.com/users/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((res) => setMe(res.data))
      .catch((err) => console.error("Error fetching user data:", err));
  }, [accessToken]);

  const like = (id) => {
    if (!me) return alert("로그인이 필요한 기능입니다.");
    axios
      .post(
        "https://api.stackflov.com/likes",
        { reviewId: id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then(() =>
        setListItems((prev) =>
          prev.map((it) => (it.id === id ? { ...it, isLike: true } : it))
        )
      )
      .catch((e) => console.error("좋아요 실패:", e?.response || e));
  };

  const unlike = (id) => {
    if (!me) return alert("로그인이 필요한 기능입니다.");
    axios
      .delete(`https://api.stackflov.com/likes?reviewId=${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then(() =>
        setListItems((prev) =>
          prev.map((it) => (it.id === id ? { ...it, isLike: false } : it))
        )
      )
      .catch((e) => console.error("좋아요 취소 실패:", e?.response || e));
  };

  if (!listItems.length) {
    return (
      <ListOuter>
        <div style={{ color: "#6b7280", padding: "16px" }}>
          지도에 표시된 게시글이 없거나, 선택한 조건에 해당하는 글이 없습니다.
        </div>
      </ListOuter>
    );
  }

  return (
    <ListOuter>
      <ListUL>
        {listItems.map((item) => (
          <CardLI key={item.id}>
            <Card>
              <CreatedAt>{item.createdAt?.slice(0, 10)}</CreatedAt>

              <ContentCol>
                <Title onClick={() => nav(`/nibangnebang/${item.id}`)}>
                  {item.content}
                </Title>
                <Author>{item.authorNickname}</Author>
              </ContentCol>

              {item.isLike ? (
                <LikeBtn onClick={() => unlike(item.id)} title="좋아요 취소">
                  <FavoriteIcon style={{ color: "red" }} />
                </LikeBtn>
              ) : (
                <LikeBtn onClick={() => like(item.id)} title="좋아요">
                  <FavoriteBorderIcon />
                </LikeBtn>
              )}
            </Card>
          </CardLI>
        ))}
      </ListUL>
    </ListOuter>
  );
};

export default NiBangNeMangList;
