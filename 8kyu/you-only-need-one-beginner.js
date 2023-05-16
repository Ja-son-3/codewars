// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//Parameters: Given an array of array of integers or strings. Also given an x parameter, representing a number or string value.
//Results: Return whether the given parameter of x is in the array of a. If so, return true, otherwise return false.
//Examples:
    // assert.strictEqual(check([66, 101], 66), true);
    // assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
    // assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
    // assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
//Pseudocode: 
    //1. use the includes array method over a to check if x is in the array. If it is the method will return true and false if it is not in the array.
//Time Complexity: linear or O(n) depending on the length of the given array.

function check(a, x) {
    return a.includes(x)
}