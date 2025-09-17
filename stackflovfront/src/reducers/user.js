import { produce } from "immer";
import {
  // CHECK_USER_ID_FAILURE,
  // CHECK_USER_ID_REQUEST,
  // CHECK_USER_ID_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  USERS_DETAIL_REQUEST,
  USERS_DETAIL_SUCCESS,
  USERS_DETAIL_FAILURE,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAILURE,
  USER_DETAIL_REQUEST,
  USER_DETAIL_UPDATE_SUCCESS,
  USER_DETAIL_UPDATE_FAILURE,
  USER_DETAIL_UPDATE_REQUEST,
} from "../constans/actionTypes";

export const initalState = {
  // checkIdLoading: false, // 유저 아이디 중복확인 시도중
  // checkIdDone: false,
  // checkIdError: null,
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  registerLoading: false, // 회원가입 시도중
  registerDone: false,
  registerError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  userDetailLoding: false, // 유저 데이터 로드
  userDetailDone: false,
  userDetailEror: false,
  usersDetailLoding: false, // 유저들 데이터 로드
  usersDetailDone: false,
  usersDetailEror: false,
  userDetailUpdateLoding: false, // 유저 데이터 업데이트
  userDetailUpdateDone: false,
  userDetailUpdateEror: false,
  idValid: false,
  isLogIn: false,
  users: [],
  me: {},
};

const reducer = (state = initalState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // 아이디 증복체크
      // case CHECK_USER_ID_REQUEST:
      //   draft.checkIdLoading = true;
      //   draft.checkIdError = null;
      //   draft.checkIdDone = false;
      //   break;
      // case CHECK_USER_ID_SUCCESS:
      //   draft.idValid = action.data;
      //   draft.checkIdLoading = false;
      //   draft.checkIdDone = true;
      //   break;
      // case CHECK_USER_ID_FAILURE:
      //   draft.checkIdLoading = false;
      //   draft.checkIdError = action.error;
      //   break;
      // 로그인
      case LOGIN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;
      case LOGIN_SUCCESS:
        draft.isLogIn = true;
        draft.logInLoading = false;
        draft.logInDone = true;
        break;
      case LOGIN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      // 회원가입
      case REGISTER_REQUEST:
        draft.registerLoading = true;
        draft.registerError = null;
        draft.registerDone = false;
        break;
      case REGISTER_SUCCESS:
        draft.registerLoading = false;
        draft.registerDone = true;
        break;
      case REGISTER_FAILURE:
        draft.registerLoading = false;
        draft.registerError = action.error;
        break;

      // 로그아웃
      case LOGOUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;
      case LOGOUT_SUCCESS:
        draft.isLogIn = false;
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = {};
        break;
      case LOGOUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      // 유저들 데이터 가져오기
      case USERS_DETAIL_REQUEST:
        draft.usersDetailLoding = true;
        draft.usersDetailError = null;
        draft.usersDetailDone = false;
        break;
      case USERS_DETAIL_SUCCESS:
        draft.usersDetailLoading = false;
        draft.usersDetailDone = true;
        draft.users = action.data;
        break;
      case USERS_DETAIL_FAILURE:
        draft.usersDetailLoading = false;
        draft.usersDetailError = action.error;
        break;

      // 로그인 유저 데이터 가져오기
      case USER_DETAIL_REQUEST:
        draft.userDetailLoding = true;
        draft.userDetailError = null;
        draft.userDetailDone = false;
        break;
      case USER_DETAIL_SUCCESS:
        draft.userDetailLoading = false;
        draft.userDetailDone = true;
        draft.me = action.data;
        break;
      case USER_DETAIL_FAILURE:
        draft.userDetailLoading = false;
        draft.userDetailError = action.error;
        break;

      // 유저 데이터 업데이트
      case USER_DETAIL_UPDATE_REQUEST:
        draft.userDetailUpdateLoding = true;
        draft.userDetailUpdateError = null;
        draft.userDetailUpdateDone = false;
        break;
      case USER_DETAIL_UPDATE_SUCCESS:
        draft.userDetailUpdateLoading = false;
        draft.userDetailUpdateDone = true;
        draft.me = action.data;
        break;
      case USER_DETAIL_UPDATE_FAILURE:
        draft.userDetailUpdateLoading = false;
        draft.userDetailUpdateError = action.error;
        break;

      default:
        return state;
    }
  });

export default reducer;
