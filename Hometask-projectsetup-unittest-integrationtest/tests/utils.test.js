import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle.js";

//getRectanglePerimeter(length, width) -> 2* (length + width)
test('find the permeter of a rectangle', () => {
    const outputPerimeter = getRectanglePerimeter(1,2);
    expect(outputPerimeter).toBe(6);
})

//getRectangleArea(length, width) -> length * width
test('find the area of a rectangle', () => {
    const outputArea = getRectangleArea(1,2);
    expect(outputArea).toBe(2);
})


test('rectangle information', () => {
    let outputInfo = jest.fn();
    outputInfo = getRectangleInfo(1,2)
    const expectedOutput = `The perimeter of a rectangle is 6 and the area is 2`;
    expect(outputInfo).toBe(expectedOutput);
})