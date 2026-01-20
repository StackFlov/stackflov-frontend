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

  // 이미지 로드 에러 핸들링
  const handleImgError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  if (!listItems.length) {
    return (
      <ListOuter>
        <div style={{ color: "#6b7280", padding: "40px", textAlign: "center", border: "1px dashed #ddd", borderRadius: "16px" }}>
          조건에 해당하는 리뷰가 없습니다.
        </div>
      </ListOuter>
    );
  }

  return (
    <ListOuter>
      <ListUL>
        {listItems.map((item) => {
          // ✅ 백엔드 DTO의 imageUrls 리스트 중 첫 번째 사진을 썸네일로 사용
          const thumbnail = item.imageUrls && item.imageUrls.length > 0 ? item.imageUrls[0] : null;

          return (
            <CardLI key={item.id}>
              <Card onClick={() => nav(`/nibangnebang/${item.id}`)}>
                {/* 상단 이미지 영역 (그림자 포함) */}
                <CardImage $hasImage={!!thumbnail}>
                  {thumbnail ? (
                    <>
                      <img src={thumbnail} alt="review-thumb" onError={handleImgError} />
                      <div className="placeholder" style={{display: 'none'}}>
                        <HomeIcon className="cate-icon" />
                        <span className="cate-text">STAY LOG</span>
                      </div>
                    </>
                  ) : (
                    <div className="placeholder">
                      <HomeIcon className="cate-icon" />
                      <span className="cate-text">STAY LOG</span>
                    </div>
                  )}
                </CardImage>

                {/* 하단 회색 정보 박스 */}
                <CardInfoBox>
                  <CreatedAt>{item.createdAt?.slice(0, 10)}</CreatedAt>
                  <ContentCol>
                    {/* ✅ DTO의 title 필드 사용 */}
                    <Title title={item.title}>{item.title || item.content}</Title>
                  </ContentCol>

                  <MetaRow>
                    <Author>👤 {item.authorNickname}</Author>
                    <LikeBtn 
                      $active={item.isLike} 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(item.id, item.isLike);
                      }}
                    >
                      {item.isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      <span>{item.likeCount || 0}</span>
                    </LikeBtn>
                  </MetaRow>
                </CardInfoBox>
              </Card>
            </CardLI>
          );
        })}
      </ListUL>
    </ListOuter>
  );
};

export default NiBangNeMangList;