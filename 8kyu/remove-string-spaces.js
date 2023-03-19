// Simple, remove the spaces from the string, then return the resultant string.

//Parameters: Given x, a string containing both letters and numbers.
//Results: Return a string with the given parameter's whitespaces removed.
//Examples:
    //assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
    // assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
    // assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
//Pseudocode: 
    //1. Use the replaceAll method to replace all whitespaces with a value of nothing or ''
    //2. Return the new string
//Time Complexity: O(n) or Linear

function noSpace(x){
    return x.replaceAll(' ','')
}