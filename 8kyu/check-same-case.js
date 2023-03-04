// Write a function that will check if two given characters are the same case.
    // If either of the characters is not a letter, return -1
    // If both characters are the same case, return 1
    // If both characters are letters, but not the same case, return 0

// Examples
    // 'a' and 'g' returns 1
    // 'A' and 'C' returns 1
    // 'b' and 'G' returns 0
    // 'B' and 'g' returns 0
    // '0' and '?' returns -1

//Parameters: Given two string parameters
//Results: Return a value of 1 if both parameters are the same casing. If they are different casing return a value of 0. If either parameters are special characters, return a value or -1.
//Examples:
    // doTest('C', 'B', 1);
    // doTest('b', 'a', 1);
    // doTest('d', 'd', 1);
    // doTest('A', 's', 0);
    // doTest('c', 'B', 0);
    // doTest('b', 'Z', 0);
    // doTest('\t', 'Z', -1);
    // doTest('H', ':', -1);
//Pseudocode: 
    //1. Use an if statement to check if the parameter is a special character instead of a letter by making an impossible validator for a letter. If the uppercase and lowercase are equal to each other, return a value of -1 because it must not be a letter.
    //2. Use an if statement to check if a is an upper case and b is an upper case or a is a lower case and b is a lower case. If either check return's true return a value of 1
    //3. In all other cases the parameters must be letters, but not the same casing, so we can return a value of 0
//Time Complexity: O(1) or Constant

function sameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
        return -1
    } else if (a === a.toUpperCase() && b === b.toUpperCase() || a === a.toLowerCase() && b === b.toLowerCase()) {
        return 1
    } else {
    return 0
    }
}
