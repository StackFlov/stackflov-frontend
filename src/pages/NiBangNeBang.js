import React, { useEffect } from "react";

function NiBangNeBang() {
  useEffect(() => {
    // 스크립트가 이미 있지 않은지 확인
    if (!window.kakao) {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&libraries=drawing";
      script.async = true;
      script.onload = () => window.kakao && initMap();
      document.head.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      const kakao = window.kakao;
      kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);

        const manager = new kakao.maps.drawing.DrawingManager({
          map: map,
          drawingMode: ["MARKER", "POLYLINE", "RECTANGLE", "CIRCLE", "POLYGON"],
          markerOptions: { draggable: true, removable: true },
          polylineOptions: { draggable: true, removable: true },
          rectangleOptions: { draggable: true, removable: true },
          circleOptions: { draggable: true, removable: true },
          polygonOptions: { draggable: true, removable: true },
        });

        // manager.select('POLYGON'); 등으로 모드 변경
        window.drawingManager = manager;
      });
    }
  }, []);

  return (
    <div>
      12
      <div id="map" style={{ width: "100%", height: "500px" }} />
    </div>
  );
}

export default NiBangNeBang;
