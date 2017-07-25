function runningTotal(array) {
  if (array.length === 0) {
    return [];
  } else {
    var result = [array[0]];
  }
  
  for (var i = 0; i <= array.length-2; i++) {
    result.push(result[i] + array[i+1])
  } 
  return result;
}

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []