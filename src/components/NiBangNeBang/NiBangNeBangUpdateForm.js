import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  NiBangNeBangCategoryDiv,
  NiBangNeBangCategoryTitle,
  NiBangNeBangCreateTopContent,
  NiBangNeBangCreateWrapper,
  NiBangNeBangTitleDiv,
  NiBangNeBangTitleInputDiv,
  NiBangNeBangCategorySelectorItem,
  NiBangNeBangCreateBottomContent,
  NiBangNeBangCreateMiddleContent,
  NiBangNeBangCreateContentInput,
  NiBangNeBangCreateCancleBtn,
  NiBangNeBangCreateBtn,
} from "../../styles/components/NiBangNeBangCreateFormStyled";
import NiBangNeBangStarRating from "./NiBangNeBangStarRating";

const NiBangNeBangUpdateForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [address, setAddress] = useState();
  const [content, setContent] = useState();
  const [rating, setRating] = useState(0);
  const navigator = useNavigate();

  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    if (accessToken != undefined) {
      axios
        .get(
          `https://api.stackflov.com/map/reviews`,

          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          const results = res.data.content;
          const exportResult = results.filter((item) => {
            if (item.id == id) {
              return item;
            }
          });
          console.log(exportResult[0]);
          setTitle(exportResult[0].title);
          setContent(exportResult[0].content);
          setRating(exportResult[0].rating);
          setAddress(exportResult[0].address);
        });
    } else {
      alert("로그인이 필요한 기능입니다.");
      navigator("/login");
    }
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const images = [];

    const reviewData = {
      title: title,
      rating: rating,
      content: content,
      address: address,
    };

    formData.append(
      "data",
      new Blob([JSON.stringify(reviewData)], { type: "application/json" })
    );

    // if (images && images.length > 0) {
    //   images.forEach((file) => {
    //     if (file) formData.append("images", file);
    //   });
    // }

    try {
      const response = await axios.put(
        `https://api.stackflov.com/map/reviews/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );
      console.log("리뷰 수정 성공:", response);
      navigator("/nibangnebang");
    } catch (error) {
      console.error(
        "리뷰 수정 실패:",
        error.response?.status,
        error.response?.data || error.message
      );
    }
  };

  return (
    <NiBangNeBangCreateWrapper>
      <NiBangNeBangCreateTopContent>
        <NiBangNeBangTitleDiv>제목</NiBangNeBangTitleDiv>
        <NiBangNeBangTitleInputDiv
          placeholder="글 제목을 작성해주세요."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </NiBangNeBangCreateTopContent>

      <NiBangNeBangCreateMiddleContent>
        <NiBangNeBangCreateContentInput
          placeholder="글 내용을 작성해주세요."
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </NiBangNeBangCreateMiddleContent>
      <NiBangNeBangStarRating value={rating} onChange={setRating} />
      <NiBangNeBangCreateBottomContent>
        <NiBangNeBangCreateCancleBtn
          onClick={(e) => {
            handleUpdate(e);
            navigator("/nibangnebang");
          }}
        >
          😽 등록
        </NiBangNeBangCreateCancleBtn>
        <NiBangNeBangCreateBtn
          onClick={() => {
            navigator("/nibangnebang");
          }}
        >
          😽 취소
        </NiBangNeBangCreateBtn>
      </NiBangNeBangCreateBottomContent>
    </NiBangNeBangCreateWrapper>
  );
};

export default NiBangNeBangUpdateForm;
