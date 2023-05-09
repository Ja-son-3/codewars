// Task
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

//Parameters: Given an array of integers
//Results: Return an array with two nested arrays, one with odd values from the given parameter array and the other with even values from the given parameter.
//Examples:
    // Test.assertSimilar(pickIt([1,2]),[[1],[2]]);
    // Test.assertSimilar(pickIt([1,2,3]),[[1,3],[2]]);
    // Test.assertSimilar(pickIt([3,2,1]),[[3,1],[2]]);
    // Test.assertSimilar(pickIt([10,20,30]),[[],[10,20,30]]);
    // Test.assertSimilar(pickIt([11,21,31]),[[11,21,31],[]]);
    // Test.assertSimilar(pickIt([8,1,5,4,6,1,1]),[[1,5,1,1],[8,4,6]]);
//Pseudocode: 
    //1. Create two new empty arrays to contain the odd and even results from the given parameter to be returned.
    //2. Create a for loop to iterate over every element in the given array.
    //3. With each iteration of the for loop, use an if statement to check if the number is divisible by two, if it is push the value into the even array.
    //4. Otherwise push the value into the odd array.
    //5. Return the two created arrays nested inside of an array with the odd array at the index of 0 and even array at the index or 1.
//Time Complexity: O(n) or Linear, depending on the size of the given array.

function pickIt(arr){
    var odd=[],even=[];
    for (let i=0;i<=arr.length-1;i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i])
      } else {
        odd.push(arr[i])
      }
    }
    return [odd,even];
  }