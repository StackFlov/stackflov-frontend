// src/pages/NiBangNeBangDetail.js
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  TraceDiv,
  TraceContentDiv,
  TraceCreatedAtDiv,
  TraceDetailBottomContent,
  TraceCategorySelectorItem,
  TraceDetailMiddleContent,
  TraceDetailTopContent,
  TraceDetailWrapper,
  TraceTitleDiv,
  UserImageDiv,
  UserInfoDiv,
  TraceCategoryDiv,
  UserNickName,
  UserFollowBtn,
  ReplyDiv,
  ReplyUserUserNameDiv,
  ReplyContentDiv,
  ReplyCreateAtDiv,
  ReplyCreateDiv,
  ReplyInput,
  ReplyCreateBtn,
  ReplyContentWrapper,
  ReplyHeader,
  TraceUpdateDiv,
} from "../../styles/components/TraceDetailStyled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import Cookies from "js-cookie";

const DEFAULT_PROFILE =
  "https://d3sutbt651osyh.cloudfront.net/assets/profile/default.png";

// 메타(작성일/수정) 영역의 레이아웃 보정용
const MetaRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 8px 0 12px;
`;

// 이미지 그리드
const ImagesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
  margin-top: 16px;
  justify-content: start;
  justify-items: start;
`;

// 고정 비율 카드
const ImageCard = styled.div`
  position: relative;
  width: 100%;
  padding-top: 66.66%; /* 3:2 비율 (원하면 100%로 정사각형) */
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  background: #f9fafb;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const NiBangNeBangDetail = () => {
  const { id } = useParams(); // reviewId
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");

  // 상세 / 로그인 사용자 / 댓글
  const [detail, setDetail] = useState(null);
  const [me, setMe] = useState(null);
  const [replies, setReplies] = useState([]);

  // 입력/편집
  const [replyInput, setReplyInput] = useState("");
  const [replyUpdateInput, setReplyUpdateInput] = useState("");
  const [editingReplyId, setEditingReplyId] = useState(null);

  // 개발모드 중복호출 가드
  const fetchedMeRef = useRef(false);

  // 1) 리뷰 상세: /map/{id}
  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;

    axios
      .get(`https://api.stackflov.com/map/${id}`, {
        headers,
        withCredentials: true,
      })
      .then((res) => setDetail(res.data))
      .catch((err) => console.error("Error fetching review detail:", err));
  }, [id, accessToken]);

  // 2) 내 정보(로그인 시): /users/me
  useEffect(() => {
    if (!accessToken) return;
    if (fetchedMeRef.current) return; // StrictMode 가드
    fetchedMeRef.current = true;

    axios
      .get("https://api.stackflov.com/users/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => setMe(res.data))
      .catch((err) => console.error("Error fetching me:", err));
  }, [accessToken]);

  // 3) 댓글 목록: /comments/review/{id}
  const loadReplies = () => {
    const headers = { "Content-Type": "application/json" };
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;

    axios
      .get(`https://api.stackflov.com/comments/review/${id}`, {
        headers,
        withCredentials: true,
      })
      .then((res) => setReplies(res.data))
      .catch((err) => console.error("Error fetching replies:", err));
  };

  useEffect(() => {
    loadReplies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // 댓글 생성
  const handleReplyCreate = () => {
    if (!accessToken || !me?.id) {
      alert("로그인이 필요한 기능입니다.");
      return;
    }
    axios
      .post(
        "https://api.stackflov.com/comments",
        { reviewId: id, content: replyInput },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then(() => {
        setReplyInput("");
        loadReplies();
      })
      .catch((err) => console.error("Error creating reply:", err));
  };

  // 댓글 수정
  const handleReplyUpdate = (replyId) => {
    axios
      .put(
        `https://api.stackflov.com/comments/${replyId}`,
        { reviewId: id, content: replyUpdateInput },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then(() => {
        setEditingReplyId(null);
        setReplyUpdateInput("");
        loadReplies();
      })
      .catch((err) => console.error("Error updating reply:", err));
  };

  // 댓글 삭제
  const handleReplyDel = (replyId) => {
    axios
      .delete(`https://api.stackflov.com/comments/${replyId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then(() => loadReplies())
      .catch((err) => console.error("Error deleting reply:", err));
  };

  // 작성자 본인 여부
  const isAuthor = useMemo(() => {
    if (!detail || !me) return false;
    return detail.authorEmail === me.email;
  }, [detail, me]);

  if (!detail) {
    return <div style={{ padding: 24 }}>로딩 중…</div>;
  }

  return (
    <TraceDetailWrapper>
      {/* 상단 */}
      <TraceDetailTopContent>
        <TraceDiv>니방내방</TraceDiv>
        <TraceTitleDiv>{detail.title}</TraceTitleDiv>
        <TraceCategoryDiv>
          <TraceCategorySelectorItem>
            {detail.address || "주소 미기재"}
          </TraceCategorySelectorItem>
        </TraceCategoryDiv>
      </TraceDetailTopContent>

      {/* 중단(메타/내용/이미지) */}
      <TraceDetailMiddleContent style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <MetaRow>
          {/* 기존 스타일의 float/width를 무시하기 위해 style로 덮어쓰기 */}
          <TraceCreatedAtDiv style={{ float: "none", width: "auto", padding: "8px 0" }}>
            작성일 : {detail?.createdAt?.slice(0, 10)}
          </TraceCreatedAtDiv>

          {isAuthor && (
            <TraceUpdateDiv
              onClick={() => navigate(`/nibangnebang/update/${id}`)}
              style={{ float: "none", height: 36, minWidth: 92, padding: "0 12px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              수정
            </TraceUpdateDiv>
          )}
        </MetaRow>

        {/* 본문 내용 (float 해제 + 100% 너비) */}
        <TraceContentDiv style={{ whiteSpace: "pre-wrap", float: "none", width: "100%" }}>
          {detail.content}
        </TraceContentDiv>

        {/* 리뷰 이미지 그리드 */}
        {Array.isArray(detail.imageUrls) && detail.imageUrls.length > 0 && (
          <ImagesGrid>
            {detail.imageUrls.map((url, idx) => (
              <ImageCard key={`${url}-${idx}`}>
                <img src={url} alt={`review-${idx}`} />
              </ImageCard>
            ))}
          </ImagesGrid>
        )}
      </TraceDetailMiddleContent>

      {/* 하단(작성자) */}
      <TraceDetailBottomContent>
        <UserImageDiv
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            overflow: "hidden",
            background: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!detail.authorProfileImageUrl ? (
            <AccountCircleIcon style={{ fontSize: 120, color: "#c8ceda" }} />
          ) : (
            <img
              src={detail.authorProfileImageUrl || DEFAULT_PROFILE}
              alt="author"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = DEFAULT_PROFILE;
              }}
            />
          )}
        </UserImageDiv>

        <UserInfoDiv>
          <UserNickName>{detail.authorEmail}</UserNickName>
          <UserFollowBtn disabled style={{ opacity: 0.6, cursor: "default" }}>
            😽 팔로우
          </UserFollowBtn>
        </UserInfoDiv>
      </TraceDetailBottomContent>

      {/* 댓글 작성 */}
      <ReplyCreateDiv>
        <ReplyInput
          placeholder="댓글을 입력하세요"
          value={replyInput}
          onChange={(e) => setReplyInput(e.target.value)}
        />
        <ReplyCreateBtn onClick={handleReplyCreate}>댓글 작성</ReplyCreateBtn>
      </ReplyCreateDiv>

      {/* 댓글 목록 */}
      {replies.map((item) => {
        const isEditing = editingReplyId === item.id;
        const imAuthor = me?.email && me.email === item.authorEmail;

        return (
          <ReplyDiv key={item.id}>
            <ReplyContentWrapper>
              <ReplyHeader>
                <ReplyUserUserNameDiv>{item.authorEmail}</ReplyUserUserNameDiv>
                <ReplyCreateAtDiv>
                  {item.createdAt ? item.createdAt.slice(0, 10) : ""}
                </ReplyCreateAtDiv>

                {imAuthor &&
                  (!isEditing ? (
                    <>
                      <button
                        onClick={() => {
                          setEditingReplyId(item.id);
                          setReplyUpdateInput(item.content);
                        }}
                        style={{ marginLeft: 10 }}
                      >
                        수정
                      </button>
                      <button
                        onClick={() => handleReplyDel(item.id)}
                        style={{ marginLeft: 10 }}
                      >
                        삭제
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleReplyUpdate(item.id)}
                        style={{ marginLeft: 10, marginRight: 5 }}
                      >
                        저장
                      </button>
                      <button onClick={() => setEditingReplyId(null)}>취소</button>
                    </>
                  ))}
              </ReplyHeader>

              {isEditing ? (
                <ReplyInput
                  value={replyUpdateInput}
                  onChange={(e) => setReplyUpdateInput(e.target.value)}
                />
              ) : (
                <ReplyContentDiv>{item.content}</ReplyContentDiv>
              )}
            </ReplyContentWrapper>
          </ReplyDiv>
        );
      })}
    </TraceDetailWrapper>
  );
};

export default NiBangNeBangDetail;
