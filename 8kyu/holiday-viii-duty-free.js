// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

//Parameters: Given a parameter representing the normal price of a bottle of whiskey, a parameter representing the discount in duty free and a parameter representing the holiday cost.
//Results: Return a number representing the amount of bottles of whiskey you would have to buy given the parameters to cover the cost of the holiday, without going over to budget to the nearest integer.
//Examples:
    // assert.strictEqual(dutyFree(12, 50, 1000), 166);
    // assert.strictEqual(dutyFree(17, 10, 500), 294);
    // assert.strictEqual(dutyFree(24, 35, 3000), 357);
//Pseudocode: 
    //1. Find the discount value and set it to a value by multiplying normPrice and the discount rate.
    //2. Divide the holiday cost by the discount value to get the amount of bottles within the budget.
    //3. Using Math.floor() to round down to account for partial bottles.
    //4. Return the bottle amount

function dutyFree(normPrice, discount, hol){
    let discountValue = normPrice * (discount * .01)
    return Math.floor(hol / discountValue)
}