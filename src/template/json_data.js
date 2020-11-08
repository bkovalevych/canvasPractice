export default [{
    "name": "Тригонометрия начало",
    "steps": [
        {
            "type": "text",
            "text": "Начнем наш новый раздел геометрии"
        },
        {
          "type": "text",
          "text": "Тригонометрия - это учения о соотношении углов и сторон треугольника"
        },
        {
            "type": "text",
            "text": ["Начнем с синуса и косинуса", "Введем некоторые обозначения для большей ясности", "Для начала представим точку A(1, 0) на координатной плоскости"]
        },
        {
            "type": "custom",
            "text": [
                "Точка A будет вращаться относительно O",
                "Синусом для угла вращения будет ордината (y значение) точки А",
                "Косинусом для угла вращения будет абсциса (х значение) точки А",
            ],
            "view": {
                "layers_width": 400,
                "layers_height": 400,
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
                        "width": 400,
                        "height": 30,
                        "marginLeft": 0,
                        "marginTop": 425
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
            "type": "custom",
            "view": {

                "layers_width": 400,
                "layers_height": 500,
                "task_triggers": [
                    {
                        "describe": "Найдите все значения угла при которых синус равен 0 в в диапазоне -720 - 720 градусов",
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
                    "place_control": {
                        "width": 400,
                        "height": 30,
                        "marginLeft": 0,
                        "marginTop": 425
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
                        "onUpdate": "(val) => {\nlet next = val / 180 * Math.PI;\n$angle = next;\n}"
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
                        "update": "(canvas, ctx) => {\nctx.save();\nctx.strokeStyle = 'blue';\n ctx.translate($width / 2, $width / 2);\nctx.clearRect(-2 * $sizeCell, -2 * $sizeCell, 4 * $sizeCell, 4 * $sizeCell); ctx.fillText($testValues.toString(), 20, 20); \nctx.beginPath();\nctx.moveTo(0, 0);\nctx.lineTo(Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell);\nctx.stroke();\nctx.beginPath();\nctx.strokeStyle = 'red';\nctx.moveTo(Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell);\nctx.stroke();\nctx.beginPath();\nctx.fillStyle = 'red';\nctx.strokeStyle = 'red';\nctx.moveTo(Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell);\nctx.fillText(Math.sin($angle).toFixed(1), Math.cos($angle) * $sizeCell, -0.5 * Math.sin($angle) * $sizeCell);\nctx.lineTo(Math.cos($angle) * $sizeCell, 0);\nctx.stroke();\nctx.beginPath();\nctx.strokeStyle = 'green';\nctx.fillStyle = 'green'; \nctx.fillText(Math.cos($angle).toFixed(1), 0.5 * Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell);\nctx.moveTo(Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell);\nctx.lineTo(0, -Math.sin($angle) * $sizeCell);\nctx.stroke();\nctx.beginPath();\nctx.strokeStyle = 'black';\nctx.fillStyle = 'black';\nctx.fillText(Math.floor($angle / Math.PI * 180).toString(), Math.cos($angle/ 2) * $sizeCell / 4, -Math.sin($angle / 2) * $sizeCell / 4);\nlet smallPart = Math.abs($angle) > Math.PI * 2? 5: 0;\nif ($angle >= 0) {\n    ctx.arc(0, 0, $sizeCell / 4, 0, -$angle, true);\n    ctx.moveTo($sizeCell / 4, 0);\n    if (smallPart) ctx.arc(0, 0, $sizeCell / 4 + smallPart, 0, -$angle + Math.PI * 2, true);\n} else {\n    ctx.arc(0, 0, $sizeCell / 4, 0, -$angle, false);\n    ctx.moveTo($sizeCell / 4, 0);\n    if (smallPart) ctx.arc(0, 0, $sizeCell / 4 + smallPart, 0, -$angle - Math.PI * 2, false);\n}\nctx.stroke();\nctx.font = '25px Serif' \nctx.fillText('A', Math.cos($angle) * $sizeCell, -Math.sin($angle) * $sizeCell - 5) \nctx.restore();\n}"
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
                        "initDraw": "(canvas, ctx) => {\nlet width = canvas.width; \nlet height = canvas.height; \nctx.beginPath()\nctx.moveTo(0, height / 2)\nctx.lineTo(width, height / 2)\nctx.lineTo(width - 10, height / 2 + 10)\nctx.moveTo(width, height / 2)\nctx.lineTo(width - 10, height / 2 - 10)\nctx.moveTo(width / 2, height)\nctx.lineTo(width / 2, 0)\nctx.lineTo(width / 2 - 10, 10)\nctx.moveTo(width / 2, 0)\nctx.lineTo(width / 2 + 10, 10)\nctx.stroke()\nctx.font = '18px Serif'\nctx.fillText('sin', width / 2 + 10, 20)\nctx.fillText('Angle', width - 50, height / 2 - 10)\n}\n"
                    },
                    {
                        "place": "second_window",
                        "type": "custom",
                        "initDraw": "",
                        "update": "(canvas, ctx) => {\nctx.clearRect(0, 0, $width, $width);\nctx.save();\nctx.translate($width / 2, $width / 2);\nctx.beginPath();\nctx.moveTo(0, 0);\nlet sign = $angle < 0? -1 : 1;\nfor (let i = 0; i <= Math.abs($angle); i += 0.01) {\n    ctx.lineTo(i * 15.5 * sign, -Math.sin(i * sign) * $sizeCell);\n}\nctx.stroke();\nctx.beginPath();\nctx.strokeStyle = 'red';\nctx.moveTo($angle * 15.5, -Math.sin($angle) * $sizeCell)\nctx.lineTo($angle * 15.5, 0)\nctx.stroke();\nctx.restore();\n}"
                    }
                ]
            }
        }

    ]
},
    {
        "name": "Теорема синусов",
        "steps": [
            {
                "type": "text",
                "text": "Посмотрим, как можно использовать синусы"
            },
            {
                "type": "custom",
                "text": ["Попробуем решить задачу.", "Дан треугольник ABC", "Нам известны все его углы и одна сторона AB", "Нужно найти остальные стороны"],
                "view": {
                    "layers_width": 400,
                    "layers_height": 350,
                    "variables": [
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
                            "label": "Показать решение",
                            "checked": false,
                            "onUpdate": "() => {if ($showMore == 0) {$showMore = 1; return true} else {$showMore = 0; return false}}"
                        },
                    ],
                    "layers": [
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
                                "const writeAngle = (a, b, c) => {\n " +
                                "    ctx.moveTo(a[0], a[1]);\n" +
                                "    let startAngle = Math.acos((b[0] - a[0]) / getLen(b, a));\n" +
                                "    let finishAngle = Math.acos((c[0] - a[0]) / getLen(c, a));\n" +
                                "    let rotStart = b[1] - a[1] > 0? 1 : -1;\n" +
                                "    let rotFinish = c[1] - a[1] > 0? 1 : -1;\n" +
                                "    startAngle *= rotStart;\n" +
                                "    finishAngle *= rotFinish;\n" +
                                "    ctx.arc(a[0], a[1], " +
                                "        15, " +
                                "        Math.min(startAngle, finishAngle)," +
                                "        Math.max(startAngle, finishAngle)," +
                                "        Math.max(startAngle, finishAngle) - Math.min(startAngle, finishAngle) > Math.PI" +
                                "    )\n" +
                                "    ctx.stroke()\n" +
                                "    let angle = Math.abs(startAngle - finishAngle);\n" +
                                "    angle -= angle > Math.PI ? " +
                                "        Math.PI : 0; \n " +
                                "    let minAngle = Math.min(startAngle, finishAngle); \n" +
                                "    minAngle += Math.abs(startAngle - finishAngle) / 2; \n" +
                                "    ctx.fillText(Math.round(angle / Math.PI * 180).toString(), Math.cos(minAngle) * 20, Math.sin(minAngle) * 20);\n" +
                                "}\n" +
                                "ctx.save();\n" +
                                "ctx.clearRect(0, 0, canvas.width, canvas.height);ctx.beginPath(); \n" +
                                "ctx.moveTo($A[0], $A[1]);\n" +
                                "ctx.lineTo($B[0], $B[1]);\n" +
                                "ctx.lineTo($C[0], $C[1]);\n" +
                                "ctx.lineTo($A[0], $A[1]);\n" +
                                "ctx.stroke()\n" +
                                "ctx.beginPath() \n" +
                                "writeAngle($A, $B, $C)\n" +
                                "writeAngle($B, $A, $C)\n" +
                                "writeAngle($C, $B, $A)\n" +
                                "ctx.beginPath() \n" +
                                "let len = Math.sqrt(($A[0] - $B[0])**2 + ($A[1] - $B[1])** 2) \n" +
                                "ctx.fillText(len.toFixed(2), Math.min($A[0], $B[0]) + Math.abs($A[0] - $B[0]) / 2, Math.min($A[1], $B[1]) + Math.abs($A[1] - $B[1]) / 2) \n" +
                                "ctx.fillStyle = 'red'\n" +
                                "ctx.arc($A[0], $A[1], 5, 0, Math.PI * 2) \n" +
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
                                "ctx.restore();\n" +
                                "}\n",
                            "update": "(canvas, ctx) => {\n" +
                                "const getLen = (a, b) => {" +
                                "  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)\n" +
                                "}\n" +
                                "const writeAngle = (a, b, c) => {\n " +
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
                                "    let neg = startAngle < 0 && finishAngle > 0? -1.5: 1;" +
                                "    ctx.fillText((angle / Math.PI * 180).toFixed(2), a[0] + neg * Math.cos(minAngle) * 28, a[1] + neg * Math.sin(minAngle) * 28);\n" +
                                "    return angle;" +
                                "}\n" +
                                "ctx.save();\n" +
                                "ctx.clearRect(0, 0, canvas.width, canvas.height);ctx.beginPath(); \n" +
                                "ctx.moveTo($A[0], $A[1]);\n" +
                                "ctx.lineTo($B[0], $B[1]);\n" +
                                "ctx.lineTo($C[0], $C[1]);\n" +
                                "ctx.lineTo($A[0], $A[1]);\n" +
                                "ctx.stroke()\n" +
                                "let a = writeAngle($A, $B, $C)\n" +
                                "let b = writeAngle($B, $A, $C)\n" +
                                "let c = writeAngle($C, $B, $A)\n" +
                                "ctx.fillText(((a + b + c) / Math.PI * 180).toString(), 30, 30)\n" +
                                "let ab = [$B[0] - $A[0], $B[1] - $A[1]]\n" +
                                "let ac = [$A[0] - $C[0], $A[1] - $C[1]]\n" +
                                "let abPer = [0, 0]\n" +
                                "let acPer = [0, 0]\n" +
                                "abPer = [ab[1], -ab[0]]\n" +
                                "acPer = [ac[1], -ac[0]]\n" +
                                "if (ab[0] === 0 ) {\n" +
                                "    abPer[0] = 1\n" +
                                "    abPer[1] = 0\n" +
                                "}\n" +
                                "if (ac[0] === 0) {\n" +
                                "    acPer[0] = 1\n" +
                                "    acPer[1] = 0\n" +
                                "}\n" +
                                "let cAC = [($A[0] + $C[0]) / 2, ($A[1] + $C[1]) / 2]\n" +
                                "let cAB = [($A[0] + $B[0]) / 2, ($A[1] + $B[1]) / 2]\n" +
                                "let cAC2 = [cAC[0] + acPer[0], cAC[1] + acPer[1]]\n" +
                                "let cAB2 = [cAB[0] + abPer[0], cAB[1] + abPer[1]]\n" +

                                "let a1 = cAC2[1] - cAC[1]\n" +
                                "let b1 = cAC[0] - cAC2[0]\n" +
                                "let c1 = - cAC[0] * cAC2[1] + cAC[1] * cAC2[0]\n" +

                                "let a2 = cAB2[1] - cAB[1]\n" +
                                "let b2 = cAB[0] - cAB2[0]\n" +
                                "let c2 = - cAB[0] * cAB2[1] + cAB[1] * cAB2[0]\n" +

                                "let centerX = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1) \n" +
                                "let centerY = (a2 * c1 - a1 * c2) / (b2 * a1 - b1 * a2)\n" +
                                "let co = [centerX - $A[0], centerY - $A[1]] \n" +
                                "ctx.beginPath()\n" +
                                "ctx.moveTo($A[0], $A[1])\n" +
                                "ctx.arc(centerX, centerY," +
                                "        getLen($A, [centerX, centerY]), " +
                                "        Math.acos(co[0] / getLen([centerX, centerY], $A)) + Math.PI, " +
                                "        Math.acos(co[0] / getLen([centerX, centerY], $A)) + 3 * Math.PI," +
                                "        )\n" +
                                "ctx.stroke()\n" +

                                "ctx.beginPath() \n" +
                                "let len = Math.sqrt(($A[0] - $B[0])**2 + ($A[1] - $B[1])** 2) \n" +
                                "ctx.fillText(len.toFixed(2), Math.min($A[0], $B[0]) + Math.abs($A[0] - $B[0]) / 2, Math.min($A[1], $B[1]) + Math.abs($A[1] - $B[1]) / 2) \n" +
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