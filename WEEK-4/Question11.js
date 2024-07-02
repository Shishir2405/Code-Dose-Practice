// Promise Example with setTimeout
console.log("Promise created");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved after 1 second");
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});

/* 
Expected Output:
Promise created
Resolved after 1 second
*/
