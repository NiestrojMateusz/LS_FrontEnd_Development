// Write a function which takes a grocery list (array) of fruits with quantities and converts it into an array of the 
// correct number of each fruit.

function buyFruit(list) {
  if (list[0]) {
    return [...Array(list[0][1]).fill(list[0][0]), ...buyFruit(list.slice(1))]
  } else {
    return [];
  }
}

console.log(buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]));
// result
// ['apples', 'apples', 'apples', 'orange', 'bananas','bananas']