// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
    // text before = "abc"
    // character   = "z"
    // text after  = "zzz"

//Parameters: Given two string parameters.
//Results: Return a string of char that has a length of text.
//Examples:
    // Test.assertEquals(contamination("abc","z"), "zzz")
    // Test.assertEquals(contamination("","z"), "")
    // Test.assertEquals(contamination("abc",""), "")
    // Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
    // Test.assertEquals(contamination("//case"," "), "      ")
//Pseudocode: 
    //1. Create a new empty string variable to contain the return string.
    //2. Create an if statement to check if text is an empty string using the length method. If true return an empty string.
    //3. Create a for loop that iterates length times of the given text.
    //4. With each iteration add the given char parameter to the created empty string.
    //5. Return the str variable.
//Time Complexity: O(n) or Linear.

function contamination(text, char){
    let str = ''
    if (length === 0) return ''
    for (let i=1;i<=text.length;i++) {
      str += char
    }
    return str
}