// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
    // Input: [0]
    // Output: "even"

    // Input: [0, 1, 4]
    // Output: "odd"

    // Input: [0, -1, -5]
    // Output: "even"

//Parameters: Given an array of number values
//Results: Sum of the values in the given array and return whether the value is even or odd.
//Examples:
    // it('Edge tests', () => {
    //     assert.strictEqual(oddOrEven([0]), 'even')
    //     assert.strictEqual(oddOrEven([1]), 'odd')
    //     assert.strictEqual(oddOrEven([]), 'even')
    //   });
    
    //   it('Even tests', () => {
    //     assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
    //     assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
    //     assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
    //   });
    
    //   it('Negative Even tests', () => {
    //     assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
    //     assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
    //     assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
//Pseudocode: 
    //1. Use the reduce method to sum all values in the given array.
    //2. Use an if statment to check if the value is divisble by two, if so return a string of "even"
    //3. Otherwise return a string of "odd"
//Time Complexity: O(n) or Linear

function oddOrEven(array) {
    if (array.reduce((a,c)=>a+c,0) % 2 === 0) return "even"
   return "odd"
}