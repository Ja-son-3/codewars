// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//Parameters: Given an array of strings.
//Results: Return the array element with the least ASCII values with three stars between each character.
//Examples:
    // assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
    // assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
//Pseudocode: 
    //1. Use the sort method to reorder the given list into alphabetical order.
    //2. Use the split method at the index of 1 to get an array of the first string.
    //3. Use the join method to combine the chracters of the first element with three stars between each character.
//Time Complexity: O(n) or Linear depending on the length of the given list parameter.

function twoSort(s) {
    s.sort((a,b) => a.charCode(0) > b.charCode(0))
    return s[0]
}