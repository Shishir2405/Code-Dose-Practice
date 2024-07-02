// Questions 20 to 27

// 20. Logical OR (`||`) and conditional assignment:
const DEFAULT_NAME = "John";
const name = false || DEFAULT_NAME;
console.log(name); // Output: "John" (default value assignment)

// 21. Conditional statement based on result of logical OR (`||`):
const result = false + "";
if (result) {
  console.log("Here"); // Output: (none, because `result` is "false")
} else {
  console.log("There"); // Output: "There" (executed because `result` is truthy)
}

// 22. Conditional statement evaluating an array:
if ([]) {
  console.log("hello"); // Output: "hello" (truthy, as an empty array is still an object)
} else {
  console.log("bye");
}

// 23. Function demonstrating variable hoisting with `var`:
function testHoisting() {
  console.log(a); // Output: undefined (var declaration is hoisted but not initialized)
  var a = "Hello";
}
testHoisting();
console.log(a); // Output: ReferenceError: a is not defined (outside function scope)

// 24. Function with block-scoped variable using `let`:
function exampleFunction() {
  var x = 10;
  if (true) {
    let x = 20;
    console.log(x); // Output: 20 (block-scoped `x` inside if block)
  }
  console.log(x); // Output: 10 (function-scoped `x` outside if block)
}

// 25. Function mapping array elements to their squares for even numbers:
function squareEvenNumbers(arr) {
  return arr.map((num) => (num % 2 === 0 ? num * num : num));
}
console.log(squareEvenNumbers([1, 2, 3, 4, 5])); // Output: [1, 4, 3, 16, 5]

// 26. Function to remove all instances of a specific value from an array:
function removeAll(arr, value) {
  return arr.filter((item) => item !== value);
}
console.log(removeAll([1, 2, 3, 4, 2, 2, 3], 2)); // Output: [1, 3, 4, 3]

// 27. Function to square only the even numbers from an array:
function squareEvenNumbers(arr) {
  return arr.map((num) => (num % 2 === 0 ? num * num : num));
}
console.log(squareEvenNumbers([1, 2, 3, 4, 5])); // Output: [1, 4, 3, 16, 5]
