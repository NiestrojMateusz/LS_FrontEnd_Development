function Ninja(){
  this.swung = false;
}

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
}
var ninjaA = new Ninja();
var ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns itself and modifies swung

console.log(ninjaA.swing().swung)      // this needs to be true
console.log(ninjaB.swing().swung)      // this needs to be true