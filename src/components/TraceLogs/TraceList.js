import React, { useEffect, useState, useMemo, useRef } from "react";
import {
  TraceListWrapper,
  TraceListItemWrapper,
  TraceListItem,
  ItemWrapper,
  CardImage,
  CardInfoBox,
  TraceListTitle,
  MetaRow,
  StatsRow,
  StatItem,
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
        console.error("게시글 로딩 실패:", err);
        setList([]);
      })
      .finally(() => setLoading(false));
  }, []);

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
      { threshold: 0.1 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [loading, nowCategory]);

  const filteredList = useMemo(() => {
    if (nowCategory === 99) return list;
    return list.filter((item) => item.category === nowCategory);
  }, [nowCategory, list]);

  if (loading) {
    return (
      <TraceListWrapper>
        <TraceListItemWrapper>
          {Array.from({ length: 6 }).map((_, i) => <LoadingSkeleton key={i} />)}
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
              style={{ "--reveal-delay": `${Math.min(idx, 8) * 70}ms` }}
              onClick={() => navigator(`/trace/detail/${item.id}`)}
            >
              <CardImage>
                {/* ✅ 백엔드 필드명이 thumbnailUrl이 맞는지 확인하세요 */}
                {item.thumbnailUrl ? (
                  <img src={item.thumbnailUrl} alt={item.title} />
                ) : (
                  <div className="no-img-placeholder">🖼️ No Image</div>
                )}
              </CardImage>

              <CardInfoBox>
                <TraceListTitle>{item.title}</TraceListTitle>
                
                <MetaRow>
                  <div className="author">
                    <PersonOutlineIcon style={{ fontSize: "18px" }} />
                    {item.authorNickname}
                  </div>
                  <span>{item.createdAt?.slice(0, 10)}</span>
                </MetaRow>

                <StatsRow>
                  <StatItem title="조회수">
                    <RemoveRedEyeIcon /> {item.viewCount ?? 0}
                  </StatItem>
                  <StatItem title="좋아요" $active={!!item.liked}>
                    {item.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />} {item.good ?? 0}
                  </StatItem>
                  <StatItem title="북마크" $active={!!item.bookmarked} $isBookmark={true}>
                    {item.bookmarked ? <TurnedInIcon /> : <BookmarkBorderIcon />} {item.bookMark ?? 0}
                  </StatItem>
                </StatsRow>
              </CardInfoBox>
            </ItemWrapper>
          </TraceListItem>
        ))}
      </TraceListItemWrapper>
    </TraceListWrapper>
  );
};

export default TraceList;