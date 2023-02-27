// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    // "I love you"
    // "a little"
    // "a lot"
    // "passionately"
    // "madly"
    // "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

//Parameters: Given an integer value indicating the amount of petals of a flower
//Results: Depending on the number of petals on the flower return the appropriate string.
//Examples:
    // assert.strictEqual(howMuchILoveYou(7),"I love you")
    // assert.strictEqual(howMuchILoveYou(3),"a lot")
    // assert.strictEqual(howMuchILoveYou(6),"not at all")
//Pseudocode: 
    //1. Use a switch case where the expression uses a remainder operator and divides by 6.
    //2. Input a case and return the appropriate string for each respective petal.
//Time Complexity: Constant or 0(1)

function howMuchILoveYou(nbPetals) {
    switch(nbPetals % 6) {
        case 1: return "I love you";
        case 2: return "a little";
        case 3: return "a lot";
        case 4: return "passionately";
        case 5: return "madly";
        case 0: return "not at all";
    }
}
