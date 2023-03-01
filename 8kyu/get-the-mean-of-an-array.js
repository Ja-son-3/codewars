// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//Parameters: Given an array parameter of numbers. The given parameter array will never be empty.
//Results: Return the average value of the given array rounded down to the nearest integer.
//Examples:
    // Test.assertEquals(getAverage([2,2,2,2]),2);
    // Test.assertEquals(getAverage([1,2,3,4,5,]),3);
    // Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);
//Pseudocode: 
    //1. Use the reduce method to get the sum of the given array.
    //2. Divide the reduce result by the length of the given array parameter to get the average.
    //3. Use the Math.floor static method to round the avg down to the nearest integer and return the result.
//Time Complexity: Linear or O(n), depending on the length of the given array.

function getAverage(marks){
    return Math.floor(marks.reduce((a,c) => a+c,0) / marks.length)
}