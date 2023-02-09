// Complete the function which converts hex number (given as a string) to a decimal number.

//Parameters: Given a string
//Results: Return the hex number of the given string value
//Examples:
    // assert.strictEqual(hexToDec("1"), 1);
    // assert.strictEqual(hexToDec("a"), 10);
    // assert.strictEqual(hexToDec("10"), 16);
    // assert.strictEqual(hexToDec("FF"), 255);
    // assert.strictEqual(hexToDec("-C"), -12);
//Pseudocode: 
    //1. Use a parseInt() function to convert the string value into a number value.
    //2. Because the hexademical number's radix is 16, we will parseInt() to a radix of 16.
    //3. Use parseInt() inputting the string value and a value of 16 and return it's result.

function hexToDec(hexString){
    return parseInt(hexString, 16)
}