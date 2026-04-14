import React, { useEffect, useState, useRef } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
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

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const NiBangNeMangList = ({ postsToDisplay }) => {
  const [listItems, setListItems] = useState([]);
  const [me, setMe] = useState(null);
  const wrapperRef = useRef(null);

  const accessToken = Cookies.get("accessToken");
  const nav = useNavigate();

  useEffect(() => { 
    setListItems(postsToDisplay || []); }, [postsToDisplay]
  );

  // ✅ 등장 애니메이션(Intersection Observer) 로직
  useEffect(() => {
    if (!wrapperRef.current || listItems.length === 0) return;

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
      { threshold: 0.1 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [listItems]);

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

  const toggleBookmark = (id, isCurrentlyBookmarked) => {
  if (!me) return alert("로그인이 필요한 기능입니다.");
  
  const method = isCurrentlyBookmarked ? "delete" : "post";
  const url = `https://api.stackflov.com/bookmarks`;

  axios({
    method,
    url,
    // 백엔드 BookmarkRequestDto 규격에 맞춰 reviewId 전달
    data: { reviewId: id }, 
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  })
  .then(() => {
    // 리스트 상태 업데이트
    setListItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, bookmarked: !isCurrentlyBookmarked } : it))
    );
  })
  .catch((e) => {
    console.error("북마크 처리 실패:", e);
    alert("처리 중 오류가 발생했습니다.");
  });
};

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

  const handleImgError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  if (!listItems.length) {
    return (
      <ListOuter>
        <div style={{ color: "#adb5bd", padding: "80px", textAlign: "center", background: "#f8f9fa", border: "2px dashed #e9ecef", borderRadius: "20px" }}>
          조건에 해당하는 리뷰가 없습니다.
        </div>
      </ListOuter>
    );
  }

  return (
    <ListOuter>
      <ListUL ref={wrapperRef}>
        {listItems.map((item, idx) => {
          const thumbnail = item.imageUrls && item.imageUrls.length > 0 ? item.imageUrls[0] : null;

          return (
            <CardLI key={item.id}>
              <Card 
                data-reveal="true"
                style={{ "--reveal-delay": `${Math.min(idx, 8) * 70}ms` }}
                onClick={() => nav(`/nibangnebang/${item.id}`)}
              >
                <CardImage $hasImage={!!thumbnail}>
                  {thumbnail ? (
                    <>
                      <img src={thumbnail} alt="review-thumb" onError={handleImgError} />
                      <div className="placeholder" style={{display: 'none'}}>
                        <HomeIcon className="cate-icon" />
                        <span className="logo-text">STAY LOG</span>
                      </div>
                    </>
                  ) : (
                    <div className="placeholder">
                      <HomeIcon className="cate-icon" />
                      <span className="logo-text">STAY LOG</span>
                    </div>
                  )}
                </CardImage>

                <CardInfoBox>
                  <CreatedAt>{item.createdAt?.slice(0, 10)}</CreatedAt>
                  <ContentCol>
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

                    <div 
  style={{ 
    display: 'flex', 
    alignItems: 'center', 
    cursor: 'pointer',
    // 백엔드 JSON 필드명이 "bookmarked"이므로 이에 맞춰 색상 결정
    color: item.bookmarked ? '#ca8a04' : '#adb5bd' 
  }}
  onClick={(e) => {
    e.stopPropagation(); // 카드 클릭 이벤트와 겹치지 않게 방지
    toggleBookmark(item.id, item.bookmarked);
  }}
>
  {/* 상태에 따라 꽉 찬 아이콘 / 빈 아이콘 출력 */}
  {item.bookmarked ? (
    <BookmarkIcon style={{ fontSize: '18px' }} />
  ) : (
    <BookmarkBorderIcon style={{ fontSize: '18px' }} />
  )}
</div>
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