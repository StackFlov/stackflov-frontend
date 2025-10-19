import React, { useEffect, useState, useRef, useMemo } from "react";
import NiBangNeBangMap from "../components/NiBangNeBang/NiBangNeBangMap";
import NiBangNeMangList from "../components/NiBangNeBang/NiBangNeMangList";
import {
  NiBangNeBangBigTitleWrapper,
  NiBangNeBangWrapper,
} from "../styles/components/NiBangNeBangStyled";
import NiBangNeBangSelector from "../components/NiBangNeBang/NiBangNeBangSelector";
import axios from "axios";

function NiBangNeBang() {
  const [map, setMap] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const markers = useRef([]);
  const [nowCategory, setNowCategory] = useState(99);

  useEffect(() => {
    axios
      .get(`https://api.stackflov.com/map/reviews`, {
        withCredentials: true,
      })
      .then((res) => {
        setReviews(res.data.content || []);
        console.log("전체 리뷰 데이터 로드:", res.data.content);
      });
  }, []);

  const filteredVisiblePosts = useMemo(() => {
    if (nowCategory === 99) {
      return visiblePosts;
    }
    return visiblePosts.filter((post) => post.category === nowCategory);
  }, [visiblePosts, nowCategory]);

  return (
    <NiBangNeBangWrapper>
      <NiBangNeBangBigTitleWrapper>니방내방</NiBangNeBangBigTitleWrapper>
      <NiBangNeBangSelector
        nowCategory={nowCategory}
        setNowCategory={setNowCategory}
      />

      <NiBangNeBangMap
        reviews={reviews}
        setMap={setMap}
        markers={markers}
        setVisiblePosts={setVisiblePosts}
      />
      <NiBangNeMangList postsToDisplay={filteredVisiblePosts} />
    </NiBangNeBangWrapper>
  );
}

export default NiBangNeBang;
