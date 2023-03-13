// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
    // [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//Parameters: Given an array of numbers and a number parameter, representing the divisor.
//Results: Return an array with the given parameters after filtering elements not divisble by the given divisor.
//Examples:
    // Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
    // Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
    // Test.assertDeepEquals(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
    // Test.assertDeepEquals(divisibleBy([0], 4), [0]);
    // Test.assertDeepEquals(divisibleBy([1,3,5], 2), []);
//Pseudocode: 
    //1. Use the filter method to check if each element in the given array is divisible by the given divisor parameter using the remainder operator and returning true if it is 0.
//Time Complexity: O(n) or Linear, depending on the length of the given array.

function divisibleBy(numbers, divisor){
    return numbers.filter(e => e % divisor === 0)
}