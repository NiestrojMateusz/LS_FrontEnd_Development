function Vehicle() {
  if (!(this instanceof Vehicle)) {
    return new Vehicle();
  }
}

Vehicle.prototype.doors = 4;
Vehicle.prototype.wheels = 4;

var sedan = Vehicle();

var coupe = new Vehicle();

coupe.doors = 2;
console.log(sedan.hasOwnProperty('doors')); // false
console.log(coupe.hasOwnProperty('doors')); // true

function Coupe() {};
function Motorcycle() {};

Coupe.prototype = new Vehicle();
Coupe.prototype.doors = 2;
Motorcycle.prototype = new Vehicle();
Motorcycle.prototype.doors = 0;
Motorcycle.prototype.wheels = 2;

var coupe2 = new Coupe();
var motorcycle = new Motorcycle();

console.log(coupe2 instanceof(Coupe)); // true
console.log(coupe2 instanceof(Motorcycle)); // false
console.log(coupe2 instanceof(Vehicle)); // true

function Sedan() {};

Sedan.prototype = Object.create(Vehicle.prototype);

var sedan2 = new Sedan();

console.log(sedan2 instanceof(Vehicle)); //
console.log(sedan2 instanceof(Sedan)); // true




