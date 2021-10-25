function mult(a, b) {
  let sum = a;
  for (i = a; i < b - 1; i++) {
    sum += a;
  }
  return sum;
}
console.log(mult(5, 6));
