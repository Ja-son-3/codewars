// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
    // 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
    // 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
    // 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
    // 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

//Parameters: Given three integer parameters.
//Results: Return true if the first integer parameter is divisible by the other two parameters. If not return false.
//Examples:
    // assert.strictEqual(isDivisible(3,3,4),false);
    // assert.strictEqual(isDivisible(12,3,4),true);
    // assert.strictEqual(isDivisible(8,3,4),false);
    // assert.strictEqual(isDivisible(48,3,4),true);
//Pseudocode: 
    //1. create an if statement using the remainder operator to divide the first parameter by the other two. 
    //2. If divisible by both, return true.
    //3. Otherwise return false.
//Time Complexity: Constant or O(1)

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true
    } else {
        return false
    }
}