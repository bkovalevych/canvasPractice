import React, {useEffect, useRef, useState} from "react"
import {Step, Stepper, StepContent, StepLabel} from "@material-ui/core"
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Holst from "./../../holst"
export default function(props) {
    const [stepPosition, setStepPosition] = useState(1)
    const angle = useRef(0)
    const angleDiv = useRef();
    const cosDiv = useRef();
    const sinDiv = useRef();

    const overCanvas = useRef(null)
    const otherCanvas = useRef(null)
    const initDraw = (canvas, ctx, cellSize) => {
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.arc(0, 0, cellSize, 0, Math.PI * 2, true)
        ctx.stroke()
        let overCtx = canvas.current.getContext("2d");
        overCtx.save()
        overCtx.beginPath()
        overCtx.strokeStyle = "blue"
        overCtx.translate(200, 200)
        overCtx.moveTo(0, 0)
        overCtx.lineTo( cellSize, 0)
        overCtx.stroke()
        overCtx.restore()
        let clicked = false;
        canvas.current.addEventListener("mousedown", (e) => {
            // overCtx.beginPath();
            // overCtx.moveTo(prev[0], prev[1])
            // prev[0] = e.offsetX - 400
            // prev[1] = e.offsetY - 400
            // overCtx.lineTo(prev[0], prev[1]);
            // overCtx.stroke();
            clicked = true;
        })
        canvas.current.addEventListener("mousemove", (e) => {
            if (!clicked) return
            overCtx.save()
            overCtx.strokeStyle = "blue"
            overCtx.translate(200, 200)
            overCtx.clearRect(-2 * cellSize, -2 * cellSize, 4 * cellSize, 4 * cellSize);
            overCtx.beginPath()
            overCtx.moveTo(0, 0)
            angle.current -= e.movementX / 50
            overCtx.lineTo(Math.cos(angle.current) * cellSize, -Math.sin(angle.current) * cellSize)
            overCtx.stroke()
            overCtx.beginPath()
            overCtx.strokeStyle = "red"
            overCtx.moveTo(Math.cos(angle.current) * cellSize, -Math.sin(angle.current) * cellSize)
            overCtx.fillStyle = "red"
            overCtx.fillText(`${Math.sin(angle.current).toFixed(1)}`, Math.cos(angle.current) * cellSize, -0.5 * Math.sin(angle.current) * cellSize)
            overCtx.lineTo(Math.cos(angle.current) * cellSize, 0);
            overCtx.stroke()

            overCtx.beginPath()
            overCtx.strokeStyle = "green"
            overCtx.fillStyle = "green"
            overCtx.fillText(`${Math.cos(angle.current).toFixed(1)}`, 0.5 * Math.cos(angle.current) * cellSize, -Math.sin(angle.current) * cellSize)
            overCtx.moveTo(Math.cos(angle.current) * cellSize, -Math.sin(angle.current) * cellSize)
            overCtx.lineTo( 0, -Math.sin(angle.current) * cellSize);
            overCtx.stroke()

            overCtx.beginPath()
            overCtx.strokeStyle = "black"
            overCtx.fillStyle = "black"
            overCtx.fillText(`${Math.floor(angle.current / Math.PI * 180)}`, Math.cos(angle.current / 2) * cellSize / 4, -Math.sin(angle.current / 2) * cellSize / 4)
            if (angle.current >= 0) {
                overCtx.arc(0, 0, cellSize / 4, 0,   -angle.current, true)
            } else {
                overCtx.arc(0, 0, cellSize / 4, 0,   -angle.current, false)
            }
            overCtx.stroke()


            overCtx.restore()
            if (otherCanvas.current) {
                let anotherCtx = otherCanvas.current.getContext("2d");
                anotherCtx.clearRect(0, 0, 400, 120)
                anotherCtx.save()
                anotherCtx.translate(200, 60);
                anotherCtx.beginPath()
                anotherCtx.strokeStyle = "red"
                anotherCtx.moveTo(0, 0)
                let sign = angle.current < 0? -1 : 1;
                for (let i = 0; i < Math.abs(angle.current); i += 0.01) {
                    anotherCtx.lineTo(i * 9 * sign, Math.sin(i * sign) * 60)
                }
                anotherCtx.stroke()
                // anotherCtx.beginPath()
                // anotherCtx.moveTo(0, 0)
                // anotherCtx.strokeStyle = "green"
                // for (let i = 0; i < Math.abs(angle.current); i += 0.01) {
                //     anotherCtx.lineTo(i * 9 * sign, Math.cos(i * sign) * 60)
                // }
                // anotherCtx.stroke();
                anotherCtx.restore()
            }
            sinDiv.current.innerHTML = Math.sin(angle.current).toFixed(1);
            cosDiv.current.innerHTML = Math.cos(angle.current).toFixed(1);
            angleDiv.current.innerHTML = Math.floor(angle.current.toString() / Math.PI * 180)
        })
        canvas.current.addEventListener("mouseup", () => {
            clicked = false;
        })
    }
    const smallTopicsContent = [
        <div>
            Углом называется геометрическая фигура, которая состоит из двух различных лучей, исходящих из одной точки.
        </div>,
        <div>
            <Holst initDraw={initDraw} overCanvas={overCanvas} cellSizeProp={1} zoomProp={180}  visualNumber={true}/>
            <Holst overCanvas={otherCanvas} cellSizeProp={1} zoomProp={60} visualNumber={true} width={400} height={120} offsetYProp={60} offsetXProp={200}/>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                <div style={{textAlign: "right"}}>Угол</div>
                <div style={{textAlign: "left", paddingLeft: "10px"}} ref={angleDiv}/>
                <div style={{color: "red", textAlign: "right"}}>Sin</div>
                <div style={{textAlign: "left", paddingLeft: "10px"}} ref={sinDiv}/>
                <div style={{color: "green", textAlign: "right"}}>Cos</div>
                <div style={{textAlign: "left", paddingLeft: "10px"}} ref={cosDiv}/>
            </div>
        </div>,
        <div>
            Next step info
        </div>
    ]
    const smallTopicsLabels = [
        "Угол", "Картинка", 3, 4
    ]
    const getContent = (index) => {
        // eslint-disable-next-line default-case
        return smallTopicsContent[index]
    }


    return (
        <div>
            <Stepper activeStep={stepPosition}>
                {smallTopicsLabels.map((val, index) =>
                    <Step key={index} onClick={() => setStepPosition(index)}><StepLabel>{val}</StepLabel></Step>
                )}
            </Stepper>
            <div>
                <div>
                    <Typography>{getContent(stepPosition)}</Typography>
                    <Button disabled={stepPosition === 0}  onClick={() => setStepPosition(val => val - 1)}>Back</Button>
                    <Button disabled={stepPosition === 3} onClick={() => setStepPosition(val => val + 1)}>Next</Button>
                </div>
            </div>

        </div>
    )
}