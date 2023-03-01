// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

//Parameters: Given a parameter of representing a name
//Results: Return a string of "Hello, my love!" if the given parameter is a string of "Johnny"
//Examples:
    // Test.assertEquals(greet("Jim"), "Hello, Jim!");
    // Test.assertEquals(greet("Jane"), "Hello, Jane!");
    // Test.assertEquals(greet("Simon"), "Hello, Simon!");
    // Test.assertEquals(greet("Johnny"), "Hello, my love!");
//Pseudocode: 
    //1. Put the if statement above the return "Hello, " + name + "!".
    //2. Encase return "Hello, my love!" within the if statement that checks if the given name parameter is "Johnny"
//Time Complexity: Constant of O(1)

function greet(name){
    if(name === "Johnny") {
      return "Hello, my love!"
    }
    return "Hello, " + name + "!";
}