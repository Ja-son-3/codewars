// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

//Parameters: Given an array of strings.
//Results: Return a string incorporating the array of strings into it.
//Examples:
    // assert.strictEqual(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
    // assert.strictEqual(buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String');
    // assert.strictEqual(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');
//Pseudocode: 
    //1. Change the # sign to a $ sign to use string interpolation
    //2. Add a space after the comma in the join array method to provide whitespace after each comma.
//Time Complexity: O(n) or Linear, depending on the length of the given array.

//Given
// function buildString(...template){
//     return `I like #{template.join(',')}!`;
// }

//Answer
function buildString(...template){
    return `I like ${template.join(', ')}!`;
}