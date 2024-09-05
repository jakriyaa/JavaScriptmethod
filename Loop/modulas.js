let total = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
    total = total + i;
  }
}
console.log("Total Number OF Data", total);
