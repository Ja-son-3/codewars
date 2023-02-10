// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

//Parameters: Given a list or array and a number
//Results: Return the given array or list to the nth parameter given
//Examples:
    // Test.assertDeepEquals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");
//Pseudocode: 
    //1. Use the slice array method to return a new array starting at the index of 0 and ending at n, but not including it.
    //2. Return the new array

function take(arr, n) {
    return arr.slice(0,n)
}