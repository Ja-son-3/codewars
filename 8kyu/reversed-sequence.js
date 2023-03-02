// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//Parameters: Given a number parameter.
//Results: Return an array decrementing by 1 from the given parameter down to 1.
//Examples:
    // assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
//Pseudocode: 
    //1. Create a new array to contain the result.
    //2. Use a decrementing for loop to zero that pushes its current value starting from the given n parameter.
    //3. Return the result array.
//Time Complexity: linear or O(n), depending on how high of a value the given parameter is.

const reverseSeq = n => {
    let arr = []
    for (let i = n; i > 0; i--) {
      arr.push(i)
    }
    return arr
}