// You have to write a function that describe Leo:
    // function leo(oscar) {

    // }
// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

//Parameters: Given a integer parameter.
//Results: Return the appropriate string describing Leo's oscar status based on the given integer parameter.
//Examples:
    // Test.assertEquals(leo(89),"Leo got one already!")
    // Test.assertEquals(leo(88),"Leo finally won the oscar! Leo is happy");
    // Test.assertEquals(leo(87),"When will you give Leo an Oscar?")
    // Test.assertEquals(leo(86),"Not even for Wolf of wallstreet?!")
//Pseudocode: 
    //1. Use an if statement to check if the given parameter is 88, if so return "Leo finally won the oscar! Leo is happy"
    //2. Use an if statement to check if the given parameter is 86, if so return "Not even for Wolf of wallstreet?!"
    //3. Use an if statement to check if the given parameter is greater than 88, if so return "Leo got one already!"
    //4. Otherwise return a string of "When will you give Leo an Oscar?"
//Time Complexity: O(1) or Constant

function leo(oscar){
    if (oscar === 88) return "Leo finally won the oscar! Leo is happy"
    if (oscar === 86) return "Not even for Wolf of wallstreet?!"
    if (oscar > 88) return "Leo got one already!"
    return "When will you give Leo an Oscar?"
}