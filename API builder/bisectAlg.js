const bisectAlg = (arrNum) => {
  let firstIndex = 0;
  let lastIndex = arrNum.length - 1;
  let mid = mathfloor((firstIndex + lastIndex) / 2);
};

console.log(
  bisectAlg([2, 4, 7, 8, 9, 11, 13, 16, 19, 25, 29, 36, 48, 60, 73, 89, 111])
);
