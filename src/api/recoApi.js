import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "",
  withCredentials: true, // 쿠키/JWT-쿠키면 유지
});

// ✅ 이벤트 로깅
export const postUserEvent = ({ boardId, type, value = null }) =>
  client.post("/api/events", { boardId, type, value });

// ✅ 개인화 추천 피드: [{ boardId, score }]
export const getPersonalFeed = (size = 20) =>
  client.get("/api/feed/personal", { params: { size } }).then((res) => res.data);

// ✅ 게시글 상세 (너희 백엔드 경로가 다르면 여기만 바꿔)
export const getBoardDetail = (boardId) =>
  client.get(`/api/boards/${boardId}`).then((res) => res.data);

// ✅ 콜드스타트 fallback (있으면 맞춰서 바꿔)
// 없으면 PersonalFeedPage에서 기존 feedApi 함수를 쓰도록 바꿔도 됨
export const getPopularBoards = (size = 20) =>
  client.get("/api/boards/popular", { params: { size } }).then((res) => res.data);

export const getRecentBoards = (size = 20) =>
  client.get("/api/boards/recent", { params: { size } }).then((res) => res.data);