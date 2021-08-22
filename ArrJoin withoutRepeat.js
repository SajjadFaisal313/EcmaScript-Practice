const arr1 = ["cat", "bat", "mat"];
const arr2 = ["mat", "hat", "fat"];
const arr3 = ["fat", "rat", "hat"];

const joinArr = [...arr1, ...arr2, ...arr3];
const uniqArr = [...new Set(joinArr)];
