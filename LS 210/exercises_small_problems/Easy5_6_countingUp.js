// Write a function that takes an integer argument, and returns an Array of all integers, 
// in sequence, between 1 and the argument.

// You may assume that the argument will always be a valid integer that is greater than 0.

function sequence(integer) {
  var i = 1;
  var result = [];
  while (i <= integer) {
    result.push(i);
    i++;
  }
  return result;
}


// ============================Second solution================================
function sequence(number) {
  var result = [];
  for (var i = 1; i <= number; i++) {
    result.push(i);
  }

  return result;
}

// =========================Third Solution ===================================

function sequence(number) {
  return Array(number).fill(1).map((v, i) => v + i);
}


console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]