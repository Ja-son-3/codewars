// Return the type of the sum of the two arguments

//Parameters: Given two parameters, that can be boolean, number or string
//Results: return the result of the typeof method after concatenating the two given parameters.
//Examples:
    // Test.assertEquals(typeOfSum(12, 1), 'number');
    // Test.assertEquals(typeOfSum('d', 1), 'string');
    // Test.assertEquals(typeOfSum(1, 'a'), 'string');
    // Test.assertEquals(typeOfSum('dd', ''), 'string');
    // Test.assertEquals(typeOfSum(true, 1), 'number');
    // Test.assertEquals(typeOfSum('s', false), 'string');
    // Test.assertEquals(typeOfSum(null, 1), 'number');
    // Test.assertEquals(typeOfSum('s', null), 'string');
    // Test.assertEquals(typeOfSum(null, undefined), 'number');
    // Test.assertEquals(typeOfSum(undefined, 're'), 'string');
    // Test.assertEquals(typeOfSum(undefined, true), 'number');
    // Test.assertEquals(typeOfSum(null, false), 'number');
//Pseudocode: 
    //1. Concatenate the two given parameters.
    //2. Use the typeof method on the concatenated result and return it.
//Time Complexity:

function typeOfSum(a, b) {
    return typeof (a + b)
}