// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
    // ghost = new Ghost();
    // ghost.color //=> "white" or "yellow" or "purple" or "red"

//Parameters: No parameters.
//Results: Return a random assignment of color between white, yellow, purple and red to the color property.
//Examples:
    // 
//Pseudocode: 
    //1. Create a random number from 0 to 1 using the Math random method.
    //2. Create an if statement and assign a color assignment to the color property for each quarter between 0 and 1.
//Time Complexity:

var Ghost = function() {
    let random = Math.random()
    if (random > .75) {
        this.color = "white"
    } else if (random > .5) {
        this.color = "yellow"
    } else if (random > .25) {
        this.color = "purple"
    } else {
        this.color = "red"
    }
}