// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Tests compare expected result and actual answer with tolerance of 1e-6.

//Parameters: Given two coordinates, x and y on a 2d plane.
//Results: Return the distance between the two points.
//Examples:
    // doTest(new Point(    3,    3), new Point(  3,    3),         0);
    // doTest(new Point(    1,    6), new Point(  4,    2),         5);
    // doTest(new Point(-10.2, 12.5), new Point(0.3, 14.7), 10.728001);
//Pseudocode: 
    //1. Using the pythagorean theorem, find two sides of the 90 degree triangle by squaring the difference between the two parameters x and y values. 
    //2. Use the Math.abs method to return the absolute distance as a positive integer.
    //3. Add the two squared values together and square root the value to return the distance from point a to point b and return the result.
//Time Complexity: Constant or O(1)

function distanceBetweenPoints(a, b) {
    return (Math.abs(a.x-b.x)**2 + Math.abs(a.y-b.y)**2)**.5
}