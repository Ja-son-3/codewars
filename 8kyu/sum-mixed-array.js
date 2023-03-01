// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//Parameters: Given an array of numbers that are in number form or string form.
//Results: Convert all strings to numbers and return the sum of all elements in the given array.
//Examples:
    // assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
    // assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
    // assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
//Pseudocode: 
    //1. Using the Number function or the unary operator of + to convert all the elements in the given array by iterating through the Map array Method.
    //2. Use the reduce array method to add up all the elements of the array together and return it's sum.
//Time Complexity: Linear or O(n), depending on the length of the given array.

function sumMix(x){
    return x.map(num => +num).reduce((a,c) => a+c,0)
  }