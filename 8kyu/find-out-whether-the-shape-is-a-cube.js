// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

//Parameters: Given two integer parameters, one representing the volume of a cuboid and the second representing the side of a cuboid
//Results: Return a boolean value indicating whether the cuboid can have equal sides, given the volume and side parameters.
//Examples:
    // Test.assertEquals(cubeChecker(56.3, 1), false);
    // Test.assertEquals(cubeChecker(-1, 2), false);
    // Test.assertEquals(cubeChecker(8, 3), false);
    // Test.assertEquals(cubeChecker(8, 2), true);
    // Test.assertEquals(cubeChecker(-8,-2), false);
    // Test.assertEquals(cubeChecker(0, 0), false);
    // Test.assertEquals(cubeChecker(1, 5),  false);
    // Test.assertEquals(cubeChecker(125, 5), true);
    // Test.assertEquals(cubeChecker(125,-5), false);
//Pseudocode: 
    //1. Create an if statement to check if either value is 0 or negative, which would be impossible, so return a value of false.
    //2. Otherwise create an if statement to check if side to the power of 3 is equal to the given volume. If true returen a value of true. Otherwise return a value of false.
//Time Complexity: O(1) or Constant.

var cubeChecker = function(volume, side){
    if (volume <= 0 || side <= 0) {
      return false
    }
      return side ** 3 === volume
}