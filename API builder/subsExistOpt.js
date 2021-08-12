const subsExists = (str) => {
  return str.split(" ").filter((item) => item === "Lorem").length;
};

const strData =
  "Lorem ipsum dolor sit lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.";

console.log(subsExists(strData));
