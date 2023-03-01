// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
    // ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

//Parameters: Given an empty array or an array of strings.
//Results: Return a string from the given array with a whitespace between all the elements.
//Examples:
    //   assert.strictEqual(smash([]), "");
    //   assert.strictEqual(smash(["hello"]), "hello");
    //   assert.strictEqual(smash(["hello", "world"]), "hello world");
    //   assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
    //   assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
//Pseudocode: 
    //1. Use the join array method to combine all the elements of the given array parameter into a string, seperating each element with a whitespace ' ' and return the result.
//Time Complexity: Linear or O(n), depending on the length of the array.

function smash (words) {
    return words.join(' ')
}