function minilang(commands) {
  var register = 0;
  var stack = [];
  var errorMessage;
  var commands = commands.split(' ');

  commands.some(function(command) {
    if (tokens.indexOf(command) === -1) {
      if (command.match(/[a-z]/i)) {
        errorMessage = 'Wrong token';
        return true;
      } else {
        register = Number(command);
      }
    }

    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = parseInt(register / stack.pop(), 10);
        break
      case 'MOD':
        register = parseInt(register % stack.pop(), 10);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
    }
  });

  return errorMessage;
}