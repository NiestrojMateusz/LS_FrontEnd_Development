// Write a function that takes an Array of integers as input, multiplies all of the numbers together, divides the result by the number of 
// entries in the Array, and returns the result as a String with the value rounded to 3 decimal places.

// Examples

// Algorithm: 
// -multiply all numbers in array
// -round result to three decimal points String

function showMultiplicativeAverage(array) {
  return (array.reduce((sum, num) => {return sum * num})/array.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));  // '7.500'
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));  // '28361.667'