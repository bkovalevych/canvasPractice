import {call, put} from "redux-saga/effects";
import CNST from "../../constants";
import axios from "axios";
import data from "../../template/json_data"
export const getStepsRequest = ({id}) => {
    return axios
        .get(`/steps/get/?idTopic=${id}`) // id юзера будет зашит в хедере
        .catch(function (error) {
            throw error.response.data;
        });
};

export function* getSteps(props) {
    yield put({
        type: CNST.STEPS.GET_STEPS.SUCCESS,
        payload: data[props.idTopic]
    })
    // try {
    //     const response = yield call(getStepsRequest, props.payload);
    //     if (response.status === 200) {
    //         yield put({
    //             type: CNST.STEPS.GET_STEPS.SUCCESS,
    //             payload: response
    //         })
    //     }
    // } catch (e) {
    //     yield put({
    //         type: CNST.STEPS.GET_STEPS.ERROR,
    //         payload: {
    //             message: e.toString()
    //         }
    //     })
    // }
}

export const updateStepRequest = ({idTopic, idStep, step}) => {
    // idTopic - id задачи
    // idStep - id подзадачи
    // step - тело подзадачи с чувствительными данными, пример ниже
    // {
    //   "isDone": "false",
    //   "gainedPoints": 0
    // }
    return axios.post(`steps/put/?idTopic=${idTopic}&idStep=${idStep}`
        , step).catch(err => {
            throw err.response.data;
        })
}

export function* updateStep(props) {
    yield put({
        type: CNST.STEPS.UPDATE_STEP.SUCCESS,

    })
    yield put({
       type: CNST.TOPICS.UP
    });
    // try {
    //     const response = yield call(updateStepRequest, props.payload);
    //     if (response.status === 200) {
    //         yield put({
    //             type: CNST.STEPS.UPDATE_STEP.SUCCESS
    //         })
    //     }
    // } catch (e) {
    //     yield  put({
    //         type: CNST.TOPICS.UPDATE_TOPIC.ERROR,
    //         payload: {
    //             message: e.toString()
    //         }
    //     })
    // }
}