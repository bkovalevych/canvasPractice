export default {
    layers_width: 400,
    layers_height: 700,
    variables: [
        {
            name: "$angle",
            value: 0
        },
        {
            name: "$sizeCell",
            value: 200
        }
    ],
    places: {
        first_window: {
            width: 400,
            height: 400,
            marginLeft: 0,
            marginTop: 0
        },
        second_window: {
            width: 400,
            height: 200,
            marginLeft: 0,
            marginTop: 500
        },
        place_control: {
            width: 400,
            height: 30,
            marginLeft: 0,
            marginTop: 425
        }
    },
    controls: [
        {
            place: "place_control",
            type: "range",
            min: -720,
            max: 720,
            step: 1,
            value: "$angle",
            onUpdate: "(val) => {\n" +
                "let next = val / 180 * Math.PI;\n" +
                "$angle = next;\n" +
                "}"
        }
    ],
    layers: [
        {
            place: "first_window",
            type: "cells",
            xstep: 0.5,
            xmin: -1,
            xmax: 1,
            ystep: 0.5,
            ymin: -1,
            ymax: 1,
            visualNumbers: true,
            labelsX: null,
            labelsY: null
        },
        {
            place: "first_window",
            type: "custom",
            initDraw: "(canvas, ctx) => {\n" +
                "ctx.beginPath(); \n" +
                "ctx.moveTo($sizeCell * 2, $sizeCell); \n" +
                "ctx.arc($sizeCell, $sizeCell, $sizeCell, 0, Math.PI * 2, true); \n" +
                "ctx.stroke(); \n" +
                "}"
        },
        {
            place: "first_window",
            type: "custom",
            initDraw: "(canvas, ctx) => {\n" +
                "ctx.save();\n" +
                "ctx.beginPath();\n" +
                "ctx.strokeStyle = 'blue';\n" +
                "ctx.translate(200, 200);\n" +
                "ctx.moveTo(0, 0);\n" +
                "ctx.lineTo( $sizeCell, 0);\n" +
                "ctx.stroke();\n" +
                "ctx.restore();\n" +
                "}",
            update: "(canvas, ctx) => {\n" +
                "ctx.save();\n" +
                "ctx.strokeStyle = 'blue';\n" +
                "ctx.translate(200, 200);\n" +
                "ctx.clearRect(-2 * $sizeCell, -2 * $sizeCell, 4 * $sizeCell, 4 * $sizeCell);\n" +
                "ctx.beginPath();\n" +
                "ctx.moveTo(0, 0);\n" +
                "ctx.lineTo(Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell);\n" +
                "ctx.stroke();\n" +
                "ctx.beginPath();\n" +
                "ctx.strokeStyle = 'red';\n" +
                "ctx.moveTo(Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell);\n" +
                "ctx.stroke();\n" +
                "ctx.beginPath();\n" +
                "ctx.fillStyle = 'red';\n" +
                "ctx.strokeStyle = 'red';\n" +
                "ctx.moveTo(Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell);\n" +
                "ctx.fillText(Math.sin($angle).toFixed(1), Math.cos($angle) * $sizeCell, -0.5 * Math.sin($angle) * $sizeCell);\n" +
                "ctx.lineTo(Math.cos($angle) * $sizeCell, 0);\n" +
                "ctx.stroke();\n" +
                "ctx.beginPath();\n" +
                "ctx.strokeStyle = 'green';\n" +
                "ctx.fillStyle = 'green';\n" +
                "ctx.fillText(Math.cos($angle).toFixed(1), 0.5 * Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell);\n" +
                "ctx.moveTo(Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell);\n" +
                "ctx.lineTo(0, -Math.sin($angle) * $sizeCell);\n" +
                "ctx.stroke();\n" +
                "ctx.beginPath();\n" +
                "ctx.strokeStyle = 'black';\n" +
                "ctx.fillStyle = 'black';\n" +
                "ctx.fillText(Math.floor($angle / Math.PI * 180).toString(), Math.cos($angle / 2) * $sizeCell / 4, -Math.sin($sizeCell / 2) * $sizeCell / 4);\n" +
                "if ($angle >= 0) {\n" +
                "    ctx.arc(0, 0, $sizeCell / 4, 0, -$angle, true);\n" +
                "} else {\n" +
                "    ctx.arc(0, 0, $sizeCell / 4, 0, -$angle, false);\n" +
                "}\n" +
                "ctx.stroke();\n" +
                "ctx.restore();\n" +
                "}"
        },
        {
            place: "second_window",
            type: "cells",
            xstep: Math.PI,
            xmin: -Math.PI * 2,
            xmax: Math.PI * 2,
            ystep: 0.25,
            ymin: -1,
            ymax: 1,
            visualNumbers: true,
            labelsX: null,
            labelsY: null
        },
        {
            place: "second_window",
            type: "custom",
            initDraw: "",
            update: "(canvas, ctx) => {\n" +
                "ctx.clearRect(0, 0, 400, 200);\n" +
                "ctx.save();\n" +
                "ctx.translate(200, 100);\n" +
                "ctx.beginPath();\n" +
                "ctx.strokeStyle = 'red';\n" +
                "ctx.moveTo(0, 0);\n" +
                "let sign = $angle < 0? -1 : 1;\n" +
                "for (let i = 0; i < Math.abs($angle); i += 0.01) {\n" +
                "    ctx.lineTo(i * 15.5 * sign, Math.sin(i * sign) * 100);\n" +
                "}\n" +
                "ctx.stroke();\n" +
                "ctx.restore();\n" +
                "}"
        }
    ]

}