// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

//Parameters: Always given a string
//Results: With the given string, replace all vowels with an exclamation mark
//Examples:
    // replace("Hi!") === "H!!"
    // replace("!Hi! Hi!") === "!H!! H!!"
    // replace("aeiou") === "!!!!!"
    // replace("ABCDE") === "!BCD!"
//Pseudocode: 
    //1. Create an array variable containing all vowels
    //2. Split the given string parameter into single characters using split.
    //3. Map over each individual item to check if they are vowels using includes, referencing the vowels variable.
    //4. If they are vowels replace them with an exclamation point.
    //5. Join the remaining characters into one string using join.

function replace(s){
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    return s.split('').map(str => vowels.includes(str) ? '!' : str).join('')
}