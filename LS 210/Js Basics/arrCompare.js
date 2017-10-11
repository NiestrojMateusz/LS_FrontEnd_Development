function areArraysEqual(array1, array2) {
   if (array1.length !== array2.length) {
      return false;
    }

    var index;
    for (var i = 0; i < array1.length; i++) {
      index = array2.indexOf(array1[i]);
      if (index >= 0) {
        array2.splice(index, 1);
      } else {
        return false;
      }
    }

  return true;
}