import React, {useEffect, useRef, useState} from 'react';
import {Form} from "react-bootstrap"
export default function({width=400,
                            height=400,
                            visualInputs={},
                            cellSizeProp=1,
                            visualNumber=false,
                            zoomProp=33,
                            initDraw,
                            offsetXProp=200,
                            offsetYProp=200,
                            overCanvas}) {
    const [zoom, setZoom] = useState(zoomProp);
    const [cellSize, setCellSize] = useState(cellSizeProp);
    const [offsetX, setOffsetX] = useState(offsetXProp);
    const [offsetY, setOffsetY] = useState(offsetYProp);
    const [angels, setAngels] = useState([]);
    const canvasRef = useRef(null);





    const drawCells = (ctx) => {
        ctx.save();
        ctx.clearRect(-2 * width, -2* height, 4 * width, 4 * height);
        ctx.font = '15px serif';
        ctx.strokeStyle = "#3e3e3e";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.translate(offsetX, offsetY);
        if (visualNumber) {
            ctx.fillText('0', 1, -1)
        }
        for (let i = 0; i < 2 * width; i += cellSize) {
            ctx.moveTo(i * zoom, -2 * height);
            ctx.lineTo(i * zoom, 2 * height);
            if (!i) continue;
            ctx.moveTo(-i * zoom, -2 * height);
            ctx.lineTo(-i * zoom, 2 * height);
            if(visualNumber) {
                ctx.fillText(`${i}`, i * zoom, 0);
                ctx.fillText(`${-i}`, -i * zoom, 0);
            }
        }
        for (let i = 0; i < 2 * height; i += cellSize) {
            ctx.moveTo(-2 * width, i * zoom);
            ctx.lineTo(2 * width, i * zoom);
            if (!i) continue;
            ctx.moveTo(-2 * width, -i * zoom);
            ctx.lineTo(2 * width, -i * zoom);
            if (visualNumber) {
                ctx.fillText(`${-i}`, 0, i * zoom - 5);
                ctx.fillText(`${i}`, 0, -i * zoom - 5);
            }

        }
        ctx.stroke();

        if (initDraw) {
            initDraw(overCanvas, ctx, cellSize * zoom);
        }
        ctx.restore();
    }

    const onChange = (e) => {
        const el = e.target;
        // eslint-disable-next-line no-eval
        eval(`set${el.name[0].toUpperCase()}${el.name.substr(1)}(${el.value})`)
    }

    useEffect(() => {
        if (angels.length === 0) {
            const ctx = canvasRef.current.getContext('2d');
            drawCells(ctx);
        }
    })

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        drawCells(ctx);
        // ctx.save();
        // ctx.translate(offsetX, offsetY);
        // drawArm(angels, sizePalm * zoom, ctx);
        // ctx.restore();
    }, [angels, cellSize, offsetX, offsetY, zoom]);
    const styleCanvas = {position: "absolute"}
    return (<div style={{position: "relative", width:width, height: height, marginLeft: `calc(50% - ${width}px)`}}>
        <canvas
        style={styleCanvas}
            width={width} height={height} ref={canvasRef}/>
        <canvas
            style={styleCanvas}
            width={width} height={height} ref={overCanvas}/>
    </div>);
}