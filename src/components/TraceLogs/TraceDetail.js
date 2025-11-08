// src/components/trace/TraceDetail.jsx
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
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
  TraceImagesWrapper,
  MetaRow,
} from "../../styles/components/TraceDetailStyled";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import Cookies from "js-cookie";
import ReportButton from "../../components/report/ReportButton";

/* ---------- Local pill buttons ---------- */
const ButtonsRow = styled.div`
  display: inline-flex;
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

const stripHashtags = (text = "") =>
  text
    // 줄 시작 또는 공백 뒤의 #태그 제거
    .replace(/(^|\s)#[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣_]+/gm, "$1")
    // 줄 끝의 여분 공백 정리
    .replace(/[ \t]+(\r?\n)/g, "$1");



/* ---------- Const ---------- */
const DEFAULT_PROFILE =
  "https://d3sutbt651osyh.cloudfront.net/assets/profile/default.png";
const EXIT_MS = 260;

/* ---------- Hashtag util & chips ---------- */
const extractHashtags = (text) => {
  if (!text) return [];
  const re = /#([a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣_]+)/g;
  const uniq = new Set();
  let m;
  while ((m = re.exec(text))) uniq.add(m[1]);
  return Array.from(uniq);
};

const HashChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
`;
const HashChip = styled.button`
  appearance: none;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #334155;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
`;

