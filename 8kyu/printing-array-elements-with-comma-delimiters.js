// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

//Parameters: Given an array of strings
//Results: Return a string with a comma between each array element from the given array.
//Examples:
    // Test.expect( printArray( data ) ==
    //   "2,4,5,2", "int test failed" )
//Pseudocode: 
    //1. Use the array join method to combine all elements in the array with a comma delimiter to put a comma between each element. 
    //2. Return the new string.
//Time Complexity: O(n) or Linear, depending on the length of the given array.

function printArray(array){
    return array.join(',')
}