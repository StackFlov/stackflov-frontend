import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const NiBangNeBangCreateForm = () => {
  const [title, setTtitle] = useState();
  const [address, setAddress] = useState();
  const [content, setContent] = useState();
  const [rating, setRating] = useState();

  const accessToken = Cookies.get("accessToken");

  const handlePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const imgs = [];

    // 서버가 받는 리뷰 정보 객체 (data)
    const data = {
      title,
      address,
      content,
      rating,
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
      navigator("/tracelog");
    } catch (error) {
      console.error(
        "게시글 작성 실패:",
        error.response?.status,
        error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <ul>
        <li>
          <input
            onClick={(e) => {
              setTtitle(e.target.value);
            }}
          />
        </li>
        <li>
          <input
            onClick={(e) => {
              setAddress(e.target.value);
            }}
          />
        </li>
        <li>
          <input
            onClick={(e) => {
              setContent(e.target.value);
            }}
          />
        </li>
        <li>
          <input
            onClick={(e) => {
              setRating(e.target.value);
            }}
          />
        </li>
      </ul>
      <button
        onClick={(e) => {
          handlePost(e);
        }}
      ></button>
    </div>
  );
};

export default NiBangNeBangCreateForm;
