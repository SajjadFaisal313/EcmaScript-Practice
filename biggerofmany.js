// const BiggerNumMulti = (num1, num2, num3, num4) => {
    // let BigNum = 0
    // BigNum = num1 > num2 ? num1 : num2
    // BigNum = BigNum > num3 ? BigNum : num3
    // BigNum = BigNum > num4 ? BigNum : num4
    // return BigNum;
// };

// console.log(BiggerNumMulti(45,12,5,867));

const BiggerNumMulti1 = (num1, num2, num3, num4, num5, num6
    , num7, num8) => Math.max (num1, num2, num3, num4, num5, num6, num7, num8);

    console.log(`biggest number is ${BiggerNumMulti1(4,5,8,465,45,65,23,45)}`)
