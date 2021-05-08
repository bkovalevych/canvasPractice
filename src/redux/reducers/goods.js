import good from "../stores/goods";
import {addOrUpdateGoodToBasket} from "../sagas/goods"

export default function (state = good, action) {
    switch (action.type) {
        case "fetch":
            addOrUpdateGoodToBasket(action.payload)
            return {type: "fetch",
                goods: state.goods,
                basket: action.payload.basket.slice(0),
                count: action.payload.basket.length,
                idGood: action.payload.idGood
            }
        case "updated":
            return {
                goods: state.goods,
                basket: action.payload.basket.slice(0),
                count: action.payload.count,
                idGood: action.payload.idGood
            }

        default:
            return good;
    }
}