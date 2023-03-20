// Task
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
    // all((1, 2, 3, 4, 5), greater_than_9) -> false
    // all((1, 2, 3, 4, 5), less_than_9)    -> True

//Parameters: Given an empty array or array or integers and a function.
//Results: Iterate over every element in the given array and apply it's value as a parameter in the given function. Return true if each iteration in the function returns true. Otherwise return false. In the given array is empty, return true.
//Examples:
    // Test.assertEquals(all([1,2,3,4,5], function(v){return v<9}), true)
    // Test.assertEquals(all([1,2,3,4,5], function(v){return v>9}), false)
//Pseudocode: 
    //1. Create a for in loop that iterates over each item in the given array.
    //2. With each iteration of the array apply it's current element as a parameter in the given function and return it's value.
    //3. If the value returns false, return false for the all function.
    //4. If all iterations return true or if the given array is empty, return a value of true.
//Time Complexity: O(n) or Linear

function all( arr, fun ){
    for (const item in arr) {
      if (!fun(arr[item])) {
        return false
      }
    }
    return true
}