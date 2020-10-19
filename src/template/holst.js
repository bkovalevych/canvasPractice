export default function(
    {
        ctx,
        canvas,
        xmin=0,
        xmax=10,
        xstep=1,
        ymin=0,
        ymax=10,
        ystep=10,
        visualNumbers=false,
        placement,
    }) {

    let width = placement.width;
    let height = placement.height;
    let sizeX = width / (xmax - xmin)
    let sizeY = height / (ymax - ymin)
    const add = visualNumbers? -35: 0;

    canvas.style.position = "absolute";
    canvas.style.marginLeft = `${placement.marginLeft + add}px`
    canvas.style.marginTop = `${placement.marginTop + add}px`
    canvas.width = width - add;
    canvas.height = height - add;
    ctx.save();
    ctx.lineWidth = '0.5'
    ctx.clearRect(-100, -1000, 2000, 2000);
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
    ctx.restore();


}