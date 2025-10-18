import React, { useEffect, useState, useRef } from "react";
import { samplePosts } from "../../utils/dummyAddress";

const NiBangNeBangMap = ({ map, setMap }) => {
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const infowindowRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  // 카카오 지도 API 로드 및 지도 생성
  useEffect(() => {
    const loadKakaoApi = () =>
      new Promise((resolve) => {
        if (window.kakao && window.kakao.maps) {
          resolve();
        } else {
          const script = document.createElement("script");
          script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=a36b7d03721cc984f5787d0b37f4a395&libraries=services&autoload=false";
          script.async = true;
          script.onload = () => {
            window.kakao.maps.load(() => resolve());
          };
          document.head.appendChild(script);
        }
      });

    loadKakaoApi().then(() => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
        level: 4,
      };
      const mapInstance = new window.kakao.maps.Map(container, options);
      mapRef.current = mapInstance;
      infowindowRef.current = new window.kakao.maps.InfoWindow({ zIndex: 1 });
      setMapLoaded(true);
      setMap(mapInstance);
    });
  }, [setMap]);

  // 주소 → 좌표 변환 및 마커 생성 (모두 생성 후 완료 로그)
  useEffect(() => {
    if (!mapLoaded) return;

    const geocoder = new window.kakao.maps.services.Geocoder();

    // 기존 마커 제거
    markersRef.current.forEach(({ marker }) => marker.setMap(null));
    markersRef.current = [];

    // samplePosts가 2중 배열이므로 펼침
    const flatPosts = samplePosts.flat();

    Promise.all(
      flatPosts.map(
        (post) =>
          new Promise((resolve) => {
            geocoder.addressSearch(post.address, (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(
                  result[0].y,
                  result[0].x
                );

                const marker = new window.kakao.maps.Marker({
                  map: mapRef.current,
                  position: coords,
                });

                markersRef.current.push({ marker, data: post });

                window.kakao.maps.event.addListener(marker, "mouseover", () => {
                  infowindowRef.current.setContent(
                    `<div style="padding:5px;">${post.content}</div>`
                  );
                  infowindowRef.current.open(mapRef.current, marker);
                });
                window.kakao.maps.event.addListener(marker, "mouseout", () => {
                  infowindowRef.current.close();
                });
              }
              resolve();
            });
          })
      )
    ).then(() => {
      console.log("모든 마커 생성 완료", markersRef.current);
    });
  }, [mapLoaded]);

  // 검색어에 따라 samplePosts 내 내용 필터링
  useEffect(() => {
    if (searchKeyword.trim() === "") {
      setFilteredPosts([]);
    } else {
      const flatPosts = samplePosts.flat();
      setFilteredPosts(
        flatPosts.filter((post) =>
          post.content.toLowerCase().includes(searchKeyword.toLowerCase())
        )
      );
    }
  }, [searchKeyword]);

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleResultClick = (post) => {
    if (!mapRef.current) {
      console.warn("지도 로드 전입니다.");
      return;
    }
    const found = markersRef.current.find((m) => m.data.id === post.id);
    if (!found) {
      console.warn("해당 id 마커를 찾을 수 없습니다:", post.id);
      return;
    }

    const position = found.marker.getPosition();

    if (typeof mapRef.current.panTo === "function") {
      mapRef.current.panTo(position);
    } else {
      mapRef.current.setCenter(position);
    }
    mapRef.current.setLevel(3);

    infowindowRef.current.setContent(
      `<div style="padding:5px;">${post.content}</div>`
    );
    infowindowRef.current.open(mapRef.current, found.marker);
  };

  return (
    <div
      id="map-container"
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        borderRadius: 10,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          width: 300,
          maxHeight: 300,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 8,
          padding: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          zIndex: 1100,
          overflowY: "auto",
        }}
      >
        <input
          type="text"
          placeholder="내용으로 마커 검색"
          value={searchKeyword}
          onChange={handleSearchChange}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: 8,
            boxSizing: "border-box",
          }}
        />
        {searchKeyword.trim() !== "" ? (
          filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => handleResultClick(post)}
                style={{
                  cursor: "pointer",
                  padding: "6px 8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <strong>{post.content}</strong>
                <br />
                <small>{post.address}</small>
              </div>
            ))
          ) : (
            <div style={{ padding: 8 }}>검색 결과가 없습니다.</div>
          )
        ) : null}
      </div>
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 10,
        }}
      />
    </div>
  );
};

export default NiBangNeBangMap;
