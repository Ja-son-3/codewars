// Task
// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

//Parameters: Given a boolean value of true or false
//Results: Return a string value of true of false, depending on the given boolean value
//Examples:
    // var a=1,b=2,c=1;
    // Test.assertSimilar(trueOrFalse(a>b),"false");
    // Test.assertSimilar(trueOrFalse(a===b),"false");
    // Test.assertSimilar(trueOrFalse(a<b),"true");
    // Test.assertSimilar(trueOrFalse(a!==b),"true");
    // Test.assertSimilar(trueOrFalse(b>c),"true");
    // Test.assertSimilar(trueOrFalse(b===c),"false");
    // Test.assertSimilar(trueOrFalse(b<c),"false");
    // Test.assertSimilar(trueOrFalse(b!==c),"true");
    // Test.assertSimilar(trueOrFalse(a===c),"true");
    // Test.assertSimilar(trueOrFalse(a!==c),"false");
    // //test for logical operators and bitwise operators
    // var t=true,f=false;
    // Test.assertSimilar(trueOrFalse(t&&f),"false");
    // Test.assertSimilar(trueOrFalse(f&&f),"false");
    // Test.assertSimilar(trueOrFalse(t&&t),"true");
    // Test.assertSimilar(trueOrFalse(t||f),"true");
    // Test.assertSimilar(trueOrFalse(t||t),"true");
    // Test.assertSimilar(trueOrFalse(f||f),"false");
    // Test.assertSimilar(trueOrFalse(t&f),"false");
    // Test.assertSimilar(trueOrFalse(t&t),"true");
    // Test.assertSimilar(trueOrFalse(f&f),"false");
    // Test.assertSimilar(trueOrFalse(t|f),"true");
    // Test.assertSimilar(trueOrFalse(t|t),"true");
    // Test.assertSimilar(trueOrFalse(f|f),"false");
    // Test.assertSimilar(trueOrFalse(!t),"false");
    // Test.assertSimilar(trueOrFalse(!f),"true");
    // Test.assertSimilar(trueOrFalse(t^f),"true");
    // Test.assertSimilar(trueOrFalse(t^t),"false");
    // Test.assertSimilar(trueOrFalse(f^f),"false");
    // //test for implicit conversion 
    // Test.assertSimilar(trueOrFalse(true),"true");
    // Test.assertSimilar(trueOrFalse(123),"true");
    // Test.assertSimilar(trueOrFalse("123"),"true");
    // Test.assertSimilar(trueOrFalse(["123"]),"true");
    // Test.assertSimilar(trueOrFalse("false"),"true");
    // Test.assertSimilar(trueOrFalse(false),"false");
    // Test.assertSimilar(trueOrFalse(0),"false");
    // Test.assertSimilar(trueOrFalse(""),"false");
    // Test.assertSimilar(trueOrFalse(null),"false");
    // Test.assertSimilar(trueOrFalse([].length),"false");
    // Test.assertSimilar(trueOrFalse(undefined),"false");
//Pseudocode: 
    //1. Use an if statement to check if the given parameter is a boolean of true, if so return a string of true.
    //2. Otherwise return a string of false.
//Time Complexity: Constnat or O(1)

function trueOrFalse(val){
    if (val) {
      return "true"
    }
    return "false"
}