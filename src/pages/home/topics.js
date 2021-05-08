import React, {useCallback, useEffect, useRef, useState} from 'react';
import CardGood from "./../card_good"
import {CardColumns, Container} from "react-bootstrap"
import style from "./topics.module.scss"

export const Topics = ({goods, updateBasket, countGoodsInBasket}) => {

    const cards = goods.map(({id, price, description, imgSrc, name}, index) =>
        (
            <CardGood imgSrc={imgSrc}
                      key={index.toString() + "_good"}
                      id={id} name={name}
                      description={description}/>
        ))
    // const content = [];
    // for (let i = 0; i < cards.length; i += 4) {
    //     content.push(
    //         <div className="row cards" key={i.toString() + "_content_Good"}>
    //             {cards.slice(i, Math.min(cards.length, i + 4))}
    //         </div>
    //         )
    // }
    return <Container>
        <CardColumns>{cards}</CardColumns>
    </Container>;
}