// how are you
// REVERSE BY ONE LINE METHODE

// console.log("How are You".split(" ").reverse().join(" "));

// this same thing with forloop

const revStr = (str) => {
  const arrStr = str.split(" ");
  const newArr = [];
  for (i = arrStr.length - 1; i >= 0; i--) {
    newArr.push(arrStr[i]);
  }
  return newArr.join(" ");
};
console.log(revStr("I Am Fine"));
