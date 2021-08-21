const arr1 = [1, undefined, "faisal", 3, 5, {}, "cat", 567, 3.14];

const arr2 = [];

arr1.forEach((element) => {
  if (typeof element === "string") {
    arr2.push(element.toUpperCase());
  }
});
console.log(arr2);
