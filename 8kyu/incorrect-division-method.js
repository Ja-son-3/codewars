// This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

//Parameters: Given two integer parameters.
//Results: Return a value dividing the first parameter by the second.
//Examples:
    // assert.strictEqual(solve(2, 1), 2);
    // assert.strictEqual(solve(2, 4), 0.5);
    // assert.strictEqual(solve(42, 0), Infinity);
    // assert.strictEqual(solve(0, 8), 0);
    // assert.strictEqual(solve(7, 2), 3.5);
    // assert.strictEqual(solve(4.2, 1), 4.2);
    // assert.strictEqual(solve(9999, 11), 909);
//Pseudocode: 
    //1. Remove a forward slash from the function to change from a comment to a division operator
//Time Complexity: Constant or O(1)

//Given
//const solve = (x, y) => x // y

const solve = (x, y) => x / y