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
  const [me, setMe] = useState();
  const accessToken = Cookies.get("accessToken");
  const navigator = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.stackflov.com/users/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setMe(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      });
  }, []);

  const handleNiBangNeBangDel = (id) => {
    console.log(accessToken);
    axios
      .delete(
        `https://api.stackflov.com/map/review/${id}`,
        { reviewId: id },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .catch((error) => {
        console.error("게시글 작성 실패:", error);
        // 실패 시 처리
      });
  };

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
      .catch((error) => {
        console.error("게시글 작성 실패:", error);
      });
  };

  const handleNiBangNeBangUnGood = (id) => {
    if (!accessToken) {
      console.error("액세스 토큰이 없습니다. 로그인이 필요합니다.");
      return;
    }

    axios
      .delete(
        `https://api.stackflov.com/likes?reviewId=${id}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("좋아요 취소 성공:", response);
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            `좋아요 취소 실패 (상태 코드: ${error.response.status}):`,
            error.response.data
          );
          if (error.response.status === 401) {
            alert("인증 정보가 유효하지 않습니다. 다시 로그인해주세요.");
          }
        } else {
          console.error("네트워크 오류 또는 서버 응답 없음:", error.message);
        }
      });
  };

  return (
    <div>
      {postsToDisplay.length === 0 ? (
        <p>
          지도에 표시된 게시글이 없거나, 선택한 카테고리에 해당하는 글이
          없습니다.
        </p>
      ) : (
        <ul>
          {postsToDisplay.map((item) => (
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
                  {item.isLike == false ? (
                    <NiBangNeBangListGood
                      onClick={() => {
                        handleNiBangNeBangGood(item.id);
                      }}
                    >
                      <FavoriteBorderIcon
                        style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                      />
                      {item.good}
                    </NiBangNeBangListGood>
                  ) : (
                    <NiBangNeBangListGood
                      onClick={() => {
                        handleNiBangNeBangUnGood(item.id);
                      }}
                    >
                      <FavoriteIcon
                        style={{ fontSize: "40px", padding: "0 5px 0 0" }}
                      />
                      {item.good}
                    </NiBangNeBangListGood>
                  )}
                  {item.authorNickname == me?.nickname && (
                    <NiBangNeBangDelBtn
                      onClick={() => {
                        handleNiBangNeBangDel(item.id);
                      }}
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
