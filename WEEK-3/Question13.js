
/**
 * Question 13
 * What will be the output?
 */
function sum(...args) {
    return args.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1, 2, 3, 4, 5));
// Output: 15
