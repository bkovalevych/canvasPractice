import {call, put} from "redux-saga/effects";
import CNST from "../../constants";
import axios from "axios";

export const signUpRequest = ({email, password, firstName, lastName}) => {
    return axios
        .post(`/signUp`, {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            username: email
        })
        .catch(function (error) {
            throw error.response.data;
        });
};

export function* signUp(props) {
    try {
        const response = yield call(signUpRequest, props.payload);
        if (response.status === 200) {
            yield put({type: CNST.USER.SIGN_UP.SUCCESS, payload: response});
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

export const signInRequest = ({email, password}) => {
    return axios
        .post(`/login`, {
            email: email,
            password: password,
        })
        .catch(function (error) {
            throw error.response.data;
        });
};

export function* signIn(props) {
    try {
        const response = yield call(signInRequest, props.payload);
        if (response.status === 200) {
            debugger;
            localStorage.setItem("token", response.headers.authorization);
            yield put({type: CNST.USER.SIGN_IN.SUCCESS, payload: response});
        }
    } catch (error) {
        yield put({
            type: CNST.USER.SIGN_IN.ERROR,
            payload: {
                // errors: error,
            },
        });
    }
}

export const getUserRequest = () => {
    let id = 'c4998a30-a40a-4c3a-af37-839900261b26'
    return axios.get(`/user/get/profile/${id}`).catch(function (error) {
        throw error.response.data;
    });
};

export function* getUser() {
    try {
        const response = yield call(getUserRequest);
        yield put({type: CNST.USER.GET_PROFILE.SUCCESS, payload: response.data});
    } catch (error) {
        // removeToken();
        yield put({
            type: CNST.USER.GET_PROFILE.ERROR,
        });
    }
}

export const logoutRequest = () => {
    return axios
        .post(`/logout`)
        .catch(function (error) {
            throw error.response.data;
        });
};

export function* logout(props) {
    try {
        const response = yield call(logoutRequest, props.payload);
        if (response.status === 200) {
            yield put({type: CNST.USER.LOGOUT.SUCCESS, payload: response});
        }
    } catch (error) {
        yield put({
            type: CNST.USER.LOGOUT.ERROR,
            payload: {
                // errors: error,
            },
        });
    }
}
