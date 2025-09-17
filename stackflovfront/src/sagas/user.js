import axios from "axios";
import { call, put, all, fork, takeLatest } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  USERS_DETAIL_SUCCESS,
  USERS_DETAIL_FAILURE,
  USERS_DETAIL_REQUEST,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAILURE,
  USER_DETAIL_UPDATE_FAILURE,
  USER_DETAIL_UPDATE_SUCCESS,
  USER_DETAIL_UPDATE_REQUEST,
} from "../constans/actionTypes";

axios.defaults.withCredentials = true;

const logInAPI = (data) => {
  return axios.post(`/login`, data.data);
};

const registerUpAPI = (action) => {
  return axios.post(`/register`, action.body.format);
};

const logOutAPI = () => {
  return axios.post(`/logout`);
};

const userDetailAPI = (accessToken) => {
  return axios.get("/userdetail", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const usersDetailAPI = () => {
  return axios.get("/users");
};

const userDetailUpdateAPI = (action) => {
  return axios.put(`/user/${action.data.id}`, action.data.data);
};

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action);
    document.cookie = `accessToken=${result.data.accessToken};`;
    document.cookie = `refreshToken=${result.data.refreshToken};`;

    yield put({
      type: LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

function* Register(action) {
  try {
    const result = yield call(registerUpAPI, action);
    yield put({
      type: REGISTER_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: REGISTER_FAILURE,
      error: err.response.data,
    });
  }
}

function* logOut() {
  const result = yield call(logOutAPI);
  try {
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOGOUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* userDetail(action) {
  try {
    const result = yield call(userDetailAPI, action.data);
    yield put({
      type: USER_DETAIL_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: USER_DETAIL_FAILURE,
      error: err.response.data,
    });
  }
}

function* usersDetail() {
  const result = yield call(usersDetailAPI);
  try {
    yield put({
      type: USERS_DETAIL_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: USERS_DETAIL_FAILURE,
      error: err.response.data,
    });
  }
}

function* userDetailUpdate(action) {
  const result = yield call(userDetailUpdateAPI, action);
  try {
    yield put({
      type: USER_DETAIL_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: USER_DETAIL_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOGIN_REQUEST, logIn);
}

function* watchRegister() {
  yield takeLatest(REGISTER_REQUEST, Register);
}

function* watchLogOut() {
  yield takeLatest(LOGOUT_REQUEST, logOut);
}

function* watchUserDetail() {
  yield takeLatest(USER_DETAIL_REQUEST, userDetail);
}

function* watchUsersDetail() {
  yield takeLatest(USERS_DETAIL_REQUEST, usersDetail);
}

function* watchUserDetailUpdate() {
  yield takeLatest(USER_DETAIL_UPDATE_REQUEST, userDetailUpdate);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchRegister),
    fork(watchLogOut),
    fork(watchUserDetail),
    fork(watchUsersDetail),
    fork(watchUserDetailUpdate),
  ]);
}
