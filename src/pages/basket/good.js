import React, {useRef} from "react"
import routes from "../../constants/routes";

export default ({imgSrc, id, name, description, price, count, deleteOperation, onChangeCount}) => {
    const parent = useRef();
    const delOperation = () => {
        //parent.current.style.display = "none";
        deleteOperation()
    }
    const updateChange = (e) => {
        onChangeCount(parseInt(e.target.value));
    }
    return (
        <div ref={parent} className="card p-3 col-3 " style={{Width: "18rem"}} key={id.toString() + "basket_Good"}>
            <img src={imgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href={`${routes.DETAILS}/${id}`}>
                    <h1>&#10142;</h1>
                </a>
                <label >
                    Количество
                    <input type="number" min={1} value={count} onChange={updateChange}/>
                </label>
                <button onClick={delOperation}>Удалить</button>
                <p className="card-text">Цена за 1шт: {price}</p>
                <p className="card-text">Цена: {count * price}</p>
            </div>
        </div>)
}