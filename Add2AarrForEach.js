const Add2ArrForEach = (arr1, arr2) => {
  const newArr = [];

  arr1.forEach((element, index) => {
    newArr.push(element + arr2[index]);
  });
  return newArr;
};

console.log(Add2ArrForEach([1, 3, 5], [4, 6, 3, 5]));
