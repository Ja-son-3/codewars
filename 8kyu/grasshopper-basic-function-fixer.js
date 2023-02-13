// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

//Parameters: Given a number parameter that can be a positive or negative integer or zero.
//Results: Given a buggy function, fix the function so that it returns the parameter plus 5
//Examples:
    // Test.assertEquals(addFive(5), 10)
    // Test.assertEquals(addFive(0), 5)
    // Test.assertEquals(addFive(-5), 0)
//Pseudocode: 
    //1. change the return from return num to return total

function addFive(num) {
    let total = num + 5
    return total
}