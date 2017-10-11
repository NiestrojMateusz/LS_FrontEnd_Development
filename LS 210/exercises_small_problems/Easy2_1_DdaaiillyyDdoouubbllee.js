function crunch(string) {
  var result = [];
  for (var i = 0; i <= string.length-1; i++) {
    if (string[i+1] !== string[i]) {
      result.push(string[i]);
    }
  }
  return result.join("");
}


console.log(crunch('ddaaiillyy ddoouubbllee'));        // 'daily double'
console.log(crunch('4444abcabccba'));                  // '4abcabcba'
console.log(crunch('ggggggggggggggg'));                // 'g'
console.log(crunch('a'));                              // 'a'
console.log(crunch(''));                               // ''

// clever regex solution
function crunch(string) {
  return string.replace(/(.)\1+/g, '$1')
}