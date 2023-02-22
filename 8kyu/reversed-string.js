// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//Parameters: Given a string that can be empty.
//Results: Return the given string in reverse order.
//Examples:
    // assert.strictEqual(solution('world'), 'dlrow');
    // assert.strictEqual(solution('hello'), 'olleh');
    // assert.strictEqual(solution(''), '');
    // assert.strictEqual(solution('h'), 'h');
//Pseudocode: 
    //1. Use the built in functions of string.split(), array.reverse() and array.join() to return the given parameter in reverse.
    //2. First use the split() method to convert the given string parameter into an array of substrings.
    //3. Next use the reverse() method to reverse the order of the array.
    //4. Finally use the join() method to join the elements in the array back into a string.
    //5. Return the final result
    // OR
    //1. Create a decrementing for loop that concats the characters from the given string starting from the last character.
    //2. First create a new variable to represent the reversed string we will concat values from the given parameter.
    //3. Next create a decrementing for loop that starts from the last character of the given parameter, by using i = str.length - 1.
    //4. With each iteration of the for loop concat the given i index to the newly created reverse variable.
    //5. When the for loop concludes, return the new reverse string variable.
    // OR
    //1. Use recursion, using a function that calls itself utilizing the string.substr() method and string.charAt() method.
    //2. The substr() method will return the characters in the given string beginning at the specificed position of index 1 through the end of the string.
    //3. The charAt() method will return the specified character at index 0 of the string.
    /* 
    First Part of the recursion method
    You need to remember that you won’t have just one call, you’ll have several nested calls

    Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
    1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
    2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
    3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
    4th call – reverseString("lo")      will return   reverseString("o")              + "l"
    5th call – reverseString("o")       will return   reverseString("")               + "o"

    Second part of the recursion method
    The method hits the if condition and the most highly nested call returns immediately

    5th call will return reverseString("") + "o" = "o"
    4th call will return reverseString("o") + "l" = "o" + "l"
    3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
    2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
    1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
    */

function solution(str){
    return str.split("").reverse().join("")
}

// function solution(str) {
//     let reverseString = ""
//     for (let i = str.length - 1; i >= 0;i--) {
//         reverseString += str[i]
//     }
//     return reverseString
// }

// function solution(str){
//     if (str === "") {
//         return "";
//     } else {
//         return solution(str.substr(1)) + str.charAt(0);
//     }
// }