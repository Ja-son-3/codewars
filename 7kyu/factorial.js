// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.

//Parameters: Given a integer parameter, representing the end point of all all variables multipled with each other.
//Results: Return the product value of all numbers incrementing from 1 and n together.
//Examples:
    // Test.assertEquals(factorial(0), 1, "factorial for 0 is 1");
    // Test.assertEquals(factorial(1), 1, "factorial for 1 is 1");
    // Test.assertEquals(factorial(2), 2, "factorial for 2 is 2");
    // Test.assertEquals(factorial(3), 6, "factorial for 3 is 6");
//Pseudocode: 
    //1. Use an if statement to check if the value of n is greater than 12 or less than 0. If true return a RangeError, informing the user the range must be between 0 and 12.
    //2. Check if the value is 0, if so return a value of 1.
    //3. Otherwise return the value of n multipled by it's own function or factorial with a parameter of 1 less.
//Time Complexity: O(n^N) due to the use of recursion.

function factorial(n){
    if (n>12 || n<0) throw new RangeError('range must be between 0 and 12')
    return n === 0 ? 1 : n * factorial(n - 1)
}