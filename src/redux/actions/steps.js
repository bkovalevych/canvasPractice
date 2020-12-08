import CNST from "../../constants/"

export function getSteps(email, idTopic) {
    return {
        type: CNST.STEPS.GET_STEPS.FETCH,
        payload: {email, idTopic}
    }
}

export function updateStep(email, idTopic, idStep, step) {
    return {
        type: CNST.STEPS.UPDATE_STEP.FETCH,
        payload: {email, idTopic, idStep, step}
    }
}