import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  TraceListDummyData,
  UserDummyData,
  ReplyDummyData,
  MyInfoDUmmyDatas,
} from "../../utils/dummyDatas";
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
  ReplyUserImageDiv,
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

const NiBangNeBangDetail = () => {
  // 기존 상태
  const [traceInfo, setTraceInfo] = useState({});
  const [me, setMe] = useState({});
  const [view, setView] = useState();
  const accessToken = Cookies.get("accessToken");
  const navigator = useNavigate();

  // 🔽 TraceDetail에서 복사한 댓글 관련 상태 추가
  const [replys, setReplys] = useState([]);
  const [replyInput, setReplyInput] = useState("");
  const [replyUpdateInput, setReplyUpdateInput] = useState("");
  // const [updateAble, setUpdateAble] = useState(false); // 사용되지 않아 제외
  const [editingReplyId, setEditingReplyId] = useState(null);
  // ----------------------------------------------------

  const { id } = useParams();

  // 🔽 댓글 목록 새로고침 함수 (TraceDetail에서 복사)
  const fetchReplies = () => {
    axios
      .get(`https://api.stackflov.com/comments/review/${id}`, {
        // no 대신 id 사용
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setReplys(res.data);
      })
      .catch((err) => {
        console.error("Error fetching replies:", err);
      });
  };
  // ----------------------------------------------------

  // 🔽 댓글 등록 핸들러 (TraceDetail에서 복사)
  const handleReplyCreate = () => {
    axios
      .post(
        "https://api.stackflov.com/comments",
        {
          reviewId: id, // no 대신 id 사용
          content: replyInput,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        setReplyInput("");
        fetchReplies();

      })
      .catch((err) => {
        console.error("Error creating reply:", err);
      });
  };

  // 🔽 댓글 수정 핸들러 (TraceDetail에서 복사)
  const handleReplyUpdate = (replyNo) => {
    axios
      .put(
        `https://api.stackflov.com/comments/${replyNo}`,
        {
          boardId: id, // no 대신 id 사용
          content: replyUpdateInput,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        setEditingReplyId(null);
        setReplyUpdateInput("");
        fetchReplies();
      })
      .catch((err) => {
        console.error("Error updating reply:", err);
      });
  };

  // 🔽 댓글 삭제 핸들러 (TraceDetail에서 복사)
  const handleReplyDel = (replyId) => {
    axios
      .delete(
        `https://api.stackflov.com/comments/${replyId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        fetchReplies();
      })
      .catch((err) => {
        console.error("Error deleting reply:", err);
      });
  };
  // ----------------------------------------------------

  useEffect(() => {
    axios
      .get(
        `https://api.stackflov.com/map/reviews`,
        // 게시글 상세 정보를 해당 API를 통해 필터링해서 가져오는 로직 (기존 코드 유지)
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
        setTraceInfo(exportResult[0]);
        axios
          .get("https://api.stackflov.com/users/me", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          })
          .then((userData) => {
            setMe(userData.data);
          });

        // 🔽 초기 댓글 로딩 로직 추가 (TraceDetail에서 복사)
        axios
          .get(`https://api.stackflov.com/comments/review/${id}`, {
            // no 대신 id 사용
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          })
          .then((res) => {
            setReplys(res.data);
          })
          .catch((err) => {
            console.error("Error fetching initial replies:", err);
          });
        // ----------------------------------------------------
      });
  }, [id, accessToken]); // 의존성 배열에 id, accessToken 추가

  useEffect(() => {
    const test = (
      <TraceDetailWrapper>
        <TraceDetailTopContent>
          <TraceDiv>자취로그</TraceDiv>
          <TraceTitleDiv>{traceInfo.title}</TraceTitleDiv>
        </TraceDetailTopContent>
        <TraceDetailMiddleContent>
          <TraceCreatedAtDiv>
            작성일 : {traceInfo?.createdAt?.slice(0, 10)}
          </TraceCreatedAtDiv>
          {traceInfo.authorNickname === me.nickname && (
            <TraceUpdateDiv
              onClick={() => {
                navigator(`/nibangnebang/update/${id}`);
              }}
            >
              수정
            </TraceUpdateDiv>
          )}
          <TraceContentDiv>{traceInfo.content}</TraceContentDiv>
        </TraceDetailMiddleContent>
        <TraceDetailBottomContent>
          <UserImageDiv>
            {me.profileImage === null ? (
              <AccountCircleIcon style={{ fontSize: "150px" }} />
            ) : (
              <img
                src={me.profileImage}
                alt="user"
                width="150"
                height="150"
                style={{ borderRadius: "50%" }}
              />
            )}
          </UserImageDiv>
          <UserInfoDiv>
            <UserNickName>{me.email}</UserNickName>
            <UserFollowBtn>😽 팔로우하기</UserFollowBtn>
          </UserInfoDiv>
        </TraceDetailBottomContent>

        {/* 🔽 댓글 작성 영역 추가 (TraceDetail에서 복사) */}
        <ReplyCreateDiv>
          <ReplyInput
            placeholder="댓글을 입력하세요"
            value={replyInput}
            onChange={(e) => setReplyInput(e.target.value)}
          />
          <ReplyCreateBtn onClick={handleReplyCreate}>댓글 작성</ReplyCreateBtn>
        </ReplyCreateDiv>
        {/* ---------------------------------------------------- */}

        {/* 🔽 댓글 목록 렌더링 추가 (TraceDetail에서 복사) */}
        {replys.map((item, idx) => {
          const isEditing = editingReplyId === item.id;

          return (
            <ReplyDiv key={idx}>
              <ReplyContentWrapper>
                <ReplyHeader>
                  <ReplyUserUserNameDiv>{item.authorEmail}</ReplyUserUserNameDiv>
                  <ReplyCreateAtDiv>
                    {item.createdAt ? item.createdAt.slice(0, 10) : ""}
                  </ReplyCreateAtDiv>
                  {me.email === item.authorEmail &&
                    (!isEditing ? (
                      <>
                        <button
                          onClick={() => {
                            setEditingReplyId(item.id);
                            setReplyUpdateInput(item.content);
                          }}
                          style={{ marginLeft: "10px" }}
                        >
                          수정
                        </button>
                        <button
                          onClick={() => {
                            handleReplyDel(item.id);
                          }}
                          style={{ marginLeft: "10px" }}
                        >
                          삭제
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleReplyUpdate(item.id)}
                          style={{ marginLeft: "10px", marginRight: "5px" }}
                        >
                          저장
                        </button>
                        <button onClick={() => setEditingReplyId(null)}>
                          취소
                        </button>
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
        {/* ---------------------------------------------------- */}
      </TraceDetailWrapper>
    );
    setView(test);
  }, [
    me,
    traceInfo,
    replys,
    replyInput,
    replyUpdateInput,
    editingReplyId,
    navigator,
    id,
  ]); // 렌더링 종속성 배열 업데이트

  return <>{view}</>;
};

export default NiBangNeBangDetail;
