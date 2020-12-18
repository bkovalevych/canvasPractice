import React, {useState} from "react"

import Formula from './formulaViewer'
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import s from "./decisionField.module.scss"

export default ({type, value, answer, label}) => {
    const [currentValue, setCurrentValue] = useState(value);
    const [stateAnswer, setStateAnswer] = useState("idle")
    const answerReg = new RegExp(answer);
    const onChange = (e) => {
        setCurrentValue(e.target.value);
    }
    const onCheck = (checkValue=false) => {
        let prepareValue = "";
        if (currentValue) {
            prepareValue = currentValue.replaceAll(/\s+/g, "").toLowerCase();
        }

        if (!checkValue && answerReg.test(prepareValue) || checkValue && currentValue === answer) {
            setStateAnswer("ok")
        } else {
            setStateAnswer("nok")
        }
    }
    let answerDiv = "";
    switch (stateAnswer) {
        case "ok":
            answerDiv = <FontAwesomeIcon icon={faCheckCircle} size="2x" className={s.green} />
            break;
        case "nok":
            answerDiv = <FontAwesomeIcon icon={faTimesCircle} size="2x" className={s.red}/>
    }
    const formulaHandler = () => {
        return <div className={s.parent}>
            <div>{label}</div>
            <input type="text" value={currentValue} onChange={onChange}/>
            <button onClick={() => {onCheck(false)}}>Перевірити</button>
            <div><Formula>{currentValue? currentValue: ""}</Formula></div>
            <div>{answerDiv}</div>
        </div>
    }

    const valueHandler = () => {
        return <div className={s.parent}>
            <div>{label}</div>
            <input type="number" value={currentValue} onChange={onChange}/>
            <button onClick={() => {onCheck(true)}}>Перевірити</button>
            <div>{answerDiv}</div>
        </div>
    }
    switch (type) {
        case "formula":
            return formulaHandler();
        case "value":
            return valueHandler();
    }
}