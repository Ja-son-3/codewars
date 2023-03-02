// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
    // You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

//Parameters: Given a number parameter.
//Results: Check if the parameter value and return whether it should be plural or not using a boolean value.
//Examples:
    // Test.assertEquals(plural(0), true, "Plural for 0");
    // Test.assertEquals(plural(0.5), true, "Plural for 0.5");
    // Test.assertEquals(plural(1), false, "Plural for 1");
    // Test.assertEquals(plural(100), true, "Plural for 100");
    // Test.assertEquals(plural(Infinity), true, "Plural for Infinity");
//Pseudocode: 
    //1. Create an if statement that checks if the given parameter is 1. If so return a value of false.
    //2. Otherwise return a value of true
//Time Complexity: O(1) or Constant

function plural(n) {
    if (n === 1) {
        return false
    }
    return true
}