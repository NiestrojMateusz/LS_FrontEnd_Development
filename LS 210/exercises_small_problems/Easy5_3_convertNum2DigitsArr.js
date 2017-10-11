// Write a function that takes a positive integer as an argument and returns that number 
// with its digits reversed.

// Algorithm:
// -change number to string
// -split string to chars
// -reverse array
//   1) with array#reverse 
//   2) with array# push
// -join array
// -convert to number

function reversedNumber(number) {
  var reverseNumber = String(number).split("").reverse().join("");
  return Number(reverseNumber);
}

console.log(reversedNumber(12345)); // 54321
console.log(reversedNumber(12213)); // 31221
console.log(reversedNumber(456));  // 654
console.log(reversedNumber(12000)); // 21 # Note that zeros get dropped!
console.log(reversedNumber(1));  // 1

