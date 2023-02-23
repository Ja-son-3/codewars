//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//Parameters: Given an array of numbers.
//Results: Square each number value of the array and return it's sum.
//Examples:
    // assert.strictEqual(repeatStr(3, "*"), "***");
    // assert.strictEqual(repeatStr(5, "#"), "#####");
    // assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
//Pseudocode: 
    //1. Use the map array method to return an array with each element to the power of 2.
    //2. Use a array reduce method to sum of all the elements of the array.
    //3. Return the value from the reduce method.

function squareSum(numbers){
    return numbers.map(num => num * num).reduce((a,c) => a + c,0)
}