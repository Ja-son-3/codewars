// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
    // [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
    // [68, -1, 1, -7, 10, 10] => [-1, 10]
    // [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

//Parameters: Given an array parameter of integers
//Results: Return an array with only elements from the given array that are divisible by their index.
//Examples:
    // assert.deepEqual(multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25]);
    // assert.deepEqual(multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10]);
    // assert.deepEqual(multipleOfIndex([11, -11]), [-11]);
    // assert.deepEqual(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]), [-85, 72, 0, 68]);
    // assert.deepEqual(multipleOfIndex([28,38,-44,-99,-13,-54,77,-51]), [38, -44, -99]);
    // assert.deepEqual(multipleOfIndex([-1,-49,-1,67,8,-60,39,35]), [-49, 8, -60, 35]);
//Pseudocode: 
    //1. Create a new empty array to be returned as the result 
    //2. Use a for loop to iterate over each element in the given array.
    //3. With each iteration of the given array, check if the current element is divisible by their index. 
    //4. If divisible, use the array push method to add the value to the newly created array.
    //5. Return the new array.
//Time Complexity: O(n) or Linear, depending on the length of the given array.

function multipleOfIndex(array) {
    let arr = []
    for (let i=0;i<=array.length;i++) {
      if (array[i] % i === 0) {
        arr.push(array[i])
      }
    }
    return arr
}