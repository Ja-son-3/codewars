// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
    // n = 0  ==> [1]        # [2^0]
    // n = 1  ==> [1, 2]     # [2^0, 2^1]
    // n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//Parameters: Given a integer parameter.
//Results: Return an array with each element starting at a base of 2 to the power of 0, with the power incrementing up to n, the integer parameter.
//Examples:
    // assert.deepEqual(powersOfTwo(0), [1])
    // assert.deepEqual(powersOfTwo(1), [1, 2])
    // assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])
//Pseudocode: 
    //1. Create an arr variable to be returned as the result. 
    //2. Create a for loop that will iterate n times.
    //3. With each iteration of the for loop push 2 to the power of the current loop, starting at a value of 0 to the array.
    //4. Return the array.
//Time Complexity: Linear or 0(n), depending on the n parameter.

function powersOfTwo(n){
    let arr = []
    for (let i=0;i <= n;i++) {
        arr.push(2**i)
    }
    return arr
}