// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//Parameters: Given a string parameter
//Results: Return the given string parameter with all exclamation marks removed.
//Examples:
    // assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
//Pseudocode: 
    //1. Use the string replaceAll method to replace all exclamation points with an empty string.
    //2. Return the new string.
//Time Complexity: Linear or 0(n), depending on the length of the given string.

function removeExclamationMarks(s) {
    return s.replaceAll('!','')
}