function isDoubleNumber(num) {
  var string_num = String(num);
  var string_half = string_num.length/2
  if (string_num.length % 2 === 0) {
    var left_side = string_num.slice(0, string_half)
    var right_side = string_num.slice(string_half, string_num.length)
    
    return left_side === right_side 
    
  } else {
    return false
  }
}

function twice(num) {
  if (isDoubleNumber(num)) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(37));                 // 74
console.log(twice(44));                 // 44
console.log(twice(334433));             // 668866
console.log(twice(444));                // 888
console.log(twice(107));                // 214
console.log(twice(103103));             // 103103
console.log(twice(3333));               // 3333
console.log(twice(7676));               // 7676