const getName = (fname, lname) => {
  return fname + " " + lname;
};

const getName = (fname, mname, lname) => {
  return fname + mname + lname;
};

console.log(getName("Amjad", "Khan"));
console.log(getName("Amjad", "Wahid Ali", "Khan"));
