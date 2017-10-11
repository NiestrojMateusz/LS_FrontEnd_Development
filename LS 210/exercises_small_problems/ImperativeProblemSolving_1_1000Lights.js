// Input lightsOn(total number of switches)
// Output: Array of number, number are ligth that have on status;

//Rules
//  ALl ligth are off on start
//  There is n times repetition where n is number of lights
//  In round one we switch all lights
//  In second run we switch lights that are power of 2  from first up to last lights
//  In third run we switch lights that are next powers of 3
//  In m round we switch lights that are next powers of m
// detailed result of each round for 5 lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off; 1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off; 1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// Data Structure :
// array of strings

// Algorithm
//  Create array with n elements
//    - assign false status to elments from index 1 to index n [undefined, false, false false... n = false]
//    - from 1 to n:
//         - map every element of array that idx > 0 && idx % number of round is equal to 0
//         - change value to another boolean 
//    - return array with number of index where value is true
//      -for 0 to n push index of elements to new array that value are equal to true
//  
// test cases:

function lightsOn(number) {
  var lights = new Array(number+1);
  for (let i = 1; i < lights.length; i++) {
    lights[i] = false
  }

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j< lights.length; j++) {
      if (j % i === 0) {
        lights[j] === false ? lights[j] = true : lights[j] = false;
      }
    }      
  }
  var result = [];
  for (var j = 1; j < lights.length; j++) {
    if (lights[j] === true) {
      result.push(j);  
    }    
  }

  return result;
}

console.log(lightsOn(5)); // [1,4];
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
