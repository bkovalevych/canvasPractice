import json_data from "../template/json_data";

export const getTopicsLabels = () => {
    // TODO get request for labels
    return new Promise( resolve => {
        resolve([
            {
                "_id": 1,
                "name": "Прикладна задача",
                "isPreview": "false",
                "points": 10,
                "gainedPoints": 0,
                "stepsCount": 2,
                "currentStep": 0,
                "isDone": "false",
                "attempts": 0,
            },
            {
                "_id": 1,
                "gainedPoints": 0,
                "isPreview": "false",
                "points": 15,
                "stepsCount": 4,
                "currentStep": 0,
                "isDone": "false",
                "attempts": 0,
                "name": "Тригонометрія. Початок",
            },
            {
                "_id": 2,
                "gainedPoints": 0,
                "points": 0,
                "isPreview": "true",
                "name": "Теорема синусів",
                "attempts": 1,
                "isDone": "true",
                "stepsCount": 2,
                "currentStep": 0,
            }
        ])
    })
}

export const getTopic = (topic_id) => {
    // TODO get request for topic by ID
    return new Promise((async resolve => {
        resolve(json_data[topic_id])
    }))
}