// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

//Parameters: Given two  positive integers.
//Results: Return a number value representing the remaining health value of the player.
//Examples:
    // Test.assertEquals(combat(100, 5), 95);
    // Test.assertEquals(combat(92, 8), 84);
    // Test.assertEquals(combat(20, 30), 0);
//Pseudocode: 
    //1. Create a variable representing the new health value.
    //2. Use an if statement to check if the value is less than 0, if so return 0.
    //3. Else, return the new health variable

function combat(health, damage) {
    let newHealth = health - damage
    if (newHealth < 0) {
        return 0
    }
    return newHealth
}