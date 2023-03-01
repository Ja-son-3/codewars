// // Your function takes two arguments:
    // 1. current father's age (years)
    // 2. current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

//Parameters: Given two integer parameters, representing the father's age and the son's age, respectively.
//Results: Return the number of years in the future or the past that the father is twice the age of his son.
//Examples:
    //   it("Testing for dad's age: 36 and son's age: 7", function(){
    //     assert.strictEqual(twiceAsOld(36,7) , 22);
    //   });  
    //   it("Testing for dad's age: 55 and son's age: 30", function(){
    //     assert.strictEqual(twiceAsOld(55,30) , 5);
    //   });
    //   it("Testing for dad's age: 42 and son's age: 21", function(){
    //     assert.strictEqual(twiceAsOld(42,21) , 0);
    //   });
    //   it("Testing for dad's age: 22 and son's age: 1", function(){
    //     assert.strictEqual(twiceAsOld(22,1) , 20);
    //   });
    //   it("Testing for dad's age: 29 and son's age: 0", function(){
    //     assert.strictEqual(twiceAsOld(29,0) , 29);
    //   });
//Pseudocode: 
    //1. Find how long or how far into the future the father will be twice the age of his son by subtracting the dad's age by 2 times the son's age.
    //2. If the case that it is in the future the result will be negative. Use the Math.abs static method to convert all values to postive and return the result.
//Time Complexity: Constant or O(1)

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2* sonYearsOld)
}