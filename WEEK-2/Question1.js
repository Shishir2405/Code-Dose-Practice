function squareEvenNumbers(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num);
  }
  console.log(squareEvenNumbers([1, 2, 3, 4, 5]));
  