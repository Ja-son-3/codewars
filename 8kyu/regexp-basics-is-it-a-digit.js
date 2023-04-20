// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

//Parameters: Given a string parameter that can be empty or contain numbers or letters.
//Results: Return a boolean value indicating whether the characters in the given string are all numbers.
//Examples:
  // Test.assertEquals(''.digit(), false);
  // Test.assertEquals('7'.digit(), true);
  // Test.assertEquals(' '.digit(), false);
  // Test.assertEquals('a'.digit(), false);
  // Test.assertEquals('a5'.digit(), false);
  // Test.assertEquals('14'.digit(), false);
//Pseudocode: 
    //1. Use a regex to test whether the given string only contains digits.
//Time Complexity: O(n) or Linear, depending on the string length.

String.prototype.digit = function() {
  return /^\d$/.test(this)
};