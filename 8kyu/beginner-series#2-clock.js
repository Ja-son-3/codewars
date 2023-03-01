// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

//Parameters: Given three number parameters, representing hours, minutes and seconds, respectively.
//Results: Return the time in milliseconds representing the same time value of the given time parameters.
//Examples:
    // assert.strictEqual(past(0,1,1),61000)
    // assert.strictEqual(past(1,1,1),3661000)
    // assert.strictEqual(past(0,0,0),0)
    // assert.strictEqual(past(1,0,1),3601000)
    // assert.strictEqual(past(1,0,0),3600000)
//Pseudocode: 
    //1. Convert hours to milliseconds by multiply it by 3,600,000
    //2. Convert minutes to milliseconds by multiplying it by 60,000
    //3. Convert seconds to milliseconds by multiplying it by 1,000
    //4. Add all three converted values and return the result, representing the given time parameters in milliseconds.
//Time Complexity: Constant or O(1)

function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000
}