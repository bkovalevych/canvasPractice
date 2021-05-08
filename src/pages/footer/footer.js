import React from "react";
import "./../../style/style.scss";

export const Footer = () => {
    return (
        <div className="row bg-pink">
            <div className="col-6">
                <nav className="navbar navbar-light ">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">О нас</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                               aria-expanded="false">Товары</a>
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
        </div>
    )
}