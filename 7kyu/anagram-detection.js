// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
    // "foefet" is an anagram of "toffee"

    // "Buckethead" is an anagram of "DeathCubeK"

//Parameters: Given two string parameters.
//Results: Return a boolean value indicating whether the two given parameters are an anagram.
//Examples:
    // assert.strictEqual(isAnagram("foefet", "toffee"), true, 'The word "foefet" is an anagram of "toffee"')
    // assert.strictEqual(isAnagram("Buckethead", "DeathCubeK"), true, 'The word "Buckethead" is an anagram of "DeathCubeK"')
    // assert.strictEqual(isAnagram("Twoo", "WooT"), true, 'The word "Twoo" is an anagram of "WooT"')

    // assert.strictEqual(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case "dumble", "bumble"')
    // assert.strictEqual(isAnagram("ound", "round"), false, 'Missing characters for test case "ound", "round"')
    // assert.strictEqual(isAnagram("apple", "pale"), false, 'Same letters, but different count')
//Pseudocode: 
    //1. Use the if statement to check if the two given strings contain the same letters.
    //2. Apply the toLowerCase method to account for case sensitivity on each parameter.
    //3. Use the split method to convert the given strings into array of elements for each character.
    //4. Use the array sort method to alphabetically sort each array.
    //5. Use the join method to recombine the array of characters into a single string.
    //6. Use the if statement to compare the strings, if they are the same return true to indicate the two given parameters are anagrams
    //7. Otherwise return false
//Time Complexity: Linear or O(n), depending on the length of the given strings.

// write the function isAnagram
var isAnagram = function(test, original) {
    if (original.toLowerCase().split('').sort().join('') === test.toLowerCase().split('').sort().join('')) return true
    return false
};