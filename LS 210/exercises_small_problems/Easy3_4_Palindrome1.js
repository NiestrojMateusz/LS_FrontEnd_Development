function isPalindrome(string) {
  var reverse_string = "";
  for (var i = string.length-1 ; i >= 0; i--) {
    reverse_string += string[i]
  }

  return reverse_string === string;
}

console.log(isPalindrome('madam'));                    // true
console.log(isPalindrome('Madam'));                    // false (case matters)
console.log(isPalindrome('madam i\'m adam'));          // false (all characters matter)
console.log(isPalindrome('356653'));                   // true