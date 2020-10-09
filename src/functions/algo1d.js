export default function (point, size) {

    let width = len(point);
    let angleBase = Math.acos(width / 2 / size);
    let angle1 = Math.PI - angleBase  - getAngle(point, width);
    let angle2 =  2 * angleBase;
    return [angle1, angle2];
}

function len(point) {
    return Math.sqrt(point[0] * point[0] + point[1] * point[1]);
}

function getAngle(point, width) {
    return Math.acos(point[1] / width);
}

function toDeg(rot) {
    return rot / Math.PI * 180;
}
