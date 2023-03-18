// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
    // * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

//Parameters: Given two parameters that can be zero or an array of numbers.
//Results: Return the two arrays back as one with all duplicates removed. If zero or empty arrays are given, return an empty array.
//Examples:
    // assert.deepEqual(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8], "Basic tests");
    // assert.deepEqual(mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10], "Basic tests");
    // assert.deepEqual(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12], "Basic tests");
//Pseudocode: 
    //1. Create a new empty array to contain the return result.
    //2. Use a for loop to check if each element in the given array 1 is a number type, if so push it to the new empty array.
    //3. Create a for loop over the arr2 parameter, checking if each element is a number and if there is already a duplicate in array variable.
    //4. Use the sort comparison method to sort numbers ascending in the array variable and return the result.
//Time Complexity:

function mergeArrays(arr1, arr2) {
    let arr = []
    for (let i=0;i<=arr1.length;i++) {
        if (typeof (arr1[i]) === 'number') {
            arr.push(arr1[i])
        }
    }
    for (let i=0;i<=arr2.length;i++) {
      if (!arr.includes(arr2[i]) && typeof (arr2[i]) === 'number') {
          arr.push(arr2[i])
      }
    }
    return arr.sort(function(a, b){return a-b})
}