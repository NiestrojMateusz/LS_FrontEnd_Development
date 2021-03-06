// Write a function that rotates an array by moving the first element to the end of the array. Do not 
// modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array as well.
// Review the test cases below and then implement the solution accordingly.

function rotateArray(input) {
  if (Array.isArray(input)) {
    return input.length ? input.slice(1).concat(input.slice(0,1)) : [];
  } else {
    return undefined;
  }
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));  // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));  // ['b', 'c', 'a']
console.log(rotateArray(['a']));  // ['a']
console.log(rotateArray([1, 'a', 3, 'c']));  // [ 'a', 3, 'c', 1 ]
console.log(rotateArray([{a: 2}, [1, 2], 3]));  // [ [1, 2], 3, {a: 2} ]
console.log(rotateArray([]));  // []

// return undefined if the argument is not an array
console.log(rotateArray());  // undefined
console.log(rotateArray(1));  // undefined


// the input array is not mutated
x = [1, 2, 3, 4]
console.log(rotateArray(x)); // [2, 3, 4, 1]
console.log(x)                  // [1, 2, 3, 4]