import React from "react";
import {useParams} from "react-router";
import routes from "../../constants/routes";

export default ({updateBasket, goods}) => {
    const { goodId } = useParams();
    if (!goodId) {
        return "Not found";
    }
    let good = null;
    for (let g of goods) {
        if (g.id === goodId) {
            good = g;
        }
    }
    if (!good) {
        return  "Not found";
    }

    const addToBasket = () => {
        updateBasket({idGood: goodId, count: 1})
    }

    return (
        <div className="row">
            <div className="col-12">
                <h2>{good.name}</h2><br />
                <div className="card">
                    <div className="row g-8">
                        <div className="col-md-4">
                            <img
                                src={good.imgSrc}
                                alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Описание</h5>
                                <p className="card-text">{good.fullDescription}</p>
                                <p className="card-text"><small className="text-muted">Last updated {good.lastUpdate}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                    <div className="row">
                        <div className="col-4">
                            <h2>Состав</h2><br/>
                            <p>{good.consist}</p>
                        </div>

                        <div className="cost col-3"><h1>{good.price} грн</h1></div>
                        <div className="row col-3">

                            <button type="button" className="btn btn-primary btn-lg" onClick={addToBasket}>Купить</button>
                        </div>
                    </div>
            </div>
        </div>
    );
}