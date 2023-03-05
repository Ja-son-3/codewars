// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):
    // left - The current floor of the left elevator
    // right - The current floor of the right elevator
    // call - The floor that called an elevator

// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:
    // elevator(0, 1, 0); // => "left"
    // elevator(0, 1, 1); // => "right"
    // elevator(0, 1, 2); // => "right"
    // elevator(0, 0, 0); // => "right"
    // elevator(0, 2, 1); // => "right"

//Parameters: Given three number parameters, representing the left elevator position, right elevator position and current floor, respectively.
//Results: Return the elevator closest to the current floor. In case of a tie from left and right, return the string of right
//Examples:
    // it("If the left elevator is closer to the call, should return 'left'", function() {
    //     Test.assertEquals(elevator(0,1,0), 'left');
    //   });
    // it("If the right elevator is closer to the call, should return 'right'", function() {
    //     Test.assertEquals(elevator(0,1,1), 'right');
    //   });
    // it("If the right elevator is closer to the call, should return 'right'", function() {
    //   Test.assertEquals(elevator(0,1,2), 'right');
    // });
    // it("If both elevators are on the same floor, should return 'right'", function() {
    //   Test.assertEquals(elevator(0,0,0), 'right');
    // });
    // it("If both elevators are in equal distance from the call, should return 'right'", function() {
    //   Test.assertEquals(elevator(0,2,1), 'right');
    // });
//Pseudocode: 
    //1. Create an if statement to check if the distance from the elevator on the left is closer than the elevator on the right to the current floor.
    //2. Use the Math.abs method on the difference between both values from the current floor. If the left value is smaller than the right value, return a string of left.
    //3. Otherwise return a string of right if there is a tie or if the right elevator is closer.
//Time Complexity: Constant or O(1)

function elevator(left, right, call){
    if (Math.abs(left - call) < Math.abs(right-call)) return 'left'
    return 'right'
}