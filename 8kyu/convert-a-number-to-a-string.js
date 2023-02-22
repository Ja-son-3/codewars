// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

//Parameters: Given a number value parameter.
//Results: Return the given number parameter as a string.
//Examples:
    //assert.strictEqual(numberToString(67), '67');
//Pseudocode: 
    //1. Use the toString() method to convert the given number parameter into a string. Return the result.
    // or
    //1. Alternatively concat an empty string to the given number parameter and the result will be the given parameter as a string.

function numberToString(num) {
    return num + ""
}

// function numberToString(num) {
//     return num.toString()
// }