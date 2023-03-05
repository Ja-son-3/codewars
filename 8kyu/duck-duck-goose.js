// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:
    // duck_duck_goose([a, b, c, d], 1) should return a.name
    // duck_duck_goose([a, b, c, d], 5) should return a.name
    // duck_duck_goose([a, b, c, d], 4) should return d.name

// // PHP only
    // duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
    // duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
    // duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

//Parameters: Given an array of players and a integer parameter.
//Results: Return the name of the player selected to be goose based on the given array of players and integer parameter.
//Examples:
    // assert.strictEqual(duckDuckGoose(players, 1),  "a");
    // assert.strictEqual(duckDuckGoose(players, 3),  "c");
    // assert.strictEqual(duckDuckGoose(players, 10), "z");
    // assert.strictEqual(duckDuckGoose(players, 20), "z");
    // assert.strictEqual(duckDuckGoose(players, 30), "z");
    // assert.strictEqual(duckDuckGoose(players, 18), "g");
    // assert.strictEqual(duckDuckGoose(players, 28), "g");
    // assert.strictEqual(duckDuckGoose(players, 12), "b");
    // assert.strictEqual(duckDuckGoose(players, 2),  "b");
    // assert.strictEqual(duckDuckGoose(players, 7),  "f");
//Pseudocode: 
    //1. Find the index of the player to be selected within the array by subtracting 1 to account for starting at the index of 0 and dividing by the length of the given players array using the remainder operator.
    //2. Return the result by selecting the player at the given index and returning the name property from the object.
//Time Complexity: O(1) or Constant

function duckDuckGoose(players, goose) {
    return players[(goose-1)%players.length].name
}