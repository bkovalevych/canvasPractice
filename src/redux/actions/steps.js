import CNST from "../../constants/"

export function getSteps(idTopic) {
    return {
        type: CNST.STEPS.GET_STEPS.FETCH,
        payload: {idTopic}
    }
}

export function updateStep(idTopic, idStep, step) {
    return {
        type: CNST.STEPS.UPDATE_STEP.FETCH,
        payload: {idTopic, idStep, step}
    }
}