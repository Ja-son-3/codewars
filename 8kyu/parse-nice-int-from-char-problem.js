// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

//Parameters: Given a string indicating the age of the small girl.
//Results: Return only the number variable indicating the age of the small girl.
//Examples:
    // assert.strictEqual(getAge("4 years old"), 4);
//Pseudocode: 
    //1. Get the character at index 0 of the string by using the givenstring with an index or [0].
    //2. Use a unary plus operator to convert the string into a number and return the result.
//Time Complexity: constant or 0(1)

function getAge(inputString){
    return +inputString[0]
}