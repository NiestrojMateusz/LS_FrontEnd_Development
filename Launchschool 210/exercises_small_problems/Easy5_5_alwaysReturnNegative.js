// Write a function that takes a number as an argument. If the argument is a positive 
// number, return the negative of that number. If the number negative, 
// return the original number.


function negative(number) {
  if (number >= 0) {
    return number * -1;
  } else {
    return number;
  }
}
console.log(negative(5)); // -5
console.log(negative(-3)); // -3
console.log(negative(0)); // -0