// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
    // multiply(3)==15 // 3 * 5¹
    // multiply(10)==250 // 10 * 5²
    // multiply(200)==25000 // 200 * 5³
    // multiply(0)==0 // 0 * 5¹
    // multiply(-3)==-15 // -3 * 5¹

//Parameters: Given a integer parameter.
//Results: Return the integer parameter multipled by 5 to the power of how how many digits are in the given parameter.
//Examples:
    // Test.assertEquals(multiply(10),250);
    // Test.assertEquals(multiply(5),25);
    // Test.assertEquals(multiply(200),25000);
    // Test.assertEquals(multiply(0),0);
    // Test.assertEquals(multiply(-2),-10);
//Pseudocode: 
    //1. Use the Math.abs method to convert any negative values to positive values before converting it into a string to account for the negative sign.
    //2. Use the toString() method to convert the given number into a string.
    //3. Use the length method to get the length of the given array.
    //4. Return the given parameter multipled by 5 to the power of the length of the given parameter.
//Time Complexity: O(1) or Constant

function multiply(number){
    return number * (5**(Math.abs(number).toString().length))
}