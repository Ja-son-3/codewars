// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

//Parameters: Given a integer parameter.
//Results: Return the sum of all numbers that are a multiple of 3 or 5 up to the given number parameter.
//Examples:
    // test(10,23)
//Pseudocode: 
    //1. Create a new empty array to contain all multiples of 3 and 5 up to number.
    //2. Create a for loop starting at 3 and incrementing by 3 until it is no longer less than the given number.
    //3. With each iteration of the loop use the array push method to add the element of i to the array.
    //4. Create a for loop starting at 5 and incrementing by 5 until it is no longer less than the given number.
    //5. With each iteration of the loop check if the current value is already in the created array variable, if true move on to the next loop. If false, use the array push method and add the current value to the array.
    //6. Use the array reduce method to sum of all values in the array and return the result.
//Time Complexity: O(n) or Linear, depending on the size of the given number parameter.

function solution(number){
    let arr = []
    for (let i=3;i<number;i+=3) {
      arr.push(i)
    }
    for (let i=5;i<number;i+=5) {
      if (!arr.includes(i)) {
        arr.push(i)
      }
    }
    return arr.reduce((a,c)=>a+c,0)
}