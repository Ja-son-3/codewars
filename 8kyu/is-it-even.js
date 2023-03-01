// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

//Parameters: Given an integer parameter
//Results: Return true if the given parameter is even. If it is odd return false.
//Examples:
    // assert.strictEqual(testEven(0), true, "testEven for 0");
    // assert.strictEqual(testEven(0.5), false, "testEven for 0.5");
    // assert.strictEqual(testEven(1), false, "testEven for 1");
    // assert.strictEqual(testEven(2), true, "testEven for 2");
    // assert.strictEqual(testEven(-4), true, "testEven for 2");
//Pseudocode: 
    //1. Use the remainder operator and divide by two to find out if the given parameter is even. If it is even return true. Otherwise return false. 
//Time Complexity: Constant or O(1)

function testEven(n) {
    return n % 2 === 0
}