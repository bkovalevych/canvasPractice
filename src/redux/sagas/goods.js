export function addOrUpdateGoodToBasket({goods, basket, count, idGood}) {
    let good = null;
    if (!goods || !basket) {
        return;
    }
    for (let g of goods) {
        if (g.id === idGood) {
            good = g;
        }
    }
    let basketGood = null;
    for (let index = 0; index < basket.length; ++index) {
        let g = basket[index];
        if (g.id === idGood) {
            if (count === 0) {
                basket.splice(index, 1);
                return;
            }
            basketGood = g;
        }
    }
    if (good === null) {
        return
    }
    if (basketGood === null) {
        basket.push(good)
        basketGood = good;
    }
    basketGood.count = count;
}

export function* updateBasket(props) {
    const {goods, basket, count, idGood} = props.payload;
    addOrUpdateGoodToBasket({goods, basket, count, idGood})
    yield {type: "updated", payload: {goods, basket, selectedGoodId: idGood}}
}

