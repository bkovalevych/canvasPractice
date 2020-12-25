import React, {useEffect, useRef, useState} from "react"
import {Step, Stepper, StepLabel} from "@material-ui/core"
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextCounter from "../../template/textCounter"
import Renderer from '../../utils/renderer'
import {getTopic} from "../../functions/topics"
import Formula from '../../utils/formulaViewer'
import DecisionField from '../../utils/decisionField'
import styles from './steps.module.scss'
import {faClipboardList} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export const Steps = ({idTopic, nextTopic}) => {
    const [fetch, setFetch] = useState("idle");
    const [stepPosition, setStepPosition] = useState(0)
    const [done, setDone] = useState(false);
    const refCount = useRef(0);
    const formulasDiv = useRef();
    const content = useRef(null)
    const [formulaOpened, setFormulaOpened] = useState(false);
    const decisionRef = useRef([]);
    useEffect(() => {
        setStepPosition(0);
        setFetch("idle")
    }, [idTopic])
    useEffect(() => {
        if(fetch === 'idle') {
            getTopic(idTopic).then(topic => {
                content.current = topic
                setFetch("done")
            })
            setFetch('waiting');
        }
    }, [fetch])
    useEffect(() => {
        setDone(false);
    }, [stepPosition])
    const getContent = (index) => {
        return parseContent(content.current.steps[index]);
    }
    const update = (val) => {
        refCount.current -= val;
        if (refCount.current === 0) {
            setDone(true);
        }
    }

    const parseContent = (step) => {
        if (!step) return;
        let textBlock = "";
        let customBlock = "";
        let formulas = "";
        let decisions = "";
        if (step.text) {
            refCount.current = typeof(step.text) === typeof ""?
                step.text.length
                :
                step.text.reduce((prev, next) => prev + next.length,0)

            textBlock = <div key={0} style={{textAlign: "center"}}>
                {typeof(step.text) === typeof ""?
                    <TextCounter text={step.text} update={update}/>:
                    step.text.map((text, index) => <TextCounter key={index} text={text} update={update}/>)
                }
            </div>
        }
        if (step.type === 'custom') {
            let triggers = 0;
            if (step.view["task_triggers"]) {
                triggers = step.view["task_triggers"].length;
            }
            refCount.current = refCount.current + triggers

            customBlock = <Renderer key={1} update={update}{...step.view}/>
        }
        if (step.decisions) {
            decisionRef.current = [];
            let elements = step.decisions.map((decision, index) => {
                decisionRef.current.push({answer: decision.answer, value: ""});
                return <DecisionField key={index} value={decision.value} type={decision.type} answer={decision.answer} label={decision.label}/>
            })
            decisions = <div>{elements}</div>
        }
        if (step.formulas) {
            formulas = <>
                <div className={styles.list_formulas} ref={formulasDiv}
                              style={{opacity: formulaOpened? '1': '0'}}>
                Формули
                <ol>
                    {step.formulas.map(({formula, tooltip}, index) =>
                        <li key={index}>
                            {tooltip?
                                <span className={styles.tooltip_text}>
                                    {tooltip}
                                </span>:
                                ""
                            }
                            <Formula>{formula}</Formula>
                        </li>
                    )}
                </ol>
            </div>
                <FontAwesomeIcon className={styles.formula_expander} icon={faClipboardList} size="4x"
                                 onClick={() => {
                                     setFormulaOpened((val) => !val);
                                 }}
                />
            </>
        }
        return <div>
            {formulas}
            {textBlock}
            {decisions}
            {customBlock}

        </div>


    }
    if (fetch === 'waiting' || fetch === 'idle') {
        return "waiting";
    }

    return (
        <div>
            <h2>{content.current.name}</h2>
            <Stepper activeStep={stepPosition}>
                {content.current.steps.map(({type}, index) =>
                    <Step key={index} onClick={() => setStepPosition(index)}><StepLabel>{type}</StepLabel></Step>
                )}
            </Stepper>
            <div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <Button disabled={stepPosition === 0}  onClick={() => setStepPosition(val => val - 1)}>Назад</Button>
                    <Button disabled={stepPosition > content.current.steps.length || !done} onClick={() => {
                        if (stepPosition + 1 >= content.current.steps.length) {
                            nextTopic();
                            return;
                        }
                        setStepPosition(val => val + 1)}}
                    >Далі</Button>
                </div>
                <Typography component={'span'}>{getContent(stepPosition)}</Typography>
            </div>
        </div>
    )
}
