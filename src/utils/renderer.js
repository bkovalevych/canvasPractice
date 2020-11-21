import React, {useEffect, useRef} from "react"
import drawCells from './holst'
import styled from "styled-components";

export default function({layers_width, layers_height, variables, places, layers, controls, task_triggers, update}) {
    const refVariables = useRef({});
    const refCanvases = useRef(null);
    const refBlockTriggers = useRef(null);
    const listeners = useRef();
    variables.forEach(({name, value}) => {
        refVariables.current[name] = value;
    })
    const refUpdates = useRef();
    const refTriggers = useRef();
    const updateLayers = () => {
        refUpdates.current.forEach((func, index) => {
            const canvas = refCanvases.current.children[index];
            const ctx = canvas.getContext('2d');
            func(canvas, ctx);
        })
    }
    const updateTrigger = () => {
        if (!refTriggers.current || refTriggers.current.length === 0) {
            return;
        }
        refTriggers.current.forEach((val, index) => {
            let allDone = true;
            for (let key in val) {
                if (val.hasOwnProperty(key))
                    allDone = allDone && val[key](refVariables.current[key])
            }
            if (allDone && refBlockTriggers.current) {
                update(1)
                refBlockTriggers.current.children[index].style.color = "green";
            }
        })
    }
    const placeControl = (control, places, index) => {
        const place = places[control.place];
        const val = typeof(control.value) === typeof "" ?
            refVariables.current[control.value]:
            control.value;
        const updateFunctionString = prepareRegex(control.onUpdate)
        const updateFunction = eval(updateFunctionString);
        const _update = (e) => {
            const val = e.target.value;
            updateTrigger()
            switch (control.type) {
                case "range":
                    updateFunction(val);
                    break;
                case "checkbox":
                    let checked = updateFunction(val)
                    e.target.checked = checked
                    break;
            }
            updateLayers()

        }
        switch (control.type) {
            case "checkbox":
                return <label style={{position: "absolute", ...place}}><input
                    key={index}
                    onChange={_update}
                    type={control.type}
                    defaultChecked={control.checked}
                />{control.label}</label>
        }
        return <label style={{position: "absolute", ...place}}>
            {control.label}
            <input
                key={index}
                onChange={_update}
                type={control.type}
                min={control.min}
                step={control.step}
                max={control.max}
                defaultValue={val}
            />
        </label>

    }
    const placeLayer = (layer, places, index) => {
        const place = places[layer.place];
        const width = place.width
        const height = place.height;
        layer.key = index;
        layer.placement = place;

        return (
            <canvas width={width}
                    height={height}

                    style={{
                        position: 'absolute' ,
                        marginLeft: place.marginLeft,
                        marginTop: place.marginTop
                    }}
                    key={index}
            />
        )

    }

    const prepareRegex = (text) => {
        const prepareEquals = text.replaceAll(
            /(\$[_a-zA-Z][_a-zA-Z0-9]*)\s*=\s*(\w+)/gi,
            "refVariables.current['$1'] = $2")
        return prepareEquals.replaceAll(
            /([^'])(\$[_a-zA-Z]+)([^'])/gi,
            "$1refVariables.current['$2']$3"
        )
    }
    useEffect(() => {
        if (!refCanvases.current) return
        layers.forEach((layer, index) => {
            const canvas = refCanvases.current.children[index];
            const ctx = canvas.getContext("2d");
            ctx.clearRect(-1000, -1000, 2000, 2000);
            if (layer.type === 'cells') {

                drawCells({ctx, canvas,...layer})
                return
            }

            if (!layer.initDraw || layer.initDraw === "") return;

            const prepare = prepareRegex(layer.initDraw)
            const f = eval(prepare);
            f(canvas, ctx)
        })
        refUpdates.current = layers.map(layer => {
            if (!layer.update) {
                return () => {};
            }
            const prepare = layer.update.replaceAll(
                /(\$[_a-zA-Z]+)/gi,
                "refVariables.current['$1']");
            return eval(prepare);
        })
    }, [layers])
    useEffect(() => {
        if (refCanvases.current != null) {
            layers.forEach((layer, index) => {
                let result = {};
                ["onMouseUp", "onMouseDown", "onMouseMove"].map(handler => {
                    if (layer[handler] && layer[handler] !== "") {
                        const prepare = prepareRegex(layer[handler])
                        const funcHandler = eval(prepare);
                        result[handler] = (e) => {
                            funcHandler(e)
                            updateLayers();
                        };
                    }
                })
                if (Object.keys(result).length > 0) {
                    listeners.current = result
                }
                refCanvases.current.children[index].addEventListener("mousedown" , (e)=> {
                    if (listeners.current && listeners.current.onMouseDown) {
                        listeners.current.onMouseDown(e)
                    }
                })
                refCanvases.current.children[index].addEventListener("mouseup" , (e)=> {
                    if (listeners.current && listeners.current.onMouseUp) {
                        listeners.current.onMouseUp(e)
                    }
                })
                refCanvases.current.children[index].addEventListener("mousemove" , (e)=> {
                    if (listeners.current && listeners.current.onMouseMove) {
                        listeners.current.onMouseMove(e)
                    }
                })
            })
        }
    }, [refCanvases])
    const placeTriggers = () => {
        if (!task_triggers || task_triggers.length === 0) {
            return "";
        }
        refTriggers.current = [];
        return task_triggers.map((val, index) => {

            refTriggers.current.push({})
            for (let key in val.test) {
                if (val.test.hasOwnProperty(key)) {
                    const prepareFunctionText = prepareRegex(val.test[key]);
                    refTriggers.current[index][key] = eval(prepareFunctionText)
                }
            }

            return <NormalText key={index}>{val.describe}</NormalText>
        })
    }

    return (
        <div
            style={{
                position: "relative",
                width: `${layers_width}px`,
                height: `${layers_height}px`,
                margin: "35px 0 0 35px"
        }}>
            <div
                ref={refCanvases}
            >
                {layers.map((val, index) =>
                    placeLayer(val, places, index)
                )}
            </div>
            <div>
                {controls.map((val, index) =>
                    placeControl(val, places, index)
                )}
            </div>

            <div ref={refBlockTriggers}>
                {placeTriggers()}
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