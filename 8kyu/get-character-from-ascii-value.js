// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.
// For ASCII table, you can refer to http://www.asciitable.com/

//Parameters: Given zero or a positive integer 
//Results: Return the ASCII value of the given parameter
//Examples:
    // Test.assertEquals(getChar(55),'7')
    // Test.assertEquals(getChar(56),'8')
    // Test.assertEquals(getChar(57),'9')
    // Test.assertEquals(getChar(58),':')
    // Test.assertEquals(getChar(59),';')
    // Test.assertEquals(getChar(60),'<')
    // Test.assertEquals(getChar(61),'=')
    // Test.assertEquals(getChar(62),'>')
    // Test.assertEquals(getChar(63),'?')
    // Test.assertEquals(getChar(64),'@')
    // Test.assertEquals(getChar(65),'A')
//Pseudocode:
    // 1. Input the given parameter into String.fromCharCode() to get the ASCII value
    // 2. Return the result

function getChar(c){
    return String.fromCharCode(c)
}