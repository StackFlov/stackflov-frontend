import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  TraceImagesWrapper,
} from "../../styles/components/TraceDetailStyled";
import { MetaRow } from "../../styles/components/TraceDetailStyled";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import Cookies from "js-cookie";
import ReportButton from "../../components/report/ReportButton";

const DEFAULT_PROFILE =
  "https://d3sutbt651osyh.cloudfront.net/assets/profile/default.png";

/* =========================
   공통 라운드 버튼 스타일
   ========================= */
const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PillBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 13px;
  line-height: 1;
  border: 1px solid
    ${(p) =>
      p.$variant === "danger"
        ? "#fecaca"
        : p.$variant === "ghost"
        ? "#e2e8f0"
        : p.$variant === "success"
        ? "#86efac"
        : "#cbd5e1"};
  background: ${(p) =>
    p.$variant === "danger"
      ? "#fff1f2"
      : p.$variant === "ghost"
      ? "#ffffff"
      : p.$variant === "success"
      ? "#ecfdf5"
      : "#f8fafc"};
  color: ${(p) =>
    p.$variant === "danger"
      ? "#b91c1c"
      : p.$variant === "ghost"
      ? "#334155"
      : p.$variant === "success"
      ? "#065f46"
      : "#111827"};
  cursor: pointer;
  transition: background 0.15s ease, box-shadow 0.15s ease, transform 0.02s ease;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);

  &:hover {
    background: ${(p) =>
      p.$variant === "danger"
        ? "#ffe4e6"
        : p.$variant === "ghost"
        ? "#f8fafc"
        : p.$variant === "success"
        ? "#dcfce7"
        : "#eef2ff"};
  }
  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

const EditBtn = (props) => (
  <PillBtn {...props}>
    <span>✏️</span>
    <span>수정</span>
  </PillBtn>
);
const DeleteBtn = (props) => (
  <PillBtn {...props} $variant="danger">
    <span>🗑️</span>
    <span>삭제</span>
  </PillBtn>
);
const SaveBtn = (props) => (
  <PillBtn {...props} $variant="success">
    <span>💾</span>
    <span>저장</span>
  </PillBtn>
);
const CancelBtn = (props) => (
  <PillBtn {...props} $variant="ghost">
    <span>↩️</span>
    <span>취소</span>
  </PillBtn>
);

