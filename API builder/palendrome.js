const palendrome = (str) => {
    const arrStr = str.split("");
    for (let i=0; i< Math.floor(arrStr.length/2); i++)
    {
        if(arrStr[i] !== arrStr[arrStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(palendrome("98765456789"));       
console.log(palendrome("987654567897"));       