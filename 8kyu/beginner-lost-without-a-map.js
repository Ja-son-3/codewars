// Given an array of integers, return a new array with each value doubled.

// For example:
    // [1, 2, 3] --> [2, 4, 6]

//Parameters: Given a number array.
//Results: Return the given array with each of it's elements doubled.
//Examples:
    // assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
    // assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
    // assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
//Pseudocode: 
    //1. Use the map method over the given array parameter, multiplying each array element by two.
//Time Complexity: linear or O(n) depending on the length of the array.

function maps(x){
    return x.map(x => x*2)
}