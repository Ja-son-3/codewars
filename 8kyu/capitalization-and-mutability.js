// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

//Parameters: Given a single word string.
//Results: Return the single word string with the first character capitalized.
//Examples:
    // Test.assertSimilar(capitalizeWord('word'), 'Word');
    // Test.assertSimilar(capitalizeWord('i'), 'I');
    // Test.assertSimilar(capitalizeWord('glasswear'), 'Glasswear');
//Pseudocode: 
    //1. Because JS strings are immutable. the toUpperCase method does not affect the original string.
    //2. Return the index of 0 or the first character of the given string capitalized concatenated with the value of the first of the string by using the slice method starting at index of 1.
//Time Complexity: O(1) or Constant as the slice method on a string as it is stored already as a reference.

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1)
}