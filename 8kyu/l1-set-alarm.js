// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
    // setAlarm(true, true) -> false
    // setAlarm(false, true) -> false
    // setAlarm(false, false) -> false
    // setAlarm(true, false) -> true

//Parameters: Given two parameters, representing whether you are currently employed and currently on vacation.
//Results: Return a value of true if employed is true and vacation is false. Otherwise return a value of false.
//Examples:
    // assert.strictEqual(setAlarm(true, true),  false,"Should be false.");
    // assert.strictEqual(setAlarm(false,true),  false, "Should be false.");
    // assert.strictEqual(setAlarm(true, false), true,"Should be true.");
//Pseudocode: 
    //1. Create an if statment to check if employed is true and vacation is false. If so return a value of true.
    //2. Otherwise return a value of false.
//Time Complexity: Constant or 0(1)

function setAlarm(employed, vacation){
    if (employed === true && vacation === false) {
      return true
    } else {
      return false
    }
}