var input_integer = parseInt(prompt("Please enter an integer greater than 0:"), 10);

var operation = prompt("Enter 's' to compute the sum, 'p' to compute the product.");

if (operation === 's') {
  var sum = 0;
  for (var i = 1; i <= input_integer; i++) {
    sum += i;
  }
  
  console.log("The sum of the integers between 1 and " + input_integer + " is " + sum + ".");
} else {
  var product = 1;
  for (var i = 1; i <= input_integer; i++) {
    product *= i;
  }
  console.log("The product of the integers between 1 and " + input_integer + " is " + product + ".");
}
