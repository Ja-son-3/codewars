// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
    // remove("Hi!") === "Hi"
    // remove("Hi!!!") === "Hi"
    // remove("!Hi") === "!Hi"
    // remove("!Hi!") === "!Hi"
    // remove("Hi! Hi!") === "Hi! Hi"
    // remove("Hi") === "Hi"

//Parameters: Given a string parameter.
//Results: Remove all exclamation points at the end of the given parameter and return the string.
//Examples:
    // doTest("Hi!", "Hi")
    // doTest("Hi!!!", "Hi")
    // doTest("!Hi", "!Hi")
    // doTest("!Hi!", "!Hi")
    // doTest("Hi! Hi!", "Hi! Hi")
    // doTest("Hi", "Hi")
//Pseudocode: 
    //1. Create a while loop that checks and continues until the last character of the given string is not an exclamation point.
    //2. With each iteration use the slice method and set the string equal to all characters, except the last character.
    //3. Return the string.
//Time Complexity: O(n) or Linear, depending on the number of exclamation points at the end of the given string.

function remove (string) {  
    while (string.charAt(string.length-1) === "!") {
        string = string.slice(0,string.length-1)
    }
    return string
}