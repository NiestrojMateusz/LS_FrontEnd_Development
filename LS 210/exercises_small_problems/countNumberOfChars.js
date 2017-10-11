var input = prompt('Please write a phrase:');
var numberOfCharacters = input.length;
var inputClear = input.replace(/[\s],''/)

console.log('There are ' + numberOfCharacters + ' characters in \"' + input + '\".');