// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truthy, func1 should be called, otherwise call the func2.

// Example:
    // _if(true, function(){console.log("True")}, function(){console.log("false")})
    // Logs 'True' to the console. 

//Parameters: Given three parameters, representing a boolean value and two functions, respectively.
//Results: If the boolean parameter is true call the first function. If the boolean is false call the second function.
//Examples:
//   it("test true function", () => {
//     let testvar = 0;
//     _if(true,  () => testvar = 42,   unexpectedFalse);
//     assert.strictEqual(testvar, 42, "'true' function has not been called");
//   });
//   it("test false function", () => {
//     let testvar = 0;
//     _if(false, unexpectedTrue, () => testvar=42);
//     assert.strictEqual(testvar, 42, "'false' function has not been called");
//Pseudocode: 
    //1. Create an if statement to check if the given boolean value is true. If true return and call the first function.
    //2. Otherwise call the second function.
//Time Complexity: Undetermined. Depends on the execution complexity of function 1 and function 2.

function _if(bool, func1, func2) {
    if (bool) {
        return func1()
    }
    return func2()
}