// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
    // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//Parameters: Given an array of integers.
//Results: Return an array of two values, the first being the count of positive numbers in the array and the second the sum of negative numbers in the given array.
//Examples:
    // let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
        // let expected = [10, -65];
    // let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
        // let expected = [8, -50];    
//Pseudocode: 
    //1. Create two new variables, one representing the count of positive numbers in the given array and one representing the sum of negative numbers in the given array.
    //2. Use an if statement to check if the given parameter is an empty array, if so return an empty array.
    //3. Create a for loop to iterate over each item in the given array parameter.
    //4. For each element in the array that is positive, add 1 to the positive counter variable.
    //5. For each element in the array that is negative, add it's value to the variable representing the sum of negative numbers.
    //6. Create an if statement to check whether both variables are equal to zero. If so return an empty array.
    //7. If either variable is not empty, return an array where the positive integer count is at the index of 0 and negative sum variable is at the index of 1.
//Time Complexity: linear or O(n)

function countPositivesSumNegatives(input) {
    let positiveCount = 0
    let negativeSum = 0
    if (!input) {
        return []
    }
    for (i=0;i <= input.length;i++) {
        if (input[i] > 0) {
            positiveCount++
        } else if (input[i] < 0) {
            negativeSum += input[i]
        }
    }
    if (positiveCount === 0 && negativeSum === 0) {
        return []
    } else {
        return [positiveCount, negativeSum]
    }
}