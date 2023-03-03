// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false. 

//Parameters: Given an array parameter and a number parameter
//Results: If the given number parameter is in the given array parameter, return true. Otherwise return false
//Examples:
    // assert.strictEqual(include([1,2,3,4], 3), true )
    // assert.strictEqual(include([1,2,4,5], 3), false)
    // assert.strictEqual(include([], 3),        false)
//Pseudocode: 
    //1. Use an if statement to check if item is in the given array using the includes method. If this is true, return a value of true.
    //2. Otherwise return a value of false
//Time Complexity: Constant or O(1)

function include(arr, item){
    if (arr.includes(item)) {
      return true
    }
    return false
}