// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//Parameters: Given a number parameter 
//Results: Return the number value of the given parameter multipled by 8 if the given parameter is even. If the given parameter is odd return it's value multipled by 9.
//Examples:
    // assert.strictEqual(simpleMultiplication(2),16,'Should return given argument times eight...')
    // assert.strictEqual(simpleMultiplication(1),9, 'Should return given argument times nine...')
    // assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
    // assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
    // assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')
//Pseudocode: 
    //1. Use an if statement to check if the number is even by using the remainder operator and dividing by two.
    //2. If the given parameter is even, return it's value multiplied by 8.
    //3. Otherwise return the given parameter multiplied by 9.
//Time Complexity: Constant or O(1)

function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8
    } else {
      return number * 9
    }
}
