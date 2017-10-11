var age = prompt('What is your age?');
var retire_age = prompt('At what age would you like to retire?');
var years_to_retire = retire_age - age;

var today = new Date();

var retire_year = today.getFullYear() + years_to_retire;

console.log("It's " + today.getFullYear() + ". You will retire in " + retire_year);
console.log("You have only " + years_to_retire + " years of work to go!")