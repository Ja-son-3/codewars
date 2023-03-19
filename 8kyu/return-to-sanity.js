// This function should return an object, but it's not doing what's intended. What's wrong?

//Parameters: No parameters
//Results: Return the object of results
//Examples:
    // TertDeepEquals(mystery(), {sanity: 'Hello'}, 'Mystery has not returned to sanity');
//Pseudocode: 
    //1. put the result on the same line as the return statement. Because result is on it's own line and not incase within the return, it is not recognized as part of the return statement in the original code.
//Time Complexity: O(1) or Constant

function mystery() {
    var results =
      {sanity: 'Hello'};
    return results;
}