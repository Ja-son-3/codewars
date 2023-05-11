// Unfinished Loop - Bug Fixing #1
    // Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

//Parameters: Given a integer parameter
//Results: Return an array incrementing from 1 to the given parameter value.
//Examples:
    // assert.deepEqual(createArray(1),[1]);
    // assert.deepEqual(createArray(2),[1,2]);
    // assert.deepEqual(createArray(3),[1,2,3]);
    // assert.deepEqual(createArray(4),[1,2,3,4]);
    // assert.deepEqual(createArray(5),[1,2,3,4,5]);
//Pseudocode: 
    //1. Input an incrementing value in the for loop for counter, as the given code is liable to be an infinite loop.
//Time Complexity: Linear or O(n), depending on the value of the given parameter

function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number;counter++){
      newArray.push(counter);
    }
    
    return newArray;
}