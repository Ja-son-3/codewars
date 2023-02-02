// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

//Parameters: Given three string parameters
//Results: return a string that combines the letters from the three parameters. Looping over each parameter for each letter once until there are no more letters.
//Examples:
    // assert.strictEqual(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
    // assert.strictEqual(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
    // assert.strictEqual(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
    // assert.strictEqual(tripleTrouble("Sea","urn","pms"), "Supermans"); 
    // assert.strictEqual(tripleTrouble("LLh","euo","xtr"), "LexLuthor");
//Pseudocode: 
    //1. Create a for loop, looping the length of a given parameter.
    //2. With each loop, take the current index and concat it to a new string
    //3. Return the new string

function tripleTrouble(one, two, three){
    let str = ''
    for (let i = 0; i <= one.length-1;i++) {
        str += (one[i] + two[i] + three[i])
    }
    return str
}