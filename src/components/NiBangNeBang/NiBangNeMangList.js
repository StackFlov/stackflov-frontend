import React, { useEffect, useState } from "react";
import {
  NiBangNeBangListWrapper,
  NiBangNeBangListItemWrapper,
  NiBangNeBangListItem,
  ItemWrapper,
  NiBangNeBangListCreatedAt,
  NiBangNeBangListContent,
  NiBangNeBangListTitle,
  NiBangNeBangListUser,
  NiBangNeBangListViews,
  NiBangNeBangListGood,
  NiBangNeBangListBookMark,
} from "../../styles/components/NiBangNeBangListStyled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NiBangNeMangList = ({
  markers,
  map,
  setMap,
  visiblePosts,
  setVisiblePosts,
  nowCategory,
  setNowCategory,
  reviews,
}) => {
  const [viewList, setViewList] = useState();
  const [list, setList] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    const loadKakaoApi = () => {
      return new Promise((resolve) => {
        if (window.kakao && window.kakao.maps && window.kakao.maps.LatLng) {
          resolve();
        } else {
          const script = document.createElement("script");
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

  useEffect(() => {
    if (!map) return;

    reviews
      .flat()
      .forEach(({ address, ...post }) => geocodeAddress(address, post));
  }, [map]);

  // useEffect(() => {
  //   axios
  //     .get("https://api.stackflov.com/boards?page=0&size=10", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       setList(res.data.content);
  //     });
  // }, []);

  useEffect(() => {
    const view = list.map((item) => {
      if (nowCategory === item.category || nowCategory === 99) {
        return (
          <NiBangNeBangListItem key={item.id}>
            <ItemWrapper
              onClick={() => {
                navigator(`/trace/detail/${item.id}`);
              }}
            >
              <NiBangNeBangListCreatedAt>
                {item.createdAt?.slice(0, 10)}
              </NiBangNeBangListCreatedAt>
              <NiBangNeBangListContent>
                <NiBangNeBangListTitle>{item.title}</NiBangNeBangListTitle>
                <NiBangNeBangListUser>
                  {item.authorNickname}
                </NiBangNeBangListUser>
                <NiBangNeBangListViews></NiBangNeBangListViews>
              </NiBangNeBangListContent>
            </ItemWrapper>
          </NiBangNeBangListItem>
        );
      }
      return null;
    });
    setViewList(view);
  }, [nowCategory, list]);

  return (
    <div>
      <div>
        {visiblePosts.length === 0 ? (
          <p>지도 내 표시된 게시글이 없습니다.</p>
        ) : (
          <ul>
            {visiblePosts.map((item) => (
              <NiBangNeBangListItem key={item.id}>
                <ItemWrapper
                  onClick={() => {
                    navigator(`/trace/detail/${item.id}`);
                  }}
                >
                  <NiBangNeBangListCreatedAt>
                    {item.createdAt?.slice(0, 10)}
                  </NiBangNeBangListCreatedAt>
                  <NiBangNeBangListContent>
                    <NiBangNeBangListTitle>
                      {item.content}
                    </NiBangNeBangListTitle>
                    <NiBangNeBangListUser>
                      {item.authorNickname}
                    </NiBangNeBangListUser>
                    <NiBangNeBangListViews></NiBangNeBangListViews>
                  </NiBangNeBangListContent>
                </ItemWrapper>
              </NiBangNeBangListItem>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NiBangNeMangList;
