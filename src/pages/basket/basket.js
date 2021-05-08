import React, {useCallback, useEffect, useRef} from "react"
import Good from "./good"
import {CardGroup} from "react-bootstrap"

export default ({basket, updateBasket}) => {
    const parent = useRef()

    const deleteOperation = (id) => {
        return () => delCallback(id)
    }
    const delCallback = useCallback((id) => {
            updateBasket({idGood: id, count:0});
    }, [updateBasket])
    const onChangeCount = (id) => {
        return (val) => {
            updateBasket({idGood: id, count:val});
        }
    }
    let goods = basket.map(({
                                  id,
                                  price,
                                  description,
                                  imgSrc,
                                  name,
                                  count}, index) =>
        (
            <Good count={count} id={id} price={price} description={description}
                  imgSrc={imgSrc} name={name}
                  deleteOperation={deleteOperation(id)}
                  onChangeCount={onChangeCount(id)}
                  key={index.toString() + "_goodOverlay"}
            />
        )
    )
    if (goods.length === 0) {
        goods = 'No products'
    }

    return (
        <CardGroup ref={parent}>
            {goods}
        </CardGroup>
    )
}