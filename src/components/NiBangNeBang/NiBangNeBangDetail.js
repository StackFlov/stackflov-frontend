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
  TraceImagesWrapper,
  MetaRow,
} from "../../styles/components/TraceDetailStyled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import Cookies from "js-cookie";
import ReportButton from "../../components/report/ReportButton";

const DEFAULT_PROFILE =
  "https://d3sutbt651osyh.cloudfront.net/assets/profile/default.png";

/* -------------------------------
   공통 pill 버튼(자취로그와 동일)
----------------------------------*/
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
  &:active { transform: translateY(1px); }
  &:disabled { opacity: 0.55; cursor: not-allowed; }
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

/* =====================================
   컴포넌트
===================================== */
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
    if (fetchedMeRef.current) return;
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

  // 본인 작성자 여부
  const isAuthor = useMemo(() => {
    if (!detail || !me) return false;
    return detail.authorEmail === me.email;
  }, [detail, me]);

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
      navigate("/nibangnebang"); // 목록 경로에 맞게 수정
    } catch (err) {
      console.error("Error deleting review:", err?.response || err);
      const msg =
        err?.response?.status === 403
          ? "삭제 권한이 없습니다."
          : "삭제에 실패했습니다.";
      alert(msg);
    }
  };

  if (!detail) return <div style={{ padding: 24 }}>로딩 중…</div>;

  return (
    <TraceDetailWrapper>
      {/* 상단 */}
      <TraceDetailTopContent>
        <TraceDiv>니방내방</TraceDiv>
        <TraceTitleDiv>{detail.title}</TraceTitleDiv>
        <TraceCategoryDiv>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* 🚩 게시글 신고 (REVIEW) */}
            <ReportButton
              contentId={Number(id)}
              contentType="REVIEW"
              accessToken={accessToken}
              size="sm"
              variant="pill"
            />
            <TraceCategorySelectorItem>
              {detail.address || "주소 미기재"}
            </TraceCategorySelectorItem>
          </div>
        </TraceCategoryDiv>
      </TraceDetailTopContent>

      {/* 중단(메타/내용/이미지) */}
      <TraceDetailMiddleContent
        style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
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

        {/* 본문 내용 */}
        <TraceContentDiv style={{ whiteSpace: "pre-wrap", float: "none", width: "100%" }}>
          {detail.content}
        </TraceContentDiv>

        {/* 리뷰 이미지 */}
        {Array.isArray(detail.imageUrls) && detail.imageUrls.length > 0 && (
          <TraceImagesWrapper>
            {detail.imageUrls.map((url, idx) => (
              <img
                key={`${url}-${idx}`}
                src={url}
                alt={`review-${idx}`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </TraceImagesWrapper>
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
                {/* 왼쪽: 작성자/일자 */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <ReplyUserUserNameDiv>{item.authorEmail}</ReplyUserUserNameDiv>
                  <ReplyCreateAtDiv>
                    {item.createdAt ? item.createdAt.slice(0, 10) : ""}
                  </ReplyCreateAtDiv>
                </div>

                {/* 오른쪽: 신고 + 액션 버튼들(자취로그와 동일) */}
                <ButtonsRow>
                  {/* 🚩 댓글 신고 */}
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
