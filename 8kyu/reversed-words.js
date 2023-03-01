// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):
    // "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//Parameters: Given a string parameter.
//Results: Return the given string parameter with the words reversed.
//Examples:
    // assert.strictEqual(reverseWords("hello world!"                 ),  "world! hello")
    // assert.strictEqual(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
    // assert.strictEqual(reverseWords("foobar"                       ),  "foobar")
    // assert.strictEqual(reverseWords("kata editor"                  ),  "editor kata")
    // assert.strictEqual(reverseWords("row row row your boat"        ),  "boat your row row row")
    // assert.strictEqual(reverseWords(""                             ),  "")
//Pseudocode: 
    //1. Use the split method with a whitespace to seperate each word in the given string into an array.
    //2. Use the reverse array method to reverse the order of the elements in the new array.
    //3. Use the join with a whitespace seperator to convert the array back into a string with a space between each word.
    //4. Return the new string.
//Time Complexity: Linear or O(n), depending on the amount of words in the given string.

function reverseWords(str){
    return str.split(' ').reverse().join(' ')
}