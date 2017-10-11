// Rewrite your recursive fibonacci function so that it computes its results without recursion.

// Algorithm:
// -set two first position that are ones
// -sum that number an save it to next operation

function fibonacci(num) {
  var pair = [1,1]

  for (var i=3; i <= num; i++) {
    pair = [pair[1], pair[0]+pair[1]];
  };
  return pair[1];
}

console.log(fibonacci(7));
console.log(fibonacci(20));  // 6765
console.log(fibonacci(50));  // 12586269025
console.log(fibonacci(100));  // 354224848179261915075