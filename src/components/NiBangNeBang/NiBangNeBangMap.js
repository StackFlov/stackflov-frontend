// src/components/NiBangNeBang/NiBangNeBangMap.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MapShell = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;   /* 리스트와 동일 */
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,.06);
`;

const MapCanvas = styled.div`
  width: 100%;
  height: 600px;
`;

const SearchBox = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 320px;
  background: rgba(255,255,255,.92);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 6px 22px rgba(0,0,0,.18);
  z-index: 10;
  overflow-y: auto;
  max-height: 320px;

  input {
    width: 100%;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    outline: none;
    font-size: 14px;
    box-sizing: border-box;
  }
`;

const ResultRow = styled.div`
  cursor: pointer;
  padding: 8px 10px;
  border-bottom: 1px solid #eee;
  &:hover { background: #f8fafc; }
  strong { display: block; color: #111827; }
  small  { color: #6b7280; }
`;

const NiBangNeBangMap = ({ reviews, setMap, markers, setVisiblePosts }) => {
  const mapElRef = useRef(null);
  const mapRef = useRef(null);
  const infowindowRef = useRef(null);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const nav = useNavigate(); // ← window.navigator와 이름 충돌 방지

  // kakao 지도 로드 + 초기화
  useEffect(() => {
    const init = () => {
      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          level: 4,
        };
        const mapInstance = new window.kakao.maps.Map(mapElRef.current, options);

        mapRef.current = mapInstance;
        setMap && setMap(mapInstance);
        infowindowRef.current = new window.kakao.maps.InfoWindow({ zIndex: 1 });

        window.kakao.maps.event.addListener(mapInstance, "bounds_changed", () => {
          if (!markers?.current || markers.current.length === 0) return;
          const bounds = mapInstance.getBounds();
          const visible = markers.current
            .filter(({ marker }) => bounds.contain(marker.getPosition()))
            .map(({ data }) => data);
          setVisiblePosts && setVisiblePosts(visible);
        });

        // 현재 위치로 이동 (window.navigator로 명시)
        if (window.navigator?.geolocation) {
          window.navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            mapInstance.panTo(new window.kakao.maps.LatLng(latitude, longitude));
          });
        }
      });
    };

    if (window.kakao?.maps) {
      init();
    } else {
      const script = document.createElement("script");
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?appkey=a36b7d03721cc984f5787d0b37f4a395&libraries=services&autoload=false";
      script.async = true;
      script.onload = init;
      document.head.appendChild(script);
    }
  }, [setMap, markers, setVisiblePosts]);

  // 리뷰 → 마커
  useEffect(() => {
    if (!mapRef.current || !reviews?.length) return;
    if (!markers?.current) return;

    const geocoder = new window.kakao.maps.services.Geocoder();

    // 기존 마커 제거
    markers.current.forEach(({ marker }) => marker.setMap(null));
    markers.current = [];

    Promise.all(
      reviews.map(
        (post) =>
          new Promise((resolve) => {
            geocoder.addressSearch(post.address, (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                const marker = new window.kakao.maps.Marker({
                  map: mapRef.current,
                  position: coords,
                });

                window.kakao.maps.event.addListener(marker, "click", () => {
                  nav(`/nibangnebang/${post.id}`);
                });

                window.kakao.maps.event.addListener(marker, "mouseover", () => {
                  infowindowRef.current.setContent(
                    `<div style="padding:5px;font-size:12px;">${post.content}</div>`
                  );
                  infowindowRef.current.open(mapRef.current, marker);
                });

                window.kakao.maps.event.addListener(marker, "mouseout", () => {
                  infowindowRef.current.close();
                });

                markers.current.push({ marker, data: post });
              }
              resolve();
            });
          })
      )
    ).then(() => {
      const bounds = mapRef.current.getBounds();
      const visible = markers.current
        .filter(({ marker }) => bounds.contain(marker.getPosition()))
        .map(({ data }) => data);
      setVisiblePosts && setVisiblePosts(visible);
    });
  }, [reviews, markers, nav, setVisiblePosts]);

  // 검색
  useEffect(() => {
    if (!searchKeyword.trim()) return setFilteredPosts([]);
    setFilteredPosts(
      reviews.filter((p) =>
        (p.content || "").toLowerCase().includes(searchKeyword.toLowerCase())
      )
    );
  }, [searchKeyword, reviews]);

  const handleResultClick = (post) => {
    if (!mapRef.current || !markers?.current) return;
    const found = markers.current.find((m) => m.data.id === post.id);
    if (!found) return;

    const pos = found.marker.getPosition();
    mapRef.current.panTo(pos);
    mapRef.current.setLevel(3, { animate: true });

    infowindowRef.current.setContent(
      `<div style="padding:5px;font-size:12px;">${post.content}</div>`
    );
    infowindowRef.current.open(mapRef.current, found.marker);
    setSearchKeyword("");
  };

  return (
    <MapShell>
      <SearchBox>
        <input
          type="text"
          placeholder="내용으로 리뷰 검색"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        {searchKeyword.trim() !== "" &&
          (filteredPosts.length ? (
            filteredPosts.map((post) => (
              <ResultRow key={post.id} onClick={() => handleResultClick(post)}>
                <strong>{post.content}</strong>
                <small>{post.address}</small>
              </ResultRow>
            ))
          ) : (
            <div style={{ padding: 8, color: "#777" }}>검색 결과가 없습니다.</div>
          ))}
      </SearchBox>

      <MapCanvas id="map" ref={mapElRef} />
    </MapShell>
  );
};

export default NiBangNeBangMap;
