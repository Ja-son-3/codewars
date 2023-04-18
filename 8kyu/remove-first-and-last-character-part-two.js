// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
    // "1,2,3"      =>  "2"
    // "1,2,3,4"    =>  "2 3"
    // "1,2,3,4,5"  =>  "2 3 4"

    // ""     =>  NULL
    // "1"    =>  NULL
    // "1,2"  =>  NULL

//Parameters: Given a string parameter with words or letters seperated by commas
//Results: Return a string with all the words and commas from the given string, except the first and last set of letters or numbers and with whitespace between them instead of commas.
//Examples:
    //   it("Should remove the first and last character", () => {
    //     assert.strictEqual(array('1,2,3'), '2');
    //     assert.strictEqual(array('1,2,3,4'), '2 3');
    //     assert.strictEqual(array('1,2,3,4,5'), '2 3 4');
    //   })
    //   it("Should return null if the final result is an empty string", () => {
    //     assert.strictEqual(array(''), null);
    //     assert.strictEqual(array('1'), null);
    //     assert.strictEqual(array('1,2'), null);
//Pseudocode: 
    //1. Use the split method with the comma being the seperator to convert the given string into an array of elements.
    //2. Check if the given string has less than 3 elements, if so retuen a value of null because there can be no values inbetween.
    //3. Use the slice method to return a string starting at the second index and ending at the next to last.
    //4. Use the join method on the new array with a whitespace seperator and return the string.
//Time Complexity: Linear or O(n), depending on the amount of letters and number sets in the given string.

function array(arr){
    arr = arr.split(',')
    if (arr.length < 3) {
        return null
    }
    arr = arr.slice(1,arr.length-1)
  arr = arr.join(' ')
  return arr
}