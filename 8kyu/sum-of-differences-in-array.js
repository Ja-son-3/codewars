// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
    // [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

//Parameters: Given an array of intgers.
//Results: Return a number, representing the sum of differences from the given array in descending order from one element to the previous.
//Examples:
//   it("sumOfDifferences([1, 2, 10]", function() {
//     assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
//   });

//   it("sumOfDifferences([-3, -2, -1])", function() {
//     assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);
//Pseudocode: 
    //1. Use the array sort method to sort the numbers in the given array in descending order.
    //2. Create a new sum variable to return the result.
    //3. Create a for loop to iterate through the given array and with each iteration add the difference between the current indexed element and it's previous to the newly created sum variable.
    //4. Return the sum variable.
//Time Complexity: O(n) or Linear, depending on the amount of elements in the given array.

function sumOfDifferences(arr) {
    arr.sort((a,b) => b-a)
    let sum = 0
    for (let i=1;i<=arr.length-1;i++) {
      sum += Math.abs(arr[i] - arr[i-1])
    }
    return sum
}