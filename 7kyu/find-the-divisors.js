// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
    // divisors(12); // should return [2,3,4,6]
    // divisors(25); // should return [5]
    // divisors(13); // should return "13 is prime"

//Parameters: Given an integer parameter.
//Results: Return an array of numbers the given parameter is divisible by. If not divisble by any number, return a string indicating the number is a prime number
//Examples:
    // Test.assertDeepEquals(divisors(15), [3, 5]);
    // Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
    // Test.assertDeepEquals(divisors(13), "13 is prime");
//Pseudocode: 
    //1. Create an empty array variable to contain the array of divisors.
    //2. Create a for loop that increments starting at 2 and in increments of one until it is greater than the given integer.
    //3. With each loop check if the integer is perfectly divisible by the current increment, if so use the push method to add the increment value to the created empty array.
    //4. Use an if statement to check if the length of the array is zero, if false return the array. If true return a string indicating the given parameter is a prime number.
//Time Complexity: O(n) or Linear, depending on the value of the given parameter.

function divisors(integer) {
    let n = []
    for(let i = 2; i<integer; i++){
      if(integer%i == 0) n.push(i)
    }
    return n.length !== 0 ? n : `${integer} is prime`
}