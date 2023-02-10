// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//Parameters: Given a string of letters that is always lowercase
//Results: Return the given parameter in a string without vowels
//Examples:
    // "hello"     -->  "hll"
    // "codewars"  -->  "cdwrs"
    // "goodbye"   -->  "gdby"
    // "HELLO"     -->  "HELLO"
//Pseudocode: 
    //1. Create a variable containing all the vowels as strings to be used to check against.
    //2. Split the given parameter into individual characters in an array using Split('')
    //3. Use the filter() method together with the includes method with the vowel array variable to remove all vowel's in the new array and create a new array.
    //4. Use join('') to combine all items in the array into a single string
    //5. return the string


function shortcut (string) {
    let vowels = ['a','e','i','o','u']
    return string.split('').filter(result => !vowels.includes(result)).join('')
}