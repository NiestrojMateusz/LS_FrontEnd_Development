// Write a function that takes a string with one or more space separated words and returns an object that shows the number 
// of words of different sizes.

// Words consist of any string of characters that do not include a space.

// Algorithm:
// -split string by words
// -iterate through words and check the length
// -check if result object have keys with that lenght and increment it 

const wordSizes = string => {
  var result = {};
  if (!string) return result;
  string.split(" ").forEach(word => {
    var key = String(word.length);
    Object.keys(result).includes(key) ? result[key] += 1 : result[key] = 1;
  });

  return result;
}


console.log(wordSizes('Four score and seven.'));  // { "3": 1, "4" : "1", "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes('What\'s up doc?'));  // { "6": 1, "2": 1, "4": 1 }
console.log(wordSizes(''));  // {}