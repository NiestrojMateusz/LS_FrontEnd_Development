function octalToDecimal(number) {
 var digits = number.split('')
 return digits.map(function(digit, index){
     return parseInt(digit) * Math.pow(8, digits.length - index - 1);
 }).reduce(function(sum, digit){
    return sum += digit;
 });
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9