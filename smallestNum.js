const smallestNum= (arrNum) => {

const smallestNum = (arrNum) => {
  let minNum = arrNum[0];
  arrNum.forEach((element) => {
    if (element < minNum) {
      minNum = element;
    }
  });
  return minNum;
};

console.log(smallestNum([2, 5, 9, 4, 15, 8, 19, 7]));