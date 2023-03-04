// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:
    // isDigit("3")
    // isDigit("  3  ")
    // isDigit("-3.23")

// should return false:
    // isDigit("3-4")
    // isDigit("  3   5")
    // isDigit("3 5")
    // isDigit("zero")

//Parameters: Given a string that can contain whitespaces, letters, special characters or numbers.
//Results: Return a boolean value indicating whether the given parameter is a valid single integer or a floating number. Otherwise return false.
//Examples:
    // var input = "s2324";
    // Test.assertEquals(isDigit(input), false);
    // input = "-234.4";    
    // Test.assertEquals(isDigit(input), true);  
//Pseudocode: 
    //1. Compare the given parameter with the comparison operator to the given parameter with the parseFloat method to see if the values are equal. If so return true.
    //2. Otherwise return false.
//Time Complexity: Constant or O(1)

function isDigit(s) {
    return s == parseFloat(s)
}