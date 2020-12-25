import CNST from "../../constants";
import topics from "../stores/topics";

export default function (state = topics, action) {
    switch (action.type) {
        case CNST.TOPICS.GET_TOPICS.SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                topics: action.payload
            };
        case CNST.TOPICS.GET_TOPICS.ERROR:
            return {
                ...state,
                error: action.payload,
                fetching: false,
                topics: []
            };
        case CNST.TOPICS.GET_TOPICS.FETCH:
            return {
                ...state,
                ...action.payload,
                error: null,
                fetching: true,
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
            const {idTopic, topic} = action.payload;
            state.topics[idTopic] = {...state.topics[idTopic], ...topic}
            return {
                fetching: false,
                error: null,
                ...state
            };
        default:
            return state;
    }
}