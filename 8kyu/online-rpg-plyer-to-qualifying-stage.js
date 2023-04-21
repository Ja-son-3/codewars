// Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.

// Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.

// Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

// In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

// Otherwise return, False/false (according to the language in use).

//Parameters: Given an integer parameter.
//Results: Return a string of "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." if the given parameter is 100 or over. return false otherwise.
//Examples:
    // assert.strictEqual(playerRankUp(64), false)
    // assert.strictEqual(playerRankUp(101), "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.")
//Pseudocode: 
    //1. Create an if statement to check if the given points parameter is 100 or greater.
    //2. If true return a string of "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
    //3. Otherwise return a boolean value of false
//Time Complexity: O(1) or Constant)

function playerRankUp (points) {
    if (points >= 100) {
      return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
    } 
    return false
  }