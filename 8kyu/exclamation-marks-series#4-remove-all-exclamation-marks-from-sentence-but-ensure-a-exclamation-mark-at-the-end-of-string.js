// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
    // remove("Hi!") === "Hi!"
    // remove("Hi!!!") === "Hi!"
    // remove("!Hi") === "Hi!"
    // remove("!Hi!") === "Hi!"
    // remove("Hi! Hi!") === "Hi Hi!"
    // remove("Hi") === "Hi!"

//Parameters: Given a string parameter.
//Results: Return the given string parameter with all exclamation marks removed, but add an exclamation mark at the end of the string.
//Examples:
    // doTest("Hi!", "Hi!");
    // doTest("Hi!!!", "Hi!");
    // doTest("!Hi", "Hi!");
    // doTest("!Hi!", "Hi!");
    // doTest("Hi! Hi!", "Hi Hi!");
    // doTest("Hi", "Hi!");
//Pseudocode: 
    //1. Use the replaceAll method to replace all exclamation marks with an empty string.
    //2. Concatenate a exclamation mark as a string and return the result.
//Time Complexity: O(n) or Linear), depending on the length of the given string.

function remove (string) {
    return string.replaceAll('!','') + "!";  
}