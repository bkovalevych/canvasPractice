export default function(angle, size, ctx) {
    ctx.save();
    prepareStyle(ctx);
    ctx.beginPath();
    ctx.rotate(-Math.PI / 2);
    ctx.rotate(angle[0]);
    ctx.moveTo(0, 0);
    ctx.lineTo(size, 0);
    ctx.translate(size, 0);
    ctx.rotate(angle[1]);
    ctx.lineTo(size, 0);
    ctx.stroke();
    ctx.restore();
}

function prepareStyle(ctx) {
    ctx.font = '10px serif';
    ctx.strokeStyle = "#26af02";
    ctx.lineWidth = 2;
}