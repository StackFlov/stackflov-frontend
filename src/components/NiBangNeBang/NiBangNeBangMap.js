import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NiBangNeBangMap = ({ reviews, setMap, markers, setVisiblePosts }) => {
  const mapRef = useRef(null);
  const infowindowRef = useRef(null);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const navigator = useNavigate();

  // 1. 카카오맵 API 로드 및 지도 인스턴스 생성 (최초 1회 실행)
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=a36b7d03721cc984f5787d0b37f4a395&libraries=services&autoload=false`;
      script.async = true;
      document.head.appendChild(script);
      script.onload = initializeMap;
    }

    function initializeMap() {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          level: 4,
        };
        const mapInstance = new window.kakao.maps.Map(container, options);

        mapRef.current = mapInstance;
        setMap(mapInstance);
        infowindowRef.current = new window.kakao.maps.InfoWindow({ zIndex: 1 });

        window.kakao.maps.event.addListener(
          mapInstance,
          "bounds_changed",
          () => {
            if (!markers.current || markers.current.length === 0) return;
            const bounds = mapInstance.getBounds();
            const visible = markers.current
              .filter(({ marker }) => bounds.contain(marker.getPosition()))
              .map(({ data }) => data);
            setVisiblePosts(visible);
          }
        );

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            mapInstance.panTo(new window.kakao.maps.LatLng(lat, lng));
          });
        }
      });
    }
  }, [setMap, markers, setVisiblePosts]);

  // 2. 리뷰 데이터(reviews)가 변경되면 마커를 다시 그립니다.
  useEffect(() => {
    if (!mapRef.current || !reviews || reviews.length === 0) return;

    const geocoder = new window.kakao.maps.services.Geocoder();

    markers.current.forEach(({ marker }) => marker.setMap(null));
    markers.current = [];

    Promise.all(
      reviews.map(
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

                // --- 클릭 이벤트 리스너 추가된 부분 ---
                window.kakao.maps.event.addListener(marker, "click", () => {
                  navigator(`/nibangnebang/${post.id}`);
                  // 필요하다면 이곳에서 인포윈도우를 여는 등의 추가 작업도 가능합니다.
                  infowindowRef.current.setContent(
                    `<div style="padding:5px;font-size:12px;">클릭: ${post.content}</div>`
                  );
                  infowindowRef.current.open(mapRef.current, marker);
                });
                // ------------------------------------

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
      setVisiblePosts(visible);
    });
  }, [reviews]);

  // 3. 검색 관련 로직 (기존과 동일)
  useEffect(() => {
    if (searchKeyword.trim() === "") {
      setFilteredPosts([]);
    } else {
      setFilteredPosts(
        reviews.filter((post) =>
          post.content.toLowerCase().includes(searchKeyword.toLowerCase())
        )
      );
    }
  }, [searchKeyword, reviews]);

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleResultClick = (post) => {
    if (!mapRef.current) return;
    const found = markers.current.find((m) => m.data.id === post.id);
    if (!found) return;

    const position = found.marker.getPosition();
    mapRef.current.panTo(position);
    mapRef.current.setLevel(3, { animate: true });

    infowindowRef.current.setContent(
      `<div style="padding:5px;font-size:12px;">${post.content}</div>`
    );
    infowindowRef.current.open(mapRef.current, found.marker);
    setSearchKeyword("");
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
      {/* 검색 UI */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          width: 300,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 8,
          padding: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          zIndex: 10,
          overflowY: "auto",
          maxHeight: 300,
        }}
      >
        <input
          type="text"
          placeholder="내용으로 리뷰 검색"
          value={searchKeyword}
          onChange={handleSearchChange}
          style={{
            width: "100%",
            padding: "8px",
            boxSizing: "border-box",
            marginBottom: 8,
          }}
        />
        {searchKeyword.trim() !== "" &&
          (filteredPosts.length > 0 ? (
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
                <small style={{ color: "#555" }}>{post.address}</small>
              </div>
            ))
          ) : (
            <div style={{ padding: 8, color: "#777" }}>
              검색 결과가 없습니다.
            </div>
          ))}
      </div>

      <div
        id="map"
        style={{ width: "100%", height: "100%", borderRadius: 10 }}
      />
    </div>
  );
};

export default NiBangNeBangMap;
