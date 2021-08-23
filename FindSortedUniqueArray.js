const FindSortedUniqueArray = (objArray) => {
  let mergedArray = [];
  objArray.data.forEach((element) => {
    mergedArray = [...mergedArray, ...element];
  });
  const uniqueArr = [...new Set(mergedArray)].sort((a, b) => a - b);
  return uniqueArr;
};

console.log(
  FindSortedUniqueArray({
    data: [
      [24, 75, 12, 14, 1],
      [35, 24, 13, 2],
      [7, 1, 75, 24, 15, 7],
    ],
  })
);
