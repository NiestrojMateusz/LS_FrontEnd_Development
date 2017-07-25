function stringy(integer) {
  var result = ""
  for (var i = 1; i <= integer; i++) {
    i % 2 !== 0 ? result += '1' : result += '0'; 
  }
  
  return result;
}

console.log(stringy(6)); // '101010'