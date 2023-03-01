// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

//Parameters: Given two integer parameters representing the amount of bullets and the amount of dragons.
//Results: Return true if the hero has enough bullets to kill the given amount of dragons. Otherwise return false.
//Examples:
    // assert.strictEqual(hero(10, 5), true);
    // assert.strictEqual(hero(7, 4), false);
    // assert.strictEqual(hero(4, 5), false);
    // assert.strictEqual(hero(100, 40), true);
    // assert.strictEqual(hero(1500, 751), false);
    // assert.strictEqual(hero(0, 1), false);
//Pseudocode: 
    //1. Find the amount of dragon's the hero is able to kill with the given bullet parameter by dividing it by two.
    //2. Use an if statement to check whether the amount of dragon's he hero is able to kill with his bullets is greater or equal to the given dragons amount parameter. If the case return true.
    //3. Otherwise return false.
//Time Complexity: constant or O(1)

function hero(bullets, dragons){
    return bullets / 2 >= dragons
}
    