// Questions 11 to 15

// 11. Output of variable hoisting with `var` inside a function:
var x = 10;
function foo() {
  console.log(x); // Output: undefined
  var x = 20;
}
console.log(x); // Output: 10
foo(); // Output: undefined

// 12. Output of variable hoisting with `let` inside a function:
var x = 10;
function foo() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 20;
}
console.log(x); // Output: 10
foo(); // Throws ReferenceError

// 13. Output of function accessing variable in different scope:
var x = 5;
function foo() {
  console.log(x); // Output: 5
}
function bar() {
  var x = 10;
  foo(); // Output: 5 (accesses global x)
}
bar();

// 14. Logical OR (`||`) and Nullish Coalescing (`??`) operators with `false` and a string:
const a = false;
const b = 'Hello';
const result = a || b;
console.log(result); // Output: "Hello"
console.log(a ?? b); // Output: false

// 15. Function filtering falsy values from an array:
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, '', 3, null])); // Output: [1, 2, 3]
