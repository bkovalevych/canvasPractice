import { call, put } from "redux-saga/effects";
import CNST from "../../constants";
import axios from "axios";

export const signUpRequest = ({
  email,
  password,
}) => {
  return axios
    .post(`/signUp`, {
      email: email,
      password: password,
    })
    .catch(function (error) {
      throw error.response.data;
    });
};

export function* signUp(props) {
  try {
    const response = yield call(signUpRequest, props.payload);
    if (response.ok) {
      yield put({ type: CNST.USER.SIGN_UP.SUCCESS, payload: response });
    }
  } catch (error) {
    yield put({
      type: CNST.USER.SIGN_UP.ERROR,
      payload: {
        // errors: error,
      },
    });
  }
}

export const getUserRequest = () => {
  return axios.get(`/user-service/me`).catch(function (error) {
    throw error.response.data;
  });
};

export function* getUser() {
  try {
    const response = yield call(getUserRequest);
    yield put({ type: CNST.USER.GET_PROFILE.SUCCESS, payload: response.data });
  } catch (error) {
    // removeToken();
    yield put({
      type: CNST.USER.GET_PROFILE.ERROR,
    });
  }
}
