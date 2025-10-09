import React, { useEffect, useState, useRef } from "react";
import { samplePosts } from "../../utils/dummyAddress";

const NiBangNeBangMap = () => {
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const infowindowRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const [visiblePosts, setVisiblePosts] = useState([]); // 지도 내 보이는 마커 데이터
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]); // 검색 결과

  // 카카오 지도 API 스크립트 로드 및 지도 생성
  useEffect(() => {
    const loadKakaoApi = () =>
      new Promise((resolve) => {
        if (window.kakao && window.kakao.maps) {
          resolve();
        } else {
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

      // 지도 이동 시 visiblePosts 업데이트
      map.addListener("bounds_changed", () => {
        const bounds = map.getBounds();
        const visibleMarkers = markersRef.current.filter(({ marker }) =>
          bounds.contain(marker.getPosition())
        );
        setVisiblePosts(visibleMarkers.map(({ data }) => data));
      });

      setMapLoaded(true);
    });
  }, []);

  // 주소 → 좌표 변환 및 마커 생성
  useEffect(() => {
    if (!mapLoaded) return;

    const geocoder = new window.kakao.maps.services.Geocoder();

    // 기존 마커 제거
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

          // 마커 마우스 오버시 인포윈도우
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

  // 검색어로 visiblePosts 필터링
  useEffect(() => {
    console.log("searchKeyword:", searchKeyword);
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
  // 검색어 변경 핸들러
  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  // 검색 결과 클릭 시 해당 마커 위치로 지도 이동
  const handleResultClick = (post) => {
    const found = markersRef.current.find((m) => m.data.id === post.id);
    if (found) {
      mapRef.current.panTo(found.marker.getPosition());
      mapRef.current.setLevel(3);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, position: "relative" }}>
        <input
          type="text"
          placeholder="내용으로 마커 검색"
          value={searchKeyword}
          onChange={handleSearchChange}
          style={{ width: "100%", padding: "8px", marginBottom: 8 }}
        />
        {searchKeyword.trim() !== "" && (
          <div
            style={{
              position: "absolute",
              top: 40,
              left: 0,
              right: 0,
              maxHeight: 200,
              overflowY: "auto",
              backgroundColor: "white",
              border: "1px solid #ddd",
              zIndex: 10,
            }}
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                  onClick={() => handleResultClick(post)}
                >
                  {post.content} ({post.address})
                </div>
              ))
            ) : (
              <div style={{ padding: "8px" }}>검색 결과가 없습니다.</div>
            )}
          </div>
        )}
        <div
          id="map"
          style={{ width: "100%", height: "600px", borderRadius: 10 }}
        />
      </div>
    </div>
  );
};

export default NiBangNeBangMap;
