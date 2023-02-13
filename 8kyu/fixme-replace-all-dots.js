// The code provided is supposed replace all the dots . in the specified String str with dashes -
// But it's not working properly.

// Task
    // Fix the bug so we can all go home early.

// Notes
    // String str will never be null.

//Parameters: Given a string with periods. String will also never be null
//Results: Return the string after replacing all periods with hyphens.
//Examples:
    // Test.assertEquals(replaceDots("one.two.three"), "one-two-three", "Sorry, try again :-(");
//Pseudocode: 
    //1. Replace the slashes with '
    //2. Turn the replace method to a replaceAll method to iterate throughout the whole string without stopping after replacing the first one.
    //3. Return the new string

var replaceDots = function(str) {
    return str.replaceAll('.', '-');
}