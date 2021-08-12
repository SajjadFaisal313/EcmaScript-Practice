const subsExists = (str) => {
  const arrStr = str.split(" ");
  console.log(arrStr);
  let cnt = 0;
  arrStr.forEach((element) => {
    if (element === "Lorem") {
      cnt++;
    }
  });
  return cnt;
};

const strData =
  "Lorem ipsum dolor sit lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.";

console.log(subsExists(strData));
