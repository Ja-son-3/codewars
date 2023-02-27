// DESCRIPTION:
// Messi goals function
// Messi is a soccer player with goals in three leagues:
    // LaLiga
    // Copa del Rey
    // Champions

// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:
    // 5, 10, 2  -->  17

//Parameters: Given three integers, representing the amount of goals Messi has scored in the LaLiga, Copa del Rey and Champions leage respectively.
//Results: Return the total goal amount across the three leagues by Messi
//Examples:
    // Test.assertEquals(goals(0,0,0), 0)
    // Test.assertEquals(goals(43, 10, 5), 58)
//Pseudocode: 
    //1. Using concatenation, add up all the three parameters and return the result.
//Time Complexity: Constant or 0(1)

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}