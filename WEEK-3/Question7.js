/**
 * Question 7
 * Write a function that takes an object representing a rectangle (with properties x, y, width, height) as a parameter. 
 * Use object destructuring to extract these properties in the function signature.
 */
function calculateRectangleArea({ x, y, width, height }) {
    return width * height;
}

// Example usage:
const rectangle = { x: 10, y: 20, width: 100, height: 50 };
console.log("Area of rectangle:", calculateRectangleArea(rectangle));
