/**
 * Question 12
 * What will be the output?
 */
const odd = [1, 3, 5];
const even = [2, 4, 6];
const combined = [0, ...odd, ...even, 7];
console.log(combined);
// Output: [0, 1, 3, 5, 2, 4, 6, 7]
