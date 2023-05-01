// Arrow style Functions
// Come here to practice the Arrow style functions Not much else to say good luck!
// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions 

//Parameters: Given an array of numbers, representing ascii characters in number form.
//Results: Return the given ascii values in number form as a single string.
//Examples:
    // Test.assertEquals(ArrowFunc([84,101,115,116]), 'Test', 'Convert those numbers to letters')
    // Test.assertEquals(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]), 'FUS ROH DAH', 'Keep it up!')
//Pseudocode: 
    //1. Map over the given array using the string.fromCharCode method on each element to convert all the given array numbers to ascii characters.
    //2. Use the join method to combine the elements into one string and return the result
//Time Complexity: O(n) or Linear, depending on the length of the given array.

var ArrowFunc = function(arr) {
    return arr.map(e => String.fromCharCode(e)).join(''); 
}