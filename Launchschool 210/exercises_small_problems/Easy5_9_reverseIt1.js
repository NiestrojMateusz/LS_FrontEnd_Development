// Write a function that takes one argument, a string, and returns the same string with 
// the words in reverse order.

function reverseSentence(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reverseSentence(''));   // ''
console.log(reverseSentence('Hello World'));   // 'World Hello'
console.log(reverseSentence('Reverse these words'));;  // 'words these Reverse'