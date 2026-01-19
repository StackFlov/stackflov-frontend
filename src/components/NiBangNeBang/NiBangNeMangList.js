import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import {
  ListOuter,
  ListUL,
  CardLI,
  Card,
  CardImage,
  CardInfoBox,
  CreatedAt,
  ContentCol,
  Title,
  Author,
  MetaRow,
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

  const toggleLike = (id, isCurrentlyLiked) => {
    if (!me) return alert("로그인이 필요한 기능입니다.");
    
    const method = isCurrentlyLiked ? "delete" : "post";
    const url = isCurrentlyLiked 
      ? `https://api.stackflov.com/likes?reviewId=${id}` 
      : `https://api.stackflov.com/likes`;

    axios({
      method,
      url,
      data: isCurrentlyLiked ? null : { reviewId: id },
      headers: { Authorization: `Bearer ${accessToken}` },
      withCredentials: true,
    })
    .then(() => {
      setListItems((prev) =>
        prev.map((it) => (it.id === id ? { ...it, isLike: !isCurrentlyLiked } : it))
      );
    })
    .catch((e) => console.error("좋아요 처리 실패:", e));
  };

  // ✅ 카테고리별 아이콘 렌더링
  const renderCategoryIcon = (category) => {
    switch (Number(category)) {
      case 1: return <HomeIcon className="cate-icon" />;
      case 2: return <LightbulbIcon className="cate-icon" />;
      case 3: return <RestaurantIcon className="cate-icon" />;
      default: return <HomeIcon className="cate-icon" />;
    }
  };

  if (!listItems.length) {
    return (
      <ListOuter>
        <div style={{ color: "#6b7280", padding: "40px", textAlign: "center", border: "1px dashed #ddd", borderRadius: "16px" }}>
          조건에 해당하는 게시글이 없습니다.
        </div>
      </ListOuter>
    );
  }

  return (
    <ListOuter>
      <ListUL>
        {listItems.map((item) => (
          <CardLI key={item.id}>
            <Card onClick={() => nav(`/nibangnebang/${item.id}`)}>
              {/* 상단 이미지 영역 */}
              <CardImage $hasImage={!!item.thumbnailUrl}>
                {item.thumbnailUrl ? (
                  <img src={item.thumbnailUrl} alt="thumbnail" />
                ) : (
                  <div className="placeholder">
                    {renderCategoryIcon(item.category)}
                    <span className="cate-text">NI BANG NE BANG</span>
                  </div>
                )}
              </CardImage>

              {/* 하단 회색 정보 박스 */}
              <CardInfoBox>
                <CreatedAt>{item.createdAt?.slice(0, 10)}</CreatedAt>

                <ContentCol>
                  <Title>{item.content}</Title>
                </ContentCol>

                <MetaRow>
                  <Author>👤 {item.authorNickname}</Author>
                  <LikeBtn 
                    $active={item.isLike} 
                    onClick={(e) => {
                      e.stopPropagation(); // 카드 클릭 이동 방지
                      toggleLike(item.id, item.isLike);
                    }}
                  >
                    {item.isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    <span>좋아요</span>
                  </LikeBtn>
                </MetaRow>
              </CardInfoBox>
            </Card>
          </CardLI>
        ))}
      </ListUL>
    </ListOuter>
  );
};

export default NiBangNeMangList;