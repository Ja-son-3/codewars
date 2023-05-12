// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

//Parameters: Given a number parameter.
//Results: Use regex to validate whether the first chracter of the given number is a 1 2 or 3 and return a boolean value.
//Examples:
    // assert.strictEqual(validateCode(123), true);
    // assert.strictEqual(validateCode(248), true);
    // assert.strictEqual(validateCode(8), false);
    // assert.strictEqual(validateCode(321), true);
    // assert.strictEqual(validateCode(9453), false);
//Pseudocode: 
    //1. Use the ^ to check the first character
    //2. Use the [1-3] to check for the value of 1,2 and 3. returning true if the the given parameter started with a 1 2 or 3.
    //3. Otherwise return false.
//Time Complexity: Constnat or O(1)

function validateCode (code) {
    return /^[1-3]/.test(code)
}