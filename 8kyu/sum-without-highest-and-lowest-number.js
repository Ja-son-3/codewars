// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
    // { 6, 2, 1, 8, 10 } => 16
    // { 1, 1, 11, 2, 3 } => 6

// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

//Parameters: Given an array of integers.
//Results: Return the sum of values in the given array without the max and min values.
//Examples:
    // assert.strictEqual( sumArray(null)                     , 0 );
    // assert.strictEqual( sumArray([ ])                      , 0 );
    // assert.strictEqual( sumArray([ 3 ])                    , 0 );
    // assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
    // assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
    // assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
    // assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
    // assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
//Pseudocode: 
    //1. Create an if statement to check if the array parameter is null, if so return 0.
    //2. Use the sort method with a comparison function in order to sort the given array parameter.
    //3. Once sorted remove the first and last elements by using a slice method starting at the index of 1 and ending at the index of the given array's length minus 1.
    //4. Sum up the remaining elements in the array and return the result.
//Time Complexity: Linear or O(n), depending on the length of the array.

function sumArray(array) {
  if (array == 0 || array == null) {
    return 0
  }
  return array.sort(function(a,b){return a-b}).slice(1,array.length-1).reduce((a,c) => a+c,0)
}