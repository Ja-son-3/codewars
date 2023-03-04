// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

//Parameters: Given a number parameter.
//Results: Return the nearest squared number from the given parameter.
//Examples:
    // assert.strictEqual(nearestSq(1), 1, "nearestSq(1) = 1");
    // assert.strictEqual(nearestSq(2), 1, "nearestSq(2) = 1");
    // assert.strictEqual(nearestSq(10), 9, "nearestSq(10) = 9");
    // assert.strictEqual(nearestSq(111), 121, "nearestSq(111) = 121");
    // assert.strictEqual(nearestSq(9999), 10000, "nearestSq(9999) = 10000");
//Pseudocode: 
    //1. Use square root operator on the given parameter to get the square root of the given number.
    //2. Use the Math round method to round the square root result to the nearest integer.
    //3. Square the rounded result to find the nearest squared value from the given parameter and return the result.
//Time Complexity: Constant or O(1)

function nearestSq(n){
    return Math.round(n**.5)**2
}