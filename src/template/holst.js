import React, {useEffect, useRef, useState} from 'react';
import {Form} from "react-bootstrap"
export default function(
    {
        xmin=0,
        xmax=10,
        xstep=1,
        ymin=0,
        ymax=10,
        ystep=10,
        visualNumbers=false,
        placement,
        labelsX,
        labelsY
    }) {
    let width = placement.width;
    let height = placement.height;
    const canvasRef = useRef(null);
    function drawCells(ctx, canvas) {
        let sizeX = width / (xmax - xmin)
        let sizeY = height / (ymax - ymin)
        ctx.lineWidth = '0.5'
        ctx.setLineDash([15, 7]);
        if (visualNumbers) {
            sizeX = (width) / (xmax - xmin);
            sizeY = (height) / (ymax - ymin);
            for (let i = 0; i <= xmax - xmin; i += xstep) {
                ctx.fillText((i + xmin).toFixed(2), i * sizeX + 25, 15);
            }
            for (let i = 0; i <= ymax - ymin; i += ystep) {
                ctx.fillText(`${i + ymin}`, 10, i * sizeY + 35);
            }
            ctx.translate(35, 35);
        }
        ctx.beginPath()
        for (let i = 0; i <= xmax - xmin; i += xstep) {
            ctx.moveTo(i * sizeX, 0)
            ctx.lineTo(i * sizeX, (ymax - ymin) * sizeY)
        }
        for (let i = 0; i <= ymax - ymin; i += ystep) {
            ctx.moveTo(0, i * sizeY)
            ctx.lineTo((xmax - xmin) * sizeX, i * sizeY)
        }
        ctx.stroke()
    }
    useEffect(() => {
        if (canvasRef.current) {
            drawCells(canvasRef.current.getContext("2d"),canvasRef.current)
        }
    }, [canvasRef])
    const add = visualNumbers? -35: 0;
    const styleCanvas = {
        position: "absolute" ,
        marginLeft: placement.marginLeft + add,
        marginTop: placement.marginTop + add
    }
    return (<canvas
        style={styleCanvas}
            width={width - add} height={height - add} ref={canvasRef}/>);
}