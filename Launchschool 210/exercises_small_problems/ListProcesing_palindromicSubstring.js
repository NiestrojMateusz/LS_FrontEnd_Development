// Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must 
// consist of the same sequence of characters forwards as it does backwards. Arrange the return values in the same 
// sequence as the substrings appear in the string. Include duplicate palindromes multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purposes of this exercise, you should consider all characters and pay attention to case; that is, "AbcbA" is a 
// palindrome, but neither "Abcba" nor "Abc-bA" are. In addition, assume that single characters are not palindromes.

function substrings(string) {
  return string.split('').map(function(char, idx) {
    return substringsAtStart(string.substring(idx));
  }).reduce(function(result, array) {
    return result.concat(array);
  });
}

function substringsAtStart(string) {
  return string.split('').map(function(char, idx, stringArray) {
    return stringArray.slice(0, idx + 1).join('');
  });
}

function isPalindrome(string) {
  return string.length > 1 ? string === string.split('').reverse().join('') : false;
  
}

function isRealPalindrome(str) {
  return isPalindrome(str.replace(/[^a-z\d]/gi, '').toLowerCase())
};

function palindromes(string) {
  return substrings(string).filter(substring => isRealPalindrome(substring));
}

console.log(palindromes('abcd'));  // []
console.log(palindromes('madam')); // ['madam', 'ada']
console.log(palindromes('hello-madam-did-madam-goodbye'));
// result
// [ 'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
//   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
//   '-madam-', 'madam', 'ada', 'oo' ]

console.log(palindromes('knitting cassettes'));
// result
// [ 'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt' ]