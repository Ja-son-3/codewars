// Task
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

//Parameters: given an array parameter
//Results: Apply the appropriate array method for each function.
//Examples:
    // Test.assertSimilar(getLength([1,2,3]),3);
    // Test.assertSimilar(getFirst([1,2,3]),1);
    // Test.assertSimilar(getLast([1,2,3]),3);
    // Test.assertSimilar(pushElement([1,2,3]).length,4);
    // Test.assertSimilar(popElement([1,2,3]).length,2);
//Pseudocode: 
    //1. Use the length method for the getLength function.
    //2. Return the first element in the getFirst function by returning the arr index of 0 element.
    //3. Get the last element in the getLast function by targeting the last index of the array by using length - 1.
    //4. Add an element into the pushElement function by using the push function to add an element to the end.
    //5. Remove the last element in the array in the popElement function by using the array pop function.
//Time Complexity: Constant or O(1) for all methods.

function getLength(arr){
    //return length of arr
    return arr.length
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0]
  }
  function getLast(arr){
    //return the last element of arr
    return arr[arr.length-1]
  }
  function pushElement(arr){
    let el=1;
    arr.push(el)
    return arr
  }
  function popElement(arr){
    arr.pop()
    return arr
  }