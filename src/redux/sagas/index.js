import { takeLatest } from "redux-saga/effects";
import CNST from "../../constants";
import {getUser, signIn, signUp, logout} from "./user";

export default function* rootSaga() {
  yield takeLatest(CNST.USER.SIGN_IN.FETCH, signIn);
  yield takeLatest(CNST.USER.SIGN_UP.FETCH, signUp);
  yield takeLatest(CNST.USER.GET_PROFILE.FETCH, getUser);
  yield takeLatest(CNST.USER.LOGOUT.FETCH, logout)
}
