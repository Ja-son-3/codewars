// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:
    // if x > y: 3 points (win)
    // if x < y: 0 points (loss)
    // if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:
    // our team always plays 10 matches in the championship
    // 0 <= x <= 4
    // 0 <= y <= 4

//Parameters: Given an array of strings with each element representing the score of a football game.
//Results: Return the amount of total points earned by your team based on the amount of wins and ties by the given array parameter.
//Examples:
    // assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
    // assert.strictEqual(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
    // assert.strictEqual(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
    // assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
    // assert.strictEqual(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
//Pseudocode: 
    //1. Create a new variable that will represent the total amount of points earned by our team.
    //2. Use a for loop to loop over each element in the given array.
    //3. Use an if statement to check the value and compare the values at the index of 0 and 2 for each element in the array to found out which team won.
    //4. For each win add 3 to sum and for each tie add 1 to sum.
    //5. Return the sum variable.
//Time Complexity: Linear or O(n) depending on the length of the given array parameter. 

function points(games) {
    let sum=0;
    for (let i=0; i<games.length; ++i)
    {
      if (games[i][0]>games[i][2])
        sum+=3;
      if (games[i][0]==games[i][2])
        sum+=1;
    }
    return sum;
}