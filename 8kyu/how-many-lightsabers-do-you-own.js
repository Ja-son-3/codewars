// DESCRIPTION:
// Inspired by the development team at Vooza, write the function that
    // accepts the name of a programmer, and
    // returns the number of lightsabers owned by that person.

// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):
    // "anyone else" --> 0
    // "Zach" --> 18

//Parameters: Given a string parameter representing a person's name
//Results: Return the number of lightsabers owned by the given person.
//Examples:
    // assert.strictEqual( howManyLightsabersDoYouOwn(), 0 )
    // assert.strictEqual( howManyLightsabersDoYouOwn("Adam"), 0 )
    // assert.strictEqual( howManyLightsabersDoYouOwn("Zach"), 18 )
//Pseudocode: 
    //1. Use an if statement to check if the given name parameter is Zach. If it is return a value of 18.
    //2. Otherwise return a value of 0
//Time Complexity: Constant or O(1)

function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0
  }