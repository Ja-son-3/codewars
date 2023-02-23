// Description
    // We need a function that can transform a string into a number. What ways of achieving this do you know?
    // Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
    // "1234" --> 1234
    // "605"  --> 605
    // "1405" --> 1405
    // "-7" --> -7

//Parameters: Given a string of numbers.
//Results: Return the given string parameter as a number value.
//Examples:
    // Test.assertEquals(stringToNumber("1234"),1234)
    // Test.assertEquals(stringToNumber("605"), 605)
    // Test.assertEquals(stringToNumber("1405"),1405)
    // Test.assertEquals(stringToNumber("-7"),  -7)
//Pseudocode: 
    //1. Use the parseInt function to parse.
//Time Complexity: Linear based on length of the string.

const stringToNumber = function(str){
    return parseInt(str)
}