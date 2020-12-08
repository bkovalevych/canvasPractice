import CNST from "../../constants/"

export function getTopics(email) {
    return {
        type: CNST.STEPS.GET_STEPS.FETCH,
        payload: {email}
    }
}

export function updateTopic(email, idTopic, topic) {
    return {
        type: CNST.STEPS.UPDATE_STEP.FETCH,
        payload: {email, idTopic, topic}
    }
}