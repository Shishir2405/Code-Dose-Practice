// Async Function with setTimeout Example
async function asyncFunc() {
    console.log("First");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Second");
}

asyncFunc();
console.log("Third");

/* 
Expected Output:
First
Third
Second
*/

