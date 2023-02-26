// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//Parameters: Given an array of integers
//Results: Return the average for the given array parameter
//Examples:
    // assert.strictEqual(findAverage([1,1,1]), 1);
    // assert.strictEqual(findAverage([1,2,3]), 2);
    // assert.strictEqual(findAverage([1,2,3,4]), 2.5);
//Pseudocode: 
    //1. Create an if statement to check if the length of the array is zero or empty. If so return a value of 0.
    //2. If the array is not empty use the reduce array method to sum the array.
    //3. Divide the result by the array's length to calculate the average and return the result
//Time Complexity: Linear or 0(n) depending on the length of the given array parameter.

function findAverage(array) {
    if (array.length == 0) {
      return 0
    }
    return array.reduce((a,c) => a + c,0)/array.length
}