function extend(destination) {
  for (var i = 1; i < arguments.length; i++) {
    for (var prop in arguments[i]) {
      if (!destination.hasOwnProperty(prop)) {
        destination[prop] = arguments[i][prop];
      }
    }
  }
  return destination;
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2
  }
};

var joe = {
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },
  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  }
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // 1
object.sayHello();                // Hello, Joe