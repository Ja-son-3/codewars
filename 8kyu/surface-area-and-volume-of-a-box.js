// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

//Parameters: Given three number parameters, representing the wideth, height and depth of a box.
//Results: Return an array with the first index value being the area of the box and the second index element being the volume of the box.
//Examples:
    // assert.deepEqual(getSize(4, 2, 6), [88, 48]);   
    // assert.deepEqual(getSize(10, 10, 10), [600, 1000]);
    // assert.deepEqual(getSize(4, 2, 6)[0], 88);
    // assert.deepEqual(getSize(4, 2, 6)[1], 48);
//Pseudocode: 
    //1. Create an array to be returned.
    //2. In the first element of the array find the area of the box by using the formula 2*(l*w + l*h + w*h). In the second index use the foruma of l*w*h to get the volume.
    //3. Return the new array.
//Time Complexity: O(1) or Constant

function getSize(width, height, depth) {
    return [2*(depth*width+depth*height+width*height),width * height * depth]
}
  