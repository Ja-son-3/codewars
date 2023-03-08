// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)
    // "Yes" --> "Yes?" 
    // "No?" --> "No?"

//Parameters: Given a string parameter.
//Results: Check if the given string parameter ends with a question mark, if not append it and return it. If it already has an question mark return the given string.
//Examples:
    // assert.strictEqual(ensureQuestion(""),"?","Expected: '?'");
    // assert.strictEqual(ensureQuestion("Yes"),"Yes?","Expected: '?'");
    // assert.strictEqual(ensureQuestion("No?"),"No?","Expected: '?'");
//Pseudocode: 
    //1. Create an if statement to check if the last character in the given string is a question mark by returning the index of length - 1.
    //2. If true, simply return the string.
    //3. If false, return the given string and concatenate a question mark string.
//Time Complexity: Constant or O(1)

function ensureQuestion(s) {
    if (s[s.length-1] === '?') return s
    return s + '?'
}