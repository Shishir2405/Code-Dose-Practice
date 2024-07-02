// Questions 15 to 20

// 15. Function filtering falsy values from an array:
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, "", 3, null])); // Output: [1, 2, 3]

// 16. Function modifying variables passed by value and reference:
function changeStuff(a, b) {
  a = a * 10;
  b.item = "changed";
}
var num = 10;
var obj = { item: "unchanged" };
changeStuff(num, obj);
console.log(num); // Output: 10 (primitive unchanged)
console.log(obj.item); // Output: "changed"

// 17. String method usage and typeof operator:
var str = "hello";
console.log(str.toUpperCase()); // Output: "HELLO"
console.log(typeof str); // Output: "string"

// 18. Operations with array map, filter, and reduce methods:
const transactions = [5.99, 12.99, 3.7, 19.99];
const discounted = transactions.map((amount) => amount * 0.9); // [5.391, 11.691, 3.33, 17.991]
const affordable = discounted.filter((amount) => amount < 10); // [5.391, 3.33]
const total = affordable.reduce((sum, amount) => sum + amount, 0);
console.log(total); // Output: 8.721

// 19. Logical AND (`&&`) between function calls:
function left() {
  return console.log("Hello");
}
function right() {
  return console.log(true);
}
console.log(left() && right()); // Output: "Hello" followed by true

// 20. Logical AND (`&&`) with a false value and a default value assignment:
const DEFAULT_NAME = "John";
const name = false && DEFAULT_NAME;
console.log(name); // Output: false (short-circuited at false)
