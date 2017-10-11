var apples = 3;
var bananas = 5;

if (apples == bananas) {
  console.log("Apples is equal to bananas");
};

bananas = "3";

if (apples === bananas) {
  console.log("Apples is equal to bananas");
} else if (apples == bananas) {
  console.log("Same value, but diffrent types");
} else {
  console.log("Not strict true!");
}

apples = 3;
bananas = 3;
var areEqual = apples === bananas;

console.log(areEqual);

bananas = 1;


var eitherOr = apples || bananas;

console.log(eitherOr);

eitherOr = bananas || apples;

console.log(eitherOr);

var lastName = "Matt";

var familyMessage;

var familyMessage = lastName === 'Matt' ? 'You\'re part of the family!' : 'You\'re not family.';