// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//Parameters: Given a string parameter containing only letters
//Results: Return the given string parameter withone the first and last characters.
//Examples:
    // assert.strictEqual(removeChar('eloquent'), 'loquen');
    // assert.strictEqual(removeChar('country'), 'ountr');
    // assert.strictEqual(removeChar('person'), 'erso');
    // assert.strictEqual(removeChar('place'), 'lac');
    // assert.strictEqual(removeChar('ooopsss'), 'oopss');
//Pseudocode: 
    //1. Use the string slice method to create a new string removing the first character at index 0, by inputting the first parameter value as one and removing the last character by setting the second parameter as the length of the str minus 1.
//Time Complexity: O(1) or constant

function removeChar(str){
    str.slice(1, str.length-2)
}