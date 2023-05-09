// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw." 

//Parameters: Given two arrays, one representing the participating teams in a football match and the scores for each respectively team.
//Results: Return a string, indicating the teams participating in the match and the results of the match.
//Examples:
    // assert.strictEqual(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]), "At match Germany - Ukraine, Germany won!");
    // assert.strictEqual(uefaEuro2016(['Belgium', 'Italy'], [0, 2]), "At match Belgium - Italy, Italy won!");
    // assert.strictEqual(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]), "At match Portugal - Iceland, teams played draw.");
//Pseudocode: 
    //1. Use an if statement to check if the first team had a higher score, if so return a string indicating the first team won.
    //2. Use an if statement to check if the second team had a higher score, if so return a string indicating the second team won.
    //3. If neither side won a draw must of been the outcome, so return a string indicating a draw
//Time Complexity: O(1) or Constant.

function uefaEuro2016(teams, scores){
    if (scores[0] > scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    } else if (scores[0] < scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    } else {
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }
}