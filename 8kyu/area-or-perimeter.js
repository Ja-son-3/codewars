// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):
    // 6, 10 --> 32
    // 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

//Parameters: Given two parameters that represent the length and width of a 4 sided polygon.
//Results: If the polyson is a square return it's area. If it is a rectangle, return its perimeter.
//Examples:
    // assert.strictEqual(areaOrPerimeter(3,  3),  9);
    // assert.strictEqual(areaOrPerimeter(6, 10), 32);
//Pseudocode: 
    //1. Use an if statement to check if the length and width is the same for a square. If it is return the product of the given parameters.
    //2. Otherwise, multiply both parameters by two and sum them and return teh result.
//Time Complexity: Constant or O(1)

const areaOrPerimeter = function(l , w) {
    if (l === w) {
      return l * w
    } else {
      return 2 * l + 2 * w
    }
}