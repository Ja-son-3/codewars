// Get ASCII value of a character.

// For the ASCII table you can refer to http://www.asciitable.com/

//Parameters: Given a single character string parameter
//Results: Return the ascii value of the given string character.
//Examples:
    // Test.assertEquals(getASCII('A'),65)
    // Test.assertEquals(getASCII(' '),32)
    // Test.assertEquals(getASCII('!'),33)
//Pseudocode: 
    //1. Use the charCodeAt method on the given string at the index of 0 and return the value.
//Time Complexity: Constant or O(1)

function getASCII(c){
    return c.charCodeAt(0)
}