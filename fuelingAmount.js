const MileageCost = (dist, mil, fuelpr) => Math.ceil((dist/mil)*fuelpr);

console.log(`amount required for refueling is ${MileageCost(455,25,109.4)}`)
