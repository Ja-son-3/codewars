// Task
// Complete function padIt, which accepts 2 parameters:
    // str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
    // n: a number indicating how many times to pad the string.

// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.

//Parameters: Given a string parameter and a integer parameter.
//Results: Create a while loop and with each iteration add as asterik to the str, first at the beginning of the string and alternating to the back, until n loops have occured.
//Examples:
    // Test.assertSimilar(padIt("a",1),"*a");
    // Test.assertSimilar(padIt("a",2),"*a*");
    // Test.assertSimilar(padIt("a",3),"**a*");
    // Test.assertSimilar(padIt("a",4),"**a**");
    // Test.assertSimilar(padIt("a",5),"***a**");
//Pseudocode: 
    //1. Create a new integer variable and set it to one to keep count of while loop.
    //2. Create a while loop that will loop n times.
    //3. With each iteration of the loop on odd numbers concat as asterik to the beginning of the string.
    //4. With each iteration of the loop on even numbers concat as asterik to the end of the string.
//Time Complexity: Linear or O(n), depending on the value of n

function padIt(str,n){
    let i = 1
    while (i<=n) {
      if (i % 2 === 1) {
        str = '*' + str 
        i++
      } else {
        str = str + '*'
        i++
      }
    }
    return str
}