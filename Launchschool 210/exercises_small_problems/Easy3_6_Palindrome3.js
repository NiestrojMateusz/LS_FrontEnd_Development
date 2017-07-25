function isPalindrome(string) {
  var reverse_string = "";
  for (var i = string.length-1 ; i >= 0; i--) {
    reverse_string += string[i]
  }

  return reverse_string === string;
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));