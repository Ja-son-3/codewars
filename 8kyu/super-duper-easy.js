//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

//Parameters: Given a number that be decimal, positive or negative or zero. Can also be given a string value
//Results: If the value is a number value multiply it by 50, add 6 and return to result. If it is a string return the string of "Error"
//Examples:
    // assert.strictEqual(problem("hello"), "Error");
    // assert.strictEqual(problem(1), 56);
    // assert.strictEqual(problem(5), 256);
    // assert.strictEqual(problem(0), 6);
    // assert.strictEqual(problem(1.2), 66);
    // assert.strictEqual(problem(3), 156);
    // assert.strictEqual(problem("RyanIsCool"), "Error");
    // assert.strictEqual(problem(-3), -144);
    // assert.strictEqual(problem(""), "Error");
    // assert.strictEqual(problem(0.03), 7.5);
//Pseudocode: 
    //1. Use an if function and the typeof operater to check if the given parameter is a string.
    //2. If it is a string return "Error"
    //3. if it is not a string, multiply the given parameter by 50 and add 9. Return the result

function problem(x){
    if (typeof x === 'string') {
        return "Error"
    } else {
        return x * 50 + 6
    }
}