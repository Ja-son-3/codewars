// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//Parameters: Given an array of integer numbers.
//Results: Return a sum value of all the positive numbers in the given array parameter.
//Examples:
    // assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    // assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    // assert.strictEqual(positiveSum([]),0);
    // assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    // assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
//Pseudocode: 
    //1. Use the filter method to return a new array with all the values above zero or positive values.
    //2. Use the reduce method to get the sum of an array using the new array from the filter method.
    //3. Return the value from the reduce method

function positiveSum(arr) {
    return arr.filter(item => item > 0).reduce((total, current) => total + current,0)
}