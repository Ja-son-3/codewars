// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

//Parameters: Given an array of numbers.
//Results: Return the given array of numbers with duplicates removed.
//Examples:
    // assert.deepEqual(distinct([1]), [1]);
    // assert.deepEqual(distinct([1,2]), [1,2]);
    // assert.deepEqual(distinct([1,1,2]), [1,2]);
//Pseudocode: 
    //1. Create a new empty array to be returned as the result.
    //2. Create a for loop, iterating over each element in the given array.
    //3. Check if the current iterated element is in the new array variable. If not push it's value into the array.
    //4. Return the new array.
//Time Complexity: O(n) or Linear, depending on the length of the given array.

function distinct(a) {
    let arr = []
    for (let i=0;i<a.length;i++) {
        if (!arr.includes(a[i])) {
            arr.push(a[i])
        }
    }
    return arr
}