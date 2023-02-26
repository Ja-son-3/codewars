// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
    // "Robin Singh" ==> ["Robin", "Singh"]
    // "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//Parameters: Given a string.
//Results: Return an array with each word as an element in the array.
//Examples:
    // assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
    // assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
//Pseudocode: 
    //1. Use a string split method to convert a string into an array. Using whitespaces as a seperator for each word of the array.
    //2. Return the new array of words.
//Time Complexity: Linear or 0(n), depending on the amount of words in the given string parameter.

function stringToArray(string){
    return string.split(' ')
}