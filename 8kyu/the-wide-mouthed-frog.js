// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

//Parameters: Given a string parameter, representing an animal.
//Results: Return a string of small or wide depending on whether the given parameter is alligator. If it is return a string of small, otherwise return a string of wide
//Examples:
    // assert.strictEqual(mouthSize("toucan"),"wide")
    // assert.strictEqual(mouthSize("ant bear"),"wide")
    // assert.strictEqual(mouthSize("alligator"),"small")
//Pseudocode: 
    //1. Use the toLowerCase() method to check capitalized parameters.
    //2. Use an if statement to check if the given parameter is equal to the string of alligator. If it is return a string of small
    //3. Otherwise return a string of wide
//Time Complexity: O(1) or Constant

function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? "small" : "wide"
}