// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:
    // uniTotal("a") == 97
    // uniTotal("aaa") == 291

//Parameters: Given a string parameter.
//Results: Return the numerical value of all the characters in the given string.
//Examples:
    // doTest("", 0);
    // doTest("a", 97);
    // doTest("b", 98);
    // doTest("c", 99);
    // doTest("d", 100);
    // doTest("e", 101);
    // doTest("aaa", 291);
    // doTest("Mary Had A Little Lamb", 1873);
//Pseudocode: 
    //1. Use the string split method to seperate each character in the given string into an array element.
    //2. Use the array map method to iterate over each element in the array to convert each into it's ascii value using the charCodeAt method.
    //3. Use the array reduce method to sum all the now converted ascii values and return the result.
//Time Complexity: Linear or O(n), depending on the length of the given string.

function uniTotal (string) {
    let arr = string.split('')
    arr = arr.map(e => e.charCodeAt(0))
    return arr.reduce((a,c)=>a+c,0)
}