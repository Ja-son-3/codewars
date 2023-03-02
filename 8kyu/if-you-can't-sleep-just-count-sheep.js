// DESCRIPTION:
    // If you can't sleep, just count sheep!!

// Task:
    // Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers

//Parameters: Given a number parameter, representing the amount of sheep to be counted.
//Results: Return a string parameter counting the amount of sheep given by the parameter.
//Examples:
    // assert.strictEqual(countSheep(0), "");
    // assert.strictEqual(countSheep(1), "1 sheep...");
    // assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    // assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
//Pseudocode: 
    //1. Create an empty string variable to contain the string that will be returned.
    //2. Create a for loop and with each iteration concat a str to the newly created str variable with the current sheep count.
    //3. Return the str variable.
//Time Complexity: Linear or O(n), depending on the number value.

var countSheep = function (num){
    let str = ''
    for (let i = 1; i <= num;i++ ) {
      str += `${i} sheep...`
    }
    return str
}