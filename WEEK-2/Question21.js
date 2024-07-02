var obj = Object.create(null);
obj.property = "value";
console.log(obj.property); // Output: "value"
console.log(obj.toString()); // Output: Error: obj.toString is not a function
