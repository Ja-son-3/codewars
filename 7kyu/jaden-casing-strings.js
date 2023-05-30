// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:
    // Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
    // Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

//Parameters: Given a string parameter of words.
//Results: Return the given parameter with the first letter capitalized in each word.
//Examples:
    // Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
//Pseudocode: 
    //1. Use the split method with a white space seperator to create an array of words from the given parameter.
    //2. Use the map method to iterate over each array element, capitalizing the first letter and concatenating it with the rest of the array element using the toUpperCase and slice methods.
    //3. Use the join method to convert the array into a string with a whitespace seperator and return the result.
//Time Complexity: O(n) or Linear, depending on the given amount of words.

String.prototype.toJadenCase = function () {
    return this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ');
};