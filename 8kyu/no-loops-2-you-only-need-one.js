// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

//Parameters: Given an array of elements and a value of x that can be a number or string.
//Results: Return a boolean value of true or false, depending on whether the value of x is in the array without using a for loop.
//Examples:
    // assert.strictEqual(check([66, 101], 66), true);
    // assert.strictEqual(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
    // assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
    // assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
//Pseudocode: 
    //1. Use the array includes method to check if the second parameter is an element in the given array. If true return a value of true.
    //2. Otherwise return false
//Time Complexity: O(n) or Linear, depending on the length of the array.

function check(a,x){
    return a.includes(x)
};