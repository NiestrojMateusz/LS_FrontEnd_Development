// Our initial fibonacci solution that used recursion wasn't that efficient. It may start to slow down already with an 
// nth argument of 35. One way to improve the performance of the recursive fibonacci function is to use memoization.

// Memoization is an approach to saving a computed answer for possible reuse at a later time rather than having to 
// recompute it again. In the case of the recursive fibonacci, it will save calls to fibonacci(nth - 2). This is because 
// the values needed for this will already be computed when the recursive calls were done for fibonacci(nth - 1).

// For this exercise, your objective is to refactor the recursive fibonacci to use memoization.


function fibonacci(position, memo) {
  memo = memo || [];
  if (memo[position]) {
    return memo[position];
  }
  else {
    if (position < 3) {
      return 1;
    } else {
      memo[position] = fibonacci(position-1, memo) + fibonacci(position-2, memo);
    }
  }
  return memo[position];  
}

console.log(fibonacci(1));  // 1
console.log(fibonacci(2));  // 1
console.log(fibonacci(3));  // 2
console.log(fibonacci(4));  // 3
console.log(fibonacci(5));  // 5
console.log(fibonacci(12));  // 144
console.log(fibonacci(20));  // 6765