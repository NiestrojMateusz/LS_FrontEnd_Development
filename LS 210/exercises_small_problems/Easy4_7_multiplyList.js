// Write a function that takes two Array arguments, in which each Array contains a list of numbers, and returns 
// a new Array that contains the product of each pair of numbers from the arguments that have the same index. 
// You may assume that the arguments contain the same number of elements.

// Input: two arrays of numbers
// Output: Array with of each pair product

function multiplyList(array1, array2) {
  var result = [];

  for (var i = 0; i < array1.length; i++) {
    result.push(array1[i] * array2[i]);
  }
  return result;
}

multiplyList([3, 5, 7], [9, 10, 11]) // [27, 50, 77]