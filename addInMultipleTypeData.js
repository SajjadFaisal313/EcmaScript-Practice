const arr = [null, 1, 4, 6, "cat", { num: 25 }, undefined, 2];

const newArr = arr.filter((item) => typeof item === "number" && item);

console.log(newArr.reduce((acc, num) => acc + num));
// note : never treat Object ({num : 25 }) as number.
