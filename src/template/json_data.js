export default [
    {
        "name": "Прикладна задача",
        "isPreview": "false",
        "points": 10,
        "gainedPoints": 0,
        "stepsCount": 2,
        "currentStep": 0,
        "isDone": "false",
        "attempts": 0,
        "steps": [
            {
                "type": "text",
                "text": "В цьому прикладі розглянемо як дізнатися висоту недосяжного об'єкта. " +
                    "Наприклад, вам потрібно дізнатись висоту стовпа. У вашому розпорядженні є мірна стрічка, дзеркало"
            },
            {
                "decisions": [
                    {
                        "label": "Виразіть висоту дерева через формулу",
                        "type": "formula",
                        "answer": "^((ac|ca)\\*(de|ed))|((de|ed)\\*(ac|ca))\\/(ea|ae)$"
                    }
                ],
                "formulas": [
                    {"formula": "DE/EA = BC / AC", "tooltip": "Відношення сторін в трикутниках"}],
                "text": "Позначимо стовп BC, DE - це ваш зріст",
                "type": "custom",
                "view": {
                    "layers_width": 700,
                    "layers_height": 600,
                    "variables": [
                        {
                            "name": "$DE",
                            "value": 170
                        },
                        {
                            "name": "$AE",
                            "value": 0
                        },
                        {
                            "name": "$AC",
                            "value": 0
                        },
                        {
                            "name": "$BC",
                            "value": 0
                        },
                        {
                            "name": "$Aangle",
                            "value": 64
                        },
                        {
                            "name": "$A",
                            "value": [150, 250]
                        },
                        {
                            "name": "$B",
                            "value": [350, 50]
                        },
                        {
                            "name": "$C",
                            "value": [350, 250]
                        },
                        {
                            "name": "$E",
                            "value": [50, 250]
                        },
                        {
                            "name": "$human",
                            "value": new Image(200, 50)
                        },
                        {
                            "name": "$tree",
                            "value": new Image(200, 50)
                        },
                        {
                            "name": "$D",
                            "value": [50, 199]
                        },
                        {
                            "name": "$showFirst",
                            "value": 0
                        },
                        {
                            "name": "$showSecond",
                            "value": 0
                        },
                        {
                            "name": "$showThird",
                            "value": 0
                        },
                        {
                            "name": "$showVisible",
                            "value": 1
                        },
                        {
                            "name": "$clicked",
                            "value": 0
                        }
                    ],
                    "places": {
                        "first_window": {
                            "width": 400,
                            "height": 280,
                            "marginLeft": 0,
                            "marginTop": 0
                        },
                        "second_window": {
                            "width": 400,
                            "height": 300,
                            "marginLeft": 460,
                            "marginTop": 0
                        },
                        "place_first": {
                            "width": 70,
                            "height": 30,
                            "marginLeft": 410,
                            "marginTop": 10
                        },
                        "place_second": {
                            "width": 70,
                            "height": 30,
                            "marginLeft": 410,
                            "marginTop": 65
                        },
                        "place_third": {
                            "width": 70,
                            "height": 30,
                            "marginLeft": 410,
                            "marginTop": 95
                        },
                        "place_height": {
                            "width": 100,
                            "height": 30,
                            "marginLeft": 0,
                            "marginTop": 350
                        },
                        "place_visible": {
                            "width": 150,
                            "height": 30,
                            "marginLeft": 240,
                            "marginTop": 350
                        },
                        "place_width": {
                            "width": 400,
                            "height": 20,
                            "marginLeft": 0,
                            "marginTop": 290
                        }
                    },
                    "controls": [
                        {
                            "place": "place_visible",
                            "type": "checkbox",
                            "label": "Наглядно?",
                            "checked": true,
                            "onUpdate": "() => {$showVisible = ($showVisible + 1) % 2;\n return $showVisible === 1}"
                        },
                        {
                            "place": "place_first",
                            "type": "checkbox",
                            "label": "1)",
                            "checked": false,
                            "onUpdate": "() => {$showFirst = ($showFirst + 1) % 2;\n return $showFirst === 1}"
                        },
                        {
                            "place": "place_second",
                            "type": "checkbox",
                            "label": "2)",
                            "checked": false,
                            "onUpdate": "() => {$showSecond = ($showSecond + 1) % 2;\n return $showSecond === 1}"
                        },
                        {
                            "place": "place_third",
                            "type": "checkbox",
                            "label": "3)",
                            "checked": false,
                            "onUpdate": "() => {$showThird = ($showThird + 1) % 2;\n return $showThird === 1}"
                        },
                        {
                            "min": 100,
                            "max": 200,
                            "step": 1,
                            "value": 170,
                            "place": "place_height",
                            "type": "number",
                            "label": "Ваш зріст",
                            "onUpdate": "(val) => {\n" +
                                "    let next = val * 3 / 10;\n" +
                                "    $D[1] = $E[1] - next;\n" +
                                "}"
                        },
                        {
                            "min": 10,
                            "max": 300,
                            "step": 1,
                            "value": 50,
                            "place": "place_width",
                            "type": "range",
                            "label": "Відстань від стовпа",
                            "onUpdate": "(val) => {\n" +
                                "    let next = parseFloat(val);\n" +
                                "    $E[0] = next;\n" +
                                "    $D[0] = next;\n" +
                                "}"
                        }
                    ],
                    "layers": [
                        {
                            "place": "second_window",
                            "type": "custom",
                            "update": "(canvas, ctx) => {\n" +
                                " const width = canvas.width;\n" +
                                " const height = canvas.height;\n" +
                                " ctx.clearRect(0, 0, width, height)\n" +
                                " const getAngle = (val) => {\n" +
                                "     return (val / Math.PI * 180).toFixed(2);\n" +
                                " }\n" +
                                " let blocks = [];\n" +
                                " if ($showFirst) {\n" +
                                "     blocks = blocks.concat([" +
                                "         'Розмістимо дзеркало так, щоб було видно вершину стовба BC'" +
                                "     ])\n" +
                                " }\n" +
                                " if ($showSecond) {\n" +
                                "     blocks = blocks.concat([" +
                                "         'Кут падіння дорівнює куту відображення'," +
                                "         'EAD = CAB'" +
                                "     ])\n" +
                                " }\n" +
                                " if ($showThird) {\n" +
                                "     blocks = blocks.concat([" +
                                "         'Кут AED = куту ACB = 90'," +
                                "         'Кут ADE = куту ABC'," +
                                "         'Висновок: AED подібний ACB'" +
                                "     ])\n" +
                                " }\n" +
                                " if ($showThird) {\n" +
                                "     blocks = blocks.concat([" +
                                "         'BC = AC'," +
                                "         'DE   AE'" +
                                "         " +
                                "     ])\n" +
                                " }\n" +
                                " ctx.save()\n" +
                                " ctx.fillStyle = 'black';\n" +
                                " ctx.font = '18px Serif';\n" +
                                " let row = 1;\n" +
                                " let widthText = 46;\n" +
                                " for (let text of blocks) {\n" +
                                "     for (let i = 0; i < text.length; i += widthText, ++row) {\n" +
                                "         ctx.fillText(text.substr(i, widthText), 10, row * 30)\n" +
                                "     }\n" +
                                " }\n" +

                                " ctx.restore()\n" +
                                "}"
                        },
                        {
                            "place": "first_window",
                            "type": "cells",
                            "xstep": 1,
                            "xmin": 0,
                            "xmax": 10,
                            "ystep": 1,
                            "ymin": 0,
                            "ymax": 10,
                            "visualNumbers": false,
                            "labelsX": null,
                            "labelsY": null
                        },
                        {
                            "place": "first_window",
                            "type": "custom",
                            "initDraw": "(canvas, ctx) => {\n" +
                                "$human.src = 'human.png';\n" +
                                "$tree.src = 'tree.png';\n" +
                                "$tree.addEventListener('load', () => {" +
                                "   ctx.drawImage($tree, $B[0] - 50, $B[1])\n" +
                                "})\n" +
                                "$human.addEventListener('load', () => {" +
                                "   ctx.drawImage($human, $D[0] - 25, $D[1], 50, $E[1] - $D[1])\n" +
                                "})\n" +
                                "const getLen = (a, b) => {" +
                                "  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)\n" +
                                "}\n" +
                                "const showLen = (val) => {\n" +
                                "  return (val / 3 * 10).toFixed();" +
                                "}\n" +
                                "const writeLen = (a, b, color='black') => {\n" +
                                "    let len = getLen(a, b) \n" +
                                "    ctx.save()\n" +
                                "    ctx.fillStyle = color;\n" +
                                "    ctx.fillText(showLen(len), (a[0] + b[0]) / 2, " +
                                "        (a[1] + b[1]) / 2) \n" +
                                "    ctx.restore();\n" +
                                "}\n" +
                                "const writeAngle = (a, b, c, color='black') => {\n " +
                                "    ctx.moveTo(a[0], a[1])\n" +
                                "    let startAngle = Math.acos((b[0] - a[0]) / getLen(b, a));\n" +
                                "    let finishAngle = Math.acos((c[0] - a[0]) / getLen(c, a));\n" +
                                "    let rotStart = b[1] - a[1] > 0? 1: -1;\n" +
                                "    let rotFinish = c[1] - a[1] > 0? 1: -1;\n" +
                                "    startAngle *= rotStart;\n" +
                                "    finishAngle *= rotFinish;\n" +
                                "    ctx.arc(a[0], a[1]," +
                                "        15, " +
                                "        Math.min(startAngle, finishAngle)," +
                                "        Math.max(startAngle, finishAngle)," +
                                "        Math.max(startAngle, finishAngle) - Math.min(startAngle, finishAngle) > Math.PI" +
                                "        )\n" +
                                "    ctx.stroke()\n" +
                                "    let angle = Math.abs(startAngle - finishAngle)\n" +
                                "    angle = angle > Math.PI ? " +
                                "        Math.PI * 2 -angle : angle; \n " +
                                "    let minAngle = Math.min(startAngle, finishAngle);\n" +
                                "    minAngle += Math.abs(startAngle - finishAngle) / 2;\n" +
                                "    let neg = startAngle < 0 && finishAngle > 0? -1.5: 1;\n" +
                                "    ctx.save()\n" +
                                "    ctx.fillStyle = color\n" +
                                "    ctx.fillText((angle / Math.PI * 180).toFixed(2), a[0] + neg * Math.cos(minAngle) * 28, a[1] + neg * Math.sin(minAngle) * 28);\n" +
                                "    ctx.restore()\n" +
                                "    return angle;" +
                                "}\n" +

                                "ctx.save();\n" +
                                "ctx.clearRect(0, 0, canvas.width, canvas.height);ctx.beginPath(); \n" +
                                "ctx.moveTo($B[0], $B[1]);\n" +
                                "ctx.lineTo($C[0], $C[1]);\n" +
                                "ctx.lineTo($A[0], $A[1]);\n" +
                                "ctx.lineTo($E[0], $E[1]);\n" +
                                "ctx.lineTo($D[0], $D[1]);\n" +
                                "ctx.stroke()\n" +
                                "$AE = getLen($A, $E)\n" +
                                "$AC = getLen($A, $C)\n" +
                                "$DE = getLen($D, $E)\n" +
                                "$BC = getLen($B, $C)\n" +
                                "writeLen($D, $E)\n" +
                                "ctx.beginPath() \n" +
                                "ctx.fillStyle = 'red'\n" +
                                "ctx.moveTo($B[0], $B[1]) \n" +
                                "ctx.arc($B[0], $B[1], 5, 0, Math.PI * 2) \n" +
                                "ctx.moveTo($C[0], $C[1]) \n" +
                                "ctx.arc($C[0], $C[1], 5, 0, Math.PI * 2) \n" +
                                "ctx.moveTo($D[0], $D[1]) \n" +
                                "ctx.arc($D[0], $D[1], 5, 0, Math.PI * 2) \n" +
                                "ctx.moveTo($E[0], $E[1]) \n" +
                                "ctx.arc($E[0], $E[1], 5, 0, Math.PI * 2) \n" +
                                "ctx.fill() \n" +
                                "ctx.font = '21px Serif'\n" +
                                "ctx.fillStyle = 'blue'\n" +
                                "ctx.fillText('B', $B[0] - 15, $B[1]);\n" +
                                "ctx.fillText('C', $C[0] - 15, $C[1]);\n" +
                                "ctx.fillText('D', $D[0] - 15, $D[1]);\n" +
                                "ctx.fillText('E', $E[0] - 15, $E[1]);\n" +
                                "ctx.restore(); \n}",
                            "update": "(canvas, ctx) => {\n" +
                                "const getLen = (a, b) => {" +
                                "  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)\n" +
                                "}\n" +
                                "const showLen = (val) => {\n" +
                                "  return (val / 3 * 10).toFixed();" +
                                "}\n" +
                                "const showDecision = () => {\n" +
                                "    if ($showFirst) {\n" +
                                "        const relativeLen = getLen($E, $C) / (getLen($D, $E) / getLen($B, $C) + 1);\n" +
                                "        $A = [$C[0] - relativeLen, 250]\n" +
                                "        ctx.save()\n" +
                                "        ctx.fillStyle = 'red'\n" +
                                "        ctx.beginPath()\n" +
                                "        ctx.moveTo($A[0], $A[1]) \n" +
                                "        ctx.arc($A[0], $A[1], 5, 0, Math.PI * 2) \n" +
                                "        ctx.fill()\n" +
                                "        ctx.setLineDash([7, 7]);\n" +
                                "        ctx.beginPath()\n" +
                                "        ctx.moveTo($A[0], 0);\n" +
                                "        ctx.lineTo($A[0], 300);\n" +
                                "        ctx.stroke()\n" +
                                "        ctx.strokeStyle = 'blue'\n" +
                                "        ctx.beginPath()\n" +
                                "        ctx.moveTo($D[0], $D[1]);\n" +
                                "        ctx.lineTo($A[0], $A[1]);\n" +
                                "        ctx.lineTo($B[0], $B[1]);\n" +
                                "        ctx.stroke();\n" +
                                "        writeLen($E, $A, 'black')\n" +
                                "        writeLen($A, $C, 'black')\n" +
                                "        ctx.font = '21px Serif'\n" +
                                "        ctx.fillStyle = 'blue'\n" +
                                "        ctx.fillText('A', $A[0] - 10, $A[1] + 30) \n" +
                                "        ctx.restore()\n" +
                                "    }\n" +
                                "    if ($showSecond) {\n" +
                                "        writeAngle($A, $D, $E, 'green')\n" +
                                "        writeAngle($A, $B, $C, 'green')\n" +
                                "        ctx.restore()\n" +
                                "    }\n" +
                                "}\n" +
                                "const writeLen = (a, b, color='black') => {\n" +
                                "    let len = getLen(a, b) \n" +
                                "    ctx.save()\n" +
                                "    ctx.fillStyle = color;\n" +
                                "    ctx.fillText(showLen(len), (a[0] + b[0]) / 2, " +
                                "        (a[1] + b[1]) / 2 + 10) \n" +
                                "    ctx.restore();\n" +
                                "}\n" +
                                "const writeAngle = (a, b, c, color='black') => {\n " +
                                "    ctx.moveTo(a[0], a[1])\n" +
                                "    let startAngle = Math.acos((b[0] - a[0]) / getLen(b, a));\n" +
                                "    let finishAngle = Math.acos((c[0] - a[0]) / getLen(c, a));\n" +
                                "    let rotStart = b[1] - a[1] > 0? 1: -1;\n" +
                                "    let rotFinish = c[1] - a[1] > 0? 1: -1;\n" +
                                "    startAngle *= rotStart;\n" +
                                "    finishAngle *= rotFinish;\n" +
                                "    ctx.arc(a[0], a[1]," +
                                "        15, " +
                                "        Math.min(startAngle, finishAngle)," +
                                "        Math.max(startAngle, finishAngle)," +
                                "        Math.max(startAngle, finishAngle) - Math.min(startAngle, finishAngle) > Math.PI" +
                                "        )\n" +
                                "    ctx.stroke()\n" +
                                "    let angle = Math.abs(startAngle - finishAngle)\n" +
                                "    angle = angle > Math.PI ? " +
                                "        Math.PI * 2 -angle : angle; \n " +
                                "    let minAngle = Math.min(startAngle, finishAngle);\n" +
                                "    minAngle += Math.abs(startAngle - finishAngle) / 2;\n" +
                                "    let neg = startAngle < 0 && finishAngle > 0? -1.5: 1;\n" +
                                "    ctx.save()\n" +
                                "    ctx.fillStyle = color\n" +
                                "    ctx.fillText((angle / Math.PI * 180).toFixed(2), a[0] + neg * Math.cos(minAngle) * 28, a[1] + neg * Math.sin(minAngle) * 28);\n" +
                                "    ctx.restore()\n" +
                                "    return angle;" +
                                "}\n" +


                                "ctx.clearRect(0, 0, canvas.width, canvas.height);ctx.beginPath(); \n" +
                                "if ($showVisible) {\n" +
                                "    ctx.drawImage($tree, $B[0] - 50, $B[1])\n" +
                                "    ctx.globalAlpha = 0.7;\n" +
                                "    ctx.drawImage($human, $D[0] - 25, $D[1], 50, $E[1] - $D[1])\n" +
                                "    ctx.globalAlpha = 1;\n" +
                                "}\n" +
                                "writeLen($E, $D, 'black')\n" +
                                "ctx.moveTo($B[0], $B[1]);\n" +
                                "ctx.lineTo($C[0], $C[1]);\n" +
                                "ctx.lineTo($E[0], $E[1]);\n" +
                                "ctx.lineTo($D[0], $D[1]);\n" +
                                "ctx.stroke()\n" +
                                "showDecision();\n" +
                                "$AE = getLen($A, $E)\n" +
                                "$AC = getLen($A, $C)\n" +
                                "$DE = getLen($D, $E)\n" +
                                "$BC = getLen($B, $C)\n" +
                                "ctx.save();\n" +
                                "ctx.beginPath() \n" +
                                "ctx.fillStyle = 'red'\n" +
                                "ctx.moveTo($B[0], $B[1]) \n" +
                                "ctx.arc($B[0], $B[1], 5, 0, Math.PI * 2) \n" +
                                "ctx.moveTo($C[0], $C[1]) \n" +
                                "ctx.arc($C[0], $C[1], 5, 0, Math.PI * 2) \n" +
                                "ctx.moveTo($D[0], $D[1]) \n" +
                                "ctx.arc($D[0], $D[1], 5, 0, Math.PI * 2) \n" +
                                "ctx.moveTo($E[0], $E[1]) \n" +
                                "ctx.arc($E[0], $E[1], 5, 0, Math.PI * 2) \n" +
                                "ctx.fill() \n" +
                                "ctx.font = '21px Serif'\n" +
                                "ctx.fillStyle = 'blue'\n" +
                                "ctx.fillText('B', $B[0] - 15, $B[1]);\n" +
                                "ctx.fillText('C', $C[0] - 15, $C[1]);\n" +
                                "ctx.fillText('D', $D[0] - 15, $D[1]);\n" +
                                "ctx.fillText('E', $E[0] - 15, $E[1]);\n" +
                                "ctx.restore(); \n}"
                        },
                        {
                            "place": "first_window",
                            "type": "custom",
                            "initDraw": "(canvas, ctx) => {\nctx.save();\nctx.beginPath();\nctx.strokeStyle = 'blue';\nctx.translate($width / 2, $width / 2);\nctx.moveTo(0, 0);\nctx.lineTo($sizeCell, 0);\nctx.stroke();\nctx.restore();\n}",
                        }
                    ]
                }
            }
        ]
    },
    {
        "gainedPoints": 0,
        "isPreview": "true",
        "points": 0,
        "stepsCount": 4,
        "currentStep": 1,
        "isDone": "false",
        "attempts": 0,
        "name": "Тригонометрія. Початок",
        "steps": [
        {
          "type": "text",
          "text": ["Почнімо наш новий розділ геометрії. Тригонометрія - це вчення про співвідношення кутів та сторін трикутника"]
        },
        {
            "type": "text",
            "text": ["Дізнаємось про синус та косинус. Введемо деякі позначення для більшої ясності. Для початку дано точку A(1, 0) на координатній площині."]
        },
        {
            "type": "custom",
            "text": [
                "Точка A буде обертатись відносно O. Синусом для кута обертання буде ордината (y значення) точки А. Косинусом для кута обертання буде абсциса (х значення) точки А",
            ],
            "view": {
                "layers_width": 400,
                "layers_height": 500,
                "variables": [
                    {
                        "name": "$angle",
                        "value": 0
                    },
                    {
                        "name": "$sizeCell",
                        "value": 132
                    },
                    {
                        "name": "$width",
                        "value": 400
                    }
                ],
                "places": {
                    "first_window": {
                        "width": 400,
                        "height": 400,
                        "marginLeft": 0,
                        "marginTop": 0
                    },
                    "second_window": {
                        "width": 400,
                        "height": 200,
                        "marginLeft": 0,
                        "marginTop": 500
                    },
                    "place_control": {
                        "width": 200,
                        "height": 30,
                        "marginLeft": 0,
                        "marginTop": 405
                    }

                },
                "controls": [],
                "layers": [
                    {
                        "place": "first_window",
                        "type": "cells",
                        "xstep": 0.5,
                        "xmin": -1.5,
                        "xmax": 1.5,
                        "ystep": 0.5,
                        "ymin": -1.5,
                        "ymax": 1.5,
                        "visualNumbers": true,
                        "labelsX": null,
                        "labelsY": null
                    },
                    {
                        "place": "first_window",
                        "type": "custom",
                        "initDraw": "(canvas, ctx) => {\nctx.save();\nctx.clearRect(0, 0, 4 * $sizeCell, 4 * $sizeCell);ctx.beginPath(); \nctx.moveTo($width / 2, $width);\nctx.lineTo($width / 2, 0);\nctx.lineTo($width / 2 - 5, 10);\nctx.moveTo($width / 2, 0);\nctx.lineTo($width / 2 + 5, 10);\nctx.moveTo(0, $width / 2);\nctx.lineTo($width, $width / 2);\nctx.lineTo($width - 10, $width / 2 + 5);\nctx.moveTo($width, $width / 2);\nctx.lineTo($width - 10, $width / 2 - 5);\nctx.stroke()\nctx.beginPath()\nctx.moveTo($width / 2, $width / 2); \nctx.font = '18px Serif' \nctx.fillText('x', $width - 20, $width / 2 - 10) \nctx.font = '25px Serif' \nctx.fillText('A', $width / 2 + $sizeCell - 20, $width / 2 - 10) \nctx.fillText('O', $width / 2 + 10, $width / 2 - 10) \nctx.arc($width / 2 + $sizeCell, $width / 2, 3, 0, Math.PI * 2, true); \nctx.fill(); \nctx.restore(); \n}"
                    },
                    {
                        "place": "first_window",
                        "type": "custom",
                        "initDraw": "(canvas, ctx) => {\nctx.save();\nctx.beginPath();\nctx.strokeStyle = 'blue';\nctx.translate($width / 2, $width / 2);\nctx.moveTo(0, 0);\nctx.lineTo($sizeCell, 0);\nctx.stroke();\nctx.restore();\n}",
                    }
                ]
            }
        },
        {
            "decisions": [
                {
                    "label": "Синус від 0 градусів",
                    "type": "value",
                    "answer": "0"
                },
                {
                    "label": "Косинус від 0 градусів",
                    "type": "value",
                    "answer": "1"
                }
            ],
            "formulas": [
                {"formula": "sinA = {\"color\": \"red\", \"text\": \"y\"}", "tooltip": "Синус"},
                {"formula": "cosA = {\"color\": \"green\", \"text\": \"x\"}", "tooltip": "Косинус"}
                ],
            "type": "custom",
            "view": {
                "layers_height": 600,
                "layers_width": 400,
                "task_triggers": [
                    {
                        "place": "place_trigger",
                        "describe": "Знайдіть значення кутів при яких синус дорівнює нулю в діапазоні -720 - 720 градусів",
                        "test": {"$angle": "(v) => {\n " +
                                "let val = Math.floor(v / Math.PI * 180);\n" +
                                "if (val <= 720 && 700 <= val) {\n" +
                                "    $testValues = $testValues | 1;\n" +
                                "}\n" +
                                "if (val >= -720 && -700 >= val) {\n" +
                                "    $testValues = $testValues | 2;\n" +
                                "}\n" +
                                "return $testValues === 3\n" +
                                "}"
                        }
                    }
                ],
                "variables": [
                    {
                        "name": "$showTan",
                        "value": 0
                    },
                    {
                        "name": "$testValues",
                        "value": 0
                    },
                    {
                        "name": "$angle",
                        "value": 0
                    },
                    {
                        "name": "$sizeCell",
                        "value": 132
                    },
                    {
                        "name": "$width",
                        "value": 400
                    }
                ],
                "places": {
                    "first_window": {
                        "width": 400,
                        "height": 400,
                        "marginLeft": 0,
                        "marginTop": 0
                    },
                    "second_window": {
                        "width": 400,
                        "height": 400,
                        "marginLeft": 400,
                        "marginTop": 0
                    },
                    "third_window": {
                        "width": 200,
                        "height": 50,
                        "marginLeft": 420,
                        "marginTop": 10
                    },
                    "place_control": {
                        "width": 800,
                        "height": 30,
                        "marginLeft": 0,
                        "marginTop": 455
                    },
                    "place_trigger": {
                        "width": 400,
                        "height": 150,
                        "marginLeft": 0,
                        "marginTop": 510
                    }

                },
                "controls": [
                    {
                        "place": "place_control",
                        "type": "range",
                        "min": -720,
                        "max": 720,
                        "step": 0.01,
                        "value": "$angle",
                        "label": "Кут",
                        "onUpdate": "(val) => {\nlet next = val / 180 * Math.PI;\n$angle = next;\n}"
                    },
                    {
                        "place": "third_window",
                        "type": "checkbox",
                        "label": "Включити тангенс",
                        "value": "$angle",
                        "onUpdate": "() => {if ($showTan == 0) {$showTan = 1; return true} else {$showTan = 0; return false}}"
                    }
                ],
                "layers": [
                    {
                        "place": "first_window",
                        "type": "cells",
                        "xstep": 0.5,
                        "xmin": -1.5,
                        "xmax": 1.5,
                        "ystep": 0.5,
                        "ymin": -1.5,
                        "ymax": 1.5,
                        "visualNumbers": true,
                        "labelsX": null,
                        "labelsY": null
                    },
                    {
                        "place": "first_window",
                        "type": "custom",
                        "initDraw": "(canvas, ctx) => {\nctx.clearRect(0, 0, 4 * $sizeCell, 4 * $sizeCell);\nctx.beginPath(); \nctx.moveTo($width / 2, $width / 2); \nctx.arc($width / 2, $width / 2, $sizeCell, 0, Math.PI * 2, true); \nctx.stroke(); \n}"
                    },
                    {
                        "place": "first_window",
                        "type": "custom",
                        "initDraw": "(canvas, ctx) => {\nctx.save();\nctx.beginPath();\nctx.strokeStyle = 'blue';\nctx.translate($width / 2, $width / 2);\nctx.moveTo(0, 0);\nctx.lineTo( $sizeCell, 0);\nctx.stroke();\nctx.font = '25px Serif' \nctx.fillText('A', Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell - 5) \nctx.restore();\n}",
                        "update": "(canvas, ctx) => {\nctx.save();\nctx.strokeStyle = 'blue';\n ctx.translate($width / 2, $width / 2);\n" +
                            "ctx.clearRect(-2 * $sizeCell, -2 * $sizeCell, 4 * $sizeCell, 4 * $sizeCell); " +
                            "\nctx.beginPath();\nctx.moveTo($showTan? -$sizeCell : 0, $showTan? Math.tan($angle) * $sizeCell : 0);\n ctx.lineTo($showTan? $sizeCell : Math.cos($angle) * $sizeCell, $showTan? -Math.tan($angle) * $sizeCell : -Math.sin($angle) * $sizeCell);\nctx.stroke();\nctx.beginPath();\nctx.strokeStyle = 'red';\nctx.moveTo($showTan? $sizeCell : Math.cos($angle) * $sizeCell, $showTan? -Math.tan($angle) * $sizeCell: -Math.sin($angle) * $sizeCell);\nctx.stroke();\nctx.beginPath();\nctx.fillStyle = 'red';\nctx.strokeStyle = 'red';\nctx.moveTo($showTan? $sizeCell : Math.cos($angle) * $sizeCell, $showTan? -Math.tan($angle) * $sizeCell : -Math.sin($angle) * $sizeCell);\nctx.fillText(($showTan? Math.tan($angle): Math.sin($angle)).toFixed(1), Math.cos($angle) * $sizeCell, -0.5 * Math.sin($angle) * $sizeCell);\nctx.lineTo( $showTan? $sizeCell : Math.cos($angle) * $sizeCell, 0);\nctx.stroke();\nctx.beginPath();\nctx.strokeStyle = 'green';\nctx.fillStyle = 'green'; \nctx.fillText(Math.cos($angle).toFixed(1), 0.5 * Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell);\nctx.moveTo(Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell);\nctx.lineTo(0, -Math.sin($angle) * $sizeCell);\nctx.stroke();\nctx.beginPath();\nctx.strokeStyle = 'black';\nctx.fillStyle = 'black';\nctx.fillText(Math.floor($angle / Math.PI * 180).toString(), Math.cos($angle/ 2) * $sizeCell / 4, -Math.sin($angle / 2) * $sizeCell / 4);\nlet smallPart = Math.abs($angle) > Math.PI * 2? 5: 0;\nif ($angle >= 0) {\n    ctx.arc(0, 0, $sizeCell / 4, 0, -$angle, true);\n    ctx.moveTo($sizeCell / 4, 0);\n    if (smallPart) ctx.arc(0, 0, $sizeCell / 4 + smallPart, 0, -$angle + Math.PI * 2, true);\n} else {\n    ctx.arc(0, 0, $sizeCell / 4, 0, -$angle, false);\n    ctx.moveTo($sizeCell / 4, 0);\n    if (smallPart) ctx.arc(0, 0, $sizeCell / 4 + smallPart, 0, -$angle - Math.PI * 2, false);\n}\nctx.stroke();\nctx.font = '25px Serif' \nctx.fillText('A', Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell - 5) \nctx.restore();\n}"
                    },
                    {
                        "place": "second_window",
                        "type": "cells",
                        "xstep": Math.PI,
                        "xmin": -Math.PI * 4,
                        "xmax": Math.PI * 4,
                        "ystep": 0.5,
                        "ymin": -1.5,
                        "ymax": 1.5,
                        "visualNumbers": false,
                        "labelsX": null,
                        "labelsY": null
                    },
                    {
                        "place": "second_window",
                        "type": "custom",
                        "initDraw": "(canvas, ctx) => {\nlet width = canvas.width; \nlet height = canvas.height; \nctx.beginPath()\nctx.moveTo(0, height / 2)\nctx.lineTo(width, height / 2)\nctx.lineTo(width - 10, height / 2 + 10)\nctx.moveTo(width, height / 2)\nctx.lineTo(width - 10, height / 2 - 10)\nctx.moveTo(width / 2, height)\nctx.lineTo(width / 2, 0)\nctx.lineTo(width / 2 - 10, 10)\nctx.moveTo(width / 2, 0)\nctx.lineTo(width / 2 + 10, 10)\nctx.stroke()\nctx.font = '18px Serif'\nctx.fillText($showTan? 'tan': 'sin', width / 2 + 10, 20)\nctx.fillText('Angle', width - 50, height / 2 - 10)\n}\n",
                        "update": "(canvas, ctx) => {\nlet width = canvas.width; \nlet height = canvas.height;\n ctx.clearRect(0, 0, width, height); \nctx.beginPath()\nctx.moveTo(0, height / 2)\nctx.lineTo(width, height / 2)\nctx.lineTo(width - 10, height / 2 + 10)\nctx.moveTo(width, height / 2)\nctx.lineTo(width - 10, height / 2 - 10)\nctx.moveTo(width / 2, height)\nctx.lineTo(width / 2, 0)\nctx.lineTo(width / 2 - 10, 10)\nctx.moveTo(width / 2, 0)\nctx.lineTo(width / 2 + 10, 10)\nctx.stroke()\nctx.font = '18px Serif'\nctx.fillText($showTan? 'tan': 'sin', width / 2 + 10, 20)\nctx.fillText('Angle', width - 50, height / 2 - 10)\n}\n"
                    },
                    {
                        "place": "second_window",
                        "type": "custom",
                        "initDraw": "",
                        "update": "(canvas, ctx) => {\nctx.clearRect(0, 0, $width, $width);\nctx.save();\nctx.translate($width / 2, $width / 2);\nctx.beginPath();\nctx.moveTo(0, 0);\nlet sign = $angle < 0? -1 : 1;\n" +
                            "for (let i = 0; i <= Math.abs($angle); i += 0.01) {\n    " +
                            "    let isMove = $showTan && Math.abs(Math.sin(i * sign)) > 0.98\n" +
                            "    if (isMove)" +
                            "ctx.moveTo(i * 15.5 * sign, $showTan? -Math.tan(i * sign) * $sizeCell : -Math.sin(i * sign) * $sizeCell)\n" +
                            "    else\n " +
                            "ctx.lineTo(i * 15.5 * sign, $showTan? -Math.tan(i * sign) * $sizeCell : -Math.sin(i * sign) * $sizeCell)\n" +
                            "\n}\nctx.stroke();\nctx.beginPath();\nctx.strokeStyle = 'red';\nctx.moveTo($angle * 15.5, $showTan? -Math.tan( $angle) * $sizeCell :-Math.sin( $angle) * $sizeCell)\nctx.lineTo($angle * 15.5, 0)\nctx.stroke();\nctx.restore();\n}"
                    }
                ]
            }
        }
    ]
    },

    {
        "gainedPoints": 0,
        "points": 20,
        "isPreview": "false",
        "name": "Теорема синусів",
        "attempts": 1,
        "isDone": "true",
        "stepsCount": 2,
        "currentStep": 0,
        "steps": [
            {
                "type": "text",
                "text": "Розглянемо приклад використання синусів"
            },
            {
                "type": "custom",
                "text": [
                    "Задача. Дано трикутник ABC",
                    "Відомі 2 кути та одна сторона AB. Знайти всі інші сторони та радіус  кола описаного трикутника"],
                "view": {
                    "layers_width": 400,
                    "layers_height": 500,
                    "variables": [
                        {
                            "name": "$AB",
                            "value": 0
                        },
                        {
                            "name": "$AC",
                            "value": 0
                        },
                        {
                            "name": "$BC",
                            "value": 0
                        },
                        {
                            "name": "$Aangle",
                            "value": 64
                        },
                        {
                            "name": "$Bangle",
                            "value": 41
                        },
                        {
                            "name": "$Cangle",
                            "value": 74
                        },
                        {
                            "name": "$A",
                            "value": [50, 50]
                        },
                        {
                            "name": "$B",
                            "value": [300, 100]
                        },
                        {
                            "name": "$C",
                            "value": [100, 200]
                        },
                        {
                            "name": "$showMore",
                            "value": 0
                        },
                        {
                            "name": "$clicked",
                            "value": 0
                        }
                    ],
                    "places": {
                        "first_window": {
                            "width": 400,
                            "height": 300,
                            "marginLeft": 0,
                            "marginTop": 0
                        },
                        "second_window": {
                            "width": 400,
                            "height": 300,
                            "marginLeft": 450,
                            "marginTop": 0
                        },
                        "place_control": {
                            "width": 100,
                            "height": 30,
                            "marginLeft": 0,
                            "marginTop": 325
                        }
                    },
                    "controls": [
                        {
                            "place": "place_control",
                            "type": "checkbox",
                            "label": "Показати рішення",
                            "checked": false,
                            "onUpdate": "() => {if ($showMore == 0) {$showMore = 1; return true} else {$showMore = 0; return false}}"
                        },
                    ],
                    "layers": [
                        {
                          "place": "second_window",
                          "type": "custom",
                          "update": "(canvas, ctx) => {\n" +
                              " const width = canvas.width;\n" +
                              " const height = canvas.height;\n" +
                              " ctx.clearRect(0, 0, width, height)\n" +
                              " const getAngle = (val) => {\n" +
                              "     return (val / Math.PI * 180).toFixed(2);\n" +
                              " }\n" +
                              " if (!$showMore) return;\n" +
                              " ctx.save()\n" +
                              " ctx.fillStyle = 'black';\n" +
                              " ctx.font = '18px Serif';\n" +
                              " let r2 = $AB / Math.sin($Cangle)\n" +
                              " let blocks = ['Знайдемо 3 кут', " +
                              "   '1) C = 180 - B - A = 180 - ' + " +
                              "       getAngle($Bangle) + ' - ' + " +
                              "       getAngle($Aangle) + ' = ' + getAngle($Cangle)," +
                              "   'Відношення сторони до синусу протилежного'," +
                              "   ' кута однаково для всіх сторін і дорівнює 2R'," +
                              "   '(теорема синусів)', " +
                              "   '2) 2R = AB / sin(C) = ' + $AB.toFixed(2) + ' / ' +" +
                              "       Math.sin($Cangle).toFixed(2) + ' = ' + (r2).toFixed(2)," +
                              "   '3) BC = 2R * sin(A) = ' + r2.toFixed(2) + ' * ' + Math.sin($Aangle).toFixed(2) +" +
                              "       ' = ' +  $BC.toFixed(2)," +
                              "   '4) AC = 2R * sin(B) = ' + r2.toFixed() + ' * ' + Math.sin($Bangle).toFixed(2) +" +
                              "       ' = ' +  $AC.toFixed(2)" +
                              " ];\n" +
                              " blocks.forEach((a, index) => ctx.fillText(a, 10, (index + 1) * 30))\n" +
                              " ctx.restore()\n" +
                              "}"
                        },
                        {
                            "place": "first_window",
                            "type": "cells",
                            "xstep": 1,
                            "xmin": 0,
                            "xmax": 10,
                            "ystep": 1,
                            "ymin": 0,
                            "ymax": 10,
                            "visualNumbers": true,
                            "labelsX": null,
                            "labelsY": null
                        },
                        {
                            "place": "first_window",
                            "type": "custom",
                            "onMouseDown": "(e) => {\n" +
                                "let x = e.offsetX\n" +
                                "let y = e.offsetY\n" +
                                "let arr = []\n" +
                                "arr.push($A)\n" +
                                "arr.push($B)\n" +
                                "arr.push($C)\n" +
                                "arr.forEach((point, index) => {\n" +
                                "   let nearX = point[0] - 5 < x && point[0] + 5 > x; \n" +
                                "   let nearY = point[1] - 5 < y && point[1] + 5 > y; \n" +
                                "   if (nearX && nearY) {\n" +
                                "       let val = index + 1\n" +
                                "       $clicked = val;\n" +
                                "   }" +
                                "})" +
                                "}\n",
                            "onMouseMove": "(e) => {\n" +
                                "let x = e.movementX;\n" +
                                "let y = e.movementY;\n" +
                                "switch($clicked) {\n" +
                                "  case 1:\n" +
                                "      $A[0] = $A[0] + x\n" +
                                "      $A[1] = $A[1] + y\n" +
                                "  break;\n" +
                                "  case 2:\n" +
                                "      $B[0] = $B[0] + x\n" +
                                "      $B[1] = $B[1] + y\n" +
                                "  break;\n" +
                                "  case 3:\n" +
                                "      $C[0] = $C[0] + x\n" +
                                "      $C[1] = $C[1] + y\n" +
                                "  break;\n" +
                                "}" +
                                "}\n",
                            "onMouseUp": "(e) => {\n" +
                                "$clicked = 0;\n" +
                                "}\n",
                            "initDraw": "(canvas, ctx) => {\n" +
                                "const getLen = (a, b) => {" +
                                "  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)\n" +
                                "}\n" +
                                "const writeLen = (a, b, color='black') => {\n" +
                                "    let len = getLen(a, b) \n" +
                                "    ctx.save()\n" +
                                "    ctx.fillStyle = color;\n" +
                                "    ctx.fillText(len.toFixed(2), (a[0] + b[0]) / 2, " +
                                "        (a[1] + b[1]) / 2) \n" +
                                "    ctx.restore();\n" +
                                "}\n" +
                                "const writeAngle = (a, b, c, color='black') => {\n " +
                                "    ctx.moveTo(a[0], a[1])\n" +
                                "    let startAngle = Math.acos((b[0] - a[0]) / getLen(b, a));\n" +
                                "    let finishAngle = Math.acos((c[0] - a[0]) / getLen(c, a));\n" +
                                "    let rotStart = b[1] - a[1] > 0? 1: -1;\n" +
                                "    let rotFinish = c[1] - a[1] > 0? 1: -1;\n" +
                                "    startAngle *= rotStart;\n" +
                                "    finishAngle *= rotFinish;\n" +
                                "    ctx.arc(a[0], a[1]," +
                                "        15, " +
                                "        Math.min(startAngle, finishAngle)," +
                                "        Math.max(startAngle, finishAngle)," +
                                "        Math.max(startAngle, finishAngle) - Math.min(startAngle, finishAngle) > Math.PI" +
                                "        )\n" +
                                "    ctx.stroke()\n" +
                                "    let angle = Math.abs(startAngle - finishAngle)\n" +
                                "    angle = angle > Math.PI ? " +
                                "        Math.PI * 2 -angle : angle; \n " +
                                "    let minAngle = Math.min(startAngle, finishAngle);\n" +
                                "    minAngle += Math.abs(startAngle - finishAngle) / 2;\n" +
                                "    let neg = startAngle < 0 && finishAngle > 0? -1.5: 1;\n" +
                                "    ctx.save()\n" +
                                "    ctx.fillStyle = color\n" +
                                "    ctx.fillText((angle / Math.PI * 180).toFixed(2), a[0] + neg * Math.cos(minAngle) * 28, a[1] + neg * Math.sin(minAngle) * 28);\n" +
                                "    ctx.restore()\n" +
                                "    return angle;" +
                                "}\n" +
                                "const writeRound = () => {\n" +
                                "    let ab = [$B[0] - $A[0], $B[1] - $A[1]]\n" +
                                "    let ac = [$A[0] - $C[0], $A[1] - $C[1]]\n" +
                                "    let abPer = [0, 0]\n" +
                                "    let acPer = [0, 0]\n" +
                                "    abPer = [ab[1], -ab[0]]\n" +
                                "    acPer = [ac[1], -ac[0]]\n" +
                                "    if (ab[0] === 0 ) {\n" +
                                "        abPer[0] = 1\n" +
                                "        abPer[1] = 0\n" +
                                "    }\n" +
                                "    if (ac[0] === 0) {\n" +
                                "        acPer[0] = 1\n" +
                                "        acPer[1] = 0\n" +
                                "    }\n" +
                                "    let cAC = [($A[0] + $C[0]) / 2, ($A[1] + $C[1]) / 2]\n" +
                                "    let cAB = [($A[0] + $B[0]) / 2, ($A[1] + $B[1]) / 2]\n" +
                                "    let cAC2 = [cAC[0] + acPer[0], cAC[1] + acPer[1]]\n" +
                                "    let cAB2 = [cAB[0] + abPer[0], cAB[1] + abPer[1]]\n" +

                                "    let a1 = cAC2[1] - cAC[1]\n" +
                                "    let b1 = cAC[0] - cAC2[0]\n" +
                                "    let c1 = - cAC[0] * cAC2[1] + cAC[1] * cAC2[0]\n" +

                                "    let a2 = cAB2[1] - cAB[1]\n" +
                                "    let b2 = cAB[0] - cAB2[0]\n" +
                                "    let c2 = - cAB[0] * cAB2[1] + cAB[1] * cAB2[0]\n" +

                                "    let centerX = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1) \n" +
                                "    let centerY = (a2 * c1 - a1 * c2) / (b2 * a1 - b1 * a2)\n" +
                                "    let co = [centerX - $A[0], centerY - $A[1]] \n" +
                                "    ctx.beginPath()\n" +
                                "    ctx.moveTo(centerX, centerY)\n" +
                                "    ctx.fillStyle = 'blue'\n" +
                                "    ctx.font = '20px Serif'\n" +
                                "    ctx.fillText('O', centerX, centerY)\n" +
                                "    ctx.arc(centerX, centerY," +
                                "        getLen($A, [centerX, centerY]), " +
                                "        Math.acos(co[0] / getLen([centerX, centerY], $A)) - Math.PI, " +
                                "        Math.acos(co[0] / getLen([centerX, centerY], $A)) + Math.PI," +
                                "        )\n" +
                                "    ctx.stroke()\n" +
                                "}\n" +
                                "ctx.save();\n" +
                                "ctx.clearRect(0, 0, canvas.width, canvas.height);ctx.beginPath(); \n" +
                                "ctx.moveTo($A[0], $A[1]);\n" +
                                "ctx.lineTo($B[0], $B[1]);\n" +
                                "ctx.lineTo($C[0], $C[1]);\n" +
                                "ctx.lineTo($A[0], $A[1]);\n" +
                                "ctx.stroke()\n" +
                                "let defColor = $showMore? 'green': 'transparent' \n" +
                                "$Aangle = writeAngle($A, $B, $C)\n" +
                                "$Bangle = writeAngle($B, $A, $C)\n" +
                                "$Cangle = writeAngle($C, $B, $A, defColor)\n" +
                                "$AB = getLen($A, $B)\n" +
                                "$AC = getLen($A, $C)\n" +
                                "$BC = getLen($C, $B)\n" +
                                "writeLen($A, $B)\n" +
                                "writeLen($A, $C, defColor)\n" +
                                "writeLen($C, $B, defColor)\n" +
                                "if ($showMore) writeRound()\n" +
                                "ctx.beginPath() \n" +
                                "ctx.fillStyle = 'red'\n" +
                                "ctx.arc($A[0], $A[1], 5, 0, Math.PI * 4) \n" +
                                "ctx.moveTo($B[0], $B[1]) \n" +
                                "ctx.arc($B[0], $B[1], 5, 0, Math.PI * 2) \n" +
                                "ctx.moveTo($C[0], $C[1]) \n" +
                                "ctx.arc($C[0], $C[1], 5, 0, Math.PI * 2) \n" +
                                "ctx.fill() \n" +
                                "ctx.font = '21px Serif'\n" +
                                "ctx.fillStyle = 'blue'\n" +
                                "ctx.fillText('A', $A[0] - 15, $A[1]);\n" +
                                "ctx.fillText('B', $B[0] - 15, $B[1]);\n" +
                                "ctx.fillText('C', $C[0] - 15, $C[1]);\n" +
                                "ctx.restore(); \n}",
                            "update": "(canvas, ctx) => {\n" +
                                "const getLen = (a, b) => {" +
                                "  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)\n" +
                                "}\n" +
                                "const writeLen = (a, b, color='black') => {\n" +
                                "    let len = getLen(a, b) \n" +
                                "    ctx.save()\n" +
                                "    ctx.fillStyle = color;\n" +
                                "    ctx.font = '15px Serif'\n" +
                                "    ctx.fillText(len.toFixed(2), (a[0] + b[0]) / 2, " +
                                "        (a[1] + b[1]) / 2) \n" +
                                "    ctx.restore();\n" +
                                "}\n" +
                                "const writeAngle = (a, b, c, color='black') => {\n " +
                                "    ctx.moveTo(a[0], a[1])\n" +
                                "    let startAngle = Math.acos((b[0] - a[0]) / getLen(b, a));\n" +
                                "    let finishAngle = Math.acos((c[0] - a[0]) / getLen(c, a));\n" +
                                "    let rotStart = b[1] - a[1] > 0? 1: -1;\n" +
                                "    let rotFinish = c[1] - a[1] > 0? 1: -1;\n" +
                                "    startAngle *= rotStart;\n" +
                                "    finishAngle *= rotFinish;\n" +
                                "    ctx.arc(a[0], a[1]," +
                                "        15, " +
                                "        Math.min(startAngle, finishAngle)," +
                                "        Math.max(startAngle, finishAngle)," +
                                "        Math.max(startAngle, finishAngle) - Math.min(startAngle, finishAngle) > Math.PI" +
                                "        )\n" +
                                "    ctx.stroke()\n" +
                                "    let angle = Math.abs(startAngle - finishAngle)\n" +
                                "    angle = angle > Math.PI ? " +
                                "        Math.PI * 2 -angle : angle; \n " +
                                "    let minAngle = Math.min(startAngle, finishAngle);\n" +
                                "    minAngle += Math.abs(startAngle - finishAngle) / 2;\n" +
                                "    let neg = startAngle < 0 && finishAngle > 0? -1.5: 1;\n" +
                                "    ctx.save()\n" +
                                "    ctx.font = '15px Serif'\n" +
                                "    ctx.fillStyle = color\n" +
                                "    ctx.fillText((angle / Math.PI * 180).toFixed(2), a[0] + neg * Math.cos(minAngle) * 28, a[1] + neg * Math.sin(minAngle) * 28);\n" +
                                "    ctx.restore()\n" +
                                "    return angle;" +
                                "}\n" +
                                "const writeRound = () => {\n" +
                                "    let ab = [$B[0] - $A[0], $B[1] - $A[1]]\n" +
                                "    let ac = [$A[0] - $C[0], $A[1] - $C[1]]\n" +
                                "    let abPer = [0, 0]\n" +
                                "    let acPer = [0, 0]\n" +
                                "    abPer = [ab[1], -ab[0]]\n" +
                                "    acPer = [ac[1], -ac[0]]\n" +
                                "    if (ab[0] === 0 ) {\n" +
                                "        abPer[0] = 1\n" +
                                "        abPer[1] = 0\n" +
                                "    }\n" +
                                "    if (ac[0] === 0) {\n" +
                                "        acPer[0] = 1\n" +
                                "        acPer[1] = 0\n" +
                                "    }\n" +
                                "    let cAC = [($A[0] + $C[0]) / 2, ($A[1] + $C[1]) / 2]\n" +
                                "    let cAB = [($A[0] + $B[0]) / 2, ($A[1] + $B[1]) / 2]\n" +
                                "    let cAC2 = [cAC[0] + acPer[0], cAC[1] + acPer[1]]\n" +
                                "    let cAB2 = [cAB[0] + abPer[0], cAB[1] + abPer[1]]\n" +

                                "    let a1 = cAC2[1] - cAC[1]\n" +
                                "    let b1 = cAC[0] - cAC2[0]\n" +
                                "    let c1 = - cAC[0] * cAC2[1] + cAC[1] * cAC2[0]\n" +

                                "    let a2 = cAB2[1] - cAB[1]\n" +
                                "    let b2 = cAB[0] - cAB2[0]\n" +
                                "    let c2 = - cAB[0] * cAB2[1] + cAB[1] * cAB2[0]\n" +

                                "    let centerX = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1) \n" +
                                "    let centerY = (a2 * c1 - a1 * c2) / (b2 * a1 - b1 * a2)\n" +
                                "    let co = [centerX - $A[0], centerY - $A[1]] \n" +
                                "    writeLen([centerX, centerY], $A, 'green')\n" +
                                "    ctx.beginPath()\n" +
                                "    ctx.moveTo(centerX, centerY)\n" +
                                "    ctx.fillStyle = 'blue'\n" +
                                "    ctx.font = '20px Serif'\n" +
                                "    ctx.fillText('O', centerX, centerY)\n" +
                                "    ctx.arc(centerX, centerY," +
                                "        getLen($A, [centerX, centerY]), " +
                                "        Math.acos(co[0] / getLen([centerX, centerY], $A)) - Math.PI, " +
                                "        Math.acos(co[0] / getLen([centerX, centerY], $A)) + Math.PI," +
                                "        )\n" +
                                "    ctx.stroke()\n" +
                                "}\n" +
                                "ctx.save();\n" +
                                "ctx.clearRect(0, 0, canvas.width, canvas.height);ctx.beginPath(); \n" +
                                "ctx.moveTo($A[0], $A[1]);\n" +
                                "ctx.lineTo($B[0], $B[1]);\n" +
                                "ctx.lineTo($C[0], $C[1]);\n" +
                                "ctx.lineTo($A[0], $A[1]);\n" +
                                "ctx.stroke()\n" +
                                "let defColor = $showMore? 'green': 'transparent' \n" +
                                "$Aangle = writeAngle($A, $B, $C)\n" +
                                "$Bangle = writeAngle($B, $A, $C)\n" +
                                "$Cangle = writeAngle($C, $B, $A, defColor)\n" +
                                "$AB = getLen($A, $B)\n" +
                                "$AC = getLen($A, $C)\n" +
                                "$BC = getLen($C, $B)\n" +
                                "writeLen($A, $B)\n" +
                                "writeLen($A, $C, defColor)\n" +
                                "writeLen($C, $B, defColor)\n" +
                                "if ($showMore) writeRound()\n" +
                                "ctx.beginPath() \n" +
                                "ctx.fillStyle = 'red'\n" +
                                "ctx.arc($A[0], $A[1], 5, 0, Math.PI * 4) \n" +
                                "ctx.moveTo($B[0], $B[1]) \n" +
                                "ctx.arc($B[0], $B[1], 5, 0, Math.PI * 2) \n" +
                                "ctx.moveTo($C[0], $C[1]) \n" +
                                "ctx.arc($C[0], $C[1], 5, 0, Math.PI * 2) \n" +
                                "ctx.fill() \n" +
                                "ctx.font = '21px Serif'\n" +
                                "ctx.fillStyle = 'blue'\n" +
                                "ctx.fillText('A', $A[0] - 15, $A[1]);\n" +
                                "ctx.fillText('B', $B[0] - 15, $B[1]);\n" +
                                "ctx.fillText('C', $C[0] - 15, $C[1]);\n" +
                                "ctx.restore(); \n}"
                        },
                        {
                            "place": "first_window",
                            "type": "custom",
                            "initDraw": "(canvas, ctx) => {\nctx.save();\nctx.beginPath();\nctx.strokeStyle = 'blue';\nctx.translate($width / 2, $width / 2);\nctx.moveTo(0, 0);\nctx.lineTo($sizeCell, 0);\nctx.stroke();\nctx.restore();\n}",
                        }
                    ]
                }
            }
        ]
    }
];