// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

//Parameters: Given a whole number that can be negative, zero or positive.
//Results: The given parameter is the floor number using the American system. Convert the result to the European equivalent and return it
//Examples:
    // 1  =>  0 
    // 0  =>  0
    // 5  =>  4
    // 15  =>  13
    // -3  =>  -3
//Pseudocode: 
    //1. Create a function to check whether the given parameter is 13 or greater, if it is subtract by two to account for skipping floor 13 and starting the floor count at 1 instead of 0.
    //2. If the given parameter is greater than 0, but less than 13, add one to account for the American system starting at floor 1 instead of 0 in the European system.
    //3. If the given parameter is less than or equal to 0, you can return the given value since it is equivalent to the European standard.

function getRealFloor(n) {
    return (n>= 13) ? n-2 : (n > 0) ? n-1 : n
}