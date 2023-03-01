// Write a function which converts the input string to uppercase.

//Parameters: Given a string parameter
//Results: Return the given string, but capitalized all the characters.
//Examples:
    // assert.strictEqual(makeUpperCase(""),           "");
    // assert.strictEqual(makeUpperCase("hello"), "HELLO");
    // assert.strictEqual(makeUpperCase("Hello"), "HELLO");
    // assert.strictEqual(makeUpperCase("HELLO"), "HELLO");
//Pseudocode: 
    //1. Use to toUpperCase() method on the given string and return it.
//Time Complexity: Constant or 0(1)

function makeUpperCase(str) {
    return str.toUpperCase()
}