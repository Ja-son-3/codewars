// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

//Parameters: Parameters will be either an integer or float. Given two parameters, one representing points scored per game and another parameter representing the minutes played per game.
//Results: Given the two parameters, return a value representing the amount of points scored over the course of 48 minutes of gameplay.
//Examples:
    // pointsPer48(12, 20) // 28.8
    // pointsPer48(10, 10) // 48 
    // pointsPer48(5, 17) // 14.1 
    // pointsPer48(0, 0) // 0
//Pseudocode: 
    //1. First check if the points scored is 0, if so return a value of 0.
    //2. If not given a zero value extrapolate the points scored in a 48 minute game by dividing points per game by minutes per game to get the points per minute.
    //3. Multiply the points per minute by 48 to get the point value over a 48 minute game.
    //4. add a + in front of the calculation to convert the value into a number.
    //5. Use the toFixed method to round and set the value to one decimal place.
    //6. Return the value representing points scored in a 48 minute game.

function pointsPer48(ppg, mpg) {
    if (ppg === 0) {
      return 0
    } else {
      return +(ppg/mpg * 48).toFixed(1)
    }
}