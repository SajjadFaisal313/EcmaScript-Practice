const fencingForAny = (edges, numberOfWire, rate) => {
    let sum = 0
    edges.forEach((element) => {
        sum = sum+ element;
            });
return sum* numberOfWire * rate;
};

console.log(fencingForAny([45,5,87,67],8,12));