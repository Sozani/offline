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

// const names = ["bob", "som", "rom", "rom"];
// console.log([...new Set(names)]);
// const uniqueNames = new Set(names);
// for (let name of uniqueNames) {
//   console.log(name);
// }
// immediately invoked function EXpressions.
// (function () {
//   console.log("This is iif too");
// })();
// You can easily pass parameters into an iife:
// (function (message) {
//   alert(message);
// })("Hello World");
// Additionally, you can return values to the surrounding scope
// let example = (function () {
//   return 42;
// })();
// console.log(example);
//Expected output 42
// it is possible to name an IIfe,this pattern has several advantages,such as providing a reference which can be used for a recursion and can make debugging simpler as the name is included.
// (function namedIIFE() {
//   throw error;
// })();
// I try this code above but it rejected
