import { takeLatest } from "redux-saga/effects";
import CNST from "../../constants";
import { getUser, signUp } from "./user";

export default function* rootSaga() {
  yield takeLatest(CNST.USER.SIGN_UP.FETCH, signUp);
  yield takeLatest(CNST.USER.GET_PROFILE.FETCH, getUser);
}
