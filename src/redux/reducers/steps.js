import CNST from "../../constants";
import steps from "../stores/steps";

export default function (state = steps, action) {
    switch (action.type) {
        case CNST.STEPS.UPDATE_STEP.SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case CNST.STEPS.UPDATE_STEP.ERROR:
            return {
                ...state
            };
        case CNST.STEPS.UPDATE_STEP.FETCH:
            return {
                ...state,
                ...action.payload
            };
        case CNST.STEPS.GET_STEPS.FETCH:
            return {
                ...state,
                ...action.payload,
                error: null,
                fetching: true,
                steps: []
            };
        case CNST.STEPS.GET_STEPS.ERROR:
            return {
                ...state,
                error: action.payload,
                fetching: false,
                steps: []
            };
        case CNST.STEPS.GET_STEPS.SUCCESS:
            return {
                ...state,
                steps: action.payload,
                error: null,
                fetching: false,
            };
        default:
            return state;
    }
}