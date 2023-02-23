// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//Parameters: Given a boolean value or true or false.
//Results: If given a boolean value of true, return 'Yes'. If given a boolean value of false, return 'No'
//Examples:
    // assert.strictEqual(repeatStr(3, "*"), "***");
    // assert.strictEqual(repeatStr(5, "#"), "#####");
    // assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
//Pseudocode: 
    //1. Create a new variable to be the return string
    //2. Use a for loop to concat s string n times to the new variable.
    //3. Return the new string
    // OR
    //1. Use the repeat method to concat the s string together n times.

function repeatStr (n, s) {
    let string = ''
    for (i=1;i <= n;i++) {
        string += s
    }
    return string
}

function repeatStr (n, s) {
    return s.repeat(n)
}