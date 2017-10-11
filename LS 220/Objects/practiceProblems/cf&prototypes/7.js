var ninjaA = (function() {
  function Ninja(){}
  return new Ninja();
})();

// create a ninjaB object


var ninjaB = Object.create(ninjaA);
console.log(ninjaB.constructor === ninjaA.constructor);    // this should be true