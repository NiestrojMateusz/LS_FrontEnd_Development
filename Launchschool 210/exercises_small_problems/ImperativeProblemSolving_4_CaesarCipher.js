// Implement the caesar cipher. The caesar cipher is one of the earliest and simplest ways to encrypt plaintext so that passing 
// or communicating a message can be made secure. It is a substitution type of cipher, wherein the characters in a plaintext are 
// substituted by a letter some fixed number of positions in the alphabet. For example the letter A can be right shifted 3 and it 
// will be substituted with the letter D. This shift value is often referred to as the key. If a person has this key value then they 
// can decode the "encrypted plaintext" or ciphertext.

// As one of the earlier ciphers, it only encrypts lower and upper cased letters of the alphabet. Any other character is left as is. 
// Likewise, the substituted letters are only taken from the corresponding letter case. In the event that the key value for shifting 
// exceeds the alphabet capacity, it wraps around.

function caesarEncrypt(str,num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';
  
  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter.match(/[^a-zA-Z]/g)) {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i].match(/[A-Z]/)) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };
  
  return newString;
}
caesarCipher('Zoo Keeper', 2);


// Simple shift
console.log(caesarEncrypt('A', 0));       // 'A'
console.log(caesarEncrypt('A', 3));       // 'D'

// Wrap around
console.log(caesarEncrypt('y', 5));       // 'd'
console.log(caesarEncrypt('a', 47));      // 'v'

// All letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!

// Many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?