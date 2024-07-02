/**
 * Question 6
 * Write a function that uses template literals to return a formatted string. 
 * The function should accept an object containing a person's name, age, and occupation, 
 * and return a string stating the person's details.
 */
function getPersonDetails(person) {
    const { name, age, occupation } = person;
    return `${name} is ${age} years old and works as a ${occupation}.`;
}

// Example usage:
const person = { name: 'Alice', age: 30, occupation: 'Teacher' };
console.log(getPersonDetails(person));
