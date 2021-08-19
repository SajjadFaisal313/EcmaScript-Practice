const marks = (numbers) => {
  const total = numbers.reduce((acc, curr) => acc + curr);
  return total / numbers.length;
};

// isko 1 line me likh sakte const ki bajaye direct likh diye aur curly braaces hata ke return bi nikal diye

console.log(marks([45, 43, 67, 89, 68]));

console.log(marks([67, 58, 78, 91, 45, 68]));
