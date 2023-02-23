// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

//Parameters: Given an array of string or number values, that include a string of "needle"
//Results: Return a string telling the user the position of the needle.
//Examples:
    // Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
    // Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
    // Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
    // Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')
//Pseudocode: 
    //1. Use a template literal to write the string.
    //2. In the template literal use a string interpolation together with the indexOf method to find the index of "needle" plus 1 to account for index starting at 0.
//Time Complexity: linear or 0(n)

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle') + 1}`
}