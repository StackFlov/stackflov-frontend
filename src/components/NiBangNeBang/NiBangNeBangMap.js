import React, { useEffect, useState, useRef } from "react";
import { samplePosts } from "../../utils/dummyAddress";

const NiBangNeBangMap = () => {
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const infowindowRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const loadKakaoApi = () =>
      new Promise((resolve) => {
        if (window.kakao && window.kakao.maps) resolve();
        else {
          const script = document.createElement("script");
          script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=<본인앱키>&libraries=services&autoload=false";
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
      const map = new window.kakao.maps.Map(container, options);
      mapRef.current = map;
      infowindowRef.current = new window.kakao.maps.InfoWindow({ zIndex: 1 });
      setMapLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!mapLoaded) return;

    const geocoder = new window.kakao.maps.services.Geocoder();

    markersRef.current.forEach(({ marker }) => marker.setMap(null));
    markersRef.current = [];

    samplePosts.forEach((post) => {
      geocoder.addressSearch(post.address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

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
      });
    });
  }, [mapLoaded]);

  useEffect(() => {
    if (searchKeyword.trim() === "") {
      setFilteredPosts([]);
    } else {
      setFilteredPosts(
        samplePosts.filter((post) =>
          post.content.toLowerCase().includes(searchKeyword.toLowerCase())
        )
      );
    }
  }, [searchKeyword]);

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleResultClick = (post) => {
    const found = markersRef.current.find((m) => m.data.id === post.id);
    if (found) {
      mapRef.current.panTo(found.marker.getPosition());
      mapRef.current.setLevel(3);
    }
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
        <div style={{ maxHeight: 240, overflowY: "auto" }}>
          {filteredPosts.length > 0 ? (
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
          )}
        </div>
      </div>

      <div
        id="map"
        style={{ width: "100%", height: "100%", borderRadius: 10 }}
      ></div>
    </div>
  );
};

export default NiBangNeBangMap;
