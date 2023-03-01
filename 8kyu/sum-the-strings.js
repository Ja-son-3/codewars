// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)
    // "4",  "5" --> "9"
    // "34", "5" --> "39"
    // "", "" --> "0"
    // "2", "" --> "2"
    // "-5", "3" --> "-2"

// Notes:
    // If either input is an empty string, consider it as zero.
    // Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

//Parameters: given two string's containing numbers
//Results: Return the number sum of the given two parameters as a string
//Examples:
    // assert.strictEqual(sumStr("4","5"), "9");
    // assert.strictEqual(sumStr("34","5"), "39");
//Pseudocode: 
    //1. Use the unary plus operator to convert each into string into an integer value and add the value's together to compute the sum.
    //2. Use the toString method on the resulting sum to convert it back into a string and return the result.
//Time Complexity: constant or O(1)

function sumStr(a,b) {
    return (+a + +b).toString()
}