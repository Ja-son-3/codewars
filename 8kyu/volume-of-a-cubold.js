// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

//Parameters: Given three number parameters, representing length, width and height of a cubold, respectively.
//Results: Compute the volume of the cubold based on the given parameters and return its value.
//Examples:
    // assert.strictEqual(Kata.getVolumeOfCuboid(1,2,2),  4);
    // assert.strictEqual(Kata.getVolumeOfCuboid(6,2,5), 60);
//Pseudocode: 
    //1. Multiply all the three given parameters to get the volume of the cubold and return its result.
//Time Complexity: Constant or O(1)

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height
    }
}