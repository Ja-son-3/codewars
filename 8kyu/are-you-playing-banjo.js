// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:
    // name + " plays banjo" 
    // name + " does not play banjo"
// Names given are always valid strings.

//Parameters: Given a string parameter, representing a person's name
//Results: Return the appropriate string, indicating whether the person plays the banjo based on if their name starts with the letter r
//Examples:
    // assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    // assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    // assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    // assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    // assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
//Pseudocode: 
    //1. Create an if statement to check if the first letter in the given string is an r. If so return a string using a template literal with the given parameter in a string interpolation.
    //2. If the name does not start with an r. return a string using a template literal with the given parameter in a string interpolation.
//Time Complexity: constant or 0(1)

function areYouPlayingBanjo(name) {
    if (name[0] === "r" || name[0] === "R") {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}