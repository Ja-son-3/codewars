// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

//Parameters: Given two number value parameters and a string parameter representing a mathematical operation.
//Results: Depending on the given mathematical operation parameter, return a number using the mathematical operation with the value1 parameter first.
//Examples:
    // Test.assertSimilar(basicOp('+', 4, 7), 11);
    // Test.assertSimilar(basicOp('-', 15, 18), -3);
    // Test.assertSimilar(basicOp('*', 5, 5), 25);
    // Test.assertSimilar(basicOp('/', 49, 7), 7);
//Pseudocode: 
    //1. Use an if statement to check whether the operation is addition, subtraction, multiplication or division and return the respective value using the two number parameters based on the operation parameter.
//Time Complexity: linear or O(n)

function basicOp(operation, value1, value2) {
    if (operation == '+') {
        return value1 + value2
    } else if (operation == '-') {
        return value1 - value2
    } else if (operation == '*') {
        return value1 * value2
    } else if (operations == '/') {
        return value1 / value2
    }
}