const isPrime = (num) => {
  const limit = Math.floor(Math.sqrt(num));
  for (i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return "notPrime";
    }
    return "Prime";
  }
};

console.log(isPrime(11));
console.log(isPrime(12));
console.log(isPrime(15));
console.log(isPrime(17));
