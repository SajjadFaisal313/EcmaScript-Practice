const greatestNum = (arrNum) => {
  let maxNum = 0;
  arrNum.forEach((element) => {
    if (element > maxNum) {
      maxNum = element;
    }
  });
  return maxNum;
};

console.log(greatestNum([2, 5, 9, 4, 15, 8, 19, 7]));

// 1)Declare variable maxNum=0
// 2)for each
// 3)check with if condition item>maxNum
// 4)replace
// 5)return
