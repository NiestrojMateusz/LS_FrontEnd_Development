// Write a function that combines two Arrays passed as arguments, and returns a new Array that contains all elements from both Array arguments, with the elements taken in alternation.

// You may assume that both input Arrays are non-empty, and that they have the same number of elements.

// Example:

function interleave(array1, array2) {
  var result = [];
  for (var i=0; i < array1.length; i++) {
    result.push(array1[i], array2[i]);
  }
  return result;
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, 'a', 2, 'b', 3, 'c']