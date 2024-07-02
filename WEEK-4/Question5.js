function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 1000);
  });
}

function promise2() {
  return promise1().then((result) => {
    return result + 10;
  });
}

promise2().then((result) => {
  console.log(result); // Output: 15
});
