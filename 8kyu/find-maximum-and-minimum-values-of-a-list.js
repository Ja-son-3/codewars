// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
    // * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
    // * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
    // * [42, 54, 65, 87, 0]             -> min = 0, max = 87
    // * [5]                             -> min = 5, max = 5

// Notes
    // You may consider that there will not be any empty arrays/vectors.

//Parameters: Given an array of integers.
//Results: Create two functions. One that returns the min value of the given array and one that returns the max value of the given array.
//Examples:
    // Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    // Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
    // Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
    // Test.assertEquals(max([5]), 5); 
//Pseudocode: 
    //1. Create the min function by using the Math.min static method. Use the ... spread syntax as the method does not take arrays as inputs
    //2. Create the min function by using the Math.min static method. Use the ... spread syntax as the method does not take arrays as inputs
    //3. Alternatively the syntax would have to be inputted individually and look like 
        // nums = [1,6,2,-78,234] 
        // Math.min(...nums) = is equivalent to Math.min(1,6,2,-78,234)
        // Math.min(nums) would return NaN
//Time Complexity: linear or O(n), depending on the length of the given array.

var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    return Math.max(...list)
}