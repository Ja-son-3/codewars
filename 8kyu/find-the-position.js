// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

//Parameters: Given a string parameter, representing a letter in the english alphabet in lowercase
//Results: Return a string indicating the position in the alphabet the given string letter is at.
//Examples:
    // Test.assertEquals(position("a"),"Position of alphabet: 1");
    // Test.assertEquals(position("z"),"Position of alphabet: 26");
    // Test.assertEquals(position("e"),"Position of alphabet: 5");
//Pseudocode: 
    //1. Use a template literal to return a string.
    //2. Use string interpolation in the template literal together with the charCodeAt method to get the character code of the given letter parameter. The alphabet starts at 97, so subtracting 96 from the character code will return the position of the given letter parameter in the alphabet.
//Time Complexity: O(1) or constant

function position(letter){
    return `Position of alphabet: ${letter.charCodeAt() - 96}`
}