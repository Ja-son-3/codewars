// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.

//Parameters: Given two parameters, one representing the body and one representing the tail. The parameters are never empty strings and are normal letters.
//Results: Return true if the last letter of the body parameter is the smae as the first letter in the tail parameter. Otherwise return false.
//Examples:
    // assert.strictEqual(correctTail("Fox", "x"), true);
    // assert.strictEqual(correctTail("Rhino", "o"), true);
    // assert.strictEqual(correctTail("Meerkat", "t"), true);  
//Pseudocode: 
    //1. Find the value of the last letter of the body string, by comparing the value at it's last index and compare it to the value of the given tail parameter.
    //2. If the values are the same, return true, otherwise return false

function correctTail(body, tail) {
    return sub = body[body.length-1] === tail
}
