const Add2Arr = (arr1, arr2) =>
  arr1.map(
    (item, index) => item + (arr2[index] === undefined ? 0 : arr2[index])
  );

console.log(Add2Arr([1, 3, 5, 6, 8], [4, 6, 3, 7]));
