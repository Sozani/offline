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
function isOdd(n) {
  if (n & 1) {
    console.log("ODD !");
  } else {
    console.log("Even !");
  }
}
console.log(isOdd(23));
