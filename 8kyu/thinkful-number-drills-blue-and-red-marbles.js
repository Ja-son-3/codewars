// You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:

// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.

// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:
    // the number of blue marbles you put in the bag to start
    // the number of red marbles you put in the bag to start
    // the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
    // the number of red marbles pulled out so far (always lower than the starting number of red marbles)

// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

//Parameters: Given four number parameters, representing starting amount of blue marbles, starting amount of red marbles, amount of blue marbles pulled from the bag and amount of red marbles pulled from the bag, respectively.
//Results: Return the probability that the next pull is a blue marble.
//Examples:
    // Test.assertEquals(guessBlue(5, 5, 2, 3), 0.6);
    // Test.assertEquals(guessBlue(5, 7, 4, 3), 0.2);
    // Test.assertEquals(guessBlue(12, 18, 4, 6), 0.4);
//Pseudocode: 
    //1. Find out how much blue is left by subtracting the amount of blue marbles at the start by how many has been pulled.
    //2. Divide the remaining blue marbles by the total remaining, calculated by adding the total starting marbles by the total pulled so far.
//Time Complexity: O(1) or Constant

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    return (blueStart-bluePulled) / (blueStart + redStart - bluePulled - redPulled)
}