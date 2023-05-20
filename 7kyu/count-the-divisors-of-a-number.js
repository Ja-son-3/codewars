// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
    // 4 --> 3 (1, 2, 4)
    // 5 --> 2 (1, 5)
    // 12 --> 6 (1, 2, 3, 4, 6, 12)
    // 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

//Parameters: Given an integer parameter.
//Results: Return the amount of divisors of the given parameter.
//Examples:
    // assert.strictEqual(getDivisorsCnt(1),  1);
    // assert.strictEqual(getDivisorsCnt(10), 4);
    // assert.strictEqual(getDivisorsCnt(11), 2);
    // assert.strictEqual(getDivisorsCnt(54), 8);
//Pseudocode: 
    //1. Create a variable to keep count of the amount of divisors.
    //2. Create a for loop that loops up to n(given parameter) times.
    //3. With each iteration of the loop use an if statement to check if the given parameter is divisible by the current count in the for loop.
    //4. In each case that the if statement returns true, increment the count variable by one.
    //5. Return the count variable.
//Time Complexity: O(n) or Linear, depending on the value of the given parameter.

function getDivisorsCnt(n){
    let arr = 0
    for(let i=0;i<=n;i++){
      if(n%i == 0){
        arr++
      }
    }
  return arr
}