import React, {useEffect, useRef, useState} from "react"
import {Step, Stepper, StepLabel} from "@material-ui/core"
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextCounter from "../../template/textCounter"
import Renderer from '../../utils/renderer'
import {getTopic} from "../../functions/topics"

export const Steps = ({idTopic, nextTopic}) => {
    const [fetch, setFetch] = useState("idle");
    const [stepPosition, setStepPosition] = useState(0)
    const [done, setDone] = useState(false);
    const refCount = useRef(0);
    const content = useRef(null)
    useEffect(() => {
        setStepPosition(1);
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
        let textBlock = ""
        let customBlock = ""
        if (step.text) {
            refCount.current = typeof(step.text) === typeof ""?
                step.text.length
                :
                step.text.reduce((prev, next) => prev + next.length,0)

            textBlock = <div key={0} style={{textAlign: "center"}}>
                {typeof(step.text) === typeof ""?
                    <TextCounter text={step.text} update={update}/>:
                    step.text.map(text => <TextCounter text={text} update={update}/>)
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
        return [textBlock, customBlock]
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
                <Typography>{getContent(stepPosition)}</Typography>
                <div style={{
                    textAlign: 'center'
                }}>
                    <Button disabled={stepPosition > content.current.steps.length || !done} onClick={() => {
                        if (stepPosition + 1 >= content.current.steps.length) {
                            nextTopic();
                            return;
                        }
                        setStepPosition(val => val + 1)}}>Далі</Button>
                </div>
            </div>

        </div>
    )
}