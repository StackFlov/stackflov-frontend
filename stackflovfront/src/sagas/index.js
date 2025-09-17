import { all, fork } from "redux-saga/effects";
import userSaga from "./user";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:7777"; // API 서버 주소
//axios.defaults.withCredentials = true; // 요청에 인증 정보(쿠키) 포함

// 이후 API 요청 시 axios.post("/login", data); 와 같이 사용합니다.

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
