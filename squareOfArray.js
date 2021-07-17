// const SquareOfArray = (numbers) => numbers.map((element) => element**2);

// console.log(SquareOfArray([7,6,4,2,9,3]));

//-------agar kuch bhi power dalne ki hongi to power ka ek variable bana lene ka aisa-----

const SquareOfArray = (numbers, power) => numbers.map((element) => element ** power);

console.log(SquareOfArray([7, 6, 4, 2, 9, 3], 3));