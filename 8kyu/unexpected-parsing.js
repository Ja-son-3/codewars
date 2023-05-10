// Here is a piece of code:

    // function getStatus(isBusy) {
    //   var msg = (isBusy ? "busy" : "available");
    //   return 
    //   {
    //     status: msg
    //   }
    // }

// Expected Behaviour
// Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

// But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.

//Parameters:
//Results: 
//Examples:
    // assert.strictEqual(getStatus(true).status, "busy");
//Pseudocode: 
    //1. The curly braces for the return statement is starting on the next line, but not recognized by the return statement because it is on a different line.
    //2. In order to fix this issue start the curly braces on the same line as the return statement.
//Time Complexity:

function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return {
    status: msg
  };
}