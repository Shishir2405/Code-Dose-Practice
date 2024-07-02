/**
 * Question 8
 * Create a function that takes an arbitrary number of arguments and returns the sum of all arguments using the rest operator. 
 * Then, use the spread operator to pass an array of numbers to this function.
 */
function sum(...args) {
    return args.reduce((acc, current) => acc + current, 0);
}

// Example usage with arbitrary number of arguments:
console.log("Sum:", sum(1, 2, 3, 4, 5));

// Example usage with spread operator:
const numbers = [1, 2, 3, 4, 5];
console.log("Sum using spread operator:", sum(...numbers));