// Promise Example
console.log("Promise started");

const promise = new Promise((resolve, reject) => {
  console.log("Promise made");
  resolve("Promise resolved");
});

promise.then((result) => {
  console.log(result);
});

/* 
Expected Output:
Promise started
Promise made
Promise resolved
*/
