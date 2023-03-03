// Task:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
    // n = 17
    // m = 5
    // result = 2 (remainder of `17 / 5`)

    // n = 13
    // m = 72
    // result = 7 (remainder of `72 / 13`)

    // n = 0
    // m = -1
    // result = 0 (remainder of `0 / -1`)

    // n = 0
    // m = 1
    // result - division by zero (refer to the specifications on how to handle this in your language)

//Parameters: Given two number parameters.
//Results: Return the remainder of the larger given parameter divided by the smaller parameter.
//Examples:
    // assert.strictEqual(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5');
    // assert.strictEqual(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter');
    // assert.isNaN(remainder(1, 0), 'Divide by zero should return NaN');
    // assert.isNaN(remainder(0, 0), 'Divide by zero should return NaN');
//Pseudocode: 
    //1. Use an if statement to check if the first parameter is larger than the other parameter. If true use the remainder operator to find the remainder value of the larger parameter, divided by the smaller parameter.
    //2. Otherwise use the remainder operator dividing the second parameter by the first parameter and return the result.
//Time Complexity: Constant or O(1)

function remainder(n, m){
    if (n > m) {
        return n % m
    }
    return m % n
}