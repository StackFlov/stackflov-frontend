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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import Cookies from "js-cookie";

const DEFAULT_PROFILE =
  "https://d3sutbt651osyh.cloudfront.net/assets/profile/default.png";

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
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((res) => {
        setMe(res.data);
        return axios.get(
          `https://api.stackflov.com/follows/following/${res.data.id}`,
          {
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
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
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
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
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
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
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
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
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
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
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then(() => setFollowings((prev) => prev.filter((id) => id !== traceInfo.authorId)))
      .catch((err) => console.error("Error unfollow:", err));
  };

  // === 이미지 처리 (핵심) ===
  // 실제 사용할 src (작성자 URL 없으면 기본)
  const imgSrc = useMemo(
    () => traceInfo.authorProfileImageUrl || DEFAULT_PROFILE,
    [traceInfo.authorProfileImageUrl]
  );

  // src가 바뀌면 에러상태 리셋
  useEffect(() => {
    setImgErr(false);
  }, [imgSrc]);

  return (
    <TraceDetailWrapper>
      <TraceDetailTopContent>
        <TraceDiv>자취로그</TraceDiv>
        <TraceTitleDiv>{traceInfo.title}</TraceTitleDiv>
        <TraceCategoryDiv>
          <TraceCategorySelectorItem>
            {category[traceInfo.category]}
          </TraceCategorySelectorItem>
        </TraceCategoryDiv>
      </TraceDetailTopContent>

      <TraceDetailMiddleContent>
        <TraceCreatedAtDiv>
          작성일 : {traceInfo?.createdAt?.slice(0, 10)}
        </TraceCreatedAtDiv>

        {me?.email && traceInfo.authorEmail === me.email && (
          <TraceUpdateDiv onClick={() => navigator(`/trace/update/${no}`)}>
            수정
          </TraceUpdateDiv>
        )}

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
          style={{ width: 150, height: 150, borderRadius: "50%", overflow: "hidden" }}
        >
          {imgErr ? (
            <AccountCircleIcon style={{ fontSize: 120, color: "#c8ceda" }} />
          ) : (
            <img
              key={imgSrc}                 // src 변경 시 안전하게 re-mount
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
                e.currentTarget.onerror = null; // 1회만 처리
                setImgErr(true);
              }}
            />
          )}
        </UserImageDiv>

        <UserInfoDiv>
          <UserNickName>{traceInfo.authorEmail}</UserNickName>

          {!isFollowing ? (
            <UserFollowBtn onClick={handleFollowed}>😽 팔로우하기</UserFollowBtn>
          ) : (
            <UserFollowBtn onClick={handleUnFollowed}>😽 언팔로우하기</UserFollowBtn>
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
                <ReplyUserUserNameDiv>{item.authorEmail}</ReplyUserUserNameDiv>
                <ReplyCreateAtDiv>{item.createdAt?.slice(0, 10) || ""}</ReplyCreateAtDiv>

                {me?.email === item.authorEmail &&
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

export default TraceDetail;
