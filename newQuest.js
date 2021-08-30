const objNest = {
  data: [
    {
      name: "sachin",
      city: "pune",
    },
    {
      name: "salim",
      city: "nanded",
    },
    {
      name: "jagjit",
      city: "amritsar",
    },
  ],
};
const filteredDatan = objNest.data.map((item) => item.name);

console.log(filteredDatan);
