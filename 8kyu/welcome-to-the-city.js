// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:
    // sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
    
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona! 

//Parameters: Given an array, representing the name of a person and two string parameters, representing city and state, respectively.
//Results: Return a string of Hello "(name)! Welcome to (city), (state)!".
//Examples:
    // assert.strictEqual(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!')
    // assert.strictEqual(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
    // assert.strictEqual(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')
//Pseudocode: 
    //1. Use the join method to combine all the elements of the given name parameter into a single string with a whitespace delimiter.
    //2. Use a template literal and return a string greeting the person and welcoming them to the city and state given by the parameters.
//Time Complexity: Virtually Constant or O(n), or Linear if considering that the name array can have more than 3 elements.

function sayHello( name, city, state ) {
    name = name.join(' ')
    return `Hello, ${name}! Welcome to ${city}, ${state}!`
}