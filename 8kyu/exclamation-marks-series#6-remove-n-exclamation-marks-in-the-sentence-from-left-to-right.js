// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
    // remove("Hi!",1) === "Hi"
    // remove("Hi!",100) === "Hi"
    // remove("Hi!!!",1) === "Hi!!"
    // remove("Hi!!!",100) === "Hi"
    // remove("!Hi",1) === "Hi"
    // remove("!Hi!",1) === "Hi!"
    // remove("!Hi!",100) === "Hi"
    // remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
    // remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
    // remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
    // remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

//Parameters: Given a string parameter and a number parameter, incidating how many exclamation points to remove from the given string.
//Results: Return the given string with n number of exclamation points removed.
//Examples:
    // Test.assertSimilar(remove("Hi!",1) , "Hi")
    // Test.assertSimilar(remove("Hi!",100) , "Hi")
    // Test.assertSimilar(remove("Hi!!!",1) , "Hi!!")
    // Test.assertSimilar(remove("Hi!!!",100) , "Hi")
    // Test.assertSimilar(remove("!Hi",1) , "Hi")
    // Test.assertSimilar(remove("!Hi!",1) , "Hi!")
    // Test.assertSimilar(remove("!Hi!",100) , "Hi")
    // Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",1) , "!!Hi !!hi!!! !hi")
    // Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",3) , "Hi !!hi!!! !hi")
    // Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",5) , "Hi hi!!! !hi")
    // Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",100) , "Hi hi hi")
//Pseudocode: 
    //1. Create a for loop that loops n times.
    //2. With each iteration of the loop remove an exclamation point from the given string using the replace method.
    //3. Return the string
//Time Complexity: O(n) or Linear, depending on the value of n

function remove(s,n){
    for (i=1;i<=n;i++) {
        s = s.replace('!','')
    }
    return s
}