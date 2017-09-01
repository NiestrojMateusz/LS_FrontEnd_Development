// Write a function that takes a string, and returns a new string in which it doubles 
// every character.

// Algorithm: 
// -split string to chars
// -map every char
//   - change current letter by double it


function repeater(string) {
  return string.split("").map(function(char) {
    return char.repeat(2);
  }).join("");
}


// ====================second solution===================


function repeater2(string) {
  var stringArr = string.split("")
  var result = [];
  for (var i=0; i < stringArr.length; i++) {
    result.push(stringArr[i] + stringArr[i])
  }
  return result.join("")
}

// =====================third solution ======================

function repeater3(string) {
  return string.replace(/./g, "$&$&");
}


console.log(repeater2('Hello'));     // "HHeelllloo"
console.log(repeater2("Good job!")); // "GGoooodd  jjoobb!!"
console.log(repeater2(''));          // ''
