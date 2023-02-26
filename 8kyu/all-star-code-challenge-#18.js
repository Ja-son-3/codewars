// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.
    // ("Hello", "o")  ==>  1
    // ("Hello", "l")  ==>  2
    // ("", "z")       ==>  0
    // str_count("Hello", 'o'); // returns 1
    // str_count("Hello", 'l'); // returns 2
    // str_count("", 'z'); // returns 0
// Notes
    // The first argument can be an empty string
    // In languages with no distinct character data type, the second argument will be a string of length 1

//Parameters: Given two string parameter's one representing an empty string or string of letters and a single letter string, respectively.
//Results: Return a integer value representing the amount of times the letter parameter appears in the string parameter.
//Examples:
    // assert.strictEqual(strCount('Hello', 'o'), 1);
    // assert.strictEqual(strCount('Hello', 'l'), 2);
    // assert.strictEqual(strCount('',      'z'), 0);
//Pseudocode: 
    //1. Use the split method to convert the given string parameter into an array of elements.
    //2. Use the filter method to return an array with only the letter of the letter parameter.
    //3. Use the length method to return the amount of that letter in the given string parameter and return the result.
//Time Complexity: Linear or 0(n), depending on the length of the given str parameter.

function strCount(str, letter){  
    return str.split('').filter(e => e === letter).length
}