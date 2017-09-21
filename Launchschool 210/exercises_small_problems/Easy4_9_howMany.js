// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the 
// number of occurrences.

// Input: array
// Output: Object with element and count of that element

// Algorithm:
// -create object
// -iterate through array
//   if object keys includes current element increase count number
//   if not add key and increase counter
// -return object
var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

function logOccurrences(occurrences) {
  for (var item in occurrences) {
    console.log(item + ' => ' + occurrences[item]);
  }
}

function countOccurrences(array) {
  var countedElements = {};

  array.forEach( el => {
    if (Object.keys(countedElements).includes(el)) {
      countedElements[el] += 1;
    } else {
      countedElements[el] = 1;
    }
  });

  return logOccurrences(countedElements);
}


countOccurrences(vehicles);

// // console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2