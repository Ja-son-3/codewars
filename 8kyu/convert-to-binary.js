// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// https://dev.to/austinbh/binary-conversion-3mc4 (used this method)

//Parameters: Given a non-negative integer.
//Results: Convert the parameter to a binary number and return it
//Examples:
    // assert.strictEqual(toBinary(1), 1);
    // assert.strictEqual(toBinary(2), 10);
    // assert.strictEqual(toBinary(3), 11);
    // assert.strictEqual(toBinary(5), 101);  
//Pseudocode: 
    //1. Use the toString method to convert a number into a binary number.
    //2. Use the parseInt method on the binary string to convert it back into a number.
    //3. Return the binary number

function toBinary(n){
    return parseInt(n.toString(2));
}
