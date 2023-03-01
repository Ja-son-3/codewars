// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
    // countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
    // countBy(2,5) === [2,4,6,8,10]

//Parameters: Given two integer parameters, the first representing the starting point and the increments to count by and the second representing the amount of times to count up by.
//Results: Return an a array starting at x and incrementing by x, n number of times.
//Examples:
    // assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
    // assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")
//Pseudocode: 
    //1. Create a new empty array to be returned as the result.
    //2. Use a for loop that will loop n times and with each iteration using the push method to add an element of i*x to the new array.
    //3. Return the array variable
//Time Complexity: Linear or O(n), depending on the n parameter.

function countBy(x, n) {
    let arr = []
    for (i=1;i <= n;i++) {
        arr.push(i*x)
    }
    return arr
}