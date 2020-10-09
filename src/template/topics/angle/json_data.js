export const cos_sin = {
    layers_width: 400,
    layers_height: 400,
    variables: [
        {
            name: "$angle",
            value: 0
        },
        {
            name: "$sizeCell",
            value: 100
        }

    ],
    layers: [
        {
            type: "cells",
            size: 100,
            zoom: 33,
            offsetX: 200,
            offsetY: 200,
            visualNumbers: true,
            labelsX: null,
            labelsY: null
        },
        {
            type: "custom",
            initDraw: [
                {action: "beginPath", params: null},
                {action: "moveTo", params: [0, 0]},
                {action: "arc", params: [0, 0, "$sizeCell", 0, "Math.PI * 2", "true"]},
                {action: "stroke", params: null}
            ]
        },
        {
            type: "custom",
            initDraw: "function(canvas, ctx) {" +
                "ctx.save()" +
                "ctx.beginPath()" +
                "ctx.strokeStyle = 'blue'" +
                "ctx.translate(200, 200)" +
                "ctx.moveTo(0, 0)" +
                "ctx.lineTo( $sizeCell, 0)" +
                "ctx.stroke()" +
                "ctx.restore()" +
                "}",
            update: "function(canvas, ctx) {" +
                "ctx.save()" +
                "ctx.strokeStyle = 'blue'" +
                "ctx.translate(200, 200)" +
                "ctx.clearRect(-2 * $sizeCell, -2 * $sizeCell, 4 * $sizeCell, 4 * $sizeCell)" +
                "ctx.beginPath()" +
                "ctx.moveTo(0, 0)" +
                "ctx.lineTo(Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell)" +
                "ctx.stroke()" +
                "ctx.beginPath()" +
                "ctx.strokeStyle = 'red'" +
                "ctx.moveTo(Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell)" +
                "ctx.stroke()" +
                "ctx.beginPath()" +
                "ctx.fillStyle = 'red'" +
                "ctx.fillText(Math.sin($angle).toFixed(1), Math.cos($angle) * $sizeCell, -0.5 * Math.sin($angle) * $sizeCell)" +
                "ctx.lineTo(Math.cos($angle) * $sizeCell, 0)" +
                "ctx.stroke()" +
                "ctx.beginPath()" +
                "ctx.strokeStyle = 'green'" +
                "ctx.fillStyle = 'green'" +
                "ctx.fillText(Math.cos($angle).toFixed(1), 0.5 * Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell)" +
                "ctx.moveTo(Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell)" +
                "ctx.lineTo( 0, -Math.sin($angle) * $sizeCell)" +
                "ctx.stroke()" +
                "ctx.beginPath()" +
                "ctx.strokeStyle = 'black'" +
                "ctx.fillStyle = 'black'" +
                "ctx.fillText(Math.floor($angle / Math.PI * 180)}`, Math.cos($angle / 2) * $sizeCell / 4, -Math.sin($sizeCell / 2) * $sizeCell / 4)" +
                "if ($angle >= 0) {" +
                "    ctx.arc(0, 0, $sizeCell / 4, 0,   -$angle, true)" +
                "} else {" +
                "    ctx.arc(0, 0, $sizeCell / 4, 0,   -$angle, false)" +
                "}" +
                "ctx.stroke()" +
                "ctx.restore()" +
                "}"
        }
    ]

}