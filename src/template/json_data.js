export default [{
    name: "Тригонометрия начало",
    steps: [
        {
            type: 'text',
            text: "Начнем наш новый раздел геометрии"
        },
        {
          type: "text",
          text: "Тригонометрия - это учения о соотношении углов и сторон треугольника"
        },
        {
            type: "text",
            text: ["Начнем с синуса и косинуса", "Введем некоторые обозначения для большей ясности", "Для начала представим точку A(1, 0) на координатной плоскости"]
        },
        {
            type: "custom",
            text: [
                "Точка A будет вращаться относительно O",
                "Синусом для угла вращения будет ордината (y значение) точки А",
                "Косинусом для угла вращения будет абсциса (х значение) точки А",
            ],
            view: {
                layers_width: 400,
                layers_height: 400,
                variables: [
                    {
                        name: "$angle",
                        value: 0
                    },
                    {
                        name: "$sizeCell",
                        value: 132
                    },
                    {
                        name: "$width",
                        value: 400
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
                controls: [],
                layers: [
                    {
                        place: "first_window",
                        type: "cells",
                        xstep: 0.5,
                        xmin: -1.5,
                        xmax: 1.5,
                        ystep: 0.5,
                        ymin: -1.5,
                        ymax: 1.5,
                        visualNumbers: true,
                        labelsX: null,
                        labelsY: null
                    },
                    {
                        place: "first_window",
                        type: "custom",
                        initDraw: "(canvas, ctx) => {\n" +
                            "ctx.save();\n" +
                            "ctx.clearRect(0, 0, 4 * $sizeCell, 4 * $sizeCell);" +
                            "ctx.beginPath(); \n" +
                            "ctx.moveTo($width / 2, $width);\n" +
                            "ctx.lineTo($width / 2, 0);\n" +
                            "ctx.lineTo($width / 2 - 5, 10);\n" +
                            "ctx.moveTo($width / 2, 0);\n" +
                            "ctx.lineTo($width / 2 + 5, 10);\n" +

                            "ctx.moveTo(0, $width / 2);\n" +
                            "ctx.lineTo($width, $width / 2);\n" +
                            "ctx.lineTo($width - 10, $width / 2 + 5);\n" +
                            "ctx.moveTo($width, $width / 2);\n" +
                            "ctx.lineTo($width - 10, $width / 2 - 5);\n" +

                            "ctx.stroke()\n" +
                            "ctx.beginPath()\n" +
                            "ctx.moveTo($width / 2, $width / 2); \n" +
                            "ctx.font = '18px Serif' \n" +
                            "ctx.fillText('x', $width - 20, $width / 2 - 10) \n" +
                            "ctx.font = '25px Serif' \n" +
                            "ctx.fillText('A', $width / 2 + $sizeCell - 20, $width / 2 - 10) \n" +
                            "ctx.fillText('O', $width / 2 + 10, $width / 2 - 10) \n" +
                            "ctx.arc($width / 2 + $sizeCell, $width / 2, 3, 0, Math.PI * 2, true); \n" +
                            "ctx.fill(); \n" +
                            "ctx.restore(); \n" +
                            "}"
                    },
                    {
                        place: "first_window",
                        type: "custom",
                        initDraw: "(canvas, ctx) => {\n" +
                            "ctx.save();\n" +
                            "ctx.beginPath();\n" +
                            "ctx.strokeStyle = 'blue';\n" +
                            "ctx.translate($width / 2, $width / 2);\n" +
                            "ctx.moveTo(0, 0);\n" +
                            "ctx.lineTo($sizeCell, 0);\n" +
                            "ctx.stroke();\n" +
                            "ctx.restore();\n" +
                            "}",
                    }
                ]
            }
        },
        {
            type: "custom",
            view: {

                layers_width: 400,
                layers_height: 500,
                variables: [
                    {
                        name: "$angle",
                        value: 0
                    },
                    {
                        name: "$sizeCell",
                        value: 132
                    },
                    {
                        name: "$width",
                        value: 400
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
                        height: 400,
                        marginLeft: 400,
                        marginTop: 0
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
                        step: 0.01,
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
                        xmin: -1.5,
                        xmax: 1.5,
                        ystep: 0.5,
                        ymin: -1.5,
                        ymax: 1.5,
                        visualNumbers: true,
                        labelsX: null,
                        labelsY: null
                    },
                    {
                        place: "first_window",
                        type: "custom",
                        initDraw: "(canvas, ctx) => {\n" +
                            "ctx.clearRect(0, 0, 4 * $sizeCell, 4 * $sizeCell);\n" +
                            "ctx.beginPath(); \n" +
                            "ctx.moveTo($width / 2, $width / 2); \n" +
                            "ctx.arc($width / 2, $width / 2, $sizeCell, 0, Math.PI * 2, true); \n" +
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
                            "ctx.translate($width / 2, $width / 2);\n" +
                            "ctx.moveTo(0, 0);\n" +
                            "ctx.lineTo( $sizeCell, 0);\n" +
                            "ctx.stroke();\n" +
                            "ctx.font = '25px Serif' \n" +
                            "ctx.fillText('A', Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell - 5) \n" +
                            "ctx.restore();\n" +
                            "}",
                        update: "(canvas, ctx) => {\n" +
                            "ctx.save();\n" +
                            "ctx.strokeStyle = 'blue';\n" +
                            "ctx.translate($width / 2, $width / 2);\n" +
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
                            "ctx.fillText(Math.floor($angle / Math.PI * 180).toString(), Math.cos($angle/ 2) * $sizeCell / 4, -Math.sin($angle / 2) * $sizeCell / 4);\n" +
                            "let smallPart = Math.abs($angle) > Math.PI * 2? 5: 0;\n" +
                            "if ($angle >= 0) {\n" +
                            "    ctx.arc(0, 0, $sizeCell / 4, 0, -$angle, true);\n" +
                            "    ctx.moveTo($sizeCell / 4, 0);\n" +
                            "    if (smallPart) ctx.arc(0, 0, $sizeCell / 4 + smallPart, 0, -$angle + Math.PI * 2, true);\n" +
                            "} else {\n" +
                            "    ctx.arc(0, 0, $sizeCell / 4, 0, -$angle, false);\n" +
                            "    ctx.moveTo($sizeCell / 4, 0);\n" +
                            "    if (smallPart) ctx.arc(0, 0, $sizeCell / 4 + smallPart, 0, -$angle - Math.PI * 2, false);\n" +
                            "}\n" +
                            "ctx.stroke();\n" +
                            "ctx.font = '25px Serif' \n" +
                            "ctx.fillText('A', Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell - 5) \n" +
                            "ctx.restore();\n" +
                            "}"
                    },
                    {
                        place: "second_window",
                        type: "cells",
                        xstep: Math.PI,
                        xmin: -Math.PI * 4,
                        xmax: Math.PI * 4,
                        ystep: 0.5,
                        ymin: -1.5,
                        ymax: 1.5,
                        visualNumbers: false,
                        labelsX: null,
                        labelsY: null
                    },
                    {
                        place: "second_window",
                        type: "custom",
                        initDraw: "(canvas, ctx) => {\n" +
                            "let width = canvas.width; \n" +
                            "let height = canvas.height; \n" +
                            "ctx.beginPath()\n" +
                            "ctx.moveTo(0, height / 2)\n" +
                            "ctx.lineTo(width, height / 2)\n" +
                            "ctx.lineTo(width - 10, height / 2 + 10)\n" +
                            "ctx.moveTo(width, height / 2)\n" +
                            "ctx.lineTo(width - 10, height / 2 - 10)\n" +
                            "ctx.moveTo(width / 2, height)\n" +
                            "ctx.lineTo(width / 2, 0)\n" +
                            "ctx.lineTo(width / 2 - 10, 10)\n" +
                            "ctx.moveTo(width / 2, 0)\n" +
                            "ctx.lineTo(width / 2 + 10, 10)\n" +
                            "ctx.stroke()\n" +
                            "ctx.font = '18px Serif'\n" +
                            "ctx.fillText('sin', width / 2 + 10, 20)\n" +
                            "ctx.fillText('Angle', width - 50, height / 2 - 10)\n" +
                            "}\n"
                    },
                    {
                        place: "second_window",
                        type: "custom",
                        initDraw: "",
                        update: "(canvas, ctx) => {\n" +
                            "ctx.clearRect(0, 0, $width, $width);\n" +
                            "ctx.save();\n" +
                            "ctx.translate($width / 2, $width / 2);\n" +
                            "ctx.beginPath();\n" +

                            "ctx.moveTo(0, 0);\n" +
                            "let sign = $angle < 0? -1 : 1;\n" +
                            "for (let i = 0; i <= Math.abs($angle); i += 0.01) {\n" +
                            "    ctx.lineTo(i * 15.5 * sign, -Math.sin(i * sign) * $sizeCell);\n" +
                            "}\n" +
                            "ctx.stroke();\n" +
                            "ctx.beginPath();\n" +
                            "ctx.strokeStyle = 'red';\n" +
                            "ctx.moveTo($angle * 15.5, -Math.sin($angle) * $sizeCell)\n" +
                            "ctx.lineTo($angle * 15.5, 0)\n" +
                            "ctx.stroke();\n" +
                            "ctx.restore();\n" +
                            "}"
                    }
                ]
            }
        }

    ]
}];