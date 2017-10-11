// Building on the previous exercise, write a function the returns whether an item is available. As before, the function takes in two arguments: inventoryItem and transactions. The function will return true only if the sum of the quantity for the transactions for the item is greater than zero. Notice that in the transaction object there is a movement property. Every time the movement value is out it decreases the quantity.

// You may (and should) use the transactionsFor function from the previous exercise.

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(transaction => transaction["id"] === inventoryItem)
}

function isItemAvailable(inventoryItem, transactions) {
  var checkQuantity = transactionsFor(inventoryItem,transactions).reduce((sum, transaction) => {
    return transaction['movement'] === "in" ? sum + transaction['quantity'] : sum - transaction['quantity'];
  }, 0)

  return checkQuantity > 0;
}



var transactions = [ {id: 101, movement: 'in', quantity: 5, },
                     {id: 105, movement: 'in', quantity: 10, },
                     {id: 102, movement: 'out', quantity: 17, },
                     {id: 101, movement: 'in', quantity: 12, },
                     {id: 103, movement: 'out', quantity: 15, },
                     {id: 102, movement: 'out', quantity: 15, },
                     {id: 105, movement: 'in', quantity: 25, },
                     {id: 101, movement: 'out', quantity: 18, },
                     {id: 102, movement: 'in', quantity: 22, },
                     {id: 103, movement: 'out', quantity: 15, },];

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true