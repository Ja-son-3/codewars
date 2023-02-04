// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

//Parameters: Always given a string
//Results: Remove an exclamation point at the end of the string if there is one and return it
//Examples:
    // remove("Hi!") == "Hi"
    // remove("Hi!!!") == "Hi!!"
    // remove("!Hi") == "!Hi"
    // remove("!Hi!") == "!Hi"
    // remove("Hi! Hi!") == "Hi! Hi"
    // remove("Hi") == "Hi"
//Pseudocode: 
    //1. Create an if statement that checks the last character in the string to see if it is an exclamation point.
    //2. If the last character is ane exclamation point, remove it.
    //3. Return the string

function remove (string) {
    if (string[string.length-1] === '!') {
        return string.slice(0, string.length - 1)
    } else {
        return string
    }
}