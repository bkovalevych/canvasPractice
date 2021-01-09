import React, {useState} from "react"

import Formula from './formulaViewer'
import {faCheckCircle, faTimesCircle, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import s from "./decisionField.module.scss"
import style from "../pages/home/topics.module.scss";


export default ({
                    type,
                    answer,
                    label,
                    tooltip,
                    fillValue,
                    pointsWithTooltip,
                    points,
                    updateDecision,
                    idDecision,
                    idTopic,
                    idStep,
                    isDone}) => {
    const [currentValue, setCurrentValue] = useState(isDone? fillValue : "");
    const [stateAnswer, setStateAnswer] = useState(isDone? "ok" : "idle")
    const answerReg = new RegExp(answer);
    const onChange = (e) => {
        setStateAnswer("idle");
        setCurrentValue(e.target.value);
    }

    const doWithTooltip = () => {
        setCurrentValue(fillValue);
        setStateAnswer("ok");
        updateDecision( {idTopic: idTopic, idStep: idStep, idDecision: idDecision, points: pointsWithTooltip});
    }

    const onCheck = (checkValue=false) => {
        let prepareValue = "";
        if (currentValue) {
            prepareValue = currentValue.replaceAll(/\s+/g, "").toLowerCase();
        }
        if (!checkValue && answerReg.test(prepareValue) || checkValue && currentValue === answer) {
            updateDecision( {idTopic: idTopic, idStep: idStep, idDecision: idDecision, points: points});
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
            <input disabled={isDone} type="text" value={currentValue} onChange={onChange}/>
            <button disabled={isDone} onClick={() => {onCheck(false)}}>Перевірити</button>
            <button disabled={isDone} onClick={doWithTooltip}><FontAwesomeIcon icon={faQuestionCircle}/> <div className={s.tooltip_text}>
                {tooltip}
            </div></button>
            <div><Formula>{currentValue? currentValue: ""}</Formula>
            </div>
            <div>{answerDiv}</div>
        </div>
    }

    const valueHandler = () => {
        return <div className={s.parent}>
            <div>{label}</div>
            <input disabled={isDone} type="number" value={currentValue} onChange={onChange}/>
            <button disabled={isDone} onClick={() => {onCheck(true)}}>Перевірити</button>
            <button disabled={isDone} onClick={doWithTooltip}><FontAwesomeIcon icon={faQuestionCircle}/> <div className={s.tooltip_text}>
                {tooltip}
            </div>
            </button>
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