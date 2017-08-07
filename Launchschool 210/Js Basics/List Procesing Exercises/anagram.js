function anagram(word, list) {
  return list.filter(function(candidate) {
    return areAnagrams(candidate, word);
  });
}

function areAnagrams(source, target) {
  var sourceLetters = stringToSortedLetters(source);
  var targetLetters = stringToSortedLetters(target);
  return compareArrays(sourceLetters, targetLetters);
}

function stringToSortedLetters(string) {
  var letters = string.split('');
  return letters.sort(function(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every(function(letter, index) {
    return letter === array2[index];
  });
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']); // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);  // [ "enlist", "inlets" ]