// Write a function that takes one argument, a string containing one or more words, and 
// returns the given string with all five or more letter words reversed. Each string 
// will consist of only letters and spaces. Include spaces only when more than one word 
// is present.


// Algorithm
// -split string to words
// - if word has length five or more letter then reverse chars
// - join elemnts to sentence


function reverse(string) {
  return string.split('').reverse().join('')
}

function reverseWords(string) {
  var words = string.split(" ");

  return words.map(word => {
    if (word.length >= 5) {
      return reverse(word);
    } else {
      return word;
    } 
  }).join(" ");
}

console.log(reverseWords('Professional'));  // lanoisseforP
console.log(reverseWords('Walk around the block')); // Walk dnuora the kcolb
console.log(reverseWords('Launch School'));  // hcnuaL loohcS