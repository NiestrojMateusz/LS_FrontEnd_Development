function isRealPalindrome(string) {
  var parse_string = string.replace(/[^\w]/g, '').toLowerCase();
  
  var reverse_string = "";
  for (var i = parse_string.length-1 ; i >= 0; i--) {
    reverse_string += parse_string[i]
  }

  return reverse_string === parse_string;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome('Madam, I\'m Adam'));    // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false