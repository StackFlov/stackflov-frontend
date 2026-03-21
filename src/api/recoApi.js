import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "",
  withCredentials: true, // 쿠키/JWT-쿠키 유지
});

// ✅ 이벤트 로깅
export const postUserEvent = ({ boardId, type, value = null }) =>
  client.post("/api/events", { boardId, type, value });

// ✅ 개인화 추천 피드
export const getPersonalFeed = (size = 20) =>
  client.get("/api/feed/personal", { params: { size } }).then((res) => res.data);

// ✅ 게시글 상세
export const getBoardDetail = (boardId) =>
  client.get(`/api/boards/${boardId}`).then((res) => res.data);

// ✅ 인기 게시글 (rs -> res로 수정)
export const getPopularBoards = (size = 20) =>
  client.get("/api/boards/popular", { params: { size } }).then((res) => res.data);

// ✅ 최신 게시글
export const getRecentBoards = (size = 20) =>
  client.get("/api/boards/recent", { params: { size } }).then((res) => res.data);

// ✅ 추천 이벤트 로그 (api -> client로 수정)
export const logRecoEvent = async ({ boardId, type, value = null }) => {
  await client.post("/api/events", { boardId, type, value });
};

// ✅ 개인화 추천 가져오기 (api -> client로 수정)
export const getPersonalReco = async (size = 20) => {
  const res = await client.get("/api/feed/personal", { params: { size } });
  return res.data;
};