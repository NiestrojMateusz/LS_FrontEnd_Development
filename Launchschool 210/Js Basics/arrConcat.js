function concat1(array1, secondArgument) {
  var result = [];

  array1.forEach(function(element) {
    result.push(element)
  });

  if (Array.isArray(secondArgument)) {
    secondArgument.forEach(function(element) {
      result.push(element);
    });
  }
  else {
    result.push(secondArgument);
  }

  return result;
}

function concat() {
  var result = [];

  
  for (var i = 0; i < arguments.length; i+= 1) {
    if (Array.isArray(arguments[i])) {
      arguments[i].forEach(function(element) {
      result.push(element);
      });
    }
    else {
      result.push(arguments[i]);
    }    
  }
  return result;
}

