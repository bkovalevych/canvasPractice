import React from "react"
import routes from "../../constants/routes";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap"
export const CardGood = ({imgSrc, id, name, description}) => {
    return (
        <Card className="p-3 " style={{Width: "18rem"}}>
            <Card.Img
                src={imgSrc}
                className="card-img-top" alt="..." />
                <Card.Body>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`${routes.DETAILS}/${id}`}>
                        <h1>&#10142;</h1>
                    </Link>
                </Card.Body>
        </Card>
    )
}