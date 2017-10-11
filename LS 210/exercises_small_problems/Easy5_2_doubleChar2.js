// Write a function that takes a string, and returns a new string in which it doubles
// every consonant character. It doesn't double vowels (a,e,i,o,u), digits, 
// punctuation, and whitespace.

// Rules: 
// -function doubles letter beside vowels, digits, punctuation and whitespace

// Algorithm:
// -split string
// -map characters
//   if char are match consonant

function doubleConsonants(string) {
  return string.split("").map(function(char) {
    if (char.match(/[^aeiou\.\,\s\-\!]/i)) {
      return char.repeat(2);
    } else {
      return char;
    }    
  }).join("");
}



console.log(doubleConsonants('String'));       // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));     // "JJullyy 4tthh"
console.log(doubleConsonants(''));             // ""