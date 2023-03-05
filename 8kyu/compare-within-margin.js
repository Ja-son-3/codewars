// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

// a is considered "close to" b if margin is greater than or equal to the distance between a and b.

// Please note the following:

// When a is close to b, return 0.
// Otherwise...

// When a is less than b, return -1.

// When a is greater than b, return 1.

// If margin is not given, treat it as zero.

// Assume: margin >= 0

// Tip: Some languages have a way to make parameters optional.

//Parameters: Given three integer parameters.
//Results: Return a value of 0 if the difference between the first two parameters is less than or equal to the margin. Return a value of 1 if the excess or positive and -1 if the excess is negative.
//Examples:
    // assert.strictEqual(closeCompare(4, 5), -1)
    // assert.strictEqual(closeCompare(5, 5), 0)
    // assert.strictEqual(closeCompare(6, 5), 1)
    // assert.strictEqual(closeCompare(-6, -5), -1)
    // assert.strictEqual(closeCompare(2, 5, 3), 0)
    // assert.strictEqual(closeCompare(8.1, 5, 3), 1)
    // assert.strictEqual(closeCompare(1.99, 5, 3), -1)
//Pseudocode: 
    //1. Create an if statement to check if a less than b minus the margin, if true there is a negative value over the margin, so return -1
    //2. If a minus the margin is greater than b, than there is a margin excess over the value of 0, so return a value of 1.
    //3. In all other cases return a value of 0
//Time Complexity: Constant or O(1)

function closeCompare(a, b, margin = 0) {
    if (a < b - margin) return -1
    if (a - margin > b) return 1
    return 0
}