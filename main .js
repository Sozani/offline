// Real world example : Number's parity check

// function isEven(n) {
//   return n % 2 == 0;
// }
// console.log(isEven(24));
// another example
// function isOdd(n) {
//   if (isEven(n)) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(isOdd(23));

// You can check the (integer) number's parity in much more effective and simple manner
// function isOdd(n) {
//   if (n & 1) {
//     console.log("ODD !");
//   } else {
//     console.log("Even !");
//   }
// }
// console.log(isOdd(23));
// const iterable = [0, 1, 2];
// for (let i of iterable) {
//   console.log(i);
// }
// const string = "abcdef";
// for (let chr of string) {
//   console.log(chr);
// }
const names = ["bob", "som", "rom", "rom"];
// console.log([...new Set(names)]);
const uniqueNames = new Set(names);
for (let name of uniqueNames) {
  console.log(name);
}
