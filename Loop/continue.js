// for (let i = 1; i < 10; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }
array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array; i++) {
  if (i == 5) {
    continue;
  }
  console.log(array[i]);
}
