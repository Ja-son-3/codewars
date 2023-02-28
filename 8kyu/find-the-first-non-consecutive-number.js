// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python, Rust, Scala: None
// Julia: nothing
// Nim: none(int) (See options)

//Parameters: Given an array of integers.
//Results: Return a value of null if the array is all consecutive values. Otherwise return the element that is the first non-consecutive number.
//Examples:
    //  it('a simple example', function() {
    //  const first = firstNonConsecutive([1,2,3,4,6,7,8])
    //  assert.strictEqual(first, 6)
    //  })
    //  it('all sequential', function() {
    //  const first = firstNonConsecutive([1,2,3,4])
    //  assert.strictEqual(first, null)
    //  })
//Pseudocode: 
    //1. Create a for loop, iterating over each element of the given array until a non-consecutive value is found.
    //2. If the for loop concludes without returning a value, return a value of null for a consecutive array.
//Time Complexity: Linear or 0(n), depending on the length of the array.

function firstNonConsecutive (arr) {
    for (let i=0; i< arr.length;i++) {
      if (arr[i] != arr[0] + i) {
        return arr[i]
      }
    }
    return null
}