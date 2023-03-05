// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites/Websites 1,000 times.

//Parameters: No Parameters
//Results: return an array with the string "codewars" 1,000 times
//Examples:
    // Test.expect(websites.length > 0, 'The array is still empty')
    // Test.expect(websites.length == 1000, 'The array does not equal 1,000')
    // Test.expect(websites.every(function(e){return e == 'codewars';}), 'Every element in the array must contain the value "codewars"');
//Pseudocode: 
    //1. Use a for loop to loop 1,000 times.
    //2 With each iteration of the for loop use the array push method to add the value of codewars into the array.
//Time Complexity: O(n) or Linear

var websites = []
for (let i=1;i <= 1000;i++) {
  websites.push("codewars")
}