// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

//Parameters: Given a boolean value.
//Results: Given a boolean parameter, return it as a string.
//Examples:
    // Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
    // Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
//Pseudocode: 
    //1. Use the toString() method to convert the given boolean value into a string.
//Time Complexity: Linear or 0(n) depending on the string length

function booleanToString(b){
    return b.toString()
}