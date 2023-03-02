// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
    // * [1, 2, 3, 4]  -> [4, 3, 2, 1]
    // * [9, 2, 0, 7]  -> [7, 0, 2, 9]

//Parameters: Given an array of numbers
//Results: Return the given array in reverse order.
//Examples:
    // Test.assertSimilar(reverseList([1,2,3,4]), [4,3,2,1]);
    // Test.assertSimilar(reverseList([3,1,5,4]), [4,5,1,3]);
//Pseudocode: 
    //1. Use the reverse array method to reverse the order of the array and return the result.
//Time Complexity: O(n) or Linear, depending on the length of the given array.

function reverseList(list) {
    return list.reverse()
}