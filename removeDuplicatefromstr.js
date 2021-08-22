const RemoveDuplicateFromString = (str) => {
  const arrStr = str.split(" ");
  const uniqArr = [...new Set(arrStr)];
  return uniqArr.join(" ");
};

console.log(
  RemoveDuplicateFromString(
    "I am a React UI Developer I am also a backend aspirant"
  )
);
