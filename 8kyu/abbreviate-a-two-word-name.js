// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:
    // Sam Harris => S.H
    // patrick feeney => P.F

//Parameters: Given a string parameter representing a person's full name.
//Results: Given a string containing the full name of a person, return the initials capitalized with a period inbetween the first and last initials.
//Examples:
    // assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    // assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    // assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    // assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    // assert.strictEqual(abbrevName("David Mendieta"), "D.M");
//Pseudocode: 
    //1. Convert the given string parameter into a array of strings by using the split() to split the string by a whitespace or ' '
    //2. Return the initials with a period inbetween using a template literal. Using string interpolation we can return the first name by using new variable to the index of 0 and selecting the first character of that string by selecting the index of 0.
    //3. Repeat at index of 1 in the array to get the last name and return the first letter by selecting the index of 0.
    //4. Use toUpperCase() string method to capitalize the first and last intials.
    //4. Input a period between the two string interpolation and return the result.
//Time Complexity: Constant or 0(1) in this scenario as split will always result in two array elements. and outputting the character at a specific index is the same calucation regardless of length.

function abbrevName(name){
    let splitName = name.split(' ')
    return `${splitName[0][0].toUpperCase()}.${splitName[1][0].toUpperCase()}`
}