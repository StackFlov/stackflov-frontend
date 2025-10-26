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

const TraceDetail = () => {
  const [traceInfo, setTraceInfo] = useState({});
  const [traceCreateUserInfo, setTraceCreateUserInfo] = useState({});
  const [replys, setReplys] = useState([]);
  const [replyInput, setReplyInput] = useState("");
  const [replyUpdateInput, setReplyUpdateInput] = useState("");
  const [updateAble, setUpdateAble] = useState(false);
  const [me, setMe] = useState({});
  const [followings, setFollowings] = useState([]);
  const [editingReplyId, setEditingReplyId] = useState(null);
  const accessToken = Cookies.get("accessToken");
  const navigator = useNavigate();

  const category = {
    0: "🏠 자취",
    1: "⚡ 번개",
    2: "🍯️ 꿀팁",
    3: "🍙 레시피",
  };
  const { no } = useParams();

  useEffect(() => {
    const token = Cookies.get("accessToken");

    if (token != undefined) {
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
          axios
            .get(
              `https://api.stackflov.com/follows/following/${res.data.id}`,
              {
                followedId: res.data.id,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
              }
            )
            .then((res2) => {
              const data = res2.data;
              const newData = [];
              data.map((item) => {
                newData.push(item.id);
              });
              setFollowings(newData);
            })
            .catch((err) => {
              console.error("Error fetching user data:", err);
            });
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    }

    axios
      .get(`https://api.stackflov.com/comments/board/${no}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setReplys(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      });
  }, [accessToken, no]);

  // 댓글 등록 핸들러
  const handleReplyCreate = () => {
    if (me.id != undefined) {
      axios
        .post(
          "https://api.stackflov.com/comments",
          {
            boardId: no,
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
    } else {
      alert("로그인이 필요한 기능입니다.");
    }
  };

  // 댓글 수정 핸들러
  const handleReplyUpdate = (replyNo) => {
    axios
      .put(
        `https://api.stackflov.com/comments/${replyNo}`,
        {
          boardId: no,
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

  // 댓글 목록 새로고침 함수
  const fetchReplies = () => {
    axios
      .get(`https://api.stackflov.com/comments/board/${no}`, {
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

  const handleReplyDel = (id) => {
    axios
      .delete(
        `https://api.stackflov.com/comments/${id}`,

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

  const handleFollowed = () => {
    axios
      .post(
        "https://api.stackflov.com/follows/follow",
        {
          followedId: traceInfo.authorId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {})
      .catch((err) => {
        console.error("Error creating reply:", err);
      });
  };

  const handleUnFollowed = () => {
    axios
      .delete(
        `https://api.stackflov.com/follows/${traceInfo.authorId}`,
        {
          followedId: traceInfo.authorId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {})
      .catch((err) => {
        console.error("Error creating reply:", err);
      });
  };

  useEffect(() => {
    axios
      .get(`https://api.stackflov.com/boards/${no}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setTraceInfo(res.data);
      });
  }, [no]);

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
        {traceInfo.authorEmail === me.email && (
          <TraceUpdateDiv
            onClick={() => {
              navigator(`/trace/update/${no}`);
            }}
          >
            수정
          </TraceUpdateDiv>
        )}
        <TraceContentDiv>{traceInfo.content}</TraceContentDiv>
      </TraceDetailMiddleContent>
      <TraceDetailBottomContent>
        <UserImageDiv>
          {traceCreateUserInfo.profileImage === null ? (
            <AccountCircleIcon style={{ fontSize: "150px" }} />
          ) : (
            <img
              src={traceCreateUserInfo.profileImage}
              alt="user"
              width="150"
              height="150"
              style={{ borderRadius: "50%" }}
            />
          )}
        </UserImageDiv>
        <UserInfoDiv>
          <UserNickName>{me.email}</UserNickName>
          {followings.indexOf(traceInfo.authorId) == -1 ? (
            <UserFollowBtn
              onClick={() => {
                if (me.id != undefined) {
                  handleFollowed();
                } else {
                  alert("로그인이 필요한 기능입니다.");
                }
              }}
            >
              😽 팔로우하기
            </UserFollowBtn>
          ) : (
            <UserFollowBtn
              onClick={() => {
                if (me.id != undefined) {
                  handleUnFollowed();
                } else {
                  alert("로그인이 필요한 기능입니다.");
                }
              }}
            >
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
    </TraceDetailWrapper>
  );
};

export default TraceDetail;
