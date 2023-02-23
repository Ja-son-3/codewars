// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):
    // 2 -> 3 (1 + 2)
    // 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

//Parameters: Given a positive integer greater than 0
//Results: Return the sum of every number from 1 to the given parameter num
//Examples:
    // assert.strictEqual(summation(1),  1);
    // assert.strictEqual(summation(2),  3);
    // assert.strictEqual(summation(8), 36);
//Pseudocode: 
    //1. create a variable of zero to hold the sum value.
    //2. Use a for loop, looping until num times, with each iteration adding the value of i to the new sum variable.
    //3. Return the sum value
    // OR
    //1. Use Gauss sum equation of (n*(n+1))/2 to get the sum of numbers counting from 1 to that number.
//Time Complexity: Linear or constant using Gauss sum.

const summation = n => (n*(n+1))/2;

// var summation = function (num) {
//     sum = 0
//     for (let i= 1; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }