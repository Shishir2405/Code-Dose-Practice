function mapArray(array, callback) {
    let mappedArray = [];
    for (let i = 0; i < array.length; i++) {
      mappedArray.push(callback(array[i]));
    }
    return mappedArray;
  }
  // Example usage:
  console.log(mapArray([1, 2, 3], num => num * 2)); // Output: [2, 4, 6]
  