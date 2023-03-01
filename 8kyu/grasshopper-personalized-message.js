// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:

// case	return
    // name equals owner	'Hello boss'
    // otherwise	'Hello guest'

//Parameters: Given two string parameters, one representing a name and another representing the name of the boss.
//Results: If the given name parameter equals the boss's name, return a string of 'Hello boss', otherwise return a string of 'Hello guest'
//Examples:
    // Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
    // Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
//Pseudocode: 
    //1. Use an if statement to check if the two given parameters are the same, if they are return a string of 'Hello boss'
    //2. Otherwise return a string of 'Hello guest'
//Time Complexity: Constant or 0(1)

function greet (name, owner) {
    if (name === owner) {
        return 'Hello boss'
    }
    return 'Hello guest'
}