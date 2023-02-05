// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

//Parameters: Given a string parameter.
//Results: 
//Examples:
    // assert.isDefined(actualJohn, "You have to return a string instead of logging it to the console");
    // assert.strictEqual(actualJohn, 'Hello, John!', "returns 'Hello, John!' when given 'johN'");
    // assert.strictEqual(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
    // assert.strictEqual(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given");
    // assert.strictEqual(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty string");
//Pseudocode: 
    //1. Use an if to check if name is empty or null.
    //2. If true return a string of 'Hello, World!'
    //3. If false return a string using a template literal of "Hello, (given paramater)", capitalizing the first character, by selecting the first character at index 0 and using toUpperCase(). Combine with the rest of the given parameter by concatenating the rest of the string by using slice(1) and setting all its value to lowercase using toLowerCase()

function hello(name) {
    return !name ? 'Hello, World!' : `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
}