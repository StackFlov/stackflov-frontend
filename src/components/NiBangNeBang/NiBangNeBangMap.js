import React, { useEffect, useState, useRef } from "react";

const NiBangNeBangMap = ({
  markers,
  map,
  setMap,
  visiblePosts,
  setVisiblePosts,
  reviews,
}) => {
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const infowindowRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  // 1. 카카오 지도 API 로드 및 기본 지도 생성
  useEffect(() => {
    const loadKakaoApi = () =>
      new Promise((resolve) => {
        if (window.kakao && window.kakao.maps) {
          resolve();
        } else {
          const script = document.createElement("script");
          // 주의: appkey는 본인의 키로 변경해야 합니다.
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
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567), // 기본 위치: 서울 시청
        level: 4,
      };
      const mapInstance = new window.kakao.maps.Map(container, options);
      mapRef.current = mapInstance;
      infowindowRef.current = new window.kakao.maps.InfoWindow({ zIndex: 1 });
      setMap(mapInstance);
      setMapLoaded(true); // 지도 로딩 완료 상태 설정
    });
  }, [setMap]);

  // 2. 현재 위치로 지도 중심 이동 (지도가 로드된 후 실행)
  useEffect(() => {
    if (!mapLoaded) return; // 지도가 로드되지 않았으면 실행하지 않음

    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude; // 위도
          const lng = position.coords.longitude; // 경도
          const locPosition = new window.kakao.maps.LatLng(lat, lng);

          // 지도 중심을 현재 위치로 부드럽게 이동시킵니다
          if (mapRef.current) {
            mapRef.current.panTo(locPosition);
          }
        },
        (err) => {
          // 위치 정보를 가져오는 데 실패했을 때 콘솔에 에러를 출력합니다.
          console.error("위치 정보를 가져오는 데 실패했습니다.", err);
        }
      );
    } else {
      // Geolocation을 지원하지 않을 때 콘솔에 경고를 출력합니다.
      console.warn("이 브라우저는 Geolocation을 지원하지 않습니다.");
    }
  }, [mapLoaded]); // mapLoaded 상태가 true가 되면 이 useEffect가 실행됩니다.

  // 3. 주소 → 좌표 변환 및 마커 생성 (기존 코드 유지)
  useEffect(() => {
    if (!mapLoaded) return;

    const geocoder = new window.kakao.maps.services.Geocoder();

    markersRef.current.forEach(({ marker }) => marker.setMap(null));
    markersRef.current = [];

    const flatPosts = reviews.flat();

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
  }, [mapLoaded, reviews]); // reviews가 변경될 때도 마커를 다시 그리도록 의존성 추가

  // 4. 검색 기능 관련 로직 (기존 코드 유지)
  useEffect(() => {
    if (searchKeyword.trim() === "") {
      setFilteredPosts([]);
    } else {
      const flatPosts = reviews.flat();
      setFilteredPosts(
        flatPosts.filter((post) =>
          post.content.toLowerCase().includes(searchKeyword.toLowerCase())
        )
      );
    }
  }, [searchKeyword, reviews]);

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

    mapRef.current.panTo(position); // 부드러운 이동을 위해 panTo 사용
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
