// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

// A Pythagorean Triple consists of arranging 3 integers, such that:

// a2 + b2 = c2

// Examples
    // [5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
    // [3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
    // [13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132
    // [100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2

// Return Values
    // For Python: return True or False
    // For JavaScript: return true or false
    // Other languages: return 1 or 0 or refer to Sample Tests.

//Parameters: Given an array of three integers.
//Results: Return true or false, depending on whether the array contains three values that can be a pythagorean triple
//Examples:
    // assert.strictEqual(isPythagoreanTriple([3, 4, 5]), true);
    // assert.strictEqual(isPythagoreanTriple([3, 5, 9]), false);
//Pseudocode: 
    //1. Sort the given array from ascending order using the sort method with a comparison function.
    //2. Return the boolean value of the first two elements squared equivalent to the third element squared.
//Time Complexity: Constant or O(1)

function isPythagoreanTriple(integers) {
    integers.sort((a,b)=>a-b)
    return integers[0]**2 + integers[1]**2 === integers[2]**2
  }