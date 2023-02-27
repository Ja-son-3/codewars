// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
    // 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
    // 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

//Parameters: Given an integer parameter.
//Results: Return the number of odd numbers from the given parameter decrementing to 1.
//Examples:
    // assert.strictEqual(oddCount(15), 7, "Oops! Wrong.");
    // assert.strictEqual(oddCount(15023), 7511, "Oops! Wrong.");
//Pseudocode: 
    //1. Use the Math.floor static method after dividing the given integer by 2 to account for floating numbers and return the result.
//Time Complexity: Constant or 0(1)

function oddCount(n){
    return Math.floor(n/2)
}