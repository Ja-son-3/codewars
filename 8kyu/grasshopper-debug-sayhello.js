//The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
    // Example output:
    // "Hello, Mr. Spock"

//Parameters: Given a string
//Results: Return a string saying Hello and the given parameter
//Examples:
    // assert.strictEqual(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
    // assert.strictEqual(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
    // assert.strictEqual(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
    // assert.strictEqual(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')
//Pseudocode: 
    //1. change the quotes to backticks to utilize template literals
    //2. add a comma and template literal that returns the parameter


function sayHello(name) {
    return `Hello, ${name}`
}