// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

//Parameters: Given a string that can include special characters and spaces.
//Results: Return the string where the word's are in reverse order.
//Examples:
    // assert.strictEqual(reverse('I am an expert at this'), 'this at expert an am I');
    // assert.strictEqual(reverse('This is so easy'), 'easy so is This');
    // assert.strictEqual(reverse('no one cares'), 'cares one no');
    // assert.strictEqual(reverse(''), '');
    // assert.strictEqual(reverse('CodeWars'), 'CodeWars');
//Pseudocode: 
    //1. Seperate the string into seperate items in an array using the split method
    //2. Reverse the order of the array of strings by using the reverse() method.
    //3. Use the join method to recombine the array items into a single string.
    //4. Return the string now in it's reversed order.

function reverse(string){
    return string.split(' ').reverse().join(' ')
}