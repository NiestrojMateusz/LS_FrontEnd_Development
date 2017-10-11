// First ex
// function average(a, b, c) {
//   var sum = a + b + c;
//   return sum / 3;
// }

// // Second ex

// function average(a, b, c) {
//   return sum(a, b, c) / 3;
// }
// function sum(a, b, c) {
//   return a + b + c;
// }
// Third Ex
// function average(array) {
//   var total= 0;
  
//   for (var i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total / array.length;
// }

// Fourth ex
// function average(array) {
//   return sum(array) / array.length;
// }

// function sum(array) {
//   var total= 0;
  
//   for (var i = 0; i < array.length; i++) {
//     total += array[i];
//   };
  
//   return total;
// }

// Fifth exercise

var temperature = [201, 573, 222];

function average(array) {
  return sum(array) / array.length;
}

function sum(array) {
  var total= 0;
  
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  };
  
  return total;
}


console.log(average(temperature));