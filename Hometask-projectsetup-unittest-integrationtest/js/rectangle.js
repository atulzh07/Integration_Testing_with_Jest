export function getRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

export function getRectangleArea(length, width) {
    return length * width;
}

export function getRectangleInfo(length, width) {
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);
    let info = `The perimeter of a rectangle is ${perimeter} and the area is ${area}`;
    return info;
}

