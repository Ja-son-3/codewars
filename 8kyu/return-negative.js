// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Notes
    // The number can be negative already, in which case no change is required.
    // Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//Parameters: given a number parameter, that be zero or a positive or negative floating number.
//Results: If the given parameter is negative, return it. If it is zero, return a value of zero. If the given parameter is positive, return it with a negative value.
//Examples:
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
//Pseudocode: 
    //1. Use an if statement to check if the given parameter is negative. 
    //2. If the given parameter is negative, return the parameter.
    //3. Otherwise use the unary negation (-) operator to convert the positive parameter to negative.
    //4. A value of zero with the unary negation operator will still return zero.

function makeNegative(num) {
    if (num < 0) {
        return num
    } else {
        return -num
    }
}