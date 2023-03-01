// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//Parameters: Given two number parameters, each representing the amount of petals in a flower for Timmy or Sarah.
//Results: Return a boolean value of true if one is even and one is odd. If they are both even or odd return a boolean value of false.
//Examples:
    // assert.strictEqual(lovefunc(1,4), true)
    // assert.strictEqual(lovefunc(2,2), false)
    // assert.strictEqual(lovefunc(0,1), true)
    // assert.strictEqual(lovefunc(0,0), false)
//Pseudocode: 
    //1. Use an if statement to check if both values are the same after using the remainder operator to divide by two.
    //2. If they are the same return false.
    //3. In any other case return true.
//Time Complexity: Constant or O(1)

function lovefunc(flower1, flower2){
    if (flower1 % 2 === flower2 % 2) {
        return false
    } else {
        return true
    }
}