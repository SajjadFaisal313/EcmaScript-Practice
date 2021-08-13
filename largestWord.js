const greatestString = () => {
  const arrStr = str.split(" ");
  let maxStr = arrStr[0].length;
  let strData = arrStr[0];
  arrStr.forEach((element) => {
    if (maxStr < element.length) {
      maxStr = element.length;
      strData = element;
    }
  });
  return strData;
};

console.log(
  greatestString([
    "hi im mohammad sajjad faisal from udgir im very excited to join this organisation and contribute to its growth",
  ])
);
