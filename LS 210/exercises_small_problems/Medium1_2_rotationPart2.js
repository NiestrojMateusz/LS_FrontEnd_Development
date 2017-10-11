// Write a function that can rotate the last n digits of a number. For the rotation, rotate 1 digit to the left and put the first digit to 
// the right.


function rotateArray(input) {
  if (Array.isArray(input)) {
    return input.length ? input.slice(1).concat(input.slice(0,1)) : [];
  } else {
    return undefined;
  }
}

function rotateRightmostDigits(number, digitsToRotate) {
  var numberArray = String(number).split("");
  var toRotate = numberArray.slice(numberArray.length - digitsToRotate);
 
  return parseInt(numberArray.slice(0, numberArray.length-digitsToRotate).concat(rotateArray(toRotate)).join(""))
}

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917