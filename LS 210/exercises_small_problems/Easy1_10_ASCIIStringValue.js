function asciiValue(string) {
  var sum = 0;
  for (var i = 0; i <= string.length-1; i++) {
    sum += string.charCodeAt(i);
  }
  return sum;
}


console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0