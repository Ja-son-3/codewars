// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//Parameters: Given a non-empty array of numbers.
//Results: Return the value of all the item's in the array multiplied with each other.
//Examples:
    // assert.strictEqual(grow([1, 2, 3]), 6);
    // assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
    // assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 
//Pseudocode: 
    //1. Use the reduce array method to multiply each element together with a starting value of 1, as a value of zero will only return a 0 result.
//Time Complexity: linear or O(n), depending on the length of the given array.

function grow(x){
    return x.reduce((a,c) => a * c,1)
}