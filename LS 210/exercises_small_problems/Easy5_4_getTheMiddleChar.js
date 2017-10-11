// Write a function that takes a non-empty string argument, and returns the middle 
// character or characters of the argument. If the argument has an odd length, 
// you should return exactly one character. If the argument has an even length, 
// you should return exactly two characters.

// Algorithm
// -get length of string
// -if length is odd
//   - return middle character
//     * divide length-1 by 2 and return character of that index
// -if length is even
//   - return two middle chars
//     * divide lenght by 2 and return characters on index at that result - 1 and that result

function centerOf(string) {
  var len = string.length;

  if (len % 2 === 1) {
    return string[(len-1)/2];
  } else {
    return string.substr((len/2)-1,2);
  }
}
console.log(centerOf('I love ruby'));  // 'e'
console.log(centerOf('Launch School'));  // ' '
console.log(centerOf('Launch'));  // 'un'
console.log(centerOf('Launchschool'));  // 'hs'
console.log(centerOf('x'));  // 'x'