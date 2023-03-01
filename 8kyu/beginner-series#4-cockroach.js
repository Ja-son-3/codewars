// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:
    // 1.08 --> 30
    
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

//Parameters: Given a number representing the km per hour of a cockroach
//Results: Return the given km per hour value back as cm per per second.
//Examples:
    // assert.strictEqual(cockroachSpeed(1.08), 30);
    // assert.strictEqual(cockroachSpeed(1.09), 30);
    // assert.strictEqual(cockroachSpeed(0), 0);
//Pseudocode: 
    //1. Convert the given km value to cm by multiplying it by 100,0000.
    //2. Convert the one hour value to one second by dividing the cm result by 3,600.
    //3. Round down to the nearest integer by using the Math.floor static method and return the result.
//Time Complexity: Constant or O(1)

function cockroachSpeed(s) {
    return Math.floor(s*100000/3600)
}