function multisum(integer) {
  var sum = 0;
  for (var i = 3; i <= integer; i++) {
    if (i % 3 === 0  || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

multisum(1000)

//function isMultiple(number, divisor) {
//   return number % divisor === 0;
// }

// function multisum(maxValue) {
//   var sum = 0;
//   for (var i = 1; i <= maxValue; i++) {
//     if (isMultiple(i, 3) || isMultiple(i, 5)) {
//       sum += i;
//     }
//   }

//   return sum;
// }