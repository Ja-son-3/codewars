// Time to test your basic knowledge in functions! Return the odds from a list:

    // [1, 2, 3, 4, 5]  -->  [1, 3, 5]
    // [2, 4, 6]        -->  []

//Parameters: Given an array of integers.
//Results: Return an array of only the odd numbers from the given array.
//Examples:
    // Test.assertSimilar(odds([]), [], "Should handle empty array");
    // Test.assertSimilar(odds([2, 4, 6]), [], "Should handle array with even numbers only");
    // Test.assertSimilar(odds([1, 3, 5]), [1, 3, 5], "Should handle array with odd numbers only");
    // Test.assertSimilar(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5], "Should handle mixed array");
//Pseudocode: 
    //1. Use the array filter method to keep only values that are odd by using the remainder operator.
//Time Complexity: O(n) or Linear

function odds(values){
    return values.filter(e => e % 2 === 1);
}