import React, { useEffect, useState, useRef } from "react";
import NiBangNeBangMap from "../components/NiBangNeBang/NiBangNeBangMap";
import NiBangNeMangList from "../components/NiBangNeBang/NiBangNeMangList";
import {
  NiBangNeBangBigTitleWrapper,
  NiBangNeBangWrapper,
} from "../styles/components/NiBangNeBangStyled";
import NiBangNeBangSelector from "../components/NiBangNeBang/NiBangNeBangSelector";

function NiBangNeBang() {
  const [map, setMap] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const markers = useRef([]);
  const [nowCategory, setNowCategory] = useState();

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
      />
      <NiBangNeMangList
        markers={markers}
        map={map}
        setMap={setMap}
        visiblePosts={visiblePosts}
        setVisiblePosts={setVisiblePosts}
        nowCategory={nowCategory}
        setNowCategory={setNowCategory}
      />
    </NiBangNeBangWrapper>
  );
}

export default NiBangNeBang;
