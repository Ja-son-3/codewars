// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
    // calculator(1,2,"+"); //=> result will be 3
    // calculator(1,2,"&"); //=> result will be "unknown value"
    // calculator(1,"k","*"); //=> result will be "unknown value"

//Parameters: Given two integer number parameters and a string, representing a mathematical operator.
//Results: If given a valid operator, apply the operator against the two given parameters and return the result, otherwise return a string indicating an invalid value
//Examples:
    // Test.assertEquals(calculator(1,2,"+"), 3, "calculate");
    // Test.assertEquals(calculator(1,2,"-"), -1, "calculate");
    // Test.assertEquals(calculator(3,5,"*"), 15, "calculate");
    // Test.assertEquals(calculator(6,2,"/"), 3, "calculate");
    // Test.assertEquals(calculator(6,2,"$"), "unknown value", "calculate"); 
    // Test.assertEquals(calculator(6,"h","*"), "unknown value", "calculate"); 
//Pseudocode: 
    //1. Create an if statement that checks for a valid operator. If the operator is a plus, minus, multiply, or divide, return the result of that operator against the given a and b parameters.
    //2. Otherwise return a string of unknown value
//Time Complexity: O(1) or Constant

function calculator(a,b,sign){
    if (sign === '+') return a + b
    if (sign === '-') return a - b
    if (sign === '*') return a * b
    if (sign === '/') return a / b
    return "unknown value"
  }