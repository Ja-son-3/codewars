// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//Parameters: Given two number parameters
//Results: Return the sum of the two given parameters in binary as a string.
//Examples:
    // it("Should return something that isn't falsy", function() {
    // Test.expect(results1, "Something is wrong, no results!");
    // });
    // it("Should return \"11\"", function() {
    // Test.assertEquals(results1, "11");
//Pseudocode: 
    //1. Sum the two given two paramters
    //2. Use the toString method with a value of two to convert the sum into binary and return the result.
//Time Complexity: O(1) or Constant

function addBinary(a,b) {
    return (a+b).toString(2)
}