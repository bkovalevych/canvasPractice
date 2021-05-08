import React from "react";
import {Badge} from "react-bootstrap";
import {Link} from "react-router-dom";
import routePaths from "../../constants/routes";
import "bootstrap/dist/css/bootstrap.min.css"
import "../../style/style.scss";


export const Header = ({countGoodsInBasket}) => {

    return (
            <div className=" col-xxl-container">
                <div className="row">
                    <li className="nav-item col">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={routePaths.ROOT}>
                                <img src={window.location.origin + "/img/Vector.png"} alt="" width="40" height="40"
                                     className="d-inline-block align-text-top" />
                                    BeShop
                            </Link>
                        </div>
                    </li>
                    <div className="col-6">
                        <nav className="navbar navbar-light ">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">О нас</a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
                                       role="button" aria-expanded="false">Товары</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Акции</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-sm">
                        <button type="button" className="btn btn-outline-secondary">Позвонить</button>
                    </div>

                    <div className="col-sm">
                        <p>+380-XX-XXX-XX-XX</p>
                    </div>

                    <div className="col-sm">
                        <Link to={routePaths.BASKET}>
                            <img src={window.location.origin + "/img/shopping-basket 1.png"} className="" alt="..."/>
                            {countGoodsInBasket !== 0?
                                <Badge>{countGoodsInBasket}</Badge> :
                                ""
                            }
                        </Link>
                    </div>
                </div>
            </div>
    )
}