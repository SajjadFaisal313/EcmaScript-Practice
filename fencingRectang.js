const fencRect = (b,w,numberOfWire,costPerFeet) => {
const perimeter = b + w + b + w;
const totalcost = perimeter * numberOfWire * costPerFeet;
return totalcost;
}
console.log(`total cost of fencing will be ${fencRect(40,30,5,12)}`)
