import {call, put} from "redux-saga/effects";
import CNST from "../../constants";
import axios from "axios";

export const getStepsRequest = ({email, id}) => {
    return axios
        .get(`/steps/get/?email=${email}&idTopic=${id}`)
        .catch(function (error) {
            throw error.response.data;
        });
};

export function* getSteps(props) {
    try {
        const response = yield call(getStepsRequest, props.payload);
        if (response.status === 200) {
            yield put({
                type: CNST.STEPS.GET_STEPS.SUCCESS,
                payload: response
            })
        }
    } catch (e) {
        yield put({
            type: CNST.STEPS.GET_STEPS.ERROR,
            payload: {
                message: e.toString()
            }
        })
    }
}

export const updateStepRequest = ({email, idTopic, idStep, step}) => {
    return axios.post(`steps/put/?email=${email}&idTopic=${idTopic}&idStep=${idStep}`
        , step).catch(err => {
            throw err.response.data;
        })
}

export function* updateStep(props) {
    try {
        const response = yield call(updateStepRequest, props.payload);
        if (response.status === 200) {
            yield put({
                type: CNST.STEPS.UPDATE_STEP.SUCCESS
            })
        }
    } catch (e) {
        yield  put({
            type: CNST.TOPICS.UPDATE_TOPIC.ERROR,
            payload: {
                message: e.toString()
            }
        })
    }
}