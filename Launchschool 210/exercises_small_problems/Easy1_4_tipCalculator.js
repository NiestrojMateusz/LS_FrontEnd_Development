var bill = parseFloat(prompt("What is the bill?:"), 10);
var tip_percentage = parseFloat(prompt("What is the tip percentage?:"), 10);

var tip = bill * (tip_percentage/100);
var total = bill + tip;

console.log('The tip is $' + tip.toFixed(2));
console.log('The total is $' + total.toFixed(2));