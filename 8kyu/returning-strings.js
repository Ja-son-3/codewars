// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

//Parameters: Given a string parameter, representing a name
//Results: Return a string saying Hello, <name> how are you doing today?, with <name> being the given name parameter
//Examples:
    // assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
    // assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
//Pseudocode: 
    //1. Use a template literal with string interpolation to include the given name parameter in the return string.
//Time Complexity: Constant or O(1)

function greet(name){
    return `Hello, ${name} how are you doing today?`
}