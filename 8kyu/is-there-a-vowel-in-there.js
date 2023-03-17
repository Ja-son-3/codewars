// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//Parameters: Given an array parameter of integers.
//Results: Return the given array with all integer values that when converted to ascii values are lowercase vowels.
//Examples:
    // Test.assertSimilar(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
    // Test.assertSimilar(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
//Pseudocode: 
    //1. Create a for loop that iterates over each element in the given array.
    //2. With each iteration of the loop use an if statement to check if the current element converted to ascii characters using the String.fromCharCode method is a lowercase vowel.
    //3. Use the indexOf method after converting the current element to an ascii value to check if a given element or string of vowels is found in the array element. If not a -1 will be returned.
    //4. If the result is anything but -1, that means the current element has converted into a lowercase vowel and we will set that current value to it's ascii value.
    //5. Return the array.
//Time Complexity: O(n) or linear, depending on the length of the given array.

function isVow(a){
    for (let i=0;i<a.length;i++) {
        if ('aeiou'.indexOf(String.fromCharCode(a[i])) !== -1) {
            a[i] = String.fromCharCode(a[i])
        }
    }
    return a
}