import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  NiBangNeBangListItem,
  ItemWrapper,
  NiBangNeBangListCreatedAt,
  NiBangNeBangListContent,
  NiBangNeBangListTitle,
  NiBangNeBangListUser,
  NiBangNeBangDelBtn,
  NiBangNeBangListGood,
} from "../../styles/components/NiBangNeBangListStyled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const NiBangNeMangList = ({ postsToDisplay }) => {
  const [listItems, setListItems] = useState([]);
  const [me, setMe] = useState(null);

  const accessToken = Cookies.get("accessToken");
  const navigator = useNavigate();

  useEffect(() => {
    setListItems(postsToDisplay);
  }, [postsToDisplay]);

  useEffect(() => {
    if (!accessToken) return;
    axios
      .get("https://api.stackflov.com/users/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((res) => {
        setMe(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      });
  }, [accessToken]);

  const handleNiBangNeBangDel = (id) => {
    if (window.confirm("정말로 이 리뷰를 삭제하시겠습니까?")) {
      axios
        .delete(`https://api.stackflov.com/map/reviews/${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
          withCredentials: true,
        })
        .then(() => {
          setListItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
          );
          alert("리뷰가 삭제되었습니다.");
        })
        .catch((error) => {
          console.error("리뷰 삭제 실패:", error.response || error);
          alert("삭제에 실패했습니다. 권한이 있는지 확인해주세요.");
        });
    }
  };

  // 좋아요 추가 핸들러
  const handleNiBangNeBangGood = (id) => {
    axios
      .post(
        `https://api.stackflov.com/likes`,
        { reviewId: id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then(() => {
        // 상태 업데이트: isLike 상태만 true로 변경
        setListItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, isLike: true } : item
          )
        );
      })
      .catch((error) => {
        console.error("좋아요 추가 실패:", error.response || error);
      });
  };

  // 좋아요 취소 핸들러
  const handleNiBangNeBangUnGood = (id) => {
    axios
      .delete(`https://api.stackflov.com/likes?reviewId=${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then(() => {
        // 상태 업데이트: isLike 상태만 false로 변경
        setListItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, isLike: false } : item
          )
        );
      })
      .catch((error) => {
        console.error("좋아요 취소 실패:", error.response || error);
      });
  };

  return (
    <div>
      {listItems.length === 0 ? (
        <p>
          지도에 표시된 게시글이 없거나, 선택한 카테고리에 해당하는 글이
          없습니다.
        </p>
      ) : (
        <ul>
          {listItems.map((item) => (
            <NiBangNeBangListItem key={item.id}>
              <ItemWrapper>
                <NiBangNeBangListCreatedAt>
                  {item.createdAt?.slice(0, 10)}
                </NiBangNeBangListCreatedAt>
                <NiBangNeBangListContent>
                  <NiBangNeBangListTitle
                    onClick={() => navigator(`/nibangnebang/${item.id}`)}
                  >
                    {item.content}
                  </NiBangNeBangListTitle>
                  <NiBangNeBangListUser>
                    {item.authorNickname}
                  </NiBangNeBangListUser>

                  {/* === 변경된 부분 === */}
                  {item.isLike ? (
                    <NiBangNeBangListGood
                      onClick={() => handleNiBangNeBangUnGood(item.id)}
                    >
                      <FavoriteIcon
                        style={{
                          color: "red",
                          fontSize: "40px",
                          padding: "0 5px 0 0",
                        }}
                      />
                      {/* 좋아요 숫자 표시 안 함 */}
                    </NiBangNeBangListGood>
                  ) : (
                    <NiBangNeBangListGood
                      onClick={() => handleNiBangNeBangGood(item.id)}
                    >
                      <FavoriteBorderIcon
                        style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                      />
                      {/* 좋아요 숫자 표시 안 함 */}
                    </NiBangNeBangListGood>
                  )}

                  {me && item.authorNickname === me.nickname && (
                    <NiBangNeBangDelBtn
                      onClick={() => handleNiBangNeBangDel(item.id)}
                    >
                      삭제
                    </NiBangNeBangDelBtn>
                  )}
                </NiBangNeBangListContent>
              </ItemWrapper>
            </NiBangNeBangListItem>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NiBangNeMangList;
