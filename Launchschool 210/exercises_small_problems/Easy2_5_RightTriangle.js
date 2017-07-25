function triangle(integer) { 
  var stars = 0;
  var spaces = integer;
  var i = 1;
  
  while (i <= integer) {
    console.log(" ".repeat(spaces) + "*".repeat(stars));
    stars += 1;
    spaces -= 1;
    i++;
  }
}

triangle(6);