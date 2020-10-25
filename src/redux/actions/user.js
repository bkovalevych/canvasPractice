import CNST from "../../constants/";

export function signUpAction(data) {
  return {
    type: CNST.USER.SIGN_UP.FETCH,
    payload: data,
  };
}

export function getUserAction() {
  return {
    type: CNST.USER.GET_PROFILE.FETCH,
  };
}
