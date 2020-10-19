import React, {useEffect, useRef} from "react"
import drawCells from './holst'

export default function({layers_width, layers_height, variables, places, layers, controls}) {
    const refVariables = useRef({});
    const refCanvases = useRef(null);
    variables.forEach(({name, value}) => {
        refVariables.current[name] = value;
    })
    const refUpdates = useRef();
    const placeControl = (control, places, index) => {
        const place = places[control.place];
        const val = typeof(control.value) === typeof "" ?
            refVariables.current[control.value]:
            control.value;
        const updateFunctionString = control.onUpdate.replaceAll(
            /(\$[_a-zA-Z][_a-zA-Z0-9]*)\s*=\s*(\w+)/gi,
            "refVariables.current['$1'] = $2")
        const updateFunction = eval(updateFunctionString);
        const _update = (e) => {
            const val = e.target.value;
            updateFunction(val);
            refUpdates.current.forEach((func, index) => {
                const canvas = refCanvases.current.children[index];
                const ctx = canvas.getContext('2d');
                func(canvas, ctx);
            })
        }
        return <input
            key={index}
            onChange={_update}
            type={control.type}
            min={control.min}
            step={control.step}
            max={control.max}
            defaultValue={val}
            style={place}
        />
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
            const prepare = layer.initDraw.replaceAll(/\$[_a-zA-Z]+/gi, (val) => {
                return refVariables.current[val]
            })
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
            {controls.map((val, index) =>
                placeControl(val, places, index)
            )}
        </div>
    )
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
