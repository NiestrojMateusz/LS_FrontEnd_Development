// Write a program that solicits 6 numbers from the user, then logs a message that describes whether or not the 6th 
// number appears amongst the first 5 numbers.

function search(array) {
  var len = array.length;
  return array.slice(0, len-2).includes(array[len-1]) ? `The number ${array[len-1]} appear in ${array}` : `The number ${array[len-1]} does not appear in ${array}`
}

console.log(search([25, 15, 20, 17, 25,20]));