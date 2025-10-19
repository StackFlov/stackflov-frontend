import React, { useEffect, useRef, useState } from "react";

const NiBangNeBangMap = ({ reviews, setMap, markers, setVisiblePosts }) => {
  // 컴포넌트 내부에서만 사용할 상태 및 Ref
  const mapRef = useRef(null); // 지도 인스턴스를 담을 ref
  const infowindowRef = useRef(null); // 인포윈도우 인스턴스를 담을 ref

  // 검색 기능 관련 상태
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  // 1. 카카오맵 API 로드 및 지도 인스턴스 생성 (최초 1회 실행)
  useEffect(() => {
    // 스크립트가 이미 로드되었는지 확인
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
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567), // 서울 시청
          level: 4,
        };
        const mapInstance = new window.kakao.maps.Map(container, options);

        mapRef.current = mapInstance;
        setMap(mapInstance); // 부모 컴포넌트에 지도 인스턴스 전달
        infowindowRef.current = new window.kakao.maps.InfoWindow({ zIndex: 1 });

        // 지도 이벤트 리스너 등록: 지도 범위가 바뀌면 보이는 마커 계산
        window.kakao.maps.event.addListener(
          mapInstance,
          "bounds_changed",
          () => {
            if (!markers.current || markers.current.length === 0) return;
            const bounds = mapInstance.getBounds();
            const visible = markers.current
              .filter(({ marker }) => bounds.contain(marker.getPosition()))
              .map(({ data }) => data);
            setVisiblePosts(visible); // 부모의 visiblePosts 상태 업데이트
          }
        );

        // 현재 위치로 이동
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            mapInstance.panTo(new window.kakao.maps.LatLng(lat, lng));
          });
        }
      });
    }
  }, [setMap, markers, setVisiblePosts]); // 의존성 배열은 그대로 유지

  // 2. 리뷰 데이터(reviews)가 변경되면 마커를 다시 그립니다.
  useEffect(() => {
    // 지도나 리뷰 데이터가 준비되지 않았으면 실행하지 않음
    if (!mapRef.current || !reviews || reviews.length === 0) return;

    const geocoder = new window.kakao.maps.services.Geocoder();

    // 기존 마커 제거
    markers.current.forEach(({ marker }) => marker.setMap(null));
    markers.current = [];

    // Promise.all을 사용해 모든 주소 변환을 병렬로 처리
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

                // 마커에 마우스오버/아웃 이벤트 등록 [31]
                window.kakao.maps.event.addListener(marker, "mouseover", () => {
                  infowindowRef.current.setContent(
                    `<div style="padding:5px;font-size:12px;">${post.content}</div>`
                  );
                  infowindowRef.current.open(mapRef.current, marker);
                });

                window.kakao.maps.event.addListener(marker, "mouseout", () => {
                  infowindowRef.current.close();
                });

                // 생성된 마커 정보를 부모로부터 받은 ref에 저장
                markers.current.push({ marker, data: post });
              }
              resolve(); // 주소 변환 성공/실패와 관계없이 resolve 호출
            });
          })
      )
    ).then(() => {
      // 마커를 모두 생성한 후, 현재 지도 범위 기준으로 리스트를 한 번 업데이트
      const bounds = mapRef.current.getBounds();
      const visible = markers.current
        .filter(({ marker }) => bounds.contain(marker.getPosition()))
        .map(({ data }) => data);
      setVisiblePosts(visible);
    });
  }, [reviews]); // reviews prop이 변경될 때만 이 effect 실행

  // 3. 검색 키워드가 변경될 때마다 필터링 실행
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

  // 검색 입력 변경 핸들러
  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  // 검색 결과 클릭 핸들러
  const handleResultClick = (post) => {
    if (!mapRef.current) return;

    // 클릭한 게시글에 해당하는 마커 찾기
    const found = markers.current.find((m) => m.data.id === post.id);
    if (!found) return;

    const position = found.marker.getPosition();

    // 해당 마커 위치로 지도 이동 및 확대
    mapRef.current.panTo(position);
    mapRef.current.setLevel(3, { animate: true });

    // 인포윈도우 열기 [32]
    infowindowRef.current.setContent(
      `<div style="padding:5px;font-size:12px;">${post.content}</div>`
    );
    infowindowRef.current.open(mapRef.current, found.marker);
    setSearchKeyword(""); // 검색창 비우기
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

      {/* 지도를 표시할 div */}
      <div
        id="map"
        style={{ width: "100%", height: "100%", borderRadius: 10 }}
      />
    </div>
  );
};

export default NiBangNeBangMap;
