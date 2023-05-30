// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//Parameters: Given three number parameters.
//Results: Return true or false in regards to whether the given three numbers can be the sides of a triangle.
//Examples:
    // assert.strictEqual(isTriangle(1,2,2), true);
    // assert.strictEqual(isTriangle(7,2,2), false);
//Pseudocode: 
    //1. Apply the triangle inequality theorem to check if the value of two sides is always greater than the third. If true return true.
//Time Complexity: O(1) or Constant virtually unless dealing with astronomical numbers.

function isTriangle(a,b,c){
    return a+b>c && a+c>b && c+b>a
}