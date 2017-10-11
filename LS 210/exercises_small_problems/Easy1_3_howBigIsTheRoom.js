var length = parseInt(prompt('Enter the length of the room in meters:'), 10);

var width = parseInt(prompt("Enter the width of the room in meters:"), 10);
var area = length * width
var area_in_squared_feets = area * 10.76
console.log = ("The area of the room is "+ area.toFixed(2) + " square meters (" + area_in_squared_feets.toFixed(2) + " square feet)");

// Further exploration - Ask user for units 

var SQMETERS_TO_SQFEET = 10.76;
var SQFEET_TO_SQMETERS = 0.093;

var unit = prompt("What units you prefer? Meters(m), feets(f)");

var length = parseInt(prompt('Enter the length of the room in meters:'), 10);

var width = parseInt(prompt("Enter the width of the room in meters:"), 10);

var area = length * width;
var area_in_squared_feets = area * SQMETERS_TO_SQFEET;

if (unit ==='m') {
  console.log = ("The area of the room is "+ area.toFixed(2) + " square meters (" + area_in_squared_feets.toFixed(2) + " square feet)");
} else {
  
  var area_in_squared_meters = area * SQFEET_TO_SQMETERS;
  console.log = ("The area of the room is "+ area.toFixed(2) + " square meters (" + area_in_squared_meters.toFixed(2) + " square meters)");
}