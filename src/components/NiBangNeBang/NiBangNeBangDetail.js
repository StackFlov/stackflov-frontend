// src/components/NiBangNeBang/NiBangNeBangDetail.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
  TraceDiv,
  TraceContentDiv,
  TraceCreatedAtDiv,
  TraceDetailBottomContent,
  TraceCategoryDiv,
  TraceDetailWrapper,
  TraceTitleDiv,
  UserImageDiv,
  UserInfoDiv,
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
} from "../../styles/components/NiBangNeBangDetailStyled";

import ReportButton from "../../components/report/ReportButton";

const DEFAULT_PROFILE =
  "https://d3sutbt651osyh.cloudfront.net/assets/profile/default.png";

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

  const [replyInput, setReplyInput] = useState("");
  const [replyUpdateInput, setReplyUpdateInput] = useState("");
  const [editingReplyId, setEditingReplyId] = useState(null);

  const fetchedMeRef = useRef(false);

  // 상세
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

  // me
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
      .then((res) => setMe(res.data))
      .catch((err) => console.error("Error fetching me:", err));
  }, [accessToken]);

  // 댓글 로딩
  const loadReplies = () => {
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
  };
  useEffect(() => {
    loadReplies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const isAuthor = useMemo(() => {
    if (!detail || !me) return false;
    return detail.authorEmail === me.email;
  }, [detail, me]);

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

  // 리뷰 삭제
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

  return (
    <TraceDetailWrapper>
      {/* 상단 */}
      <TopSection>
        <TraceDiv>니방내방</TraceDiv>
        <TitleBar>
          <TraceTitleDiv style={{ margin: 0 }}>{detail.title}</TraceTitleDiv>
        </TitleBar>
      </TopSection>

      {/* 주소/평점/신고 칩 */}
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
      </TraceCategoryDiv>

      {/* 본문/이미지 */}
      <MidSection
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 16,
        }}
      >
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
              <Img
                key={`${url}-${idx}`}
                src={url}
                alt={`review-${idx}`}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.display = "none";
                }}
              />
            ))}
          </TraceImagesWrapper>
        )}
      </MidSection>

      {/* 작성자 */}
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
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <ReplyUserUserNameDiv>{item.authorEmail}</ReplyUserUserNameDiv>
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

                  {imAuthor &&
                    (!isEditing ? (
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
                    ))}
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

export default NiBangNeBangDetail;
