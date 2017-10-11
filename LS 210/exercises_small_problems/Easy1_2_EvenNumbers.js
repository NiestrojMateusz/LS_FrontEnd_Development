function logOddNumber(num) {
  for (var i = 1; i <= num ; i+= 1) {
   if (i % 2 == 0){ 
     console.log(i);
   } 
  }
}

logOddNumber(99);