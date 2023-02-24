// Given an array of integers your solution should find the smallest integer.

// For example:
    // Given [34, 15, 88, 2] your solution will return 2
    // Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//Parameters: Given a non empty array of numbers
//Results: Return the smallest value in the given array parameter
//Examples:
    // assert.strictEqual(repeatStr(3, "*"), "***");
    // assert.strictEqual(repeatStr(5, "#"), "#####");
    // assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
//Pseudocode: 
    //1. Using the Math.min method over the to return the small value of the array.
        //Note Math.min(args) would return NaN as Math.min expects distinct variables, not an array. We can get around this by destructuring the array with ... to convert the array items to distinct variables.
        // nums = [1,2,3]
        // Math.min(nums) = Math.min([1,2,3]) = NaN
        // Math.min(...nums) = Math.min(1,2,3) = 1

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}