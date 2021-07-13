// older way
function BiggerNum(num1, num2){
    if (num1>num2){
    return num1;
} else{
    return num2;
}
}

console.log(`Bigger Number Is ${BiggerNum(455,435)}`);
console.log(`Bigger Number Is ${BiggerNum(56,45)}`);

// Now WITH ARROW Function

const BiggerNum = (num1,num2) => (num1>num2) ? num1 : num2;

console.log(`Bigger Number = ${BiggerNum(53445,54535)}`);