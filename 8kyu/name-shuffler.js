// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)
    // "john McClane" --> "McClane john"

//Parameters: Given a string with multiple words, seperated by whitespace.
//Results: Return the given string with the words in reverse as a string.
//Examples:
    // assert.strictEqual(nameShuffler('john McClane'),'McClane john');
    // assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
    // assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')
//Pseudocode: 
    //1. Use the string split method to seperate each word in the given string into array elements.
    //2. Use the array reverse method to reverse the items in the array in their opposite order.
    //3. Use the array join method to combine all the elements in the array into a single string.
    //4. Return the result.
//Time Complexity: O(n) or Linear, depending on the amount of words in the given parameter.

function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
}