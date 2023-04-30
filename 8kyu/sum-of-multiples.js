// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
    // n and m are natural numbers (positive integers)
    // m is excluded from the multiples

// Examples
    // sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
    // sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
    // sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
    // sumMul(4, -7)  ==> "INVALID"

//Parameters: Given two integer parameters, one representing the base value and another represent the maximum allowed multiples value.
//Results: Return the sum of all multiples of the first parameter that are below the value of the second parameter.
//Examples:
    // assert.strictEqual(sumMul(0,0),"INVALID");
    // assert.strictEqual(sumMul(2,9),20);
    // assert.strictEqual(sumMul(4,-7),"INVALID");
//Pseudocode: 
    //1. Create an if statement to check if m is a valid maximum to do any calculations. If not, return a string indicating that it is invalid.
    //2. If the second parameter is valid, create a new number variable to contain the sum return result.
    //3. Create a for loop that starts at the first parameter and increases in increments of the first parameter until it exceeds the value of the second parameter.
    //4. With each iteration of the for loop add the value of the current increment to the sum variable.
    //5. Return the sum variable.
//Time Complexity: O(n) or Linear, depending on the amount of multiples defined by the given parameters.

function sumMul(n,m){
    if (m <= 0) {
      return "INVALID"
    }
    let sum = 0
    for (let i=n;i<m;i+=n) {
      sum += i
    }
    return sum
  }