const TraceDetail = () => {
  const [traceInfo, setTraceInfo] = useState({});
  const [replys, setReplys] = useState([]);
  const [replyInput, setReplyInput] = useState("");
  const [replyUpdateInput, setReplyUpdateInput] = useState("");
  const [me, setMe] = useState(null);
  const [followings, setFollowings] = useState([]);
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [imgErr, setImgErr] = useState(false);

  // per-reply animation: 'enter' | 'new' | 'exit'
  const [animMap, setAnimMap] = useState({});
  const prevIdsRef = useRef(new Set());

  const accessToken = Cookies.get("accessToken");
  const navigator = useNavigate();
  const { no } = useParams();

  // reveal animations
  const wrapperRef = useRef(null);
  useEffect(() => {
    const root = wrapperRef.current;
    if (!root) return;
    const revealNodes = root.querySelectorAll("[data-reveal='true']");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const delay = Number(e.target.getAttribute("data-delay") || 0);
          setTimeout(() => e.target.setAttribute("data-show", "true"), delay);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealNodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [traceInfo.id, replys.length]);

  // board
  useEffect(() => {
    axios
      .get(`https://api.stackflov.com/boards/${no}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => setTraceInfo(res.data))
      .catch((err) => console.error("Error fetching board:", err));
  }, [no]);

  // me & followings
  const fetchedMeRef = useRef(false);
  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token || fetchedMeRef.current) return;
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
        if (res2?.data) setFollowings(res2.data.map((u) => u.id));
      })
      .catch((err) => console.error("Error fetching me/followings:", err));
  }, []);

  // replies
  const fetchReplies = useCallback(() => {
    axios
      .get(`https://api.stackflov.com/comments/board/${no}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        const next = Array.isArray(res.data) ? res.data : [];
        const prev = prevIdsRef.current;
        const added = next.filter((r) => !prev.has(r.id));
        if (added.length) {
          setAnimMap((m) => ({
            ...m,
            ...Object.fromEntries(added.map((x) => [x.id, "new"])),
          }));
        }
        prevIdsRef.current = new Set(next.map((r) => r.id));
        setReplys(next);
      })
      .catch((err) => console.error("Error fetching replies:", err));
  }, [no]);

  useEffect(() => {
    fetchReplies();
  }, [fetchReplies]);

  // create
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

  // update
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

  // delete (optimistic + exit anim)
  const handleReplyDel = (id) => {
    setAnimMap((m) => ({ ...m, [id]: "exit" }));

    setTimeout(() => {
      // optimistic remove
      setReplys((prev) => {
        const next = prev.filter((r) => r.id !== id);
        prevIdsRef.current = new Set(next.map((r) => r.id));
        return next;
      });
      if (editingReplyId === id) {
        setEditingReplyId(null);
        setReplyUpdateInput("");
      }

      axios
        .delete(`https://api.stackflov.com/comments/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        })
        .then(() => {
          // keep optimistic state
        })
        .catch((err) => {
          console.error("Error deleting reply:", err);
          fetchReplies();
        });
    }, EXIT_MS);
  };

  const hasImages =
   Array.isArray(traceInfo.imageUrls) && traceInfo.imageUrls.length > 0;
  // follow/unfollow
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

  // board delete
  const handleBoardDelete = async () => {
    if (!me?.email || me.email !== traceInfo.authorEmail) {
      alert("작성자만 삭제할 수 있습니다.");
      return;
    }
    if (!window.confirm("이 게시글을 삭제할까요?")) return;

    try {
      await axios.delete(`https://api.stackflov.com/boards/${no}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      alert("삭제되었습니다.");
      navigator("/");
    } catch (err) {
      console.error("Error deleting board:", err?.response || err);
      const msg =
        err?.response?.status === 403
          ? "삭제 권한이 없습니다."
          : "삭제에 실패했습니다.";
      alert(msg);
    }
  };

  // image
  const imgSrc = useMemo(
    () => traceInfo.authorProfileImageUrl || DEFAULT_PROFILE,
    [traceInfo.authorProfileImageUrl]
  );
  useEffect(() => setImgErr(false), [imgSrc]);

  const isFollowing = useMemo(() => {
    if (!traceInfo.authorId) return false;
    return followings.includes(traceInfo.authorId);
  }, [followings, traceInfo.authorId]);

  const category = { 0: "🏠 자취", 1: "⚡ 번개", 2: "🍯️ 꿀팁", 3: "🍙 레시피" };

  const contentForView = useMemo(
  () => stripHashtags(traceInfo?.content || ""),
  [traceInfo?.content]
  );

  // hashtags (서버 값 우선, 없으면 본문 파싱)
  const hashtags = useMemo(() => {
    if (Array.isArray(traceInfo?.hashtags) && traceInfo.hashtags.length > 0) {
      return traceInfo.hashtags.map(String);
    }
    return extractHashtags(traceInfo?.content);
  }, [traceInfo]);

  return (
    <TraceDetailWrapper ref={wrapperRef}>
      <TraceDetailTopContent data-reveal="true" data-delay="0">
        <TraceDiv>자취로그</TraceDiv>

        <TraceTitleDiv>{traceInfo.title}</TraceTitleDiv>

        <TraceCategoryDiv>
          <ReportButton
            contentId={Number(no)}
            contentType="BOARD"
            accessToken={accessToken}
            size="sm"
            variant="pill"
          />
          <TraceCategorySelectorItem>
            {category[traceInfo.category]}
          </TraceCategorySelectorItem>
        </TraceCategoryDiv>

        {hashtags.length > 0 && (
          <div style={{ gridColumn: "1 / -1" }}>
            <HashChips>
              {hashtags.map((tag) => (
                <HashChip
                  key={tag}
                  onClick={() =>
                    navigator(`/trace?tag=${encodeURIComponent(tag)}`)
                  }
                  title={`#${tag} 태그로 보기`}
                >
                  #{tag}
                </HashChip>
              ))}
            </HashChips>
          </div>
        )}
      </TraceDetailTopContent>

      <TraceDetailMiddleContent data-reveal="true" data-delay="60">
        <MetaRow>
          <TraceCreatedAtDiv>
            작성일 : {traceInfo?.createdAt?.slice(0, 10) || ""}
          </TraceCreatedAtDiv>

          {me?.email && traceInfo.authorEmail === me.email && (
            <ButtonsRow>
              <EditBtn onClick={() => navigator(`/trace/update/${no}`)} />
              <DeleteBtn onClick={handleBoardDelete} />
            </ButtonsRow>
          )}
        </MetaRow>

        <TraceContentDiv>{contentForView}</TraceContentDiv>

  {hasImages && (
   <TraceImagesWrapper>
     {traceInfo.imageUrls.map((url, idx) => (
       <img
         key={idx}
         src={url}
         alt={`게시글 이미지 ${idx + 1}`}
         loading="lazy"
         decoding="async"
       />
     ))}
   </TraceImagesWrapper>
 )}
      </TraceDetailMiddleContent>

      <TraceDetailBottomContent data-reveal="true" data-delay="120">
        <UserImageDiv style={{ borderRadius: "50%", overflow: "hidden" }}>
          {imgErr ? (
            <AccountCircleIcon style={{ fontSize: 72, color: "#c8ceda" }} />
          ) : (
            <img
              key={imgSrc}
              src={imgSrc}
              alt="author"
              width={100}
              height={100}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
            <UserFollowBtn onClick={handleFollowed}>😽 팔로우하기</UserFollowBtn>
          ) : (
            <UserFollowBtn onClick={handleUnFollowed}>
              😽 언팔로우하기
            </UserFollowBtn>
          )}
        </UserInfoDiv>
      </TraceDetailBottomContent>

      <ReplyCreateDiv data-reveal="true" data-delay="160">
        <ReplyInput
          placeholder="댓글을 입력하세요"
          value={replyInput}
          onChange={(e) => setReplyInput(e.target.value)}
        />
        <ReplyCreateBtn onClick={handleReplyCreate}>댓글 작성</ReplyCreateBtn>
      </ReplyCreateDiv>

      {replys.map((item, i) => {
        const isEditing = editingReplyId === item.id;
        return (
          <ReplyDiv
            key={item.id}
            $anim={animMap[item.id] || "enter"}
            onAnimationEnd={() => {
              setAnimMap((m) => {
                const { [item.id]: _drop, ...rest } = m;
                return rest;
              });
            }}
            data-reveal="true"
            data-delay={200 + Math.min(i, 10) * 40}
          >
            <ReplyContentWrapper>
              <ReplyHeader>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <ReplyUserUserNameDiv>{item.authorEmail}</ReplyUserUserNameDiv>
                  <ReplyCreateAtDiv>
                    {item.createdAt?.slice(0, 10) || ""}
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

                  {me?.email === item.authorEmail && !isEditing && (
                    <>
                      <EditBtn
                        onClick={() => {
                          setEditingReplyId(item.id);
                          setReplyUpdateInput(item.content);
                        }}
                      />
                      <DeleteBtn onClick={() => handleReplyDel(item.id)} />
                    </>
                  )}

                  {me?.email === item.authorEmail && isEditing && (
                    <>
                      <SaveBtn onClick={() => handleReplyUpdate(item.id)} />
                      <CancelBtn onClick={() => setEditingReplyId(null)} />
                    </>
                  )}
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
