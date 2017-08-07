function myReduce(array, func, initial) {
  var value;
  var index;

  if (typeof initial === 'undefined') {
    value = array[0];
    index = 1;
  } else {
    value = initial;
    index = 0;
  }

  array.slice(index).forEach(function(element) {
    value = func(value, element);
  });

  return value;
}

function longestWord(words) {
  return myReduce(words, longest)
}

var longest = function(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

longestWord(['abc', 'launch', 'targets', 'ortopedical','']);   