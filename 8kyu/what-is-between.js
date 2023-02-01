// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

//Parameters: Given two integers that can be negative, zero or positive.
//Results: Return a array of all integers between the input parameters, including the given parameters.
//Examples:
    // it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
    // it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
//Pseudocode: 
    //1. create an empty array variable.
    //2. create a for loop that loops over the range of a to b including a and b.
    //3. with each loop push the current value to the new array
    //4. return the array

function between(a, b) {
    let arr = []
    for (i=a;i<=b;i++) {
        arr.push(i)
    }
    return arr
}