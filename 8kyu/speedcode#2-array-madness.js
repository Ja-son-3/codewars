// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.
    // arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

// Get your timer out. Are you ready? Ready, get set, GO!!!

//Parameters: Given two arrays containing numbers.
//Results: Return a value of true if the sum of squared values of the first array are greater than the sum of cubed values of second array. Otherwise return false.
//Examples:
    // Test.assertEquals(arrayMadness([4,5,6],[1,2,3]), true);
    // Test.assertEquals(arrayMadness([5,6,7],[4,5,6]), false);
    // Test.assertEquals(arrayMadness([4,5,6],[3,4,5]), false);
    // Test.assertEquals(arrayMadness([3,4,5],[2,3,4]), false);
    // Test.assertEquals(arrayMadness([2,3,4],[1,2,3]), false);
    // Test.assertEquals(arrayMadness([1,2,3],[0,1,2]), true);
    // Test.assertEquals(arrayMadness([5,3,2,4,1],[15]), false);
    // Test.assertEquals(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
    // Test.assertEquals(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
    // Test.assertEquals(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
    // Test.assertEquals(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);
//Pseudocode: 
    //1. Use the reduce method over the first given array to find the sum of each squared value added together.
    //2. Use the reduce method over the second given array to find the sum of each cubed value added together.
    //3. Use an if statement to check if the sumed value of array a is greater than array b. If so, return a value of true, otherwise return a value of false.
//Time Complexity: O(n) or linear, depending on the size of the given arrays

function arrayMadness(a, b) {
    return a.reduce((a,c) => a + c**2,0) > b.reduce((a,c) => a + c**3,0)
}