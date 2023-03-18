// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
    // mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
    // mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
    // mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
    // mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

//Parameters: Given two number parameters, representing quantity of mangoes and price per mango.
//Results: Return the total cost to be paid for all the mangoes.
//Examples:
    // assert.strictEqual(mango(3, 3), 6)
    // assert.strictEqual(mango(9, 5), 30)
//Pseudocode: 
    //1. Divide the given quantity parameter by 1.5 and round up to account for the free mango out of every 2 bought.
    //2. Multiply the rounded value by price and return the cost for all the mangoes.
//Time Complexity: Constant or O(1)

function mango(quantity, price){
    return Math.ceil(quantity/1.5)*price
}