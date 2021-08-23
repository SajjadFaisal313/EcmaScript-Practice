const ArrOfDuplicates = (arr) => {
  const newArr = [];
  arr.forEach((element, index) => {
    arr.indexOf(element) !== index && newArr.push(element);
  });
  return newArr;
};

console.log(ArrOfDuplicates([1, 3, 5, 2, 8, 5, 0, 5, 6, 7, 3, 5, 9, 1]));
