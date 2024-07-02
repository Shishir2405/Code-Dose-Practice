function removeAll(arr, value) {
    return arr.filter(item => item !== value);
  }
  console.log(removeAll([1, 2, 3, 4, 2, 2, 3], 2));
  