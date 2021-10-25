const makeTable = (num) => {
  for (i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${i * num}`);
  }
};

makeTable(4);

const count = () => {
  for (i = 1; i <= 6; i++) {
    console.log(i * 9);
  }
};
count();
