// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
    // invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
    // invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
    // invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list. of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//Parameters: Given an array of numbers that can be 0, negative or positive.
//Results: Return the inverse value for each item in the given array parameter.
//Examples:
    // assert.deepEqual(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
    // assert.deepEqual(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
    // assert.deepEqual(invert([]), []);
    // assert.deepEqual(invert([0]), [-0]);
//Pseudocode: 
    //1. Use the array map method to apply the unary negation operator to all the elements in the given array, returning it's inverse value.
//Time Complexity: linear or O(n) depending on the length of the given array.

function invert(array) {
    return array.map(e => -e)
}