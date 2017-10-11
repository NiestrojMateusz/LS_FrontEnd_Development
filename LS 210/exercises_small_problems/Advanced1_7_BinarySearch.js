// Implement a binarySearch function that takes an array and searchItem as arguments and returns the index 
// if it is found and -1 otherwise. You may assume that the array passed in will always be sorted.

// Algorithm
// -Get to the half of the data (assume truncation)
// -If the value at the half is equal to searching element stop the search.
// -If the value at the half is less than searching value:
//     -Discard the lower half including the value at the half
//     -Repeat the process from the top, using the upper half
// If the value at the half is greater than searching value, do the same as previous but reverse the halves.

// Examples:

function binarySearch(list, searchItem) {
  var high = list.length-1;
  var low = 0;  

  while (low <= high) {
    var mid = low + Math.floor((high-low)/2);
    if (list[mid] === searchItem) {
      return mid;
    } else if (searchItem > list[mid]) {
      low = mid+1;
    } else {      
      high = mid-1;
    }
  }
  return -1;  
}

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));  // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));  // 7
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter')); // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler')); 