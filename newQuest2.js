const obj = {
  name: "sachin",
  city: "namded",
};

const keys = Object.keys(obj);
const newArr = keys.map((key) => obj[key]);
console.log(newArr);
