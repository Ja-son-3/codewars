// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

// Note: The parameter is optional. So you have to give it a default value.

//Parameters: Given either no parameter or a number
//Results: Return an array counter up to the given parameter minus one
//Examples:
    // it('should return an array',() => assert.isArray(arr()));
    // it('should return a blank array when called with no argument', () => assert.sameMembers(arr(), []));
    // it('should return 0 to 3 when called with 4', () => assert.sameMembers(arr(4), [0,1,2,3]));
//Pseudocode: 
    //1. Create an empty array variable
    //2. Create a loop counting up to the given parameter from zero minus one
    //3. Push each iteration of the current count to the array variable
    //4. Return the array variable

const arr = N => {
    let arr = []
    for (let i=0;i<N;i++) {
        arr.push(i)
    }
    return arr
}