import React, { useEffect } from "react";
import { NiBangNeBangMapWrapper } from "../../styles/components/NiBangNeBangMapStyled";

const NiBangNeBangMap = ({ markers, map, setMap, setVisiblePosts }) => {
  useEffect(() => {
    const loadKakaoApi = () => {
      return new Promise((resolve) => {
        if (window.kakao && window.kakao.maps && window.kakao.maps.LatLng) {
          resolve();
        } else {
          const script = document.createElement("script");
          // 실제 앱키로 변경하세요!
          script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=a36b7d03721cc984f5787d0b37f4a395&libraries=services&autoload=false";
          script.async = true;
          script.onload = () => {
            window.kakao.maps.load(() => {
              resolve();
            });
          };
          document.head.appendChild(script);
        }
      });
    };

    loadKakaoApi().then(() => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const newMap = new window.kakao.maps.Map(container, options);

      // 지도 영역 변경 시 표시 영역 내 마커 필터링
      newMap.addListener("bounds_changed", () => {
        const bounds = newMap.getBounds();
        const visible = markers.current.filter(({ marker }) =>
          bounds.contain(marker.getPosition())
        );
        setVisiblePosts(visible.map(({ data }) => data));
      });

      setMap(newMap);
    });
  }, []);

  const geocodeAddress = (address, postData) => {
    if (!map) return;
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: coords,
        });
        markers.current.push({ marker, data: postData });

        const bounds = map.getBounds();
        if (bounds && bounds.contain(coords)) {
          setVisiblePosts((prev) => [...prev, postData]);
        }
      }
    });
  };
  return (
    <NiBangNeBangMapWrapper>
      <div
        id="map"
        style={{
          width: "100%",
          height: "400px",
          marginBottom: "1rem",
          borderRadius: "10px",
        }}
      />
    </NiBangNeBangMapWrapper>
  );
};

export default NiBangNeBangMap;
