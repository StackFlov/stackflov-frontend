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
import { samplePosts } from "../../utils/dummyAddress";

const NiBangNeMangList = ({
  markers,
  map,
  setMap,
  visiblePosts,
  setVisiblePosts,
  nowCategory,
  setNowCategory,
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

  useEffect(() => {
    if (!map) return;

    samplePosts.forEach(({ address, ...post }) =>
      geocodeAddress(address, post)
    );
  }, [map]);

  useEffect(() => {
    const response = axios
      .get(
        "http://3.106.223.65/boards?page=0&size=10",

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // ← 백엔드에서 allowCredentials(true)면 이거 필수
        }
      )
      .then((res) => {
        setList(res.data.content);
      });
  }, []);

  useEffect(() => {
    const view = list.map((item) => {
      if (nowCategory == item.category || nowCategory == 99) {
        return (
          <NiBangNeBangListItem>
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
                  {/* <PersonOutlineIcon
                    style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                  /> */}
                  {item.authorNickname}
                </NiBangNeBangListUser>
                <NiBangNeBangListViews>
                  {/* <RemoveRedEyeIcon
                    style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                  />
                  {item.viewCount} */}
                </NiBangNeBangListViews>
                {/* <NiBangNeBangGood>
                  <ThumbUpOffAltIcon
                    style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                  />
                  {item.good}
                </NiBangNeBangGood>
                <NiBangNeBangBookMark>
                  <BookmarkBorderIcon
                    style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                  />
                  {item.bookMark}
                </NiBangNeBangBookMark> */}
              </NiBangNeBangListContent>
            </ItemWrapper>
          </NiBangNeBangListItem>
        );
      }
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
              <NiBangNeBangListItem>
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
                      {/* <PersonOutlineIcon
                    style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                  /> */}
                      {item.authorNickname}
                    </NiBangNeBangListUser>
                    <NiBangNeBangListViews>
                      {/* <RemoveRedEyeIcon
                    style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                  />
                  {item.viewCount} */}
                    </NiBangNeBangListViews>
                    {/* <NiBangNeBangGood>
                  <ThumbUpOffAltIcon
                    style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                  />
                  {item.good}
                </NiBangNeBangGood>
                <NiBangNeBangBookMark>
                  <BookmarkBorderIcon
                    style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                  />
                  {item.bookMark}
                </NiBangNeBangBookMark> */}
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
