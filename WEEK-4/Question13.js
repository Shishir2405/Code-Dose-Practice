// Async Function with await Example
async function asyncFunc() {
  console.log("Start");
  const result = await Promise.resolve("Resolved");
  console.log(result);
  console.log("End");
}

asyncFunc();
console.log("After asyncFunc");

/* 
Expected Output:
Start
Resolved
End
After asyncFunc
*/
