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
import FavoriteIcon from "@mui/icons-material/Favorite";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import HomeIcon from "@mui/icons-material/Home"; 
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RestaurantIcon from "@mui/icons-material/Restaurant";
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
        const data = res.data?.content || res.data || [];
        setList(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("데이터 로드 실패:", err);
        setList([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // ✅ 등장 애니메이션 로직
  useEffect(() => {
    if (!wrapperRef.current || loading) return;
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
  }, [loading, list]);

  const renderCategoryPlaceholder = (category) => {
    switch (Number(category)) {
      case 1: return <HomeIcon className="cate-icon" />;
      case 2: return <LightbulbIcon className="cate-icon" />;
      case 3: return <RestaurantIcon className="cate-icon" />;
      default: return <HomeIcon className="cate-icon" />;
    }
  };

  const filteredList = useMemo(() => {
    if (!nowCategory || nowCategory === 99) return list;
    return list.filter((item) => Number(item.category) === Number(nowCategory));
  }, [nowCategory, list]);

  if (loading) {
    return (
      <TraceListWrapper>
        <TraceListItemWrapper>
          {[1, 2, 3, 4, 5, 6].map((v) => <LoadingSkeleton key={v} />)}
        </TraceListItemWrapper>
      </TraceListWrapper>
    );
  }

  if (filteredList.length === 0) {
    return (
      <TraceListWrapper>
        <EmptyState>게시글이 없습니다.<span>첫 번째 주인공이 되어보세요!</span></EmptyState>
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
              <CardImage $hasImage={!!item.thumbnailUrl}>
                {item.thumbnailUrl ? (
                  <img src={item.thumbnailUrl} alt={item.title} />
                ) : (
                  <div className="placeholder-content">
                    {renderCategoryPlaceholder(item.category)}
                    <span className="logo-text">STAY LOG</span>
                  </div>
                )}
              </CardImage>

              <CardInfoBox>
                <TraceListTitle>{item.title}</TraceListTitle>
                <MetaRow>
                  <div className="author">
                    <PersonOutlineIcon style={{ fontSize: "16px" }} />
                    {item.authorNickname}
                  </div>
                  <span>{item.createdAt?.slice(0, 10)}</span>
                </MetaRow>
                <StatsRow>
                  <StatItem><RemoveRedEyeIcon /> {item.viewCount ?? 0}</StatItem>
                  <StatItem $active={!!item.liked}><FavoriteIcon /> {item.good ?? 0}</StatItem>
                  <StatItem $active={!!item.bookmarked} $isBookmark={true}><TurnedInIcon /> {item.bookMark ?? 0}</StatItem>
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