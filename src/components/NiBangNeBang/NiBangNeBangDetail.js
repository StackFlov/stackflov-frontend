import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import {
  TraceDiv,
  TraceContentDiv,
  TraceCreatedAtDiv,
  TraceCategoryDiv,
  TraceDetailWrapper,
  TraceTitleDiv,
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
  TraceImagesWrapper,
  MetaRow,
} from "../../styles/components/TraceDetailStyled";

import {
  TopSection,
  MidSection,
  TitleBar,
  ButtonsRow,
  PillBtn,
  Chips,
  Chip,
  Stars,
  Img,
  BottomRow,
  Avatar,
  AuthorMeta,
  AuthorName,
  AuthorEmail,
} from "../../styles/components/NiBangNeBangDetailStyled";

import ReportButton from "../../components/report/ReportButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const DEFAULT_PROFILE =
  "https://d3sutbt651osyh.cloudfront.net/assets/profile/default.png";

const extractHashtags = (text) => {
  if (!text) return [];
  const re = /#([a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣_]+)/g;
  const uniq = new Set();
  let m;
  while ((m = re.exec(text))) uniq.add(m[1]);
  return Array.from(uniq);
};

/** pill 버튼 조합 */
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

const NiBangNeBangDetail = () => {
  const { id } = useParams(); // reviewId
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");

  const [detail, setDetail] = useState(null);
  const [me, setMe] = useState(null);
  const [replies, setReplies] = useState([]);
  const [followings, setFollowings] = useState([]); // ✅ 팔로우 리스트 상태 추가

  const [replyInput, setReplyInput] = useState("");
  const [replyUpdateInput, setReplyUpdateInput] = useState("");
  const [editingReplyId, setEditingReplyId] = useState(null);

  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const fetchedMeRef = useRef(false);

  // 상세 정보 로딩
  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;

    axios
      .get(`https://api.stackflov.com/map/${id}`, {
        headers,
        withCredentials: true,
      })
      .then((res) =>{
        setDetail(res.data)
        setIsLiked(res.data.liked);
        setIsBookmarked(res.data.bookmarked);
      })
      .catch((err) => console.error("Error fetching review detail:", err));
  }, [id, accessToken]);

  const handleLike = async () => {
    if (!me?.id) return alert("로그인이 필요합니다.");
    const headers = { Authorization: `Bearer ${accessToken}` };
    try {
      if (isLiked) {
        await axios.delete(`https://api.stackflov.com/likes?reviewId=${id}`, {
          headers,
          withCredentials: true
        });
      } else {
        await axios.post(
          "https://api.stackflov.com/likes", 
          { reviewId: Number(id) },
          { headers, withCredentials: true }
        );
      }
      setIsLiked(!isLiked); // 성공 시 상태 반전
    } catch (err) {
      console.error("좋아요 처리 실패:", err);
      alert("좋아요 처리에 실패했습니다.");
    }
  };

  const handleBookmark = async () => {
    if (!me?.id) return alert("로그인이 필요합니다.");
    const headers = { Authorization: `Bearer ${accessToken}` };
    try {
      if (isBookmarked) {
        await axios.delete("https://api.stackflov.com/bookmarks", {
          headers,
          withCredentials: true,
          data: { reviewId: id } 
        });
      } else {
        await axios.post(
          "https://api.stackflov.com/bookmarks",
          { reviewId: id },
          { headers, withCredentials: true }
        );
      }
      setIsBookmarked(!isBookmarked);
    } catch (err) { console.error(err); }
  };
  
  const hashtags = useMemo(() => {
    if (!detail) return [];
    if (Array.isArray(detail.hashtags) && detail.hashtags.length > 0) {
      return detail.hashtags.map(String);
    }
    return extractHashtags(detail.content);
  }, [detail]);

  // 내 정보 및 팔로우 리스트 로딩
  useEffect(() => {
    if (!accessToken || fetchedMeRef.current) return;
    fetchedMeRef.current = true;

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
        return axios.get(`https://api.stackflov.com/follows/following/${res.data.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        });
      })
      .then((res2) => {
        if (res2?.data) setFollowings(res2.data.map((u) => u.id));
      })
      .catch((err) => console.error("Error fetching me/followings:", err));
  }, [accessToken]);

  // 댓글 로딩
  const loadReplies = useCallback(() => {
    const headers = { "Content-Type": "application/json" };
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;

    axios
      .get(`https://api.stackflov.com/comments/review/${id}`, {
        headers,
        withCredentials: true,
      })
      .then((res) => setReplies(res.data))
      .catch((err) => {
        console.error("Error fetching replies:", err?.response || err);
      });
  }, [id, accessToken]);

  useEffect(() => {
    loadReplies();
  }, [loadReplies]);

  const isAuthor = useMemo(() => {
    if (!detail || !me) return false;
    return detail.authorEmail === me.email;
  }, [detail, me]);

  const isFollowing = useMemo(() => {
    if (!detail?.authorId) return false;
    return followings.includes(detail.authorId);
  }, [followings, detail?.authorId]);

  // ✅ 팔로우/언팔로우 핸들러
  const handleFollowToggle = () => {
    if (!me?.id) return alert("로그인이 필요한 기능입니다.");
    
    if (isFollowing) {
      axios.delete(`https://api.stackflov.com/follows/${detail.authorId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then(() => setFollowings(prev => prev.filter(id => id !== detail.authorId)))
      .catch(err => console.error("Error unfollow:", err));
    } else {
      axios.post("https://api.stackflov.com/follows/follow", { followedId: detail.authorId }, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then(() => setFollowings(prev => [...prev, detail.authorId]))
      .catch(err => console.error("Error follow:", err));
    }
  };

  // ✅ 1:1 채팅 시작 핸들러
  const handleStartChat = async () => {
    if (!me?.id) return alert("로그인이 필요합니다.");
    if (me.id === detail.authorId) return alert("본인과는 채팅할 수 없습니다.");

    try {
      const res = await axios.post(
        "https://api.stackflov.com/chat/rooms",
        { targetUserId: detail.authorId },
        { headers: { Authorization: `Bearer ${accessToken}` }, withCredentials: true }
      );
      const roomId = res.data;
      const event = new CustomEvent("openChatRoom", { detail: { roomId } });
      window.dispatchEvent(event);
    } catch (err) {
      console.error("채팅방 생성 실패:", err);
      alert("채팅방을 열 수 없습니다.");
    }
  };

  // 댓글 작성/수정/삭제
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

  const handleReviewDelete = async () => {
    if (!isAuthor) {
      alert("작성자만 삭제할 수 있습니다.");
      return;
    }
    if (!window.confirm("이 리뷰를 삭제할까요?")) return;

    try {
      await axios.delete(`https://api.stackflov.com/map/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      alert("삭제되었습니다.");
      navigate("/nibangnebang");
    } catch (err) {
      console.error("Error deleting review:", err?.response || err);
      alert("삭제에 실패했습니다.");
    }
  };

  if (!detail) return <div style={{ padding: 24 }}>로딩 중…</div>;

  // ✅ 표시 이름: 닉네임을 우선으로 하고 없으면 이메일 표시
  const authorName = detail?.authorNickname || detail?.authorEmail || "익명";

  const authorAvatar =
    detail?.authorProfileImageUrl ||
    detail?.author?.profileImageUrl ||
    DEFAULT_PROFILE;

  return (
    <TraceDetailWrapper>
      <TopSection>
        <TraceDiv>니방내방</TraceDiv>
        <TitleBar>
          <TraceTitleDiv style={{ margin: 0 }}>{detail.title}</TraceTitleDiv>
        </TitleBar>
      </TopSection>

      <TraceCategoryDiv style={{ float: "none", width: "100%" }}>
        <Chips>
          <Chip>
            <span>📍</span>
            <span>{detail.address || "주소 미기재"}</span>
          </Chip>
          <Chip>
            <span>평점</span>
            <Stars>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < detail.rating ? "★" : "☆"}</span>
              ))}
            </Stars>
          </Chip>
          <ReportButton
            contentId={Number(id)}
            contentType="REVIEW"
            accessToken={accessToken}
            size="sm"
            variant="pill"
          />
        </Chips>
        {hashtags.length > 0 && (
          <Chips style={{ marginTop: 6 }}>
            {hashtags.map((tag) => (
              <Chip
                key={tag}
                role="button"
                onClick={() => navigate(`/nibangnebang?tag=${encodeURIComponent(tag)}`)}
                title={`#${tag} 태그로 보기`}
                style={{ cursor: "pointer" }}
              >
                #{tag}
              </Chip>
            ))}
          </Chips>
        )}
      </TraceCategoryDiv>

      <MidSection style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
        <MetaRow>
          <TraceCreatedAtDiv style={{ float: "none", width: "auto", padding: "8px 0" }}>
            작성일 : {detail?.createdAt?.slice(0, 10)}
          </TraceCreatedAtDiv>
          {isAuthor && (
            <ButtonsRow>
              <EditBtn onClick={() => navigate(`/nibangnebang/update/${id}`)} />
              <DeleteBtn onClick={handleReviewDelete} />
            </ButtonsRow>
          )}
        </MetaRow>

        <TraceContentDiv style={{ whiteSpace: "pre-wrap", float: "none", width: "100%" }}>
          {detail.content}
        </TraceContentDiv>

        {Array.isArray(detail.imageUrls) && detail.imageUrls.length > 0 && (
          <TraceImagesWrapper style={{ gap: 14 }}>
            {detail.imageUrls.map((url, idx) => (
              <Img key={`${url}-${idx}`} src={url} alt={`review-${idx}`} loading="lazy" decoding="async" />
            ))}
          </TraceImagesWrapper>
        )}
      </MidSection>

      <BottomRow>
        <Avatar
          src={authorAvatar}
          alt="author"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/profile/${detail.authorId}`)}
          onError={(e) => { e.currentTarget.src = DEFAULT_PROFILE; }}
        />
        <AuthorMeta>
          {/* ✅ 이메일 대신 닉네임 표시 및 프로필 이동 추가 */}
          <AuthorName 
            style={{ cursor: "pointer" }} 
            onClick={() => navigate(`/profile/${detail.authorId}`)}
          >
            {authorName}
          </AuthorName>
          
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            <UserFollowBtn onClick={handleFollowToggle} style={{ width: "fit-content" }}>
              {isFollowing ? "😽 언팔로우" : "😽 팔로우하기"}
            </UserFollowBtn>
            
            {/* ✅ 1:1 채팅하기 버튼 추가 */}
            <UserFollowBtn onClick={handleStartChat} style={{ width: "fit-content", background: '#eef2ff', color: '#4338ca' }}>
              💬 1:1 채팅하기
            </UserFollowBtn>

            <UserFollowBtn onClick={handleLike} style={{ width: "fit-content", background: isLiked ? '#fff1f2' : '#f8fafc', color: isLiked ? '#e11d48' : '#64748b' }}>
              {isLiked ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
              {isLiked ? " 좋아요 취소" : " 좋아요"}
            </UserFollowBtn>

            <UserFollowBtn onClick={handleBookmark} style={{ width: "fit-content", background: isBookmarked ? '#fefce8' : '#f8fafc', color: isBookmarked ? '#ca8a04' : '#64748b' }}>
              {isBookmarked ? <BookmarkIcon fontSize="small" /> : <BookmarkBorderIcon fontSize="small" />}
              {isBookmarked ? " 북마크 취소" : " 북마크"}
            </UserFollowBtn>
          </div>
        </AuthorMeta>
      </BottomRow>

      <ReplyCreateDiv>
        <ReplyInput
          placeholder="댓글을 입력하세요"
          value={replyInput}
          onChange={(e) => setReplyInput(e.target.value)}
        />
        <ReplyCreateBtn onClick={handleReplyCreate}>댓글 작성</ReplyCreateBtn>
      </ReplyCreateDiv>

      {replies.map((item) => {
        const isEditing = editingReplyId === item.id;
        const imAuthor = me?.email && me.email === item.authorEmail;

        return (
          <ReplyDiv key={item.id}>
            <ReplyContentWrapper>
              <ReplyHeader>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {/* ✅ 댓글 작성자도 닉네임으로 표시 및 프로필 링크 추가 */}
                  <ReplyUserUserNameDiv 
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                    onClick={() => navigate(`/profile/${item.authorId}`)}
                  >
                    {item.authorNickname || item.authorEmail}
                  </ReplyUserUserNameDiv>
                  <ReplyCreateAtDiv>
                    {item.createdAt ? item.createdAt.slice(0, 10) : ""}
                  </ReplyCreateAtDiv>
                </div>

                <ButtonsRow>
                  <ReportButton
                    contentId={item.id}
                    contentType="COMMENT"
                    accessToken={accessToken}
                    size="sm"
                    variant="pill"
                  />
                  {imAuthor && (!isEditing ? (
                    <>
                      <EditBtn onClick={() => { setEditingReplyId(item.id); setReplyUpdateInput(item.content); }} />
                      <DeleteBtn onClick={() => handleReplyDel(item.id)} />
                    </>
                  ) : (
                    <>
                      <SaveBtn onClick={() => handleReplyUpdate(item.id)} />
                      <CancelBtn onClick={() => setEditingReplyId(null)} />
                    </>
                  ))}
                </ButtonsRow>
              </ReplyHeader>
              {isEditing ? (
                <ReplyInput value={replyUpdateInput} onChange={(e) => setReplyUpdateInput(e.target.value)} />
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