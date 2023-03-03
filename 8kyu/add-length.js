// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)
    // "apple ban" --> ["apple 5", "ban 3"]
    // "you will win" -->["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

//Parameters: Given a string parameter.
//Results: Return an array with each word being it's own element in the given parameter with the number included at the end of each element, indicating the length or character amount of the word.
//Examples:
    // it(`Testing for "you will win"`, () => assert.deepEqual(addLength('you will win'),["you 3", "will 4", "win 3"]));
//Pseudocode: 
    //1. Use the string split method to create an array, where each element is a word from the string.
    //2. Use the map method to return a new array adding the length or character length of each element in the array and return the result.
//Time Complexity: O(n) or Linear, depending on the amount of words in the given string.

function addLength(str) {
    return str.split(' ').map(e => e = `${e} ${e.length}`)
}