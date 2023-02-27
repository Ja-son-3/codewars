// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
    // "hello world".toAlternatingCase() === "HELLO WORLD"
    // "HELLO WORLD".toAlternatingCase() === "hello world"
    // "hello WORLD".toAlternatingCase() === "HELLO world"
    // "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
    // "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
    // "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
    // "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

// As usual, your function/method should be pure, i.e. it should not mutate the original string.

//Parameters: Given a string parameter.
//Results: Return the string parameter, but capitalize all lowercase letters and lowercase all capitalized letters.
//Examples:
    // assert.strictEqual("hello world".toAlternatingCase(), "HELLO WORLD");
    // assert.strictEqual("HELLO WORLD".toAlternatingCase(), "hello world");
    // assert.strictEqual("hello WORLD".toAlternatingCase(), "HELLO world");
    // assert.strictEqual("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
    // assert.strictEqual("12345".toAlternatingCase(), "12345");
    // assert.strictEqual("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
    // assert.strictEqual("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
    // assert.strictEqual("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
//Pseudocode: 
    //1. Use the split method to seperate each character in the given string into it's own element in an array.
    //2. Use the map array method to iterate over each element in the array, checking if the leter is capitalized. If it is capitalized make it lowercase with the toLowerCase method. If it is not capitalized, make it uppercase with the toUpperCase method.
    //3. Use the join method to combine all the elements of the array back into a string and return the result.
//Time Complexity: Linear or 0(n), depending on the length of the given string.

String.prototype.toAlternatingCase = function () {
    return this.split('').map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
}