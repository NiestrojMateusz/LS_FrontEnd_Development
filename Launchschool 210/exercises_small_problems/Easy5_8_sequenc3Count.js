// Create a function that takes two integers as arguments. The first argument is a count,
// and the second is the first number of a sequence that your function will create. 
// The function returns an Array that contains the same number of elements as the count argument, 
// while the values of each element will be multiples of the starting number.

// You may assume that the count argument will always have a value of 0 or greater, 
// while the starting number can be any integer value. If the count is 0, return an empty list.

// Rules
// - first argument is count
// - second is a first number of sequence
// - length of result array is equal to count argument
// - values of each element are multiples of couting argument

// Algorithm
// for 1 to count 
//   - take starting argument and multiply it by iteration number;
//   - push the result to string

function sequence(count, start) {
  var result = [];
  for (var i=1; i <= count; i++) {
    result.push(start*i);
  }
  return result;
}

function sequence2(count, start) {
  return Array(count).fill(start).map(function(num, i) {
    return num * (i+1);
  });
}
console.log(sequence2(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence2(4, -7)); // [-7, -14, -21, -28]
console.log(sequence2(3, 0)); // [0, 0, 0]
console.log(sequence2(0, 1000000)); // []