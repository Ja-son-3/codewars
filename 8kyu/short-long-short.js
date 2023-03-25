// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

//Parameters: Given two string parameters
//Results: Return a string in the form of shorter parameter + long parameter + short parameter.
//Examples:
    // ("1", "22") --> "1221"
    // ("22", "1") --> "1221"
//Pseudocode: 
    //1. Use an if statement to check if the length of a is greater than the length of b. If so return the concatenated value of b, a, and b.
    //2. Otherwise return the concatenated value of a, b, and a.
//Time Complexity: Linear or O(1)

function solution(a, b) {
    if (a.length > b.length) {
        return b + a + b
    } else {
        return a + b + a;
    }
}
