// Write a function that takes a first name, a space, and a last name passed as a single 
// String argument, and returns a string that contains the last name, a comma, a space, 
// and the first name.

function swapName(string) {
  var nameArr = string.split(" ");
  return nameArr[1] + ", " + nameArr[0];
}


function swapName2(string) {
  var nameArr = string.split(" ");
  return `${nameArr[1]}, ${nameArr[0]}`;
}

function swapName3(string) {
  var nameArr = string.match(/\w+/g);
  return `${nameArr[1]}, ${nameArr[0]}`;
}

swapName3('Joe Roberts') // 'Roberts, Joe'