import CNST from "../../constants";
import user from "../stores/user";

export default function (state = user, action) {
  switch (action.type) {
    case CNST.USER.SIGN_UP.SUCCESS:
      return {
        ...state,
        fetching: false,
      };
    case CNST.USER.SIGN_UP.ERROR:
      return {
        ...state,
        ...action.payload,
        fetching: false,
      };
    case CNST.USER.SIGN_UP.FETCH:
      return {
        ...state,
        ...action.payload,
        fetching: true,
      };
    case CNST.USER.GET_PROFILE.FETCH:
      return {
        ...state,
        fetching: true,
      };
    case CNST.USER.GET_PROFILE.SUCCESS:
      return {
        ...state,
        ...action.payload,
        fetching: false,
        isGetUserFetched: true,
      };
    case CNST.USER.GET_PROFILE.ERROR:
      return {
        ...state,
        fetching: false,
        isGetUserFetched: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
