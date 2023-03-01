// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

//Parameters: Given two number parameters, representing two degrees of a triangle.
//Results: Return the third degree of the triangle, given the existing two from the parameter.
//Examples:
    // assert.strictEqual(otherAngle(30, 60), 90);
    // assert.strictEqual(otherAngle(60, 60), 60);
    // assert.strictEqual(otherAngle(43, 78), 59);
    // assert.strictEqual(otherAngle(10, 20), 150);
//Pseudocode: 
    //1. Return the remaining number of 180 minus the two given parameters and return the result.
//Time Complexity: Constant or O(1)

function otherAngle(a, b) {
    return 180 - a - b
}