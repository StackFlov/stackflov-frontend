import React, { useEffect, useState, useRef } from "react";
import NiBangNeBangMap from "../components/NiBangNeBang/NiBangNeBangMap";
import NiBangNeMangList from "../components/NiBangNeBang/NiBangNeMangList";
import {
  NiBangNeBangBigTitleWrapper,
  NiBangNeBangWrapper,
} from "../styles/components/NiBangNeBangStyled";
import NiBangNeBangSelector from "../components/NiBangNeBang/NiBangNeBangSelector";
import axios from "axios";
import Cookies from "js-cookie";

function NiBangNeBang() {
  const [map, setMap] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const markers = useRef([]);
  const [nowCategory, setNowCategory] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.stackflov.com/map/reviews`,

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        setReviews(res.data.content);
        console.log(res.data.content);
      });
  }, []);

  return (
    <NiBangNeBangWrapper>
      <NiBangNeBangBigTitleWrapper>니방내방</NiBangNeBangBigTitleWrapper>
      <NiBangNeBangSelector
        nowCategory={nowCategory}
        setNowCategory={setNowCategory}
      />
      <NiBangNeBangMap
        markers={markers}
        map={map}
        setMap={setMap}
        visiblePosts={visiblePosts}
        setVisiblePosts={setVisiblePosts}
        reviews={reviews}
      />
      <NiBangNeMangList
        markers={markers}
        map={map}
        setMap={setMap}
        visiblePosts={visiblePosts}
        setVisiblePosts={setVisiblePosts}
        nowCategory={nowCategory}
        setNowCategory={setNowCategory}
        reviews={reviews}
      />
    </NiBangNeBangWrapper>
  );
}

export default NiBangNeBang;
