// DESCRIPTION:
// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:
    // combineNames('James', 'Stevens')

// returns:
    // 'James Stevens'

//Parameters: Given two string parameters.
//Results: Return the two strings concatenated with a whitespace between
//Examples:
    // Test.assertEquals(combineNames('James', 'Stevens'), 'James Stevens')
//Pseudocode: 
    //1. Concatenate the first parameter with a white space and the second parameter and return the result.
//Time Complexity: O(1) or Constant

function combineNames(a,b) {
    return a + ' ' + b
  }