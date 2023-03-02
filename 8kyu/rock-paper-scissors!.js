// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//Parameters: Given two parameters representing the choice of each player in rock, paper, scissors.
//Results: Return a string declaring whether the rock, paper, scissor game based on the given parameters results in a draw, player1 winning or player2 winning.
//Examples:
    // it('player 1 win', function() {
    // Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
    // Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
    // Test.assertEquals(rps('paper', 'rock'), getMsg(1));

    // it('player 2 win', function() {
    // Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
    // Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
    // Test.assertEquals(rps('rock', 'paper'), getMsg(2));

    // it('draw', function() {
    // Test.assertEquals(rps('rock', 'rock'), 'Draw!');
    // Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
    // Test.assertEquals(rps('paper', 'paper'), 'Draw!');
//Pseudocode: 
    //1. Use an if statement to check if both the given parameters are the same. If so return a string of "Draw!"
    //2. If Player 1 returns has a winning combination, return a string of "Player 1 won!"
    //3. In all other cases remaining return a string of "Player 2 won!"
//Time Complexity: Constant or O(1)

const rps = (p1, p2) => {
    if (p1 === p2) {
        return "Draw!"
    } else if (p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper') {
        return "Player 1 won!"
    } else {
        return "Player 2 won!"
    }
}