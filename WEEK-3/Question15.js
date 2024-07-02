/**
 * Question 15
 * What will be the output?
 */
const greet = (name, greeting = "Hello") => `${greeting} ${name}`;
console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));
// Output: Hello Alice
//         Hi Bob
