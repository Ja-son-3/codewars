// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:
    // XO("ooxx") => true
    // XO("xooxx") => false
    // XO("ooxXm") => true
    // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    // XO("zzoo") => false

//Parameters: Given a string parameter
//Results: Return a boolean value of true if the amount of x's equal the amount of o's, otherwise return false.
//Examples:
    // Test.assertEquals(XO('xo'),true);
    // Test.assertEquals(XO("xxOo"),true);
    // Test.assertEquals(XO("xxxm"),false);
    // Test.assertEquals(XO("Oo"),false);
    // Test.assertEquals(XO("ooom"),false);
//Pseudocode: 
    //1. Convert the given parameter to lowercase to account for case sensitivity using the toLowerCase() method.
    //2. Convert the string into an array using the split method.
    //3. Create an array of all the x's by using the filter method on the new array.
    //4. Create an array of all the o's by using the filter method on the new array.
    //5. 
//Time Complexity: Linear or O(n), depending on the length of the current str when using the split method.

function XO(str) {
    str = str.toLowerCase().split('')
    const x = str.filter(e=>e === 'x')
    const o = str.filter(e=> e === 'o')
    return x.length === o.length
}