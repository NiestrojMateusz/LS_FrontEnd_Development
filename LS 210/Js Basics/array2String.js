function arrayToString(array) {
  var result = '';

  for (var i = 0; i < array.length; i++) {
    var currentElement = '';
    if (isNaN(array[i])) {
      currentElement = String(array[i]);
    }
    currentElement = array[i];
    result += currentElement;
  }
  return result;
}

arrayToString(["a",1,"b"]);