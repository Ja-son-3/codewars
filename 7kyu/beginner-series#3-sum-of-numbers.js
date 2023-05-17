// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
    // (1, 0) --> 1 (1 + 0 = 1)
    // (1, 2) --> 3 (1 + 2 = 3)
    // (0, 1) --> 1 (0 + 1 = 1)
    // (1, 1) --> 1 (1 since both are same)
    // (-1, 0) --> -1 (-1 + 0 = -1)
    // (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

//Parameters: Given two integer numbers as parameters.
//Results: Return the value of the sum of values between the lower parameter and the higher parameter in increments of one. If both parameters are the same return either.
//Examples:
    // assert.strictEqual(getSum(0,-1), -1);
    // assert.strictEqual(getSum(0, 1),  1);
    // assert.strictEqual(getSum(2, 2),  2);
//Pseudocode: 
    //1. create a number variable to contain the sum to be returned.
    //2. Create an if statement to check if the given parameters are the same value, if so return one of the given parameters.
    //3. Create an if statement to check which of the given parameters is of lower value.
    //4. Create a for loop that starts at the lower parameter, increasing at increments of one until it reaches the higher parameter.
    //5. With each iteration of the loop add the current value to the created sum value.
    //6. Return the sum value.
//Time Complexity: O(n) or Linear, depending on the difference between the two given numbers.

function getSum(a, b){
    let total = 0
     if (a === b){
       return a
     } else if ( a > b) {
       for (let i=b;i<=a;i++){
         total += i
       }
     } else {
       for (let i=a;i<=b;i++){
         total += i
       }
     }
    return total
}