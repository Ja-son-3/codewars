// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
    // move(3, 6) should equal 15

//Parameters: Given two number parameters, representing the position of the hero and the dice roll, respectively.
//Results: Return the new position of the hero based on the hero's current position and the dice roll multipled by two.
//Examples:
    // Test.assertEquals(move(0, 4), 8);
    // Test.assertEquals(move(3, 6), 15);
    // Test.assertEquals(move(2, 5), 12);
//Pseudocode: 
    //1. return the current position of the hero plus the dice roll parameter multiplied by two. 
//Time Complexity: Constant or 0(1)

function move (position, roll) {
    return position + roll * 2
}