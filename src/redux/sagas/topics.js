import {call, put} from "redux-saga/effects";
import CNST from "../../constants";
import axios from "axios"

export const getTopicsRequest = ({email}) => {
    axios.get(`/topics/get/?email=${email}`).catch((err) => {
        throw err.response.data;
    })
}

export function* getTopics(props) {
    try {
        const response = yield call(getTopicsRequest, props.payload);
        if (response.status === 200) {
            yield put({
                type: CNST.TOPICS.GET_TOPICS.SUCCESS,
                payload: response
            })
        }
    } catch (e) {
        yield put( {
            type: CNST.TOPICS.GET_TOPICS.ERROR,
            payload: {
                message: e.toString()
            }
        })
    }
}

export function updateTopicRequest({email, id, topic}) {
    axios.post(`/topics/put/?email=${email}&idTopic=${id}`, topic).catch((err) => {
        throw err.response.data;
    })
}

export function* updateTopic(props) {
    try {
        const response = yield call(updateTopicRequest, props.payload);
        if (response.status === 200) {
            yield put({
                type: CNST.TOPICS.UPDATE_TOPIC.SUCCESS,
                payload: response
            })
        }
    } catch (e) {
        yield put( {
            type: CNST.TOPICS.UPDATE_TOPIC.ERROR,
            payload: {
                message: e.toString()
            }
        })
    }
}