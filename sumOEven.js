const sumOfEven = (numbers) => {
    let sum = 0;
    numbers.forEach(element => {
        element % 2 == 0 && (sum = sum + element)

    });
    return sum;
}
console.log(`sum of even numbers is ${sumOfEven([45,48,78,31,6,9,4])}`)