import React, {useEffect, useRef, useState} from "react"
import {Step, Stepper, StepLabel} from "@material-ui/core"
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextCounter from "./textCounter"
import Renderer from '../../renderer'
import styled from 'styled-components';

export default function({name, steps}) {
    const [stepPosition, setStepPosition] = useState(0)
    const [done, setDone] = useState(false);
    const refCount = useRef(0);
    useEffect(() => {
        setDone(false);
    }, [stepPosition])
    const getContent = (index) => {
        return parseContent(steps[index]);
    }
    const update = (val) => {
        refCount.current -= val;
        if (refCount.current === 0) {
            setDone(true);
        }
    }

    const parseContent = (step) => {
        let textBlock = ""
        let customBlock = ""
        if (step.text) {
            refCount.current = typeof(step.text) === typeof ""?
                step.text.length
                :
                step.text.reduce((prev, next) => prev + next.length,0)
            textBlock = <div style={{textAlign: "center"}}>
                {typeof(step.text) === typeof ""?
                    <TextCounter text={step.text} update={update}/>:
                    step.text.map(text => <TextCounter text={text} update={update}/>)
                }
            </div>
        }
        if (step.type === 'custom') {
            refCount.current = refCount.current + 1
            customBlock = <><Renderer {...step.view}/>
                <NormalText >
                    <input  id='seen' type="checkbox" value={done} onChange={(e) => { e.target.checked = !e.target.checked; update(1);}}/>
                    <label style={{textAlign: 'center'}} htmlFor="seen">Увидел</label>
                </NormalText>
            </>
        }
        return [customBlock, textBlock]
    }


    return (
        <div>
            <h2>{name}</h2>
            <Stepper activeStep={stepPosition}>
                {steps.map(({type}, index) =>
                    <Step key={index} onClick={() => setStepPosition(index)}><StepLabel>{type}</StepLabel></Step>
                )}
            </Stepper>
            <div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <Button disabled={stepPosition === 0}  onClick={() => setStepPosition(val => val - 1)}>Дальше</Button>
                    <Button disabled={stepPosition > steps.length || !done} onClick={() => setStepPosition(val => val + 1)}>Дальше</Button>
                </div>
                <Typography>{getContent(stepPosition)}</Typography>
                <div style={{
                    textAlign: 'center'
                }}>
                    <Button disabled={stepPosition > steps.length || !done} onClick={() => setStepPosition(val => val + 1)}>Дальше</Button>
                </div>

            </div>

        </div>
    )
}


const NormalText = styled.div`
font-size: 20px;
padding: 20px;
textAlign: center;
margin: 20px;
background: rgb(204,203,229)
`;