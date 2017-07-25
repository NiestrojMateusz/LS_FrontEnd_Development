function century(year) {
  var century;
  
  if (Number.isInteger(year /100)) {
    century = year / 100;
  } else {
    century = Math.ceil(year/100);
  }
  
  return String(century) + centurySuffix(century);
}

function centurySuffix(century) {
  if (century >= 100 && (century % 100 === 11 || century % 100 === 12 || century % 100 === 13)) {
    return 'th';
  } else if (century === 11 || century === 12 || century === 13) {
    return 'th';
  } else {
    var last_char = String(century).slice(-1);

    switch(last_char) {
      case '1':
        return 'st'
        break;
      case '2':
        return 'nd'
        break;
      case '3':
        return 'rd'
        break;
      default:
        return 'th'
    }
  }
}

console.log(century(2000));        // '20th'
console.log(century(2001));        // '21st'
console.log(century(1965));        // '20th'
console.log(century(256));         // '3rd'
console.log(century(5));           // '1st'
console.log(century(10103));       // '102nd'
console.log(century(1052));        // '11th'
console.log(century(1127));        // '12th'
console.log(century(11201));       // '113th'