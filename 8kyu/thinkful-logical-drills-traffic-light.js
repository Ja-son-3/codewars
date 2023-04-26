// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

//Parameters: Given a string parameter, representing the current color state of a traffic light.
//Results: Return a result indicating the next color the traffic light should turn to based on the current light of the parameter.
//Examples:
    // assert.strictEqual(updateLight("green"), "yellow");
    // assert.strictEqual(updateLight("yellow"), "red");
    // assert.strictEqual(updateLight("red"), "green");
//Pseudocode: 
    //1. use an if statement to check the string parameter and return the appropriate string for the next color.
//Time Complexity: Constant or O(1)

function updateLight(current) {
    if (current === "green") {
        return "yellow"
    } else if (current === "yellow") {
        return "red"
    } else {
        return "green"
    }
}