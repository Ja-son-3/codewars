// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)
    // 5, 2, "add"      --> 7
    // 5, 2, "subtract" --> 3
    // 5, 2, "multiply" --> 10
    // 5, 2, "divide"   --> 2.5

// Try to do it without using if statements!

//Parameters: Given two positive number parameters and a string representing a math operator.
//Results: Return the result of the result of using the math operator from the given parameter on the given number parameters.
//Examples:
    // assert.strictEqual(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
    // assert.strictEqual(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
    // assert.strictEqual(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
    // assert.strictEqual(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");
//Pseudocode: 
    //1. Use a switch case to check the value of the given operator string parameter and return the result of applying that operator on the two given number parameters.
//Time Complexity: O(1) or constant

function arithmetic(a, b, operator){
    switch (operator) {
        case 'add': return a + b;
        case 'subtract': return a - b;
        case 'multiply': return a * b;
        case 'divide': return a / b;
    }
}