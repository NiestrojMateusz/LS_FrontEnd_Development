// Sort an array of passed in values using merge sort. You can assume that this array may contain only 
// one type of data. And that data may be either all numbers or all strings.


function mergeSort(array) {
  var len = array.length;

  if (len ===1) {
    return array;
  }  
  var middle =  Math.ceil(len/2)
  
  return merge(mergeSort(array.slice(0,middle)), mergeSort(array.slice(middle)));
}




function merge(arr1, arr2) {
  var result = [];
  if (!arr1.length) {
    return arr2;
  } else if (!arr2.length) {
    return arr1;
  } else {
     var copy1 = arr1.slice();
      var copy2 = arr2.slice();

      while (copy1.length > 0 && copy2.length > 0) {
        result.push(copy1[0] < copy2[0] ? copy1.shift() : copy2.shift());
      }

      return result.concat(copy1.length === 0 ? copy2 : copy1);
  }
}

console.log(mergeSort([9,5,7,5,7,8,3,2,1]));