// Complete the function which converts a binary number (given as a string) to a decimal number.

//Parameters: Given a string variable representing a binary value.
//Results: Return the decimal value of the given binary value.
//Examples:
    // [ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => Test.assertEquals( binToDec(inp), exp ) )
//Pseudocode: 
    //1. Use the parseInt function to take a string element and return a number at the given radix. Using a radix of 2 to return a decimal number
//Time Complexity: O(n) or Linear, depending on the size of the given binary value.

function binToDec(bin){
    return parseInt(bin, 2)
}