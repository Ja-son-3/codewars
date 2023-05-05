// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
    // [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// Notes
    // The input array will always contain only positive numbers, and will never be empty or null.

//Parameters: Given an array of numbers.
//Results: Return the given array of numbers, but square root all numbers where the result is an integer and square all other numbers.
//Examples:
    // it("basic tests", function(){
    //     var input = [ 4, 3, 9, 7, 2, 1 ];
    //     var expected = [ 2, 9, 3, 49, 4, 1 ];
    //     Test.assertSimilar(squareOrSquareRoot(input), expected);
        
    //     input = [ 100, 101, 5, 5, 1, 1 ];
    //     expected = [ 10, 10201, 25, 25, 1, 1 ];
    //     Test.assertSimilar(squareOrSquareRoot(input), expected);
        
    //     input = [ 1, 2, 3, 4, 5, 6 ];
    //     expected = [ 1, 4, 9, 2, 25, 36 ];
    //     Test.assertSimilar(squareOrSquareRoot(input), expected);
//Pseudocode: 
    //1. Create a for loop to iterate through the given number array.
    //2. Use an if statement to check if the square root of the current element in the array is an integer. If so square root the current element in the array.
    //3. Otherwise square the current element in the array.
    //4. Return the array.
//Time Complexity: O(n) or Linear, depending on the length of the given array.

function squareOrSquareRoot(array) {
  for (let i=0;i<=array.length;i++) {
    if (array[i] ^ .5 === Math.floor(array[i] ^ .5)) {
        array[i] = array[i] ^ .5
    } else {
        array[i] = array[i] ^ 2
    }
  }
  return array
}