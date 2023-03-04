// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

//Parameters: Given a string parameter.
//Results: Return whether the given string contains the string of english within it.
//Examples:
    // Test.assertEquals(spEng("english"), true);
    // Test.assertEquals(spEng("egnlish"), false);
//Pseudocode: 
    //1. Convert the given string to lowercase by using the lowercase string method.
    //2. Use the include method to check whether anywhere in the string there is the string of english and return the result.
//Time Complexity: O(n) or Linear, because includes is a time complexity of linear

function spEng(sentence){
    return sentence.toLowerCase().includes("english")
}