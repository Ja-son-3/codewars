// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//Parameters: Given a boolean value or true or false.
//Results: If given a boolean value of true, return 'Yes'. If given a boolean value of false, return 'No'
//Examples:
    // assert.strictEqual(boolToWord(true), 'Yes')
    // assert.strictEqual(boolToWord(false), 'No')
//Pseudocode: 
    //1. Use an in statement to check the given boolean value.
    //2. If the value is true, return a string of Yes
    //3. If the value is false, return a string of No

function boolToWord( bool ){
    if (bool === true) {
        return 'Yes'
    } else {
        return 'No'
    }
}