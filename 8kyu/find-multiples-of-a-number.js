// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

//Parameters: Given two number parameters, with the first representing the starting point and increment and the other representing the limit.
//Results: Return an array starting at the given parameter integer and ending at the limit parameter, incrementing by integer for each element.
//Examples:
    // assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25])
    // assert.sameOrderedMembers(findMultiples(1, 2), [1, 2])
    // assert.sameOrderedMembers(findMultiples(5, 7), [5])
    // assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
    // assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44])
//Pseudocode: 
    //1. Create a new empty array to contain the return result.
    //2. Use a for loop that starts at the given integer value, increasing at increments of the given integer and looping until the value is greater than the limit.
    //3. With each loop increment the current value to the array variable.
    //4. Return the array.
//Time Complexity: O(n) or Linear, depending on the amount of increments from integer to reach the limit.

function findMultiples(integer, limit) {
    let arr = []
    for (let i= integer; i <= limit; i += integer) {
      arr.push(i)
    }
    return arr
  }
  