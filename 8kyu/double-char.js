// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
    // * "String"      -> "SSttrriinngg"
    // * "Hello World" -> "HHeelllloo  WWoorrlldd"
    // * "1234!_ "     -> "11223344!!__  "

//Parameters: Given a string parameter.
//Results: Return the string parameter with each character doubled.
//Examples:
    // Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    // Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    // Test.assertEquals(doubleChar("1337"), "11333377");
    // Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    // Test.assertEquals(doubleChar("123456"), "112233445566");
    // Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
//Pseudocode: 
    //1. Use the split method to seperate string characters into individual elements.
    //2. Use the map array method to iterate over each element, adding a copy of it to each.
    //3. Use the array join method to combine all the elements in the array into a string and return the result.
//Time Complexity: Linear or 0(n), depending on the length of the given string.

function doubleChar(str) {
    return str.split('').map(e => e + e).join('')
}
  