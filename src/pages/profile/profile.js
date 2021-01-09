import React, {useEffect} from "react";
import Loader from "../loader";

export const Profile = ({getProfile, email, isGetUserFetched, fetching, errors, firstName, lastName}) => {
    useEffect(() => {
        if (fetching === false) {
            getProfile({email});
        }
    }, [])

    if (fetching) {
        return <Loader/>;
    } else if (isGetUserFetched) {
        return (<>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-4 order-md-1 mb-4">
                        <div className="card border-dark w-100">
                            <div className="card-body">
                                <h5 className="card-title">Привіт</h5>
                                <p className="card-text">{firstName} {lastName}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{new Date().toLocaleString("en-Us", {
                                    year: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric'
                                })}</li>
                            </ul>
                            <div className="card-body">
                                <a href="/" className="card-link">На головну сторінку.</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 order-md-2">
                        <div className="card border-dark">
                            <h5 className="card-header bg-dark text-white">Завдання</h5>
                            {
                                [1, 2, 3, 4, 5].map((el,index) => {
                                    return <div key={"cards" + index} className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to
                                            additional
                                            content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
    return (<>Not found</>)
}