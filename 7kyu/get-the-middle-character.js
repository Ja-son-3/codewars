// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:
    // Kata.getMiddle("test") should return "es"
    // Kata.getMiddle("testing") should return "t"
    // Kata.getMiddle("middle") should return "dd"
    // Kata.getMiddle("A") should return "A"

// #Input
    // A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output
    // The middle character(s) of the word represented as a string.

//Parameters: Given a string parameter
//Results: If the given string is even length return the middle two characters of the given string. If it is odd return the middle character.
//Examples:
    // Test.assertEquals(getMiddle("test"),"es");
    // Test.assertEquals(getMiddle("testing"),"t");
    // Test.assertEquals(getMiddle("middle"),"dd");
    // Test.assertEquals(getMiddle("A"),"A");
//Pseudocode: 
    // Test.assertEquals(getMiddle("test"),"es");
    // Test.assertEquals(getMiddle("testing"),"t");
    // Test.assertEquals(getMiddle("middle"),"dd");
    // Test.assertEquals(getMiddle("A"),"A");
//Time Complexity: O(1) or Constant

function getMiddle(s){
    if (s.length % 2 === 1) {
      return s[Math.floor(s.length/2)]
    }
    return s[s.length/2 - 1] + s[s.length/2]
}