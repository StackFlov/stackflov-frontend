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

  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
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
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const imgs = [];

    const data = {
      address: address,
      content,
      rating: rating,
    };
    formData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );

    if (imgs && imgs.length > 0) {
      imgs.forEach((file) => {
        if (file) formData.append("images", file);
      });
    }

    try {
      const response = await axios.post(
        "https://api.stackflov.com/map/reviews",
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );
      console.log("성공:", response);
      navigator("/NiBangNeBanglog");
    } catch (error) {
      console.error(
        "게시글 작성 실패:",
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
            handlePost(e);
          }}
        >
          😽 등록
        </NiBangNeBangCreateCancleBtn>
        <NiBangNeBangCreateBtn
          onClick={() => {
            navigator("/NiBangNeBanglog");
          }}
        >
          😽 취소
        </NiBangNeBangCreateBtn>
      </NiBangNeBangCreateBottomContent>
    </NiBangNeBangCreateWrapper>
  );
};

export default NiBangNeBangUpdateForm;
