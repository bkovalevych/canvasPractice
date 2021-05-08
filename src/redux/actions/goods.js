import {store} from "../../store"

export function updateBasket({idGood, count}) {
    const data = store.getState()
    const goodRoot = data.goods;
    return {type: "fetch", payload: {...goodRoot, idGood, count}}
}