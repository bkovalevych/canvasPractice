import CNST from "../../constants";
import topics from "../stores/topics";

export default function (state = topics, action) {
    switch (action.type) {
        case CNST.TOPICS.GET_TOPICS.SUCCESS:
            return {
                ...state,
                error: null,
                isFetched: false
            };
        case CNST.TOPICS.GET_TOPICS.ERROR:
            return {
                ...state,
                error: action.payload,
                isFetched: false,
                topics: []
            };
        case CNST.TOPICS.GET_TOPICS.FETCH:
            return {
                ...state,
                ...action.payload,
                error: null,
                isFetched: true,
                topics: []
            };
        case CNST.TOPICS.UPDATE_TOPIC.FETCH:
            return {
                ...state,
                ...action.payload
            };
        case CNST.TOPICS.UPDATE_TOPIC.ERROR:
            return {
                ...state
            };
        case CNST.TOPICS.UPDATE_TOPIC.SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}