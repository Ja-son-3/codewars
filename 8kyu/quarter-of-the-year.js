// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:
    // 1 <= month <= 12

//Parameters: Given a number parameter, representing the month.
//Results: Return a number indicating which quarter of the year the given month parameter belongs to.
//Examples:
    // assert.strictEqual(quarterOf(3), 1)
    // assert.strictEqual(quarterOf(8), 3)
    // assert.strictEqual(quarterOf(11), 4)
//Pseudocode: 
    //1. Use the Math.ceil static method on month divided by 3 to find the quarter of the year of the given parameter.
    //2. Return the result.
//Time Complexity: Constant or O(1)

const quarterOf = (month) => {
    return Math.ceil(month/3)
}