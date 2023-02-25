// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Assumptions
    // You can assume that you are only given numbers.
    // You cannot assume the size of the array.
    // You can assume that you do get an array and if the array is empty, return 0.

//Parameters: Given an array of numbers or no value.
//Results: Return the sum of the array. If there are no elements, return zero.
//Examples:
    // Test.assertEquals(sum([]), 0);
    // Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
//Pseudocode: 
    //1. Use the reduce method the sum the values of the given number array.
//Time Complexity: linear or 0(n) depending on the length of the given array parameter.

function sum (numbers) {
    return numbers.reduce((a, c) => a + c,0)
};