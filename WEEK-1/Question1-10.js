// Questions 1 to 10

// 1. Output of `NaN === NaN`:
console.log(NaN === NaN); // Output: false

// 2. Output of logical OR (`||`) between an array and an empty string:
function a() {
  return [];
}
function b() {
  return "";
}
console.log(a() || b()); // Output: ""

// 3. Output of string concatenation and subtraction with strings and numbers:
console.log("1" + 1); // Output: "11"
console.log("1" - 1); // Output: 0

// 4. Output involving `let` and block scope with `var` and `let`:
var x = 20;
{
  console.log(x); // Output: ReferenceError: Cannot access 'x' before initialization
  let x = 10;
  console.log(x); // Output: 10
}

// 5. Comparison of `typeof new Number(1)` and `typeof Number(1)`:
console.log(typeof new Number(1) === typeof Number(1)); // Output: false

// 6. Output after modifying an object and accessing through another reference:
let x = { y: 1 };
let z = x;
x.y = 2;
console.log(z.y); // Output: 2

// 7. Function modifying object property through reference:
function birthday(obj) {
  obj.age += 1;
}
const person = { name: "John", age: 30 };
birthday(person);
console.log(person.age); // Output: 31

// 8. Function attempting to reassign array parameter inside:
function modifyArray(arr) {
  arr = [3, 2, 1];
  arr.sort();
}
const numbers = [1, 2, 3];
modifyArray(numbers);
console.log(numbers); // Output: [1, 2, 3]

// 9. Function parameter (primitive) remains unchanged outside:
function birthday(age) {
  age += 1;
}
const age = 30;
birthday(age);
console.log(age); // Output: 30

// 10. Implement your own version of the Array.prototype.map function without using .map:
function mapArray(array, callback) {
  let mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i]));
  }
  return mappedArray;
}