const TraceDetail = () => {
  const [traceInfo, setTraceInfo] = useState({});
  const [replys, setReplys] = useState([]);
  const [replyInput, setReplyInput] = useState("");
  const [replyUpdateInput, setReplyUpdateInput] = useState("");
  const [me, setMe] = useState(null);
  const [followings, setFollowings] = useState([]);
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [imgErr, setImgErr] = useState(false);

  const accessToken = Cookies.get("accessToken");
  const navigator = useNavigate();
  const { no } = useParams();

  const category = { 0: "🏠 자취", 1: "⚡ 번개", 2: "🍯️ 꿀팁", 3: "🍙 레시피" };

  // 개발모드(StrictMode) 중복 호출 방지
  const fetchedMeRef = useRef(false);

  // 게시글 상세
  useEffect(() => {
    axios
      .get(`https://api.stackflov.com/boards/${no}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => setTraceInfo(res.data))
      .catch((err) => console.error("Error fetching board:", err));
  }, [no]);

  // 내 정보 및 팔로잉(로그인 시)
  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) return;
    if (fetchedMeRef.current) return;
    fetchedMeRef.current = true;

    axios
      .get("https://api.stackflov.com/users/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setMe(res.data);
        return axios.get(
          `https://api.stackflov.com/follows/following/${res.data.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );
      })
      .then((res2) => {
        if (res2) setFollowings(res2.data.map((u) => u.id));
      })
      .catch((err) => console.error("Error fetching me/followings:", err));
  }, [accessToken]);

  // 댓글 목록
  useEffect(() => {
    axios
      .get(`https://api.stackflov.com/comments/board/${no}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => setReplys(res.data))
      .catch((err) => console.error("Error fetching comments:", err));
  }, [no]);

  const fetchReplies = () => {
    axios
      .get(`https://api.stackflov.com/comments/board/${no}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => setReplys(res.data))
      .catch((err) => console.error("Error fetching replies:", err));
  };

  // 팔로우 여부
  const isFollowing = useMemo(() => {
    if (!traceInfo.authorId) return false;
    return followings.includes(traceInfo.authorId);
  }, [followings, traceInfo.authorId]);

  // 댓글 등록/수정/삭제
  const handleReplyCreate = () => {
    if (!me?.id) return alert("로그인이 필요한 기능입니다.");
    axios
      .post(
        "https://api.stackflov.com/comments",
        { boardId: no, content: replyInput },
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
        fetchReplies();
      })
      .catch((err) => console.error("Error creating reply:", err));
  };

  const handleReplyUpdate = (replyNo) => {
    axios
      .put(
        `https://api.stackflov.com/comments/${replyNo}`,
        { boardId: no, content: replyUpdateInput },
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
        fetchReplies();
      })
      .catch((err) => console.error("Error updating reply:", err));
  };

  const handleReplyDel = (id) => {
    axios
      .delete(`https://api.stackflov.com/comments/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then(() => fetchReplies())
      .catch((err) => console.error("Error deleting reply:", err));
  };

  // 팔로우/언팔로우
  const handleFollowed = () => {
    if (!me?.id) return alert("로그인이 필요한 기능입니다.");
    axios
      .post(
        "https://api.stackflov.com/follows/follow",
        { followedId: traceInfo.authorId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then(() => setFollowings((prev) => [...prev, traceInfo.authorId]))
      .catch((err) => console.error("Error follow:", err));
  };

  const handleUnFollowed = () => {
    if (!me?.id) return alert("로그인이 필요한 기능입니다.");
    axios
      .delete(`https://api.stackflov.com/follows/${traceInfo.authorId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then(() =>
        setFollowings((prev) => prev.filter((id) => id !== traceInfo.authorId))
      )
      .catch((err) => console.error("Error unfollow:", err));
  };

  // === 이미지 처리 ===
  const imgSrc = useMemo(
    () => traceInfo.authorProfileImageUrl || DEFAULT_PROFILE,
    [traceInfo.authorProfileImageUrl]
  );

  useEffect(() => {
    setImgErr(false);
  }, [imgSrc]);

  return (
    <TraceDetailWrapper>
      <TraceDetailTopContent>
        <TraceDiv>자취로그</TraceDiv>
        <TraceTitleDiv>{traceInfo.title}</TraceTitleDiv>
        <TraceCategoryDiv>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ReportButton
              contentId={Number(no)}
              contentType="BOARD"
              accessToken={accessToken}
              size="sm"
              variant="pill" // 게시글 상단도 pill 스타일로 통일하고 싶으면 유지
            />
            <TraceCategorySelectorItem>
              {category[traceInfo.category]}
            </TraceCategorySelectorItem>
          </div>
        </TraceCategoryDiv>
      </TraceDetailTopContent>

      <TraceDetailMiddleContent>
        <MetaRow>
   <TraceCreatedAtDiv style={{ padding: "8px 0" }}>
     작성일 : {traceInfo?.createdAt?.slice(0, 10)}
   </TraceCreatedAtDiv>
   {me?.email && traceInfo.authorEmail === me.email && (
     <TraceUpdateDiv
       onClick={() => navigator(`/trace/update/${no}`)}
       style={{ height: 36, minWidth: 92, display: "flex", alignItems: "center", justifyContent: "center" }}
     >
       수정
     </TraceUpdateDiv>
   )}
 </MetaRow>

        <TraceContentDiv>{traceInfo.content}</TraceContentDiv>
        <TraceImagesWrapper>
          {traceInfo.imageUrls?.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`게시글 이미지 ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </TraceImagesWrapper>
      </TraceDetailMiddleContent>

      <TraceDetailBottomContent>
        <UserImageDiv
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          {imgErr ? (
            <AccountCircleIcon style={{ fontSize: 120, color: "#c8ceda" }} />
          ) : (
            <img
              key={imgSrc}
              src={imgSrc}
              alt="author"
              width={150}
              height={150}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                setImgErr(true);
              }}
            />
          )}
        </UserImageDiv>

        <UserInfoDiv>
          <UserNickName>{traceInfo.authorEmail}</UserNickName>

          {!isFollowing ? (
            <UserFollowBtn onClick={handleFollowed}>
              😽 팔로우하기
            </UserFollowBtn>
          ) : (
            <UserFollowBtn onClick={handleUnFollowed}>
              😽 언팔로우하기
            </UserFollowBtn>
          )}
        </UserInfoDiv>
      </TraceDetailBottomContent>

      <ReplyCreateDiv>
        <ReplyInput
          placeholder="댓글을 입력하세요"
          value={replyInput}
          onChange={(e) => setReplyInput(e.target.value)}
        />
        <ReplyCreateBtn onClick={handleReplyCreate}>댓글 작성</ReplyCreateBtn>
      </ReplyCreateDiv>

      {replys.map((item) => {
        const isEditing = editingReplyId === item.id;
        return (
          <ReplyDiv key={item.id}>
            <ReplyContentWrapper>
              <ReplyHeader>
                {/* 왼쪽: 작성자/일자 */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <ReplyUserUserNameDiv>
                    {item.authorEmail}
                  </ReplyUserUserNameDiv>
                  <ReplyCreateAtDiv>
                    {item.createdAt?.slice(0, 10) || ""}
                  </ReplyCreateAtDiv>
                </div>

                {/* 오른쪽: 신고 맨 앞 + 액션 버튼들 */}
                <ButtonsRow>
                  {/* 🚩 신고 버튼 맨 앞 (pill 룩) */}
                  <ReportButton
                    contentId={item.id}
                    contentType="COMMENT"
                    accessToken={accessToken}
                    size="sm"
                    variant="pill"
                  />

                  {me?.email === item.authorEmail ? (
                    !isEditing ? (
                      <>
                        <EditBtn
                          onClick={() => {
                            setEditingReplyId(item.id);
                            setReplyUpdateInput(item.content);
                          }}
                        />
                        <DeleteBtn onClick={() => handleReplyDel(item.id)} />
                      </>
                    ) : (
                      <>
                        <SaveBtn onClick={() => handleReplyUpdate(item.id)} />
                        <CancelBtn onClick={() => setEditingReplyId(null)} />
                      </>
                    )
                  ) : null}
                </ButtonsRow>
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

export default TraceDetail;
